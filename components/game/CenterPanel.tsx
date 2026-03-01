'use client'

import { useGameStore } from '@/store/gameStore'
import { ASSET_DEFINITIONS } from '@/data/assets'
import { AssetCard } from './AssetCard'
import { formatCurrency } from '@/lib/format'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MILESTONES } from '@/data/milestones'
import { Tooltip } from 'radix-ui'

export function CenterPanel() {
  const cash             = useGameStore((s) => s.cash)
  const netWorth         = useGameStore((s) => s.netWorth)
  const ownedAssets      = useGameStore((s) => s.ownedAssets)
  const currentLayer     = useGameStore((s) => s.currentLayer)

  const sortedAssets = [...ASSET_DEFINITIONS].sort((a, b) => a.baseCost - b.baseCost)

  const getAssetStatus = (def: typeof ASSET_DEFINITIONS[number]) => {
    const owned = ownedAssets.find((a) => a.definitionId === def.id)
    const req   = def.unlockRequirement

    if (def.layer > currentLayer) {
      const m = MILESTONES.find((m) => m.layer === def.layer)
      return { owned, isLocked: true, lockReason: `Unlocks at ${formatCurrency(m?.threshold ?? 0)} net worth` }
    }
    if (req.netWorth && netWorth < req.netWorth) {
      return { owned, isLocked: true, lockReason: `Requires ${formatCurrency(req.netWorth)} net worth` }
    }
    return { owned, isLocked: false }
  }

  return (
    <main className="flex flex-col h-full overflow-hidden bg-zinc-950 relative">
      <Tooltip.Provider delayDuration={300}>
        <div className="shrink-0 px-4 pt-4 pb-3 border-b border-zinc-800 relative z-10 bg-zinc-950/80 backdrop-blur-sm">
          <h2 className="text-sm font-mono text-zinc-300 font-semibold tracking-wide uppercase">
            Store & Upgrades
          </h2>
        </div>
        
        <ScrollArea className="flex-1 overflow-hidden relative z-10">
          <div className="flex flex-col gap-2 px-4 py-4 pb-6">
            {sortedAssets.map((def) => {
              const { owned, isLocked, lockReason } = getAssetStatus(def)
              
              // Recalculate dynamic cost
              const currentCount = owned?.count ?? 0
              const currentCost = Math.ceil(def.baseCost * Math.pow(1.15, currentCount))
              
              return (
                <AssetCard
                  key={def.id}
                  definition={def}
                  ownedAsset={owned}
                  canAfford={cash >= currentCost}
                  isLocked={isLocked}
                  lockReason={lockReason}
                  currentCost={currentCost}
                />
              )
            })}
          </div>
        </ScrollArea>
      </Tooltip.Provider>
    </main>
  )
}
