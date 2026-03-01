// Synthesized sound effects using the Web Audio API.
// All sounds are generated in code — no audio files needed.

let _ctx: AudioContext | null = null

function ctx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!_ctx) {
    _ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
  }
  if (_ctx.state === 'suspended') _ctx.resume()
  return _ctx
}

/** Master volume gate — set to 0 to mute everything. */
let _masterVolume = 0.5

export function setSoundVolume(v: number) {
  _masterVolume = Math.max(0, Math.min(1, v))
}

export function getSoundVolume() {
  return _masterVolume
}

// ─── Primitives ────────────────────────────────────────────────────────────

function tone(
  freq: number,
  freqEnd: number,
  duration: number,
  type: OscillatorType,
  volume: number,
  delay = 0,
  attack = 0.005,
) {
  const ac = ctx()
  if (!ac || _masterVolume === 0) return

  const osc = ac.createOscillator()
  const gain = ac.createGain()
  const t = ac.currentTime + delay

  osc.connect(gain)
  gain.connect(ac.destination)

  osc.type = type
  osc.frequency.setValueAtTime(freq, t)
  if (freqEnd !== freq) {
    osc.frequency.exponentialRampToValueAtTime(freqEnd, t + duration * 0.9)
  }

  const v = volume * _masterVolume
  gain.gain.setValueAtTime(0, t)
  gain.gain.linearRampToValueAtTime(v, t + attack)
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration)

  osc.start(t)
  osc.stop(t + duration + 0.01)
}

function noise(duration: number, volume: number, delay = 0) {
  const ac = ctx()
  if (!ac || _masterVolume === 0) return

  const bufferSize = ac.sampleRate * duration
  const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1

  const source = ac.createBufferSource()
  source.buffer = buffer

  const filter = ac.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = 800
  filter.Q.value = 0.5

  const gain = ac.createGain()
  const t = ac.currentTime + delay
  const v = volume * _masterVolume

  source.connect(filter)
  filter.connect(gain)
  gain.connect(ac.destination)

  gain.gain.setValueAtTime(v, t)
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration)

  source.start(t)
  source.stop(t + duration + 0.01)
}

// ─── Sound Effects ─────────────────────────────────────────────────────────

export const sounds = {

  /** Short tactile click for the work button */
  click() {
    tone(1200, 600, 0.04, 'square', 0.08)
    noise(0.03, 0.06)
  },

  /** Coin-drop ascending chime when buying an asset */
  purchase() {
    tone(440, 880, 0.12, 'sine', 0.25)
    tone(880, 1320, 0.12, 'sine', 0.18, 0.1)
    tone(1320, 1760, 0.18, 'sine', 0.12, 0.2)
  },

  /** Rising power-up sweep for upgrades */
  upgrade() {
    tone(300, 600, 0.08, 'sine', 0.2)
    tone(600, 900, 0.08, 'sine', 0.2, 0.07)
    tone(900, 1400, 0.12, 'sine', 0.18, 0.14)
    tone(1400, 1800, 0.2, 'sine', 0.12, 0.25)
  },

  /** C-major arpeggio fanfare for milestone unlocks */
  milestone() {
    // C5, E5, G5, C6 — each note slightly delayed
    const notes: [number, number][] = [
      [523.25, 0],
      [659.25, 0.13],
      [783.99, 0.26],
      [1046.50, 0.39],
    ]
    for (const [freq, delay] of notes) {
      tone(freq, freq, 0.5, 'sine', 0.22, delay)
    }
    // Add a shimmer layer
    tone(2093, 2093, 0.6, 'sine', 0.08, 0.52)
  },

  /** Soft upward chime for positive market events */
  eventPositive() {
    tone(880, 1320, 0.15, 'sine', 0.15)
    tone(1320, 1320, 0.3, 'sine', 0.08, 0.12)
  },

  /** Low descending buzz for negative events */
  eventNegative() {
    tone(220, 140, 0.3, 'sawtooth', 0.12)
    noise(0.2, 0.05, 0.05)
  },

  /** Rising sweep when bull market starts */
  bullMarket() {
    tone(300, 700, 0.45, 'sine', 0.18)
    tone(700, 700, 0.25, 'sine', 0.1, 0.4)
  },

  /** Falling sweep when bear market starts */
  bearMarket() {
    tone(500, 220, 0.45, 'sine', 0.18)
    noise(0.15, 0.06, 0.3)
  },

  /** Subtle tick for passive income (called rarely, not every tick) */
  incomeTick() {
    tone(1800, 1800, 0.03, 'sine', 0.04)
  },

  /** Attention-grabbing ascending bells for flash sale */
  flashSale() {
    tone(1320, 1320, 0.08, 'sine', 0.28)
    tone(1760, 1760, 0.08, 'sine', 0.22, 0.09)
    tone(2093, 2093, 0.12, 'sine', 0.18, 0.18)
    tone(2637, 2637, 0.22, 'sine', 0.15, 0.30)
  },

  /** Power charge complete — momentum burst activated */
  momentumBurst() {
    tone(400, 800, 0.06, 'square', 0.15)
    tone(800, 1600, 0.08, 'square', 0.12, 0.05)
    tone(1600, 2400, 0.18, 'sine', 0.18, 0.12)
    noise(0.08, 0.08, 0.03)
  },
}
