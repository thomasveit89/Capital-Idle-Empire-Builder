'use client'

import { useGameStore } from '@/store/gameStore'
import { MILESTONES } from '@/data/milestones'
import { ASSET_DEFINITIONS } from '@/data/assets'
import { formatCurrency } from '@/lib/format'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AutoClickerPanel } from './AutoClickerPanel'
import { PrestigePanel } from './PrestigePanel'

export function RightPanel() {
  const milestonesReached = useGameStore((s) => s.milestonesReached)
  const netWorth = useGameStore((s) => s.netWorth)
  const ownedAssets = useGameStore((s) => s.ownedAssets)
  const cash = useGameStore((s) => s.cash)
  const purchaseUpgrade = useGameStore((s) => s.purchaseUpgrade)

  // Find next milestone
  const nextMilestoneIdx = MILESTONES.findIndex((m) => !milestonesReached.includes(m.id))

  // Get available upgrades
  const availableUpgrades: { assetId: string, upgradeId: string, name: string, desc: string, cost: number, icon: string, multiplier: number }[] = []
  
  ownedAssets.forEach(owned => {
    const def = ASSET_DEFINITIONS.find(d => d.id === owned.definitionId)
    if (def) {
      def.upgrades.forEach(upg => {
        if (!owned.unlockedUpgrades.includes(upg.id)) {
          availableUpgrades.push({
            assetId: def.id,
            upgradeId: upg.id,
            name: upg.name,
            desc: upg.description,
            cost: upg.cost,
            icon: def.icon,
            multiplier: upg.incomeMultiplier
          })
        }
      })
    }
  })

  // Sort by cost
  availableUpgrades.sort((a, b) => a.cost - b.cost)

  return (
    <aside className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-col h-full gap-3 p-3">
        <PrestigePanel />

        {/* ── Auto-Clickers Panel ─────────────────────────── */}
        <AutoClickerPanel />

        {/* ── Upgrades Panel ──────────────────────────────── */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 flex flex-col min-h-0 flex-1">
          <div className="p-3 shrink-0 border-b border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
              Available Upgrades
            </span>
          </div>
          <ScrollArea className="flex-1 min-h-0">
            <div className="p-3 space-y-2">
              {availableUpgrades.length === 0 ? (
                <p className="text-xs text-zinc-600 font-mono text-center py-4">
                  No upgrades available. Keep building.
                </p>
              ) : (
                availableUpgrades.map(upg => {
                  const canAfford = cash >= upg.cost
                  return (
                    <button
                      key={upg.upgradeId}
                      disabled={!canAfford}
                      onClick={() => purchaseUpgrade(upg.assetId, upg.upgradeId)}
                      className={`w-full p-2 rounded-md border text-left transition-colors ${
                        canAfford 
                          ? 'border-amber-500/50 bg-amber-950/20 hover:bg-amber-900/40 cursor-pointer' 
                          : 'border-zinc-800/50 bg-zinc-900/20 opacity-60 cursor-not-allowed'
                      }`}
                    >
                      {/* Row 1: Icon + Name + Cost */}
                      <div className="flex items-center gap-2">
                        <span className="text-lg leading-none shrink-0">{upg.icon}</span>
                        <p className={`text-xs font-bold font-mono truncate flex-1 ${canAfford ? 'text-amber-400' : 'text-zinc-500'}`}>
                          {upg.name}
                        </p>
                        <span className="text-[10px] font-mono text-zinc-400 shrink-0">
                          {formatCurrency(upg.cost)}
                        </span>
                      </div>
                      
                      {/* Row 2: Description + Multiplier */}
                      <div className="flex items-start justify-between gap-2 mt-1.5 pl-7">
                        <p className="text-[10px] text-zinc-500 leading-tight line-clamp-2 flex-1">
                          {upg.desc}
                        </p>
                        <span className="shrink-0 text-[9px] font-mono font-bold text-emerald-500 bg-emerald-950/40 px-1.5 py-0.5 rounded whitespace-nowrap">
                          {upg.multiplier}x
                        </span>
                      </div>
                    </button>
                  )
                })
              )}
            </div>
          </ScrollArea>
        </div>

        {/* ── Milestones ──────────────────────────────────── */}
        {nextMilestoneIdx !== -1 && (() => {
          const next = MILESTONES[nextMilestoneIdx]
          const prev = MILESTONES[nextMilestoneIdx - 1]
          const base = prev?.threshold ?? 0
          const pct = Math.min(100, ((netWorth - base) / (next.threshold - base)) * 100)
          return (
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 shrink-0">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                Next Milestone
              </span>
              
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-white truncate pr-2">{next.title}</span>
                  <span className="text-sky-400 shrink-0">{Math.round(pct)}%</span>
                </div>
                <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-500 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-[10px] font-mono text-zinc-600 text-right">
                  {formatCurrency(next.threshold)}
                </p>
              </div>
            </div>
          )
        })()}
      </div>
    </aside>
  )
}
