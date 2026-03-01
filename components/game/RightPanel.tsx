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

  // Show reached + 1 next + fill up to 4 total
  const nextMilestoneIdx = MILESTONES.findIndex((m) => !milestonesReached.includes(m.id))
  const startIdx = Math.max(0, nextMilestoneIdx - 1)
  const visibleMilestones = MILESTONES.slice(startIdx, startIdx + 4)

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
                      className={`w-full flex items-start gap-2 p-2 rounded border text-left transition-colors ${
                        canAfford 
                          ? 'border-amber-500/50 bg-amber-950/20 hover:bg-amber-900/40 cursor-pointer' 
                          : 'border-zinc-800/50 bg-zinc-900/20 opacity-60 cursor-not-allowed'
                      }`}
                    >
                      <span className="text-lg leading-none">{upg.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline gap-1">
                          <p className={`text-xs font-bold font-mono truncate ${canAfford ? 'text-amber-400' : 'text-zinc-500'}`}>
                            {upg.name}
                          </p>
                          <span className="text-[10px] font-mono text-zinc-400 shrink-0">
                            {formatCurrency(upg.cost)}
                          </span>
                        </div>
                        <div className="flex justify-between items-start gap-2 mt-1">
                          <p className="text-[10px] text-zinc-500 leading-tight">
                            {upg.desc}
                          </p>
                          <span className="shrink-0 text-[9px] font-mono font-bold text-emerald-500 bg-emerald-950/40 px-1 rounded">
                            {upg.multiplier}x Income
                          </span>
                        </div>
                      </div>
                    </button>
                  )
                })
              )}
            </div>
          </ScrollArea>
        </div>

        {/* ── Milestones ──────────────────────────────────── */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
            Milestones
          </span>

          {/* Progress toward next milestone */}
          {nextMilestoneIdx !== -1 && (() => {
            const next = MILESTONES[nextMilestoneIdx]
            const prev = MILESTONES[nextMilestoneIdx - 1]
            const base = prev?.threshold ?? 0
            const pct = Math.min(100, ((netWorth - base) / (next.threshold - base)) * 100)
            return (
              <div className="mb-3 space-y-1.5">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-zinc-400 truncate pr-2">{next.title}</span>
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
            )
          })()}

          <div className="space-y-2">
            {visibleMilestones.map((milestone) => {
              const reached = milestonesReached.includes(milestone.id)
              const isNext =
                !reached &&
                MILESTONES.find((m) => !milestonesReached.includes(m.id))?.id === milestone.id

              return (
                <div
                  key={milestone.id}
                  className={`flex items-center gap-2 ${
                    reached ? 'opacity-40' : isNext ? '' : 'opacity-25'
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full shrink-0 border ${
                      reached
                        ? 'bg-emerald-500 border-emerald-400'
                        : isNext
                        ? 'border-sky-500 animate-pulse bg-sky-950'
                        : 'border-zinc-700 bg-zinc-900'
                    }`}
                  />

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[11px] font-mono font-semibold truncate ${
                        reached
                          ? 'line-through text-zinc-500'
                          : isNext
                          ? 'text-white'
                          : 'text-zinc-500'
                      }`}
                    >
                      {milestone.title}
                    </p>
                    <p className="text-[10px] text-zinc-600 font-mono">
                      {formatCurrency(milestone.threshold)}
                    </p>
                  </div>

                  {reached && <span className="text-emerald-500 text-[10px]">✓</span>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}
