# Capital — Idle Empire Builder
## Product Requirements Document v1.0

---

## 1. Project Overview

**Capital** is a browser-based idle/incremental game inspired by Cookie Clicker, with a serious financial strategy theme. The player starts with minimal capital and grows a global financial empire through active clicking, passive income, smart capital allocation, and strategic upgrades.

The game targets players who enjoy idle mechanics but want more depth — think Factorio meets Bloomberg Terminal. The UI should feel like a premium fintech dashboard, not a casual game.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| UI Components | shadcn/ui |
| Styling | Tailwind CSS |
| State Management | Zustand (client-side game state) |
| Persistence | localStorage (auto-save every 30s) |
| Charts | Recharts |
| Animations | Framer Motion (number tickers, transitions) |
| TypeScript | Yes, strict mode |

---

## 3. Game Concept & Core Loop

```
Click to earn → Buy assets → Assets generate passive income
→ Reinvest capital → Unlock new asset classes → Expand empire
```

The core satisfaction comes from watching net worth tick up in real time, making smart allocation decisions, and hitting milestone unlocks that open new layers of the game.

### Win Condition
There is no hard win condition. The game is endless, with prestige mechanics unlocking after reaching the final milestone (€1 Trillion net worth).

### Game Speed
- Income ticks every **100ms** for smooth counter animations
- Market events fire every **30–120s** randomly
- Auto-save every **30s** to localStorage

---

## 4. Progression System

The game has **5 layers** that unlock sequentially based on net worth milestones.

### Layer 1 — The Hustle (Start → €10,000)
- Player starts with **€100**
- Primary mechanic: **manual clicking** on the "Work" button
- Each click earns a small amount based on current "Skill Level"
- First purchasable: **Freelance Contract** (passive €0.5/sec)
- Goal: teach the core loop before automation kicks in

**Unlocked assets:**
- Freelance Contract
- Online Course (sells passively)
- Side Project SaaS

### Layer 2 — Business Building (€10,000 → €1,000,000)
- Manual clicking becomes less important; passive income dominates
- Introduces the **Business Portfolio** panel
- Each business has: revenue/sec, risk level, upgrade slots, and a health bar
- Capital allocation decisions begin here

**Unlocked assets:**
- Coffee Shop
- E-commerce Store
- Rental Property (1 unit)
- SaaS Product

### Layer 3 — Investing & Compounding (€1M → €100M)
- Introduces the **Investment Portfolio** panel
- Compound interest mechanics: returns reinvest automatically if toggled on
- Introduces **market cycles** (bull/bear phases) affecting returns
- Risk/reward tradeoffs become meaningful

**Unlocked assets:**
- Index Fund (ETF)
- Individual Stocks (with volatility)
- Real Estate Syndicate
- Angel Investment (high risk, high reward)
- Crypto Allocation (optional, high volatility)

### Layer 4 — Corporate Power (€100M → €10B)
- Introduces **Acquisitions** — buy out competitor businesses
- Can **IPO** existing businesses for a lump sum + ongoing equity
- Introduces **lobbying** mechanic affecting tax rates
- Reputation system becomes active

**Unlocked assets:**
- Private Equity Fund
- Holding Company Structure
- Corporate Bonds (issuing)
- Acquisition Targets

### Layer 5 — Macro Influence (€10B → €1T)
- Global systemic player
- Can influence **market events** instead of just reacting to them
- Supply chain investments
- Sovereign wealth fund tier assets

**Unlocked assets:**
- Infrastructure Fund
- Central Bank Bonds
- Geopolitical Influence Cards
- Space Ventures (prestige tier)

---

## 5. Core Mechanics

### 5.1 Net Worth Calculation
```
Net Worth = Cash + Sum(Asset Market Values)
Income/sec = Sum(all passive income sources) - expenses
```

### 5.2 Market Cycles
- The game runs a background market phase: **Bull** or **Bear**
- Phase changes every **3–8 minutes** (randomized)
- Bull market: +20% to investment returns, +10% to business revenue
- Bear market: -25% to investment returns, risk of business losses
- Phase is always visible in the top bar with a trend indicator

### 5.3 Risk System
Every asset has a risk level: **Low / Medium / High / Speculative**

- Low risk assets never fail but grow slowly
- Medium risk assets can underperform during bear markets
- High risk assets can fail entirely if neglected (no upgrades for too long) or during crashes
- A **Diversification Score** (0–100) gives a passive income bonus when high

### 5.4 Capital Allocation
- Player has a **cash balance** at all times
- Buying assets, upgrades, and investments deducts from cash
- Cash itself generates minimal return (savings account rate)
- The tension: spend cash on assets vs. hold for market dip opportunities

### 5.5 Reputation System
Certain upgrade paths require a reputation threshold:

| Path | Style | Effect |
|---|---|---|
| Ethical | Sustainable investments, fair wages | Unlocks ESG funds, PR bonuses, slower but stable growth |
| Aggressive | Hostile takeovers, lobbying, tax optimization | Faster growth, higher risk of regulatory events, unlocks different late-game assets |
| Balanced | Mix of both | Access to all assets but no bonuses |

