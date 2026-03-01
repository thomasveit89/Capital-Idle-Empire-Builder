'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { MILESTONES } from '@/data/milestones'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/format'

export function MilestoneOverlay() {
  const pendingMilestone = useGameStore((s) => s.pendingMilestone)
  const dismissMilestone = useGameStore((s) => s.dismissMilestone)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const milestone = pendingMilestone
    ? MILESTONES.find((m) => m.id === pendingMilestone)
    : null

  // Simple canvas confetti
  useEffect(() => {
    if (!milestone || !canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      color: string; size: number; rotation: number; rotSpeed: number
    }> = []

    const colors = ['#10b981', '#34d399', '#6ee7b7', '#fbbf24', '#f59e0b', '#fff']

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -20,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
      })
    }

    let animId: number
    let start: number | null = null

    const animate = (t: number) => {
      if (!start) start = t
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1
        p.rotation += p.rotSpeed

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, 1 - (t - start!) / 3000)
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5)
        ctx.restore()
      }

      if (t - start! < 3500) animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [milestone])

  return (
    <AnimatePresence>
      {milestone && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

          <motion.div
            className="relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl"
            initial={{ scale: 0.8, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Trophy */}
            <div className="text-6xl mb-4">🏆</div>

            {/* Milestone reached */}
            <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-2">
              Milestone Reached
            </p>

            <h2 className="text-2xl font-bold text-white mb-1">{milestone.title}</h2>

            <p className="text-sm text-zinc-400 mb-1">
              {formatCurrency(milestone.threshold)} net worth
            </p>

            <p className="text-sm text-zinc-300 mb-4">{milestone.description}</p>

            {/* Unlock box */}
            <div className="rounded-lg bg-emerald-950/40 border border-emerald-800 p-3 mb-6 text-left">
              <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-wider mb-1">
                Unlocked
              </p>
              <p className="text-sm text-emerald-300">{milestone.unlocks}</p>
            </div>

            <Button
              onClick={dismissMilestone}
              className="w-full bg-sky-600 hover:bg-sky-500 text-white font-mono text-sm"
            >
              Continue Building
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
