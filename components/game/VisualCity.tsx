'use client'

import { useGameStore } from '@/store/gameStore'
import { ASSET_DEFINITIONS } from '@/data/assets'
import { motion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'
import { Building2 } from 'lucide-react'

// Simple seeded random function
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Give emojis some random placement variation so it looks more like a sprawling landscape
// instead of a rigid grid.
export function VisualCity() {
  const ownedAssets = useGameStore(s => s.ownedAssets)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])

  const itemsToRender = useMemo(() => {
    let seed = 12345 // Fixed seed so layout stays identical across renders
    const items: { id: string, icon: string, size: string, xOffset: number, yOffset: number }[] = []
    
    ownedAssets.forEach(owned => {
      const def = ASSET_DEFINITIONS.find(d => d.id === owned.definitionId)
      if (!def || owned.count === 0) return
      
      let visualCount = 1
      if (owned.count > 1) visualCount = 2
      if (owned.count >= 10) visualCount = 3
      if (owned.count >= 50) visualCount = 4
      if (owned.count >= 100) visualCount = 6
      if (owned.count >= 250) visualCount = 9
      if (owned.count >= 500) visualCount = 12
      
      for (let i = 0; i < visualCount; i++) {
        // Base size depending on asset layer (layer 5 stuff is huge)
        let size = 'text-3xl'
        if (def.layer === 2) size = 'text-4xl'
        if (def.layer === 3) size = 'text-5xl'
        if (def.layer === 4) size = 'text-6xl'
        if (def.layer === 5) size = 'text-7xl'
        
        items.push({
          id: `${def.id}-${i}`,
          icon: def.icon,
          size,
          // random slight scatter for organic look
          xOffset: (seededRandom(seed++) - 0.5) * 10,
          yOffset: (seededRandom(seed++) - 0.5) * 10,
        })
      }
    })
    
    // Shuffle them so big buildings and small buildings intermingle
    return items.sort(() => seededRandom(seed++) - 0.5)
  }, [ownedAssets])

  if (!mounted) return null

  if (itemsToRender.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-zinc-700/50 gap-3">
        <Building2 size={48} strokeWidth={1} />
        <p className="font-mono text-sm tracking-widest uppercase">Barren Land</p>
      </div>
    )
  }

  return (
    <div className="h-full w-full relative overflow-hidden bg-gradient-to-b from-sky-950/20 to-zinc-950/50 rounded-lg border border-zinc-800/50 shadow-inner">
      {/* Horizon line */}
      <div className="absolute top-[40%] left-0 right-0 h-px bg-zinc-800/30" />
      
      {/* Container for city that scales content to fit or scroll if huge */}
      <div className="absolute inset-0 p-6 flex flex-wrap-reverse content-start justify-center gap-2 overflow-y-auto overflow-x-hidden">
        {itemsToRender.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ scale: 0, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20, 
              delay: Math.min(i * 0.02, 1) // Cap delay so mass loads don't take forever
            }}
            className={`${item.size} filter drop-shadow-xl z-10 hover:scale-125 hover:z-20 transition-transform cursor-default select-none`}
            style={{ 
              transform: `translate(${item.xOffset}px, ${item.yOffset}px)`
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
