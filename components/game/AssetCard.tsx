'use client'

import { useGameStore } from '@/store/gameStore'
import { AssetDefinition, OwnedAsset } from '@/types/game'
import { formatCurrency, formatDuration } from '@/lib/format'
import { Lock, TrendingUp } from 'lucide-react'
import { sounds } from '@/lib/sounds'

interface AssetCardProps {
  definition: AssetDefinition
  ownedAsset?: OwnedAsset
  canAfford: boolean
  isLocked: boolean
  lockReason?: string
  currentCost: number
}

export function AssetCard({ definition, ownedAsset, canAfford, isLocked, lockReason, currentCost }: AssetCardProps) {
  const cash            = useGameStore((s) => s.cash)
  const incomePerSecond = useGameStore((s) => s.incomePerSecond)
  const purchaseAsset   = useGameStore((s) => s.purchaseAsset)

  const count       = ownedAsset?.count ?? 0
  const isOwned     = count > 0

  const cashNeeded  = currentCost - cash
  const timeToBuy   = !canAfford && incomePerSecond > 0 ? cashNeeded / incomePerSecond : 0

  // Calculate current effective income per unit
  let perUnitIncome = definition.baseIncomePerSecond
  if (ownedAsset) {
    for (const upgradeId of ownedAsset.unlockedUpgrades) {
      const upgrade = definition.upgrades.find(u => u.id === upgradeId)
      if (upgrade) {
        perUnitIncome *= upgrade.incomeMultiplier
      }
    }
  }
  
  const totalIncome = perUnitIncome * count

  // ── Locked state ──────────────────────────────────────────────────────────
  if (isLocked) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-zinc-800/60 bg-zinc-900/40 px-3.5 py-3 opacity-60 grayscale-[0.5] transition-opacity hover:opacity-80">
        <span className="shrink-0 text-[18px] leading-none w-6 text-center opacity-40">{definition.icon}</span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 mb-0.5">
            <Lock size={11} className="text-zinc-500 shrink-0" />
            <p className="text-[13px] font-semibold text-zinc-400 leading-tight truncate">{definition.name}</p>
          </div>
          <p className="text-[10px] text-zinc-500 leading-tight truncate">{lockReason ?? 'Locked'}</p>
        </div>
        <span className="shrink-0 font-mono text-[10px] text-zinc-500">
          {formatCurrency(definition.baseCost)}
        </span>
      </div>
    )
  }

  // ── Owned / available state ────────────────────────────────────────────────
  return (
    <div
      className={`rounded-lg border px-3.5 py-3 flex flex-col gap-3 transition-colors ${
        isOwned    ? 'border-zinc-700/80 bg-zinc-900/70'
        :            'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700/60'
      }`}
    >
      {/* ── Row 1: icon · name · count ── */}
      <div className="flex items-center gap-2.5">
        <span className="shrink-0 text-[18px] leading-none w-6 text-center">{definition.icon}</span>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5 leading-none mb-0.5">
            <span className="text-[13px] font-semibold text-white leading-tight truncate">
              {definition.name}
            </span>
          </div>
          <p className="text-[10px] text-zinc-600 leading-tight truncate">{definition.description}</p>
        </div>

        {/* Count badge */}
        <div className={`shrink-0 rounded-md border font-bold font-mono tabular-nums text-sm leading-none
          flex items-center justify-center min-w-[32px] h-8 px-2 ${
          count > 0
            ? 'border-emerald-600/50 bg-emerald-950/30 text-emerald-400'
            : 'border-zinc-800/60 bg-transparent text-zinc-700'
        }`}>
          {count}
        </div>
      </div>

      {/* ── Row 2: income ── */}
      <div className="flex items-center gap-1.5 text-[11px] font-mono leading-none">
        <TrendingUp size={10} className={isOwned ? 'text-emerald-500' : 'text-zinc-600'} />
        {isOwned ? (
          <>
            <span className="text-emerald-400 font-semibold">{formatCurrency(totalIncome)}/s</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-500">{formatCurrency(perUnitIncome)}/s each</span>
          </>
        ) : (
          <span className="text-zinc-500">{formatCurrency(perUnitIncome)}/s</span>
        )}
      </div>

      {/* ── Buy button ── */}
      <div className="space-y-1">
        <button
          disabled={!canAfford}
          onClick={() => { purchaseAsset(definition.id, 1); sounds.purchase() }}
          className={`w-full h-8 rounded text-[11px] font-mono font-semibold tracking-wide transition-colors ${
            canAfford
              ? 'bg-emerald-700 hover:bg-emerald-600 text-white cursor-pointer'
              : 'bg-zinc-800/60 text-zinc-600 cursor-not-allowed'
          }`}
        >
          Buy 1 — {formatCurrency(currentCost)}
        </button>

        {!canAfford && timeToBuy > 0 && timeToBuy < 600 && (
          <p className="text-[9px] font-mono text-zinc-600 text-right">
            ~{formatDuration(timeToBuy)} away
          </p>
        )}
      </div>
    </div>
  )
}