Reputation is tracked as a **-100 to +100** slider, visible in the profile panel.

### 5.6 Market Events
Random events fire periodically and affect income for a limited time. Examples:

- 🟢 **"Tech boom"** — SaaS revenue +40% for 90 seconds
- 🔴 **"Real estate correction"** — property values -15% for 2 minutes
- 🟡 **"Regulatory inquiry"** — aggressive reputation players lose 10% cash
- 🟢 **"Viral moment"** — click income x5 for 30 seconds
- 🔴 **"Key employee quit"** — one business pauses revenue for 60 seconds
- 🟡 **"Market uncertainty"** — all returns halved until next bull phase

Events are shown in the **Market Feed** panel in real time.

### 5.7 Upgrades
Each asset has **3 upgrade tiers**. Upgrades:
- Increase income rate (e.g. +50% revenue)
- Reduce risk level (e.g. Medium → Low)
- Unlock special abilities (e.g. "automated reinvestment")

Upgrades cost cash and have a visible progress bar showing time to unlock after purchase.

### 5.8 Milestones & Unlocks
Net worth milestones trigger:
1. A full-screen toast notification
2. Unlock of new asset class or mechanic
3. A permanent passive bonus

| Milestone | Unlock |
|---|---|
| €1,000 | First business available |
| €10,000 | Portfolio panel visible |
| €100,000 | Market events begin |
| €1,000,000 | Investment layer unlocked |
| €10,000,000 | Reputation system activates |
| €100,000,000 | Corporate layer unlocked |
| €1,000,000,000 | Global influence layer |
| €1,000,000,000,000 | Prestige mode unlocked |

### 5.9 Prestige Mode
On reaching €1T, player can "reset" for a **Legacy Bonus** — a permanent multiplier that carries over to the next run. Makes subsequent playthroughs faster and enables min-maxing.

---

## 6. UI Architecture

### 6.1 Overall Layout

```
┌─────────────────────────────────────────────────────────────┐
│  TOP BAR — Net Worth | Income/sec | Market Phase | Time     │
├──────────────┬──────────────────────────┬───────────────────┤
│              │                          │                   │
│  LEFT PANEL  │    CENTER PANEL          │  RIGHT PANEL      │
│  The Engine  │    Portfolio             │  Market Feed      │
│              │                          │                   │
│  [Click]     │  [Asset Cards]           │  [Event Log]      │
│  [Income]    │  [Upgrade Slots]         │  [Net Worth Chart]│
│  [Stats]     │  [Allocation Meter]      │  [Milestones]     │
│              │                          │                   │
└──────────────┴──────────────────────────┴───────────────────┘
```

Responsive behavior: on smaller browser windows, center panel takes full width, left/right panels collapse into tabs.

### 6.2 Top Bar
**Always visible. Never scrolls away.**

Components:
- Net worth — large animated ticker (Framer Motion counter)
- Income/sec — smaller, green when positive, red when negative
- Market phase badge — `shadcn/Badge` with bull (green) / bear (red) color
- Play time / session timer
- Settings icon → `shadcn/Sheet` with game options

### 6.3 Left Panel — "The Engine"

**Primary click button**
- Large, tactile button labeled with current active income source
- Shows "+€X" floating text on each click (CSS animation)
- Click power increases with upgrades

**Passive income summary**
- List of top 5 income sources with €/sec next to each
- Total income/sec at the bottom, bold

**Stats section**
- Total earned all time
- Diversification score (0–100 with color coding)
- Reputation meter (-100 to +100)
- Current market phase indicator

### 6.4 Center Panel — "Portfolio"

This is the main strategic interface. Uses `shadcn/Tabs` to switch between:

**Tab 1: Businesses**
Grid of `shadcn/Card` components, one per owned business.

Each card contains:
- Business name + icon
- Revenue/sec
- Risk badge (`shadcn/Badge` — green/yellow/red)
- Upgrade progress bar (`shadcn/Progress`)
- "Upgrade" button (disabled if insufficient cash, shows cost)
- Health indicator (affected by market events)

Businesses not yet purchased show as locked cards with purchase price and a lock icon.

**Tab 2: Investments**
Similar card grid for investment assets. Additional fields:
- Current return %
- Volatility indicator
- "Reinvest returns" toggle per asset

**Tab 3: Acquisitions** *(unlocked at Layer 4)*
Table of acquisition targets with `shadcn/DataTable`. Shows:
- Company name
- Asking price
- Projected return
- Risk profile
- "Acquire" button

### 6.5 Right Panel — "Market"

**Net Worth Chart**
- `Recharts` line chart showing net worth over current session
- Timeframe toggle: 1m / 10m / 1h / All time
- Clean, minimal — no unnecessary grid lines

**Market Events Feed**
- `shadcn/ScrollArea` with live event entries
- Each entry: colored left border (green/red/yellow), event title, description, time ago
- Max 50 entries, older ones fade out

**Milestones tracker**
- Vertical timeline of milestones
- Completed: filled circle + strikethrough
- Next: highlighted with pulse animation
- Future: greyed out, shows unlock requirement

### 6.6 Modals & Overlays

