import { GameState, OwnedAsset } from '@/types/game'
import { getAssetDefinition } from '@/data/assets'
import { MILESTONES } from '@/data/milestones'
import { getActiveSynergies } from '@/data/synergies'
import { calculateAutoClickerMultipliers } from '@/data/autoClickerUpgrades'

// ─── Income Calculation ────────────────────────────────────────────────────

export function calculateAssetIncome(
  asset: OwnedAsset,
  legacyMultiplier: number,
  state: GameState
): number {
  const def = getAssetDefinition(asset.definitionId)
  if (!def) return 0

  let income = def.baseIncomePerSecond

  // Apply purchased upgrades
  for (const upgradeId of asset.unlockedUpgrades) {
    const upgrade = def.upgrades.find((u) => u.id === upgradeId)
    if (upgrade) income *= upgrade.incomeMultiplier
  }

  // Apply synergies
  const activeSynergies = getActiveSynergies(state)
  for (const syn of activeSynergies) {
    income = syn.applyBonus(state, income, asset.definitionId)
  }

  // Legacy multiplier from prestige
  income *= legacyMultiplier

  // Scale by how many copies are owned
  return Math.max(0, income) * asset.count
}

export function calculateTotalIncomePerSecond(state: GameState): number {
  const base = state.ownedAssets.reduce((total, asset) => {
    return total + calculateAssetIncome(asset, state.legacyMultiplier, state)
  }, 0)
  return base
}

export function calculateNetWorth(state: GameState): number {
  return state.allTimeEarned
}

// ─── Milestone Checking ────────────────────────────────────────────────────

export function checkMilestones(
  netWorth: number,
  reachedMilestones: string[]
): string | null {
  for (const milestone of MILESTONES) {
    if (
      netWorth >= milestone.threshold &&
      !reachedMilestones.includes(milestone.id)
    ) {
      return milestone.id
    }
  }
  return null
}

// ─── Click Power ──────────────────────────────────────────────────────────

export function calculateClickValue(state: GameState): number {
  // Base: €1 per click + 10% of passive income per click
  const baseClick = 1
  const incomeBonus = state.incomePerSecond * 0.1
  return (baseClick + incomeBonus) * state.clickPower * state.legacyMultiplier
}

// ─── Layer Unlocks ────────────────────────────────────────────────────────

export function calculateCurrentLayer(milestonesReached: string[]): 1 | 2 | 3 | 4 | 5 {
  if (milestonesReached.includes('one_billion')) return 5
  if (milestonesReached.includes('hundred_million')) return 4
  if (milestonesReached.includes('one_million')) return 3
  if (milestonesReached.includes('ten_thousand')) return 2
  return 1
}

// ─── Prestige ─────────────────────────────────────────────────────────────

export function calculateLegacyBonus(prestigeCount: number): number {
  // Each prestige grants +100% income multiplier, stackable
  return 1 + prestigeCount * 1.0
}

// ─── Auto-Clicker Income ───────────────────────────────────────────────────

// Auto-clicker definitions (must match AutoClickerPanel.tsx)
const AUTO_CLICKER_DEFS = [
  { id: 'intern', clicksPerSecond: 1, baseCost: 500 },
  { id: 'analyst', clicksPerSecond: 5, baseCost: 5000 },
  { id: 'quant', clicksPerSecond: 25, baseCost: 50000 }
]

export function calculateAutoClickerIncome(state: GameState): number {
  let totalIncome = 0
  
  for (const def of AUTO_CLICKER_DEFS) {
    const count = state.autoClickers[def.id] || 0
    if (count === 0) continue
    
    // Get multipliers from upgrades
    const { speedMultiplier, powerMultiplier } = calculateAutoClickerMultipliers(
      def.id,
      state.autoClickerUpgrades,
      state.autoClickers
    )
    
    // Calculate income: clicks/sec × speed multiplier × € per click × power multiplier × legacy
    const effectiveClicksPerSecond = def.clicksPerSecond * speedMultiplier
    const valuePerClick = 1 * powerMultiplier * state.legacyMultiplier
    const clickerIncome = count * effectiveClicksPerSecond * valuePerClick
    
    totalIncome += clickerIncome
  }
  
  return totalIncome
}

// Calculate cost for purchasing auto-clickers with efficiency upgrades
export function calculateAutoClickerCost(
  autoClickerId: string,
  baseCost: number,
  currentCount: number,
  autoClickerUpgrades: string[]
): number {
  const { costScalingMultiplier } = calculateAutoClickerMultipliers(
    autoClickerId,
    autoClickerUpgrades,
    {}
  )
  
  // Apply efficiency reduction to the 1.15 scaling factor
  const scalingFactor = 1.15 * costScalingMultiplier
  return Math.ceil(baseCost * Math.pow(scalingFactor, currentCount))
}
