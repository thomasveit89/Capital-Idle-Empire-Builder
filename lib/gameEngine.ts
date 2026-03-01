import { GameState, OwnedAsset } from '@/types/game'
import { getAssetDefinition } from '@/data/assets'
import { MILESTONES } from '@/data/milestones'
import { getActiveSynergies } from '@/data/synergies'

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
