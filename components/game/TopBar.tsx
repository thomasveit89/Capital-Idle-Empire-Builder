'use client'

import { useEffect, useState } from 'react'
import { useGameStore } from '@/store/gameStore'
import { NetWorthTicker, IncomeTicker } from './NetWorthTicker'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Settings, Zap, Clock, Volume2, VolumeX } from 'lucide-react'

export function TopBar() {
  const cash = useGameStore((s) => s.cash)
  const netWorth = useGameStore((s) => s.netWorth)
  const netWorthHistory = useGameStore((s) => s.netWorthHistory)
  const currentLayer = useGameStore((s) => s.currentLayer)
  const incomePerSecond = useGameStore((s) => s.incomePerSecond)
  const sessionStartTime = useGameStore((s) => s.sessionStartTime)
  const gameSpeed = useGameStore((s) => s.gameSpeed)
  const setGameSpeed = useGameStore((s) => s.setGameSpeed)
  const resetGame = useGameStore((s) => s.resetGame)
  const prestige = useGameStore((s) => s.prestige)
  const prestigeCount = useGameStore((s) => s.prestigeCount)
  const legacyMultiplier = useGameStore((s) => s.legacyMultiplier)
  const lastSaveTime = useGameStore((s) => s.lastSaveTime)
  const soundEnabled = useGameStore((s) => s.soundEnabled)
  const toggleSound = useGameStore((s) => s.toggleSound)

  const logoClass =
    currentLayer >= 5
      ? 'text-amber-400'
      : currentLayer >= 3
      ? 'text-zinc-100'
      : 'text-white'

  const accentLine =
    currentLayer >= 5
      ? 'from-transparent via-amber-500/50 to-transparent'
      : currentLayer >= 4
      ? 'from-transparent via-amber-700/35 to-transparent'
      : currentLayer >= 3
      ? 'from-transparent via-amber-900/30 to-transparent'
      : null

  return (
    <header className="relative h-14 border-b border-zinc-800 bg-zinc-950 flex items-center px-4 gap-6 shrink-0 z-50">
      {/* Layer accent line */}
      {accentLine && (
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${accentLine}`} />
      )}

      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0">
        <span className={`text-lg font-bold tracking-tight transition-colors duration-1000 ${logoClass}`}>CAPITAL</span>
        <span className={`text-xs font-mono transition-colors duration-1000 ${currentLayer >= 5 ? 'text-amber-700' : 'text-zinc-500'}`}>
          {currentLayer >= 5 ? 'EMPIRE' : 'IDLE EMPIRE'}
        </span>
      </div>

      <Separator orientation="vertical" className="h-6 bg-zinc-800" />

      {/* Cash */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Liquid Cash</span>
          <NetWorthTicker
            value={cash}
            className="text-xl font-bold font-mono text-emerald-400 leading-tight"
          />
        </div>
      </div>

      <Separator orientation="vertical" className="h-6 bg-zinc-800" />

      {/* Net Worth */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Net Worth</span>
          <NetWorthTicker
            value={netWorth}
            className="text-sm font-bold font-mono text-zinc-300 leading-tight"
          />
        </div>
        <Sparkline data={netWorthHistory.slice(-30).map((s) => s.value)} />
      </div>

      <Separator orientation="vertical" className="h-6 bg-zinc-800" />

      {/* Income/sec */}
      <div className="flex flex-col">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Income/sec</span>
        <IncomeTicker value={incomePerSecond} className="text-sm font-mono font-semibold leading-tight" />
      </div>

      {/* Legacy badge (shown after first prestige) */}
      {prestigeCount > 0 && (
        <>
          <Separator orientation="vertical" className="h-6 bg-zinc-800" />
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">⚡ Legacy</span>
            <span className="text-xs font-mono font-bold text-amber-300">{legacyMultiplier.toFixed(2)}×</span>
          </div>
        </>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Session Time */}
      <div className="flex items-center gap-1.5 text-zinc-500">
        <Clock size={12} />
        <span className="text-xs font-mono">
          <SessionTimer startTime={sessionStartTime} />
        </span>
      </div>

      <Separator orientation="vertical" className="h-6 bg-zinc-800" />

      {/* Settings */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
            <Settings size={16} />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-zinc-900 border-zinc-800 text-white w-80 p-6">
          <SheetHeader>
            <SheetTitle className="text-white font-mono">Settings</SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Game Speed */}
            <div>
              <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-3">
                Game Speed
              </p>
              <div className="flex gap-2">
                {([1, 2, 5] as const).map((speed) => (
                  <Button
                    key={speed}
                    variant={gameSpeed === speed ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setGameSpeed(speed)}
                    className={`flex-1 font-mono ${
                      gameSpeed === speed
                        ? 'bg-sky-600 hover:bg-sky-500 text-white border-sky-500'
                        : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    <Zap size={12} className="mr-1" />
                    {speed}x
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="bg-zinc-800" />

            {/* Save info */}
            <div>
              <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-2">
                Save
              </p>
              <p className="text-xs text-zinc-500 font-mono">
                Last saved: {new Date(lastSaveTime).toLocaleTimeString()}
              </p>
            </div>

            <Separator className="bg-zinc-800" />

            {/* Sound */}
            <div>
              <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-3">
                Sound
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleSound}
                className={`w-full font-mono flex items-center gap-2 ${
                  soundEnabled
                    ? 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                    : 'border-zinc-700 text-zinc-500 hover:bg-zinc-800'
                }`}
              >
                {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                {soundEnabled ? 'Sound On' : 'Sound Off'}
              </Button>
            </div>

            <Separator className="bg-zinc-800" />

            {/* Legacy / Prestige */}
            <div>
              <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-3">
                Dynasty
              </p>
              {prestigeCount > 0 && (
                <div className="rounded-lg bg-amber-950/30 border border-amber-800/40 p-3 mb-3 space-y-1">
                  <p className="text-[11px] font-mono text-amber-400 font-semibold">
                    ⚡ Legacy Dynasty #{prestigeCount}
                  </p>
                  <p className="text-[10px] font-mono text-zinc-400">
                    All income ×{legacyMultiplier.toFixed(2)} — permanently
                  </p>
                </div>
              )}
              {netWorth >= 1_000_000_000_000 ? (
               <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-700 text-amber-400 hover:bg-amber-950 hover:text-amber-300 w-full font-mono"
                  onClick={() => {
                    if (confirm('Start a new dynasty? All progress resets but your Legacy Bonus grows. This cannot be undone.')) {
                      prestige()
                    }
                  }}
                >
                  ⚡ Dynasty Reset (+100% permanent bonus)
                </Button>
              ) : (
                <p className="text-[10px] font-mono text-zinc-600 text-center">
                  Reach €1T to unlock dynasty reset
                </p>
              )}
            </div>

            <Separator className="bg-zinc-800" />

            {/* Danger zone */}
            <div>
              <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-3">
                Danger Zone
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-red-800 text-red-400 hover:bg-red-950 hover:text-red-300 w-full font-mono"
                onClick={() => {
                  if (confirm('Reset all progress? This cannot be undone.')) {
                    resetGame()
                  }
                }}
              >
                Reset Save
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function Sparkline({ data, width = 64, height = 26 }: { data: number[]; width?: number; height?: number }) {
  if (data.length < 2) return null
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const pad = 2

  const pts = data
    .map((v, i) => {
      const x = pad + (i / (data.length - 1)) * (width - pad * 2)
      const y = pad + (1 - (v - min) / range) * (height - pad * 2)
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  const isUp = data[data.length - 1] >= data[0]
  const color = isUp ? '#22c55e' : '#ef4444'

  return (
    <svg width={width} height={height} className="opacity-50 shrink-0">
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SessionTimer({ startTime }: { startTime: number }) {
  const [elapsed, setElapsed] = useState(0)
  
  useEffect(() => {
    // Calculate initial elapsed time on mount (client-side only)
    setElapsed(Math.floor((Date.now() - startTime) / 1000))
    
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [startTime])
  
  const h = Math.floor(elapsed / 3600)
  const m = Math.floor((elapsed % 3600) / 60)
  const s = elapsed % 60
  
  if (h > 0) return <>{h}h {m}m</>
  if (m > 0) return <>{m}m {s}s</>
  return <>{s}s</>
}
