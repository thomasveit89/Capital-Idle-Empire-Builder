import { GameLoop } from '@/components/game/GameLoop'
import { TopBar } from '@/components/game/TopBar'
import { LeftPanel } from '@/components/game/LeftPanel'
import { CenterPanel } from '@/components/game/CenterPanel'
import { RightPanel } from '@/components/game/RightPanel'
import { MilestoneOverlay } from '@/components/game/MilestoneOverlay'
import { LayerTheme } from '@/components/game/LayerTheme'
import { GoldenCookie } from '@/components/game/GoldenCookie'
import { VisualCity } from '@/components/game/VisualCity'

export default function GamePage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-zinc-950">
      <GameLoop />
      <LayerTheme />
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel — The Engine */}
        <div className="w-72 shrink-0 border-r border-zinc-800 overflow-hidden flex flex-col">
          <div className="flex-1 min-h-0 overflow-y-auto">
            <LeftPanel />
          </div>
          {/* Visual City at the bottom of the left panel */}
          <div className="h-64 shrink-0 border-t border-zinc-800 relative overflow-hidden bg-zinc-900/20">
            <VisualCity />
          </div>
        </div>

        {/* Center Panel — Portfolio */}
        <div className="flex-1 overflow-hidden border-r border-zinc-800">
          <CenterPanel />
        </div>

        {/* Right Panel — Upgrades and Milestones */}
        <div className="w-72 shrink-0 overflow-hidden">
          <RightPanel />
        </div>
      </div>

      <MilestoneOverlay />
      <GoldenCookie />
    </div>
  )
}
