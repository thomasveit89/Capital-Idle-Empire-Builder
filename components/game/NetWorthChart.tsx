'use client'

import { useState, useMemo } from 'react'
import { useGameStore } from '@/store/gameStore'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { formatCurrency } from '@/lib/format'

type Timeframe = '1m' | '10m' | '1h' | 'all'

const TIMEFRAME_MS: Record<Timeframe, number> = {
  '1m': 60 * 1000,
  '10m': 10 * 60 * 1000,
  '1h': 60 * 60 * 1000,
  'all': Infinity,
}

export function NetWorthChart() {
  const history = useGameStore((s) => s.netWorthHistory)
  const lastTickTime = useGameStore((s) => s.lastTickTime)
  const [timeframe, setTimeframe] = useState<Timeframe>('10m')

  const data = useMemo(() => {
    const cutoff = timeframe === 'all' ? 0 : lastTickTime - TIMEFRAME_MS[timeframe]
    const filtered = history.filter((h) => h.timestamp >= cutoff)
    return filtered.map((h) => ({
      t: h.timestamp,
      v: h.value,
    }))
  }, [history, timeframe, lastTickTime])

  return (
    <div className="space-y-2">
      {/* Timeframe selector */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Net Worth</span>
        <div className="flex gap-1">
          {(['1m', '10m', '1h', 'all'] as Timeframe[]).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                timeframe === tf
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-32">
        {data.length < 2 ? (
          <div className="h-full flex items-center justify-center text-xs text-zinc-600 font-mono">
            Collecting data...
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="netWorthGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="t" hide />
              <YAxis
                hide
                domain={['auto', 'auto']}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  return (
                    <div className="bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-xs font-mono text-white">
                      {formatCurrency(payload[0].value as number)}
                    </div>
                  )
                }}
              />
              <Area
                type="monotone"
                dataKey="v"
                stroke="#10b981"
                strokeWidth={1.5}
                fill="url(#netWorthGrad)"
                dot={false}
                animationDuration={300}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}
