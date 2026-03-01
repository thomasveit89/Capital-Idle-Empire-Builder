import { GameState } from '@/types/game'

export interface Synergy {
  id: string
  name: string
  description: string
  condition: (state: GameState) => boolean
  applyBonus: (state: GameState, baseIncome: number, assetId: string) => number
}

export const SYNERGIES: Synergy[] = [
  {
    id: 'caffeine_fueled_coders',
    name: 'Caffeine-Fueled Coders',
    description: 'Coffee Shops boost E-commerce Stores by 50%',
    condition: (state) => {
      const coffee = state.ownedAssets.find(a => a.definitionId === 'coffee_shop')?.count || 0
      const ecom = state.ownedAssets.find(a => a.definitionId === 'ecommerce_store')?.count || 0
      return coffee >= 10 && ecom >= 1
    },
    applyBonus: (state, baseIncome, assetId) => {
      if (assetId === 'ecommerce_store') return baseIncome * 1.5
      return baseIncome
    }
  },
  {
    id: 'corporate_lunch',
    name: 'Corporate Lunch Routes',
    description: 'Holding Companies double Food Cart income',
    condition: (state) => {
      const holding = state.ownedAssets.find(a => a.definitionId === 'holding_company')?.count || 0
      return holding >= 1
    },
    applyBonus: (state, baseIncome, assetId) => {
      if (assetId === 'food_cart') return baseIncome * 2.0
      return baseIncome
    }
  },
  {
    id: 'tech_hub',
    name: 'Tech Hub',
    description: 'Owning 50 of every Layer 1 & 2 asset boosts ALL income by 25%',
    condition: (state) => {
      const requiredAssets = ['food_cart', 'car_wash', 'vending_machines', 'coffee_shop', 'ecommerce_store', 'rental_property']
      return requiredAssets.every(id => {
        return (state.ownedAssets.find(a => a.definitionId === id)?.count || 0) >= 50
      })
    },
    applyBonus: (state, baseIncome) => {
      return baseIncome * 1.25
    }
  },
  {
    id: 'mars_logistics',
    name: 'Interplanetary Supply Chain',
    description: 'Space Ventures boost E-commerce Stores by 1000%',
    condition: (state) => {
      const space = state.ownedAssets.find(a => a.definitionId === 'space_ventures')?.count || 0
      return space >= 1
    },
    applyBonus: (state, baseIncome, assetId) => {
      if (assetId === 'ecommerce_store') return baseIncome * 10.0
      return baseIncome
    }
  }
]

export const getActiveSynergies = (state: GameState): Synergy[] => {
  return SYNERGIES.filter(syn => syn.condition(state))
}
