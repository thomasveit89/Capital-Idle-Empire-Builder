export type AutoClickerUpgradeType = 'speed' | 'power' | 'synergy' | 'efficiency'

export interface AutoClickerUpgradeDefinition {
  id: string
  name: string
  description: string
  type: AutoClickerUpgradeType
  targetAutoClickerId?: string // Specific auto-clicker, or undefined for global/all
  cost: number
  tier: number // 1, 2, 3, etc.
  effect: {
    // Speed: multiplier to clicks per second (e.g., 1.5 = 50% faster)
    speedMultiplier?: number
    // Power: multiplier to € per click (e.g., 2 = double value)
    powerMultiplier?: number
    // Synergy: bonus per other auto-clicker type owned
    synergyBonus?: number
    // Efficiency: reduce cost scaling (e.g., 0.95 = 5% cheaper scaling)
    costScalingMultiplier?: number
  }
  icon: string
  requiresUpgrade?: string // ID of required previous upgrade
}

// Upgrade definitions for auto-clickers
export const AUTO_CLICKER_UPGRADES: AutoClickerUpgradeDefinition[] = [
  // ─── SPEED UPGRADES ────────────────────────────────────────────────────────
  
  // Intern Speed Upgrades
  {
    id: 'intern_speed_1',
    name: 'Coffee Break',
    description: 'Interns work 50% faster after their coffee break',
    type: 'speed',
    targetAutoClickerId: 'intern',
    cost: 2500,
    tier: 1,
    effect: { speedMultiplier: 1.5 },
    icon: '☕'
  },
  {
    id: 'intern_speed_2',
    name: 'Energy Drinks',
    description: 'Caffeine boost doubles intern productivity',
    type: 'speed',
    targetAutoClickerId: 'intern',
    cost: 15000,
    tier: 2,
    effect: { speedMultiplier: 2.0 },
    icon: '🥤',
    requiresUpgrade: 'intern_speed_1'
  },
  {
    id: 'intern_speed_3',
    name: 'AI Assistants',
    description: 'Each intern gets a ChatGPT subscription',
    type: 'speed',
    targetAutoClickerId: 'intern',
    cost: 100000,
    tier: 3,
    effect: { speedMultiplier: 2.5 },
    icon: '🤖',
    requiresUpgrade: 'intern_speed_2'
  },
  
  // Analyst Speed Upgrades
  {
    id: 'analyst_speed_1',
    name: 'Dual Monitors',
    description: 'Analysts can multitask with extra screens',
    type: 'speed',
    targetAutoClickerId: 'analyst',
    cost: 25000,
    tier: 1,
    effect: { speedMultiplier: 1.5 },
    icon: '🖥️'
  },
  {
    id: 'analyst_speed_2',
    name: 'Bloomberg Terminal',
    description: 'Professional trading setup increases efficiency',
    type: 'speed',
    targetAutoClickerId: 'analyst',
    cost: 150000,
    tier: 2,
    effect: { speedMultiplier: 2.0 },
    icon: '📊',
    requiresUpgrade: 'analyst_speed_1'
  },
  {
    id: 'analyst_speed_3',
    name: 'Algorithmic Trading',
    description: 'Analysts automate their workflows',
    type: 'speed',
    targetAutoClickerId: 'analyst',
    cost: 1000000,
    tier: 3,
    effect: { speedMultiplier: 2.5 },
    icon: '📈',
    requiresUpgrade: 'analyst_speed_2'
  },
  
  // Quant Speed Upgrades
  {
    id: 'quant_speed_1',
    name: 'Quantum Computer Access',
    description: 'Edge computing for faster calculations',
    type: 'speed',
    targetAutoClickerId: 'quant',
    cost: 250000,
    tier: 1,
    effect: { speedMultiplier: 1.5 },
    icon: '⚛️'
  },
  {
    id: 'quant_speed_2',
    name: 'Neural Network Training',
    description: 'ML models optimize trading patterns',
    type: 'speed',
    targetAutoClickerId: 'quant',
    cost: 1500000,
    tier: 2,
    effect: { speedMultiplier: 2.0 },
    icon: '🧠',
    requiresUpgrade: 'quant_speed_1'
  },
  {
    id: 'quant_speed_3',
    name: 'Time Travel Debugging',
    description: 'Fix bugs before they happen',
    type: 'speed',
    targetAutoClickerId: 'quant',
    cost: 10000000,
    tier: 3,
    effect: { speedMultiplier: 2.5 },
    icon: '⏰',
    requiresUpgrade: 'quant_speed_2'
  },
  
  // ─── POWER UPGRADES ─────────────────────────────────────────────────────
  
  // Global Power Upgrades (affect all auto-clickers)
  {
    id: 'power_mouse_1',
    name: 'Gaming Mouse',
    description: 'High-precision clicking for everyone',
    type: 'power',
    cost: 5000,
    tier: 1,
    effect: { powerMultiplier: 1.5 },
    icon: '🖱️'
  },
  {
    id: 'power_mouse_2',
    name: 'Mechanical Keyboards',
    description: 'Satisfying clicks with tactile feedback',
    type: 'power',
    cost: 35000,
    tier: 2,
    effect: { powerMultiplier: 2.0 },
    icon: '⌨️',
    requiresUpgrade: 'power_mouse_1'
  },
  {
    id: 'power_monitor_1',
    name: '4K Monitors',
    description: 'See more opportunities on larger screens',
    type: 'power',
    cost: 100000,
    tier: 3,
    effect: { powerMultiplier: 2.5 },
    icon: '🖥️',
    requiresUpgrade: 'power_mouse_2'
  },
  {
    id: 'power_ai_1',
    name: 'Click Prediction AI',
    description: 'Neural networks optimize every click',
    type: 'power',
    cost: 500000,
    tier: 4,
    effect: { powerMultiplier: 3.0 },
    icon: '🎯',
    requiresUpgrade: 'power_monitor_1'
  },
  {
    id: 'power_quantum_1',
    name: 'Quantum Clicking',
    description: 'Click in multiple dimensions simultaneously',
    type: 'power',
    cost: 2500000,
    tier: 5,
    effect: { powerMultiplier: 4.0 },
    icon: '✨',
    requiresUpgrade: 'power_ai_1'
  },
  
  // ─── SYNERGY UPGRADES ─────────────────────────────────────────────────────
  
  {
    id: 'synergy_team_1',
    name: 'Team Building Exercise',
    description: 'Each auto-clicker type boosts others by 5%',
    type: 'synergy',
    cost: 10000,
    tier: 1,
    effect: { synergyBonus: 0.05 },
    icon: '🤝'
  },
  {
    id: 'synergy_team_2',
    name: 'Open Office Layout',
    description: 'Collaboration increases efficiency by 10%',
    type: 'synergy',
    cost: 75000,
    tier: 2,
    effect: { synergyBonus: 0.10 },
    icon: '🏢',
    requiresUpgrade: 'synergy_team_1'
  },
  {
    id: 'synergy_team_3',
    name: 'Corporate Retreat',
    description: 'Team bonding improves performance by 15%',
    type: 'synergy',
    cost: 500000,
    tier: 3,
    effect: { synergyBonus: 0.15 },
    icon: '🏖️',
    requiresUpgrade: 'synergy_team_2'
  },
  {
    id: 'synergy_team_4',
    name: 'Cult... I Mean Culture',
    description: 'Maximum synergy achieved through unity',
    type: 'synergy',
    cost: 2500000,
    tier: 4,
    effect: { synergyBonus: 0.25 },
    icon: '🏛️',
    requiresUpgrade: 'synergy_team_3'
  },
  
  // ─── EFFICIENCY UPGRADES ──────────────────────────────────────────────────
  
  {
    id: 'efficiency_hr_1',
    name: 'HR Department',
    description: 'Better hiring reduces costs by 5%',
    type: 'efficiency',
    cost: 20000,
    tier: 1,
    effect: { costScalingMultiplier: 0.95 },
    icon: '👔'
  },
  {
    id: 'efficiency_hr_2',
    name: 'Automated Recruitment',
    description: 'AI screening reduces hiring costs by 10%',
    type: 'efficiency',
    cost: 100000,
    tier: 2,
    effect: { costScalingMultiplier: 0.90 },
    icon: '🤖',
    requiresUpgrade: 'efficiency_hr_1'
  },
  {
    id: 'efficiency_outsource_1',
    name: 'Nearshoring',
    description: 'Offshore talent at better rates',
    type: 'efficiency',
    cost: 500000,
    tier: 3,
    effect: { costScalingMultiplier: 0.85 },
    icon: '🌍',
    requiresUpgrade: 'efficiency_hr_2'
  },
  {
    id: 'efficiency_clone_1',
    name: 'Cloning Technology',
    description: 'Replicate your best performers',
    type: 'efficiency',
    cost: 2500000,
    tier: 4,
    effect: { costScalingMultiplier: 0.80 },
    icon: '🧬',
    requiresUpgrade: 'efficiency_outsource_1'
  }
]

