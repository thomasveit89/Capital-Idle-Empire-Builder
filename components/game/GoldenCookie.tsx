'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { sounds } from '@/lib/sounds'
import { formatCurrency } from '@/lib/format'
import { Star } from 'lucide-react'

// How often can a golden cookie spawn? (min/max in ms)
const SPAWN_MIN_DELAY = 60000 * 2 // 2 minutes
const SPAWN_MAX_DELAY = 60000 * 6 // 6 minutes
// How long does the cookie stay on screen?
const LIFESPAN = 12000

export function GoldenCookie() {
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [floatingText, setFloatingText] = useState<{ id: number, text: string, x: number, y: number }[]>([])
  
  const incomePerSecond = useGameStore(s => s.incomePerSecond)
  
  const spawnCookie = useCallback(() => {
    if (active || incomePerSecond === 0) return // Don't spawn if already active or no income
    
    // Position between 10% and 90% of screen width/height to avoid edges
    const x = 10 + Math.random() * 80
    const y = 10 + Math.random() * 80
    
    setPosition({ x, y })
    setActive(true)
    
    // Auto-despawn
    setTimeout(() => {
      setActive(false)
    }, LIFESPAN)
  }, [active, incomePerSecond])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const scheduleNext = () => {
      const delay = SPAWN_MIN_DELAY + Math.random() * (SPAWN_MAX_DELAY - SPAWN_MIN_DELAY)
      timeoutId = setTimeout(() => {
        spawnCookie()
        scheduleNext()
      }, delay)
    }
    
    scheduleNext()
    return () => clearTimeout(timeoutId)
  }, [spawnCookie])

  const handleClick = (e: React.MouseEvent) => {
    if (!active) return
    setActive(false)
    
    const x = e.clientX
    const y = e.clientY
    
    // Calculate reward (e.g., 15 minutes of production or massive flat amount)
    const cpsReward = incomePerSecond * 60 * 15 // 15 mins of production
    const baseReward = 1000 // Fallback if CPS is low
    const reward = Math.max(cpsReward, baseReward)
    
    // Play sound
    try {
      sounds.milestone() // You can add a dedicated sound later
    } catch {}
    
    // Apply reward
    useGameStore.setState(s => ({
      cash: Math.max(0, s.cash + reward),
      allTimeEarned: Math.max(0, s.allTimeEarned + reward)
    }))
    
    // Show floating text
    const newId = Date.now()
    setFloatingText(prev => [...prev, { id: newId, text: `+${formatCurrency(reward)}!`, x, y }])
    
    setTimeout(() => {
      setFloatingText(prev => prev.filter(f => f.id !== newId))
    }, 2000)
  }

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.button
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={handleClick}
            className="fixed z-[100] cursor-pointer"
            style={{ 
              left: `${position.x}%`, 
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.5)]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-amber-400/30"
              />
              <Star size={32} className="text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,1)] fill-amber-400/50" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {floatingText.map(f => (
          <motion.div
            key={f.id}
            initial={{ opacity: 1, y: f.y, x: f.x }}
            animate={{ opacity: 0, y: f.y - 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="fixed z-[101] pointer-events-none text-2xl font-bold font-mono text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            {f.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}
