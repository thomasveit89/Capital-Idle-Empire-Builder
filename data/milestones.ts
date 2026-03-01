import { Milestone } from '@/types/game'

export const MILESTONES: Milestone[] = [
  {
    id: 'first_grand',
    threshold: 1000,
    title: 'First Grand',
    description: 'You\'ve crossed €1,000. The first milestone of many.',
    unlocks: 'First businesses are now available in the portfolio.',
    passiveBonus: { type: 'clickPower', multiplier: 1.2 },
  },
  {
    id: 'ten_thousand',
    threshold: 10000,
    title: 'Five Figures',
    description: 'You\'ve entered the five-figure club.',
    unlocks: 'Business Building layer unlocked.',
    layer: 2,
    passiveBonus: { type: 'income', multiplier: 1.05 },
  },
  {
    id: 'hundred_thousand',
    threshold: 100000,
    title: 'Six Figures',
    description: 'The market takes notice. Things are scaling up.',
    unlocks: 'Faster compounding available through upgrades.',
    passiveBonus: { type: 'income', multiplier: 1.08 },
  },
  {
    id: 'one_million',
    threshold: 1000000,
    title: 'Millionaire',
    description: 'You\'ve crossed the threshold most only dream about.',
    unlocks: 'Investment layer unlocked. Stocks, ETFs, and real estate available.',
    layer: 3,
    passiveBonus: { type: 'income', multiplier: 1.1 },
  },
  {
    id: 'ten_million',
    threshold: 10000000,
    title: 'Deca-Millionaire',
    description: 'Serious money.',
    unlocks: 'Higher tier upgrades available.',
    passiveBonus: { type: 'income', multiplier: 1.1 },
  },
  {
    id: 'hundred_million',
    threshold: 100000000,
    title: 'Nine Figures',
    description: 'You\'re playing a different game now.',
    unlocks: 'Corporate layer unlocked. PE funds, holding companies, and bond issuance available.',
    layer: 4,
    passiveBonus: { type: 'income', multiplier: 1.15 },
  },
  {
    id: 'one_billion',
    threshold: 1000000000,
    title: 'Billionaire',
    description: 'You can reshape markets. Welcome to the top 1% of the 1%.',
    unlocks: 'Global Influence layer unlocked. Infrastructure, sovereign debt, and space ventures.',
    layer: 5,
    passiveBonus: { type: 'income', multiplier: 1.2 },
  },
  {
    id: 'ten_billion',
    threshold: 10000000000,
    title: 'Industry Titan',
    description: 'Governments return your calls.',
    unlocks: 'Massive income multipliers.',
    passiveBonus: { type: 'income', multiplier: 1.25 },
  },
  {
    id: 'one_hundred_billion',
    threshold: 100000000000,
    title: 'Century Club',
    description: 'One of the wealthiest humans alive.',
    unlocks: 'All prestige tier assets unlocked.',
    passiveBonus: { type: 'income', multiplier: 1.3 },
  },
  {
    id: 'one_trillion',
    threshold: 1000000000000,
    title: 'Trillionaire',
    description: 'You\'ve done it. An empire beyond imagination. Prestige awaits.',
    unlocks: 'Prestige mode unlocked! Reset for a Legacy Bonus and start a new dynasty.',
    passiveBonus: { type: 'income', multiplier: 1.5 },
  },
]

export const getMilestoneById = (id: string) =>
  MILESTONES.find((m) => m.id === id)

export const getNextMilestone = (netWorth: number) =>
  MILESTONES.find((m) => m.threshold > netWorth)