// Helper function to get upgrades for a specific auto-clicker
export function getUpgradesForAutoClicker(autoClickerId: string): AutoClickerUpgradeDefinition[] {
  return AUTO_CLICKER_UPGRADES.filter(u => 
    u.targetAutoClickerId === autoClickerId || 
    (!u.targetAutoClickerId && u.type !== 'synergy') || // Global non-synergy upgrades
    u.type === 'synergy' // Synergies are always available if owned
  )
}

// Helper function to get all available upgrades sorted by cost
export function getAvailableUpgrades(
  unlockedUpgrades: string[],
  autoClickers: Record<string, number>,
  cash: number
): AutoClickerUpgradeDefinition[] {
  const ownedTypes = Object.entries(autoClickers)
    .filter(([_, count]) => count > 0)
    .map(([id, _]) => id)
  
  return AUTO_CLICKER_UPGRADES.filter(upgrade => {
    // Already purchased
    if (unlockedUpgrades.includes(upgrade.id)) return false
    
    // Check requirements
    if (upgrade.requiresUpgrade && !unlockedUpgrades.includes(upgrade.requiresUpgrade)) {
      return false
    }
    
    // Check if auto-clicker is owned (for targeted upgrades)
    if (upgrade.targetAutoClickerId && !ownedTypes.includes(upgrade.targetAutoClickerId)) {
      return false
    }
    
    // For synergies, need at least 2 different types
    if (upgrade.type === 'synergy' && ownedTypes.length < 2) {
      return false
    }
    
    return true
  }).sort((a, b) => a.cost - b.cost)
}

