'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'
import { useGameStore } from '@/store/gameStore'
import { formatCurrency } from '@/lib/format'

const TICK_INTERVAL_MS = 100 // 100ms ticks

export function GameLoop() {
  const tick = useGameStore((s) => s.tick)
  const loadGame = useGameStore((s) => s.loadGame)
  const offlineEarnings = useGameStore((s) => s.offlineEarnings)

  // Load saved game on mount
  useEffect(() => {
    loadGame()
  }, [loadGame])

  // Show offline earnings notification once
  useEffect(() => {
    if (offlineEarnings > 0) {
      toast.success(`Welcome back! +${formatCurrency(offlineEarnings)} earned while away`, {
        description: 'Your assets kept working.',
        duration: 5000,
      })
      useGameStore.setState({ offlineEarnings: 0 })
    }
  }, [offlineEarnings])

  // Game tick loop
  useEffect(() => {
    const interval = setInterval(() => {
      tick(Date.now())
    }, TICK_INTERVAL_MS)

    return () => clearInterval(interval)
  }, [tick])

  return null
}
