'use client'

import { useGameStore } from '@/store/gameStore'
import { formatCurrency } from '@/lib/format'
import { Users, MousePointerClick } from 'lucide-react'

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

export function AutoClickerPanel() {
  const cash = useGameStore(s => s.cash)
  const autoClickers = useGameStore(s => s.autoClickers || {})
  const purchaseAutoClicker = useGameStore(s => s.purchaseAutoClicker)

  // Calculate total auto clicks per second
  const totalAutoClicks = AUTO_CLICKERS.reduce((total, clicker) => {
    return total + (autoClickers[clicker.id] || 0) * clicker.clicksPerSecond
  }, 0)

  if (useGameStore(s => s.netWorth) < 500 && totalAutoClicks === 0) {
    return null // Hide until they have some money
  }

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
      <div className="flex items-center gap-1.5 mb-3">
        <Users size={12} className="text-sky-400" />
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Team (Auto-Clickers)</span>
      </div>

      <div className="flex items-center justify-between mb-3 bg-zinc-950/50 rounded p-2 border border-zinc-800/50">
        <div className="flex items-center gap-1.5">
          <MousePointerClick size={12} className="text-sky-400" />
          <span className="text-xs font-mono text-zinc-400">Auto Clicks:</span>
        </div>
        <span className="text-xs font-mono font-bold text-sky-400">{totalAutoClicks}/sec</span>
      </div>

      <div className="space-y-2">
        {AUTO_CLICKERS.map(clicker => {
          const count = autoClickers[clicker.id] || 0
          const cost = Math.ceil(clicker.baseCost * Math.pow(1.15, count))
          const canAfford = cash >= cost

          return (
            <button
              key={clicker.id}
              disabled={!canAfford}
              onClick={() => purchaseAutoClicker?.(clicker.id, cost)}
              className={`w-full flex items-center gap-2 p-2 rounded border text-left transition-colors ${
                canAfford
                  ? 'border-sky-500/30 bg-sky-950/20 hover:bg-sky-900/30 cursor-pointer'
                  : 'border-zinc-800/50 bg-zinc-900/20 opacity-60 cursor-not-allowed'
              }`}
            >
              <span className="text-lg w-6 text-center">{clicker.icon}</span>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <span className={`text-[11px] font-bold truncate ${canAfford ? 'text-zinc-200' : 'text-zinc-500'}`}>
                    {clicker.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 shrink-0 bg-zinc-950 px-1 rounded border border-zinc-800">
                    {count}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mt-0.5">
                  <span className="text-[9px] font-mono text-sky-400">+{clicker.clicksPerSecond} clicks/s</span>
                  <span className={`text-[10px] font-mono ${canAfford ? 'text-emerald-400' : 'text-red-400/70'}`}>
                    {formatCurrency(cost)}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
