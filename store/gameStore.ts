import { create } from 'zustand'
import { GameState, GameActions, OwnedAsset } from '@/types/game'
import { getAssetDefinition } from '@/data/assets'
import {
  calculateTotalIncomePerSecond,
  calculateNetWorth,
  calculateCurrentLayer,
  calculateClickValue,
  checkMilestones,
  calculateLegacyBonus,
  calculateAutoClickerIncome,
} from '@/lib/gameEngine'
import { saveGame, loadGame, deleteSave } from '@/lib/saveLoad'
import { MILESTONES } from '@/data/milestones'
import { sounds, setSoundVolume } from '@/lib/sounds'

// ─── Initial State ─────────────────────────────────────────────────────────

const createInitialState = (): GameState => ({
  cash: 50,
  netWorth: 0,
  allTimeEarned: 0,
  incomePerSecond: 0,
  sessionStartTime: Date.now(),
  lastSaveTime: Date.now(),
  lastTickTime: Date.now(),

  currentLayer: 1,
  milestonesReached: [],
  prestigeCount: 0,
  legacyMultiplier: 1,

  clickPower: 1,
  autoClickers: {},
  autoClickerUpgrades: [],

  ownedAssets: [],
  netWorthHistory: [{ timestamp: Date.now(), value: 0 }],

  pendingMilestone: null,
  gameSpeed: 1,
  soundEnabled: true,
  offlineEarnings: 0,
})

// ─── Store ─────────────────────────────────────────────────────────────────

type Store = GameState & GameActions

