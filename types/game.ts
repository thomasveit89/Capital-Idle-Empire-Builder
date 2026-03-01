export type Layer = 1 | 2 | 3 | 4 | 5

export interface UpgradeDefinition {
  id: string
  name: string
  description: string
  cost: number
  incomeMultiplier: number
}

export interface AssetDefinition {
  id: string
  name: string
  description: string
  icon: string
  layer: Layer
  baseCost: number
  baseIncomePerSecond: number
  upgrades: UpgradeDefinition[]
  unlockRequirement: {
    netWorth?: number
  }
}

export interface OwnedAsset {
  definitionId: string
  purchasedAt: number
  unlockedUpgrades: string[]
  count: number
}

export interface Milestone {
  id: string
  threshold: number // net worth required
  title: string
  description: string
  unlocks: string // description of what is unlocked
  layer?: Layer // if this unlocks a layer
  passiveBonus?: {
    type: 'income' | 'clickPower'
    multiplier: number
  }
}

export interface NetWorthSnapshot {
  timestamp: number
  value: number
}

export interface GameState {
  // Core finances
  cash: number
  netWorth: number
  allTimeEarned: number
  incomePerSecond: number
  sessionStartTime: number
  lastSaveTime: number
  lastTickTime: number

  // Progression
  currentLayer: Layer
  milestonesReached: string[]
  prestigeCount: number
  legacyMultiplier: number

  // Player attributes
  clickPower: number
  autoClickers: Record<string, number>

  // Assets
  ownedAssets: OwnedAsset[]

  // History (for chart)
  netWorthHistory: NetWorthSnapshot[]

  // UI state (not persisted)
  pendingMilestone: string | null
  gameSpeed: 1 | 2 | 5
  soundEnabled: boolean
  offlineEarnings: number // shown once on load, then cleared
}

export interface GameActions {
  // Click action
  handleClick: (amount?: number) => void
  purchaseAutoClicker: (id: string, cost: number) => void

  // Asset management
  purchaseAsset: (definitionId: string, amount: number) => void
  purchaseUpgrade: (definitionId: string, upgradeId: string) => void

  // Game loop
  tick: (now: number) => void

  // Persistence
  saveGame: () => void
  loadGame: () => void
  resetGame: () => void

  // Prestige
  prestige: () => void

  // UI
  dismissMilestone: () => void
  setGameSpeed: (speed: 1 | 2 | 5) => void
  toggleSound: () => void
  dismissOfflineEarnings: () => void
}
