import { GameState } from '@/types/game'

const SAVE_KEY = 'capital_idle_save_v2'

export function saveGame(state: GameState): void {
  try {
    const saveData = {
      cash: state.cash,
      allTimeEarned: state.allTimeEarned,
      sessionStartTime: state.sessionStartTime,
      currentLayer: state.currentLayer,
      milestonesReached: state.milestonesReached,
      prestigeCount: state.prestigeCount,
      legacyMultiplier: state.legacyMultiplier,
      clickPower: state.clickPower,
      autoClickers: state.autoClickers,
      ownedAssets: state.ownedAssets,
      netWorthHistory: state.netWorthHistory.slice(-500), // keep last 500 points
      lastSaveTime: Date.now(),
    }
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveData))
  } catch (e) {
    console.warn('Failed to save game:', e)
  }
}

export function loadGame(): Partial<GameState> | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as Partial<GameState>
  } catch (e) {
    console.warn('Failed to load save:', e)
    return null
  }
}

export function deleteSave(): void {
  localStorage.removeItem(SAVE_KEY)
}

export function exportSave(state: GameState): string {
  return btoa(JSON.stringify({
    cash: state.cash,
    allTimeEarned: state.allTimeEarned,
    ownedAssets: state.ownedAssets,
    autoClickers: state.autoClickers,
    milestonesReached: state.milestonesReached,
    prestigeCount: state.prestigeCount,
    legacyMultiplier: state.legacyMultiplier,
    clickPower: state.clickPower,
  }))
}

export function importSave(encoded: string): Partial<GameState> | null {
  try {
    return JSON.parse(atob(encoded)) as Partial<GameState>
  } catch {
    return null
  }
}
