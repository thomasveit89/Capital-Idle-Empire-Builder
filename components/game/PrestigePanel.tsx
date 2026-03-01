'use client'

import { useGameStore } from '@/store/gameStore'
import { Crown, Zap } from 'lucide-react'
import { formatCurrency } from '@/lib/format'

export function PrestigePanel() {
  const prestigeCount = useGameStore(s => s.prestigeCount)
  const legacyMultiplier = useGameStore(s => s.legacyMultiplier)
  const netWorth = useGameStore(s => s.netWorth)
  const prestige = useGameStore(s => s.prestige)
  
  // Requirement to prestige (1 Trillion)
  const PRESTIGE_REQ = 1_000_000_000_000
  const canPrestige = netWorth >= PRESTIGE_REQ
  
  // Only show if they've prestiges or are close (100 Billion+)
  if (prestigeCount === 0 && netWorth < 100_000_000_000) return null

  return (
    <div className="rounded-lg border border-amber-900/50 bg-amber-950/10 p-3 mb-3">
      <div className="flex items-center gap-1.5 mb-2">
        <Crown size={12} className="text-amber-400" />
        <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">Dynasty</span>
      </div>

      {prestigeCount > 0 && (
        <div className="flex justify-between items-center bg-zinc-950/50 rounded px-2 py-1.5 border border-amber-900/30 mb-3">
          <span className="text-[11px] font-mono text-zinc-400">Current Bonus:</span>
          <span className="text-[11px] font-mono font-bold text-amber-400">+{((legacyMultiplier - 1) * 100).toFixed(0)}% Income</span>
        </div>
      )}

      <div className="space-y-1">
        <button
          disabled={!canPrestige}
          onClick={() => {
            if (confirm('Are you sure you want to end this dynasty? You will lose all assets, cash, and upgrades, but gain a permanent +100% income multiplier for all future playthroughs.')) {
              prestige()
            }
          }}
          className={`w-full flex items-center justify-center gap-1.5 p-2 rounded text-[11px] font-mono font-bold transition-colors ${
            canPrestige
              ? 'bg-amber-600 hover:bg-amber-500 text-zinc-950 cursor-pointer shadow-[0_0_15px_rgba(217,119,6,0.3)]'
              : 'bg-zinc-900 border border-zinc-800 text-zinc-500 cursor-not-allowed'
          }`}
        >
          <Zap size={12} className={canPrestige ? 'text-zinc-900' : 'text-zinc-600'} />
          Ascend to New Dynasty
        </button>
        
        {!canPrestige && (
          <div className="mt-2">
            <div className="flex justify-between text-[9px] font-mono text-zinc-500 mb-1">
              <span>Progress to Ascension</span>
              <span>{Math.min(100, Math.round((netWorth / PRESTIGE_REQ) * 100))}%</span>
            </div>
            <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500/50 transition-all duration-1000" 
                style={{ width: `${Math.min(100, (netWorth / PRESTIGE_REQ) * 100)}%` }}
              />
            </div>
            <p className="text-[9px] font-mono text-zinc-600 text-center mt-1">
              Requires {formatCurrency(PRESTIGE_REQ)} Net Worth
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
