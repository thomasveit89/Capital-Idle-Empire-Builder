'use client'

import { useGameStore } from '@/store/gameStore'
import { ASSET_DEFINITIONS } from '@/data/assets'
import { calculateAssetIncome, calculateAutoClickerIncome } from '@/lib/gameEngine'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts'
import { useMemo, useState, useEffect } from 'react'
import { formatCurrency } from '@/lib/format'

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#84cc16', '#eab308']

export function IncomeChart() {
  const ownedAssets = useGameStore(s => s.ownedAssets)
  const legacyMultiplier = useGameStore(s => s.legacyMultiplier)
  const autoClickers = useGameStore(s => s.autoClickers || {})
  const autoClickerUpgrades = useGameStore(s => s.autoClickerUpgrades || [])
  const clickPower = useGameStore(s => s.clickPower)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10)
    return () => clearTimeout(timer)
  }, [])

  const data = useMemo(() => {
    const state = useGameStore.getState()
    const items = ownedAssets
      .filter(a => a.count > 0)
      .map((asset) => {
        const def = ASSET_DEFINITIONS.find((d) => d.id === asset.definitionId)
        const income = calculateAssetIncome(asset, legacyMultiplier, state)
        return {
          name: def?.name ?? asset.definitionId,
          value: income,
          icon: def?.icon ?? ''
        }
      })
      .filter(item => item.value > 0)
      .sort((a, b) => b.value - a.value)
    
    // Add auto-clicker income if present (with upgrades)
    const autoClickerIncome = calculateAutoClickerIncome(state)
    if (autoClickerIncome > 0) {
      items.unshift({
        name: 'Auto-Clickers',
        value: autoClickerIncome,
        icon: '👆'
      })
    }
    
    // Limit to top 8 for readability
    return items.slice(0, 8)
  }, [ownedAssets, legacyMultiplier, autoClickers, autoClickerUpgrades, clickPower])

  if (!mounted) return null

  if (data.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-zinc-700/50 gap-3">
        <p className="font-mono text-sm tracking-widest uppercase">No Income</p>
      </div>
    )
  }

  return (
    <div className="h-full w-full p-4 flex flex-col bg-zinc-900/20">
      <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 text-center">
        Income Distribution
      </h3>
      <div className="flex-1 min-h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <RechartsTooltip 
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                const data = payload[0].payload
                return (
                  <div className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-xs font-mono shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{data.icon}</span>
                      <span className="text-zinc-300 font-bold">{data.name}</span>
                    </div>
                    <div className="text-emerald-400">
                      {formatCurrency(data.value)}/s
                    </div>
                  </div>
                )
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
