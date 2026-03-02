'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { formatCurrency } from '@/lib/format'
import { calculateClickValue, calculateAssetIncome, calculateAutoClickerIncome } from '@/lib/gameEngine'
import { ASSET_DEFINITIONS } from '@/data/assets'
import { sounds } from '@/lib/sounds'
import { TrendingUp, MousePointerClick, BarChart2 } from 'lucide-react'

interface ClickFloat {
  id: number
  value: string
  x: number
  y: number
}

interface IncomeFloat {
  id: number
  value: string
  x: number // percent 5–85
}

export function LeftPanel() {
  const state = useGameStore()
  const handleClick = useGameStore((s) => s.handleClick)
  const ownedAssets = useGameStore((s) => s.ownedAssets)
  const incomePerSecond = useGameStore((s) => s.incomePerSecond)
  const allTimeEarned = useGameStore((s) => s.allTimeEarned)
  const legacyMultiplier = useGameStore((s) => s.legacyMultiplier)

  const [floats, setFloats] = useState<ClickFloat[]>([])
  const [incomeRain, setIncomeRain] = useState<IncomeFloat[]>([])
  const [nextId, setNextId] = useState(0)

  // Passive income rain floats
  useEffect(() => {
    if (incomePerSecond <= 0) return
    const delay = 2500 + Math.random() * 1500 // 2.5–4s
    const id = setTimeout(() => {
      const floatId = Date.now()
      const amount = incomePerSecond * (2 + Math.random() * 2) // 2–4s worth
      setIncomeRain((prev) => [
        ...prev,
        { id: floatId, value: `+${formatCurrency(amount, true)}`, x: 5 + Math.random() * 80 },
      ])
      setTimeout(() => setIncomeRain((prev) => prev.filter((f) => f.id !== floatId)), 2200)
    }, delay)
    return () => clearTimeout(id)
  }, [incomePerSecond, incomeRain.length])

  const clickValue = calculateClickValue(state)

  const onMainClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      handleClick()
      sounds.click()
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = nextId
      setNextId((n) => n + 1)
      setFloats((prev) => [
        ...prev,
        { id, value: `+${formatCurrency(clickValue)}`, x, y },
      ])
      setTimeout(() => setFloats((prev) => prev.filter((f) => f.id !== id)), 900)
    },
    [handleClick, clickValue, nextId]
  )

  // Calculate auto-clicker income with upgrades
  const autoClickerIncome = calculateAutoClickerIncome(state)

  // All income sources - sorted by highest income first
  const allIncomeSources = [
    // Asset income
    ...ownedAssets
      .map((asset) => {
        const def = ASSET_DEFINITIONS.find((d) => d.id === asset.definitionId)
        const income = calculateAssetIncome(asset, legacyMultiplier, state)
        return { name: def?.name ?? asset.definitionId, icon: def?.icon ?? '?', income }
      })
      .filter(item => item.income > 0),
    // Auto-clicker income if present
    ...(autoClickerIncome > 0 ? [{ name: 'Auto-Clickers', icon: '👆', income: autoClickerIncome }] : [])
  ].sort((a, b) => b.income - a.income)

  return (
    <aside className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
      {/* ── Click Button ─────────────────────────────────── */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          Click To Earn
        </p>

        <div className="relative w-full">
          <button
            onClick={onMainClick}
            className="relative w-full h-28 rounded-xl border bg-gradient-to-b active:scale-95 transition-all duration-75 flex flex-col items-center justify-center gap-1 cursor-pointer select-none group overflow-hidden border-zinc-700 from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 shadow-lg shadow-black/40"
          >
            <div className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100 bg-emerald-500/5" />
            <MousePointerClick size={28} className="group-active:scale-90 transition-transform text-emerald-400" />
            <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-300">
              +{formatCurrency(clickValue)} per click
            </span>
          </button>

          {/* Click floats */}
          <AnimatePresence>
            {floats.map((f) => (
              <motion.div
                key={f.id}
                className="absolute pointer-events-none text-sm font-bold text-emerald-400 font-mono"
                style={{ left: f.x, top: f.y }}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -60 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                {f.value}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Income Sources ────────────────────────────────── */}
      <div className="relative">
      {/* Income rain floats */}
      <AnimatePresence>
        {incomeRain.map((f) => (
          <motion.div
            key={f.id}
            className="absolute pointer-events-none text-[9px] font-mono text-emerald-400/30 z-10"
            style={{ left: `${f.x}%`, top: 0 }}
            initial={{ opacity: 0.5, y: 0 }}
            animate={{ opacity: 0, y: 48 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeIn' }}
          >
            {f.value}
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
        <div className="flex items-center gap-1.5 mb-3">
          <TrendingUp size={12} className="text-emerald-400" />
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Income Sources</span>
        </div>

        {allIncomeSources.length === 0 ? (
          <p className="text-xs text-zinc-600 font-mono text-center py-2">No passive income yet</p>
        ) : (
          <div className="space-y-2">
            {allIncomeSources.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-xs text-zinc-400 font-mono truncate">{item.name}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <span className="text-xs font-mono text-emerald-400">
                    {formatCurrency(item.income)}/s
                  </span>
                  {legacyMultiplier > 1 && (
                    <span className="text-[9px] font-mono text-amber-400">
                      ×{legacyMultiplier.toFixed(1)}
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div className="border-t border-zinc-800 pt-2 flex justify-between">
              <span className="text-xs font-mono text-zinc-400">Total</span>
              <span className="text-xs font-mono text-white font-bold">
                {formatCurrency(incomePerSecond)}/s
              </span>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* ── Stats ────────────────────────────────────────── */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
        <div className="flex items-center gap-1.5 mb-3">
          <BarChart2 size={12} className="text-zinc-400" />
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Stats</span>
        </div>

        <div className="space-y-2.5">
          <StatRow
            label="All-time Earned"
            value={formatCurrency(allTimeEarned)}
            valueClass="text-white"
          />

          <StatRow
            label="Assets Owned"
            value={`${ownedAssets.reduce((sum, a) => sum + a.count, 0)}`}
            valueClass="text-zinc-300"
          />
          
          {legacyMultiplier > 1 && (
            <StatRow
              label="Prestige Bonus"
              value={`x${legacyMultiplier}`}
              valueClass="text-amber-400"
            />
          )}
        </div>
      </div>
    </aside>
  )
}

function StatRow({ label, value, valueClass }: { label: string; value: string; valueClass: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs font-mono text-zinc-500">{label}</span>
      <span className={`text-xs font-mono font-semibold ${valueClass}`}>{value}</span>
    </div>
  )
}