// Calculate total multipliers for a specific auto-clicker
export function calculateAutoClickerMultipliers(
  autoClickerId: string,
  unlockedUpgrades: string[],
  autoClickers: Record<string, number>
): { speedMultiplier: number; powerMultiplier: number; costScalingMultiplier: number } {
  let speedMultiplier = 1
  let powerMultiplier = 1
  let costScalingMultiplier = 1
  let synergyBonus = 0
  
  const ownedTypes = Object.entries(autoClickers)
    .filter(([_, count]) => count > 0)
    .map(([id, _]) => id)
  
  for (const upgradeId of unlockedUpgrades) {
    const upgrade = AUTO_CLICKER_UPGRADES.find(u => u.id === upgradeId)
    if (!upgrade) continue
    
    // Apply speed upgrades for this auto-clicker
    if (upgrade.type === 'speed' && upgrade.targetAutoClickerId === autoClickerId) {
      speedMultiplier *= upgrade.effect.speedMultiplier || 1
    }
    
    // Apply power upgrades (global or specific)
    if (upgrade.type === 'power') {
      if (!upgrade.targetAutoClickerId || upgrade.targetAutoClickerId === autoClickerId) {
        powerMultiplier *= upgrade.effect.powerMultiplier || 1
      }
    }
    
    // Apply efficiency upgrades (always global)
    if (upgrade.type === 'efficiency') {
      costScalingMultiplier *= upgrade.effect.costScalingMultiplier || 1
    }
    
    // Track synergy bonus
    if (upgrade.type === 'synergy') {
      synergyBonus += upgrade.effect.synergyBonus || 0
    }
  }
  
  // Apply synergy bonus based on number of different auto-clicker types owned
  if (synergyBonus > 0 && ownedTypes.length > 1) {
    const synergyMultiplier = 1 + (synergyBonus * (ownedTypes.length - 1))
    speedMultiplier *= synergyMultiplier
    powerMultiplier *= synergyMultiplier
  }
  
  return {
    speedMultiplier,
    powerMultiplier,
    costScalingMultiplier
  }
}