**Milestone unlock** — full-screen overlay with confetti (canvas-based), milestone title, what was unlocked, "Continue" button. Feels like an achievement screen.

**Upgrade detail** — `shadcn/Dialog` showing full upgrade breakdown: current stats, post-upgrade stats, cost, time to unlock.

**Settings** — `shadcn/Sheet` (right slide-in): volume toggle, game speed (1x / 2x / 5x), reset save, export save.

**Market event alert** — `shadcn/Toast` bottom-right, color coded by impact, auto-dismisses after 5s.

---

## 7. Data Model

### GameState (Zustand store)

```typescript
interface GameState {
  // Core
  cash: number
  netWorth: number
  allTimeEarned: number
  incomePerSecond: number
  sessionStartTime: number
  lastSaveTime: number
  
  // Progression
  currentLayer: 1 | 2 | 3 | 4 | 5
  milestonesReached: string[]
  prestigeCount: number
  legacyMultiplier: number
  
  // Player attributes
  reputation: number          // -100 to 100
  diversificationScore: number // 0 to 100
  clickPower: number
  
  // Market
  marketPhase: 'bull' | 'bear'
  marketPhaseEndsAt: number   // timestamp
  activeEvents: MarketEvent[]
  
  // Assets
  ownedAssets: OwnedAsset[]
  
  // History (for chart)
  netWorthHistory: { timestamp: number; value: number }[]
}
```

### Asset Definition

```typescript
interface AssetDefinition {
  id: string
  name: string
  description: string
  icon: string
  layer: 1 | 2 | 3 | 4 | 5
  baseCost: number
  baseIncomePerSecond: number
  riskLevel: 'low' | 'medium' | 'high' | 'speculative'
  category: 'business' | 'investment' | 'acquisition'
  upgrades: UpgradeDefinition[]
  unlockRequirement: {
    netWorth?: number
    reputation?: { min?: number; max?: number }
    assetId?: string
  }
}

interface OwnedAsset {
  definitionId: string
  purchasedAt: number
  upgradeLevel: 0 | 1 | 2 | 3
  upgradeInProgress: boolean
  upgradeCompletesAt?: number
  currentIncomePerSecond: number
  isActive: boolean
}

interface UpgradeDefinition {
  tier: 1 | 2 | 3
  name: string
  description: string
  cost: number
  incomeMuliplier: number
  riskReduction?: number
  unlocksDuration?: number  // seconds to complete upgrade
}
```

### Market Event

```typescript
interface MarketEvent {
  id: string
  title: string
  description: string
  impact: 'positive' | 'negative' | 'neutral'
  affectedAssets: string[]  // asset definition IDs, or 'all'
  incomeMultiplier: number  // e.g. 1.4 = +40%, 0.7 = -30%
  durationSeconds: number
  startsAt: number
  requiresReputation?: { min?: number; max?: number }
}
```

---

## 8. Game Balance Guidelines

These are starting values — expect heavy iteration during playtesting.

| Metric | Target |
|---|---|
| Time to first passive income | ~2 minutes |
| Time to Layer 2 | ~10 minutes |
| Time to Layer 3 | ~45 minutes |
| Time to Layer 4 | ~3 hours |
| Time to Layer 5 | ~10 hours |
| Time to Prestige | ~25 hours |
| Idle income ratio (layer 2) | >80% of income should be passive |
| Click relevance (layer 3+) | Clicking should feel optional but rewarding |

---

## 9. File Structure (suggested)

```
/app
  /game
    page.tsx              ← main game page
    layout.tsx
/components
  /game
    TopBar.tsx
    LeftPanel.tsx
    CenterPanel.tsx
    RightPanel.tsx
    AssetCard.tsx
    UpgradeDialog.tsx
    MilestoneOverlay.tsx
    MarketEventToast.tsx
    NetWorthChart.tsx
    NetWorthTicker.tsx
/store
  gameStore.ts            ← Zustand store
  gameActions.ts          ← pure functions for state mutations
/data
  assets.ts               ← all AssetDefinition objects
  events.ts               ← all MarketEvent templates
  milestones.ts           ← milestone definitions
/lib
  gameEngine.ts           ← tick logic, income calculation
  marketEngine.ts         ← market phase + event firing
  saveLoad.ts             ← localStorage persistence
/types
  game.ts                 ← all TypeScript interfaces
```

---

## 10. Out of Scope (v1)

- Multiplayer or leaderboards
- Backend / database persistence (localStorage only)
- Mobile layout (browser only)
- Sound effects
- Procedurally generated events
- Real financial data integration

These can be considered for v2 after the core loop is validated.

---

## 11. Open Questions for Development

1. Should upgrade timers be real-time (wait 60s for upgrade to complete) or instant-pay? Real-time adds tension but may frustrate players early on.
2. How aggressive should the bear market penalty be? Losing money feels bad — consider a floor of 0% returns rather than negative.
3. Should the click button remain relevant late game, or fade out entirely? A "manual boost" mechanic (temporary x5 income for 10 clicks) could keep it relevant.
4. Prestige naming — "Legacy Run", "New Dynasty", or something else?

---

*Document version: 1.0 — Created for handoff to Claude Code*
