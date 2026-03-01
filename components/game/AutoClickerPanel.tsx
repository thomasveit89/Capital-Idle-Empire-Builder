'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { formatCurrency } from '@/lib/format'
import { calculateAutoClickerMultipliers } from '@/data/autoClickerUpgrades'
import { Users, MousePointerClick, Zap, ArrowUp } from 'lucide-react'

// Hardcoded costs/benefits for auto-clickers
const AUTO_CLICKERS = [
  {
    id: 'intern',
    name: 'Unpaid Intern',
    baseCost: 500,
    clicksPerSecond: 1,
    icon: '👨‍🎓'
  },
  {
    id: 'analyst',
    name: 'Junior Analyst',
    baseCost: 5000,
    clicksPerSecond: 5,
    icon: '👔'
  },
  {
    id: 'quant',
    name: 'Quant Developer',
    baseCost: 50000,
    clicksPerSecond: 25,
    icon: '🤓'
  }
]

interface ClickFloat {
  id: number
  value: string
  x: number
}

export function AutoClickerPanel() {
  const cash = useGameStore(s => s.cash)
  const autoClickers = useGameStore(s => s.autoClickers || {})
  const autoClickerUpgrades = useGameStore(s => s.autoClickerUpgrades || [])
  const purchaseAutoClicker = useGameStore(s => s.purchaseAutoClicker)
  const clickPower = useGameStore(s => s.clickPower)
  const legacyMultiplier = useGameStore(s => s.legacyMultiplier)
  
  const [floats, setFloats] = useState<ClickFloat[]>([])
  const floatIdRef = useRef(0)
  
  // Calculate total auto clicks per second with speed multipliers
  let totalAutoClicks = 0
  let totalAutoIncome = 0
  
  for (const clicker of AUTO_CLICKERS) {
    const count = autoClickers[clicker.id] || 0
    if (count === 0) continue
    
    const { speedMultiplier, powerMultiplier } = calculateAutoClickerMultipliers(
      clicker.id,
      autoClickerUpgrades,
      autoClickers
    )
    
    const effectiveClicksPerSecond = clicker.clicksPerSecond * speedMultiplier
    const valuePerClick = 1 * clickPower * powerMultiplier * legacyMultiplier
    
    totalAutoClicks += count * effectiveClicksPerSecond
    totalAutoIncome += count * effectiveClicksPerSecond * valuePerClick
  }
  
  // Average value per click for display
  const avgValuePerClick = totalAutoClicks > 0 ? totalAutoIncome / totalAutoClicks : 0
  
  const autoIncomeRef = useRef(totalAutoIncome)
  autoIncomeRef.current = totalAutoIncome
  
  // Track auto-click income with floating animations - throttled for performance
  useEffect(() => {
    if (totalAutoClicks === 0) return
    
    // Only show floating numbers occasionally regardless of click speed (max 2/sec)
    const intervalMs = Math.max(500, 1000 / Math.min(totalAutoClicks, 2))
    
    const interval = setInterval(() => {
      // Show accumulated value instead of per-click
      const accumulatedValue = autoIncomeRef.current * (intervalMs / 1000)
      const id = floatIdRef.current++
      const xPos = 15 + Math.random() * 60 // Random position 15-75%
      
      setFloats(prev => [...prev, { 
        id, 
        value: `+${formatCurrency(accumulatedValue, true)}`, 
        x: xPos 
      }])
      
      setTimeout(() => {
        setFloats(prev => prev.filter(f => f.id !== id))
      }, 1000)
    }, intervalMs)
    
    return () => clearInterval(interval)
  }, [totalAutoClicks])

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 relative overflow-hidden">
      {/* Floating auto-click income */}
      <AnimatePresence>
        {floats.map((f) => (
          <motion.div
            key={f.id}
            className="absolute pointer-events-none text-[10px] font-bold text-sky-400 font-mono z-10"
            style={{ left: `${f.x}%`, top: 8 }}
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {f.value}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="flex items-center gap-1.5 mb-3">
        <Users size={12} className="text-sky-400" />
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Team (Auto-Clickers)</span>
      </div>

      <div className="flex items-center justify-between mb-3 bg-zinc-950/50 rounded p-2 border border-zinc-800/50">
        <div className="flex items-center gap-1.5">
          <MousePointerClick size={12} className="text-sky-400" />
          <span className="text-xs font-mono text-zinc-400">Auto Income:</span>
        </div>
        <span className="text-xs font-mono font-bold text-sky-400">{formatCurrency(totalAutoIncome)}/s</span>
      </div>

      <div className="space-y-2">
        {AUTO_CLICKERS.map(clicker => {
          const count = autoClickers[clicker.id] || 0
          
          // Calculate multipliers
          const { speedMultiplier, powerMultiplier, costScalingMultiplier } = calculateAutoClickerMultipliers(
            clicker.id,
            autoClickerUpgrades,
            autoClickers
          )
          
          // Calculate cost with efficiency upgrades
          const scalingFactor = 1.15 * costScalingMultiplier
          const cost = Math.ceil(clicker.baseCost * Math.pow(scalingFactor, count))
          
          const canAfford = cash >= cost
          const isActive = count > 0
          
          // Effective stats
          const effectiveClicksPerSecond = clicker.clicksPerSecond * speedMultiplier
          const valuePerClick = 1 * clickPower * powerMultiplier * legacyMultiplier
          const hasSpeedUpgrades = speedMultiplier > 1
          const hasPowerUpgrades = powerMultiplier > 1
          const hasEfficiencyUpgrades = costScalingMultiplier < 1

          return (
            <button
              key={clicker.id}
              disabled={!canAfford}
              onClick={() => purchaseAutoClicker?.(clicker.id, cost)}
              className={`w-full flex items-center gap-2 p-2 rounded border text-left transition-colors relative overflow-hidden ${
                canAfford
                  ? 'border-sky-500/30 bg-sky-950/20 hover:bg-sky-900/30 cursor-pointer'
                  : 'border-zinc-800/50 bg-zinc-900/20 opacity-60 cursor-not-allowed'
              }`}
            >
              {/* Working animation - subtle pulse when active */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-sky-500/5"
                  animate={{ 
                    opacity: [0.02, 0.08, 0.02],
                  }}
                  transition={{ 
                    duration: 2 / effectiveClicksPerSecond,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
              
              {/* Icon with bounce animation when working */}
              <motion.span 
                className="text-lg w-6 text-center relative z-10"
                animate={isActive ? {
                  y: [0, -2, 0],
                  scale: [1, 1.1, 1],
                } : {}}
                transition={isActive ? {
                  duration: 1.5 / Math.max(1, effectiveClicksPerSecond * 0.3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 0.5 // Random offset so they don't sync
                } : {}}
              >
                {clicker.icon}
              </motion.span>
              
              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex justify-between items-baseline">
                  <span className={`text-[11px] font-bold truncate ${canAfford ? 'text-zinc-200' : 'text-zinc-500'}`}>
                    {clicker.name}
                  </span>
                  <div className="flex items-center gap-1">
                    {/* Upgrade badges */}
                    {hasSpeedUpgrades && (
                      <span className="text-[8px] px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" title="Speed upgraded">
                        <Zap size={8} className="inline" />
                      </span>
                    )}
                    {hasPowerUpgrades && (
                      <span className="text-[8px] px-1 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30" title="Power upgraded">
                        <ArrowUp size={8} className="inline" />
                      </span>
                    )}
                    {hasEfficiencyUpgrades && (
                      <span className="text-[8px] px-1 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30" title="Efficiency upgraded">
                        %
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-zinc-500 shrink-0 bg-zinc-950 px-1 rounded border border-zinc-800">
                      {count}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-0.5">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-mono text-sky-400">
                      +{effectiveClicksPerSecond.toFixed(1)} clicks/s
                    </span>
                    {speedMultiplier > 1 && (
                      <span className="text-[8px] text-emerald-400">(×{speedMultiplier.toFixed(1)})</span>
                    )}
                  </div>
                  <span className={`text-[10px] font-mono ${canAfford ? 'text-emerald-400' : 'text-red-400/70'}`}>
                    {formatCurrency(cost)}
                    {costScalingMultiplier < 1 && (
                      <span className="text-[8px] text-purple-400 ml-1">(-{Math.round((1-costScalingMultiplier)*100)}%)</span>
                    )}
                  </span>
                </div>
                
                {/* Show value per click when active */}
                {isActive && powerMultiplier > 1 && (
                  <div className="text-[8px] text-amber-400/70 mt-0.5">
                    €{valuePerClick.toFixed(2)}/click (×{powerMultiplier.toFixed(1)})
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
