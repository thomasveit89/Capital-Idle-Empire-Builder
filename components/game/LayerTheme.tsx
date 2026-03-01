'use client'

import { useEffect } from 'react'
import { useGameStore } from '@/store/gameStore'

/**
 * Applies a `data-layer` attribute to the document root so that CSS
 * can progressively evolve the UI palette as the player gets wealthier.
 */
export function LayerTheme() {
  const currentLayer = useGameStore((s) => s.currentLayer)

  useEffect(() => {
    document.documentElement.setAttribute('data-layer', String(currentLayer))
    return () => {
      document.documentElement.removeAttribute('data-layer')
    }
  }, [currentLayer])

  return null
}