export const useGameStore = create<Store>()((set, get) => ({
  ...createInitialState(),

  // ─── Click ───────────────────────────────────────────────────────────────
  handleClick: (amount: number = 1) => {
    const state = get()
    const now = Date.now()
    const clickValue = Math.max(0, calculateClickValue(state) * amount)

    set((s) => ({
      cash: Math.max(0, s.cash + clickValue),
      allTimeEarned: Math.max(0, s.allTimeEarned + clickValue),
      lastTickTime: now, // keep it somewhat in sync
    }))
    
    const updated = get()
    const netWorth = calculateNetWorth(updated)
    set({ netWorth })
    _checkAndTriggerMilestones()
  },

  purchaseAutoClicker: (id: string, cost: number) => {
    const state = get()
    if (state.cash < cost || cost < 0) return

    set((s) => ({
      cash: Math.max(0, s.cash - cost),
      autoClickers: {
        ...s.autoClickers,
        [id]: (s.autoClickers[id] || 0) + 1
      }
    }))
    
    if (state.soundEnabled) sounds.upgrade()
  },

  purchaseAutoClickerUpgrade: (upgradeId: string, cost: number) => {
    const state = get()
    if (state.cash < cost || cost < 0) return
    if (state.autoClickerUpgrades.includes(upgradeId)) return

    set((s) => ({
      cash: Math.max(0, s.cash - cost),
      autoClickerUpgrades: [...s.autoClickerUpgrades, upgradeId]
    }))
    
    if (state.soundEnabled) sounds.upgrade()
  },

  // ─── Purchase Asset ───────────────────────────────────────────────────────
  purchaseAsset: (definitionId: string, amount: number = 1) => {
    const state = get()
    const def = getAssetDefinition(definitionId)
    if (!def) return

    const existing = state.ownedAssets.find((a) => a.definitionId === definitionId)
    const currentCount = existing?.count ?? 0

    // Calculate cost for `amount` units with exponential scaling (1.15^count)
    let totalCost = 0
    for (let i = 0; i < amount; i++) {
      totalCost += Math.ceil(def.baseCost * Math.pow(1.15, currentCount + i))
    }

    if (state.cash < totalCost || totalCost < 0) return

    let newAssets: OwnedAsset[]
    if (existing) {
      newAssets = state.ownedAssets.map((a) =>
        a.definitionId === definitionId ? { ...a, count: a.count + amount } : a
      )
    } else {
      newAssets = [
        ...state.ownedAssets,
        {
          definitionId,
          purchasedAt: Date.now(),
          unlockedUpgrades: [],
          count: amount,
        },
      ]
    }

    set((s) => ({
      cash: Math.max(0, s.cash - totalCost),
      ownedAssets: newAssets,
    }))

    const updated = get()
    const incomePerSecond = calculateTotalIncomePerSecond(updated)
    const netWorth = calculateNetWorth(updated)
    const currentLayer = calculateCurrentLayer(updated.milestonesReached)
    set({ incomePerSecond, netWorth, currentLayer })
    
    if (state.soundEnabled) sounds.upgrade()
  },

  // ─── Purchase Upgrade ─────────────────────────────────────────────────────
  purchaseUpgrade: (definitionId: string, upgradeId: string) => {
    const state = get()
    const def = getAssetDefinition(definitionId)
    if (!def) return
    
    const upgrade = def.upgrades.find(u => u.id === upgradeId)
    if (!upgrade) return
    
    const assetIdx = state.ownedAssets.findIndex((a) => a.definitionId === definitionId)
    if (assetIdx === -1) return
    
    const asset = state.ownedAssets[assetIdx]
    if (asset.unlockedUpgrades.includes(upgradeId)) return // Already unlocked
    
    if (state.cash < upgrade.cost || upgrade.cost < 0) return

    const newAssets = [...state.ownedAssets]
    newAssets[assetIdx] = {
      ...asset,
      unlockedUpgrades: [...asset.unlockedUpgrades, upgradeId]
    }

    set((s) => ({
      cash: Math.max(0, s.cash - upgrade.cost),
      ownedAssets: newAssets,
    }))

    const updated = get()
    const incomePerSecond = calculateTotalIncomePerSecond(updated)
    set({ incomePerSecond })

    if (state.soundEnabled) sounds.upgrade()
  },

  // ─── Tick ─────────────────────────────────────────────────────────────────
  tick: (now: number) => {
    const state = get()
    const elapsed = (now - state.lastTickTime) / 1000 // seconds
    if (elapsed <= 0) return
    
    const effectiveElapsed = elapsed * state.gameSpeed

    const incomePerSecond = calculateTotalIncomePerSecond(state)
    const earned = incomePerSecond * effectiveElapsed

    // Auto-clicker income (includes clickPower, speed/power multipliers, and legacy)
    const autoClickerIncome = calculateAutoClickerIncome(state)
    const autoClickEarned = autoClickerIncome * effectiveElapsed

    const totalEarned = earned + autoClickEarned

    // Safety check: ensure earnings don't cause overflow or negative values
    const newCash = Math.max(0, state.cash + totalEarned)
    const newAllTime = Math.max(0, state.allTimeEarned + totalEarned)
    const updatedState = { ...state, cash: newCash, allTimeEarned: newAllTime, incomePerSecond }
    const newNetWorth = calculateNetWorth(updatedState)

    // Update history every 5 seconds
    let netWorthHistory = state.netWorthHistory
    const lastSnapshot = netWorthHistory[netWorthHistory.length - 1]
    if (!lastSnapshot || now - lastSnapshot.timestamp >= 5000) {
      netWorthHistory = [...netWorthHistory, { timestamp: now, value: newNetWorth }].slice(-1000)
    }

    const currentLayer = calculateCurrentLayer(state.milestonesReached)

    set({
      cash: newCash,
      allTimeEarned: newAllTime,
      netWorth: newNetWorth,
      incomePerSecond,
      lastTickTime: now,
      netWorthHistory,
      currentLayer,
    })

    _checkAndTriggerMilestones()
    _checkAutoSave()
  },

  // ─── Persistence ──────────────────────────────────────────────────────────
  saveGame: () => {
    const state = get()
    saveGame(state)
    set({ lastSaveTime: Date.now() })
  },

  loadGame: () => {
    const saved = loadGame()
    if (!saved) return

    const initial = createInitialState()
    const merged: GameState = {
      ...initial,
      ...saved,
      lastTickTime: Date.now(),
      sessionStartTime: Date.now(),
      pendingMilestone: null,
      gameSpeed: 1,
      offlineEarnings: 0,
    }
    
    // Ensure unlockedUpgrades exists for old saves
    if (merged.ownedAssets) {
      merged.ownedAssets = merged.ownedAssets.map(a => ({
        ...a,
        unlockedUpgrades: a.unlockedUpgrades || [],
        count: a.count ?? 1
      }))
    }

    // Sanitize potentially corrupted values (negative cash or NaN)
    if (!isFinite(merged.cash) || merged.cash < 0) {
      console.warn('Corrupted cash value detected, resetting to 0:', merged.cash)
      merged.cash = 0
    }
    if (!isFinite(merged.allTimeEarned) || merged.allTimeEarned < 0) {
      merged.allTimeEarned = Math.max(0, merged.allTimeEarned || 0)
    }

    const incomePerSecond = calculateTotalIncomePerSecond(merged)
    const netWorth = calculateNetWorth({ ...merged, incomePerSecond })
    const currentLayer = calculateCurrentLayer(merged.milestonesReached)

    // Calculate offline earnings (capped at 24 hours)
    const lastSave = saved.lastSaveTime ?? Date.now()
    const offlineSeconds = Math.min((Date.now() - lastSave) / 1000, 24 * 60 * 60)
    const offlineEarnings = offlineSeconds > 5 ? incomePerSecond * offlineSeconds : 0

    set({
      ...merged,
      incomePerSecond,
      netWorth,
      currentLayer,
      cash: merged.cash + offlineEarnings,
      allTimeEarned: merged.allTimeEarned + offlineEarnings,
      offlineEarnings,
    })
  },

  resetGame: () => {
    deleteSave()
    set(createInitialState())
  },

  // ─── Prestige ─────────────────────────────────────────────────────────────
  prestige: () => {
    const state = get()
    if (state.netWorth < 1_000_000_000_000) return

    const newPrestigeCount = state.prestigeCount + 1
    const legacyMultiplier = calculateLegacyBonus(newPrestigeCount)

    const fresh = createInitialState()
    deleteSave()
    set({
      ...fresh,
      prestigeCount: newPrestigeCount,
      legacyMultiplier,
    })
  },

  // ─── UI ───────────────────────────────────────────────────────────────────
  dismissMilestone: () => {
    _milestoneCooldownUntil = Date.now() + 2500
    set({ pendingMilestone: null })
  },

  setGameSpeed: (speed) => set({ gameSpeed: speed }),

  toggleSound: () => {
    const next = !get().soundEnabled
    setSoundVolume(next ? 0.5 : 0)
    set({ soundEnabled: next })
  },

  dismissOfflineEarnings: () => set({ offlineEarnings: 0 }),
}))

