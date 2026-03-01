// Format large numbers with € prefix.
// < 1B: full number with apostrophe thousands separators (e.g. €1'234'567)
// ≥ 1B: abbreviated (e.g. €1.20B)
// compact=true: always abbreviate from 1K up (used for small UI labels)

const _apostrophe = new Intl.NumberFormat('de-CH', { maximumFractionDigits: 0 })

export function formatCurrency(value: number, compact = false): string {
  if (!isFinite(value)) return '€0'

  const abs = Math.abs(value)
  const sign = value < 0 ? '-' : ''

  // Always abbreviate at billion+ (numbers too wide to show full)
  if (abs >= 1_000_000_000_000_000) return `${sign}€${(abs / 1_000_000_000_000_000).toFixed(2)}Qa`
  if (abs >= 1_000_000_000_000) return `${sign}€${(abs / 1_000_000_000_000).toFixed(2)}T`
  if (abs >= 1_000_000_000) return `${sign}€${(abs / 1_000_000_000).toFixed(2)}B`

  // Compact mode: abbreviate smaller values too (for /s labels etc.)
  if (compact) {
    if (abs >= 1_000_000) return `${sign}€${(abs / 1_000_000).toFixed(2)}M`
    if (abs >= 1_000) return `${sign}€${(abs / 1_000).toFixed(1)}K`
  }

  // Full number with apostrophe separators
  if (abs >= 1_000) return `${sign}€${_apostrophe.format(Math.round(abs))}`
  return `${sign}€${abs.toFixed(2)}`
}

export function formatNumber(value: number): string {
  const a = Math.abs(value)
  if (a >= 1_000_000) return (value / 1_000_000).toFixed(1) + 'M'
  if (a >= 1_000) return (value / 1_000).toFixed(1) + 'K'
  return value.toFixed(0)
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`
  if (seconds < 3600) return `${Math.round(seconds / 60)}m`
  return `${Math.round(seconds / 3600)}h`
}

export function formatTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000)
  if (seconds < 60) return 'just now'
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
  return `${Math.floor(seconds / 86400)}d ago`
}

export function formatPlaytime(startTime: number): string {
  const seconds = Math.floor((Date.now() - startTime) / 1000)
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}h ${m}m`
  if (m > 0) return `${m}m ${s}s`
  return `${s}s`
}