// ─── Helpers ──────────────────────────────────────────────────────────────

let _lastAutoSave = Date.now()
let _milestoneCooldownUntil = 0

function _checkAutoSave() {
  const now = Date.now()
  if (now - _lastAutoSave >= 30000) {
    _lastAutoSave = now
    const state = useGameStore.getState()
    saveGame(state)
    useGameStore.setState({ lastSaveTime: now })
  }
}

function _checkAndTriggerMilestones() {
  const state = useGameStore.getState()
  if (state.pendingMilestone) return // already showing one
  if (Date.now() < _milestoneCooldownUntil) return // cooldown after dismiss

  const newMilestone = checkMilestones(state.netWorth, state.milestonesReached)
  if (newMilestone) {
    const milestone = MILESTONES.find((m) => m.id === newMilestone)
    let clickPower = state.clickPower

    if (milestone?.passiveBonus?.type === 'clickPower') {
      clickPower *= milestone.passiveBonus.multiplier
    }

    const newMilestonesReached = [...state.milestonesReached, newMilestone]
    const currentLayer = calculateCurrentLayer(newMilestonesReached)

    useGameStore.setState({
      pendingMilestone: newMilestone,
      milestonesReached: newMilestonesReached,
      currentLayer,
      clickPower,
    })

    if (state.soundEnabled) sounds.milestone()
  }
}
