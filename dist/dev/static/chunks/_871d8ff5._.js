(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/assets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ASSET_DEFINITIONS",
    ()=>ASSET_DEFINITIONS,
    "getAssetDefinition",
    ()=>getAssetDefinition
]);
const ASSET_DEFINITIONS = [
    // ─── LAYER 1: THE HUSTLE ───────────────────────────────────────────────────
    {
        id: 'food_cart',
        name: 'Food Cart',
        description: 'A street food stall serving hungry passersby. Low overhead, loyal regulars.',
        icon: '🌮',
        layer: 1,
        baseCost: 50,
        baseIncomePerSecond: 0.5,
        unlockRequirement: {
            netWorth: 0
        },
        upgrades: [
            {
                id: 'food_cart_upg_1',
                name: 'Street Food License',
                description: 'Get certified and expand your menu.',
                cost: 250,
                incomeMultiplier: 2.0
            },
            {
                id: 'food_cart_upg_2',
                name: 'Catering Gigs',
                description: 'Add private event catering for bulk orders.',
                cost: 1000,
                incomeMultiplier: 2.0
            },
            {
                id: 'food_cart_upg_3',
                name: 'Food Truck Fleet',
                description: 'Scale to three trucks covering the city\'s busiest spots.',
                cost: 5000,
                incomeMultiplier: 2.0
            }
        ]
    },
    {
        id: 'car_wash',
        name: 'Car Wash',
        description: 'A drive-through car wash with steady weekend traffic and minimal staff.',
        icon: '🚗',
        layer: 1,
        baseCost: 200,
        baseIncomePerSecond: 2.5,
        unlockRequirement: {
            netWorth: 200
        },
        upgrades: [
            {
                id: 'car_wash_upg_1',
                name: 'Detailing Service',
                description: 'Add interior cleaning to raise the average ticket.',
                cost: 1000,
                incomeMultiplier: 2.0
            },
            {
                id: 'car_wash_upg_2',
                name: 'Automated Tunnel',
                description: 'Install a conveyor system and triple throughput.',
                cost: 5000,
                incomeMultiplier: 2.0
            },
            {
                id: 'car_wash_upg_3',
                name: 'Membership Club',
                description: 'Monthly unlimited-wash subscriptions for guaranteed revenue.',
                cost: 25000,
                incomeMultiplier: 2.0
            }
        ]
    },
    {
        id: 'vending_machines',
        name: 'Vending Machine Route',
        description: 'A network of machines placed in offices and schools earning around the clock.',
        icon: '🥤',
        layer: 1,
        baseCost: 1000,
        baseIncomePerSecond: 12.0,
        unlockRequirement: {
            netWorth: 1000
        },
        upgrades: [
            {
                id: 'vending_upg_1',
                name: 'Healthy Options',
                description: 'Stock premium snacks and drinks for higher margins.',
                cost: 5000,
                incomeMultiplier: 2.0
            },
            {
                id: 'vending_upg_2',
                name: 'Prime Locations',
                description: 'Secure spots in airports and train stations.',
                cost: 25000,
                incomeMultiplier: 2.0
            },
            {
                id: 'vending_upg_3',
                name: 'Smart Machines',
                description: 'Cashless payments and live inventory tracking.',
                cost: 100000,
                incomeMultiplier: 2.0
            }
        ]
    },
    // ─── LAYER 2: BUSINESS BUILDING ───────────────────────────────────────────
    {
        id: 'coffee_shop',
        name: 'Coffee Shop',
        description: 'A local café with loyal regulars and solid margins.',
        icon: '☕',
        layer: 2,
        baseCost: 10000,
        baseIncomePerSecond: 100,
        unlockRequirement: {
            netWorth: 10000
        },
        upgrades: [
            {
                id: 'coffee_upg_1',
                name: 'Specialty Roasts',
                description: 'Offer premium roasts to increase ticket size.',
                cost: 50000,
                incomeMultiplier: 2.0
            },
            {
                id: 'coffee_upg_2',
                name: 'Second Location',
                description: 'Open a second branch and double revenue.',
                cost: 250000,
                incomeMultiplier: 2.0
            },
            {
                id: 'coffee_upg_3',
                name: 'Franchise Model',
                description: 'License the brand and collect royalties.',
                cost: 1000000,
                incomeMultiplier: 2.0
            }
        ]
    },
    {
        id: 'ecommerce_store',
        name: 'E-commerce Store',
        description: 'Online retail with dropshipping and inventory management.',
        icon: '🛍️',
        layer: 2,
        baseCost: 50000,
        baseIncomePerSecond: 400,
        unlockRequirement: {
            netWorth: 50000
        },
        upgrades: [
            {
                id: 'ecom_upg_1',
                name: 'Paid Ads',
                description: 'Run targeted campaigns to drive traffic.',
                cost: 250000,
                incomeMultiplier: 2.0
            },
            {
                id: 'ecom_upg_2',
                name: 'Private Label',
                description: 'Source and brand your own products.',
                cost: 1250000,
                incomeMultiplier: 2.0
            },
            {
                id: 'ecom_upg_3',
                name: 'Multi-Channel',
                description: 'Sell on Amazon, TikTok Shop, and wholesale.',
                cost: 5000000,
                incomeMultiplier: 2.0
            }
        ]
    },
    {
        id: 'rental_property',
        name: 'Rental Property',
        description: 'A residential unit generating monthly rent.',
        icon: '🏠',
        layer: 2,
        baseCost: 200000,
        baseIncomePerSecond: 1200,
        unlockRequirement: {
            netWorth: 200000
        },
        upgrades: [
            {
                id: 'rental_upg_1',
                name: 'Renovation',
                description: 'Upgrade the unit to charge higher rent.',
                cost: 1000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'rental_upg_2',
                name: 'Multi-unit',
                description: 'Convert to a multi-family property.',
                cost: 5000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'rental_upg_3',
                name: 'Luxury Conversion',
                description: 'Convert to high-end short-term rentals.',
                cost: 20000000,
                incomeMultiplier: 2.0
            }
        ]
    },
    // ─── LAYER 3: INVESTING & COMPOUNDING ─────────────────────────────────────
    {
        id: 'index_fund',
        name: 'Index Fund (ETF)',
        description: 'Broad market exposure with low fees. The backbone of any portfolio.',
        icon: '📈',
        layer: 3,
        baseCost: 1000000,
        baseIncomePerSecond: 5000,
        unlockRequirement: {
            netWorth: 1000000
        },
        upgrades: [
            {
                id: 'etf_upg_1',
                name: 'DCA Strategy',
                description: 'Automate dollar-cost averaging for lower average cost.',
                cost: 5000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'etf_upg_2',
                name: 'Tax-loss Harvesting',
                description: 'Optimize tax efficiency to improve net returns.',
                cost: 25000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'etf_upg_3',
                name: 'Factor Investing',
                description: 'Target value, momentum, and quality factors.',
                cost: 100000000,
                incomeMultiplier: 2.0
            }
        ]
    },
    {
        id: 'individual_stocks',
        name: 'Stock Portfolio',
        description: 'Curated individual stocks with higher potential.',
        icon: '📊',
        layer: 3,
        baseCost: 5000000,
        baseIncomePerSecond: 20000,
        unlockRequirement: {
            netWorth: 5000000
        },
        upgrades: [
            {
                id: 'stocks_upg_1',
                name: 'Research Team',
                description: 'Hire analysts to improve stock picks.',
                cost: 25000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'stocks_upg_2',
                name: 'Options Strategy',
                description: 'Use covered calls to generate additional income.',
                cost: 125000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'stocks_upg_3',
                name: 'Quant Fund',
                description: 'Build algorithmic trading models.',
                cost: 500000000,
                incomeMultiplier: 2.0
            }
        ]
    },
    // ─── LAYER 4: CORPORATE POWER ──────────────────────────────────────────────
    {
        id: 'private_equity_fund',
        name: 'Private Equity Fund',
        description: 'Buy underperforming businesses, optimize them, sell for profit.',
        icon: '🏦',
        layer: 4,
        baseCost: 50000000,
        baseIncomePerSecond: 150000,
        unlockRequirement: {
            netWorth: 50000000
        },
        upgrades: [
            {
                id: 'pe_upg_1',
                name: 'Operational Playbook',
                description: 'Standardized playbook for portfolio companies.',
                cost: 250000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'pe_upg_2',
                name: 'Add-on Acquisitions',
                description: 'Buy complementary businesses and merge them.',
                cost: 1250000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'pe_upg_3',
                name: 'Fund II',
                description: 'Raise a larger second fund with institutional LPs.',
                cost: 5000000000,
                incomeMultiplier: 2.0
            }
        ]
    },
    {
        id: 'holding_company',
        name: 'Holding Company',
        description: 'A corporate structure that owns stakes across your empire.',
        icon: '🏛️',
        layer: 4,
        baseCost: 500000000,
        baseIncomePerSecond: 1000000,
        unlockRequirement: {
            netWorth: 500000000
        },
        upgrades: [
            {
                id: 'holding_upg_1',
                name: 'Tax Optimization',
                description: 'Restructure for optimal tax efficiency.',
                cost: 2500000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'holding_upg_2',
                name: 'Intercompany Synergies',
                description: 'Unlock synergies between portfolio companies.',
                cost: 12500000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'holding_upg_3',
                name: 'Conglomerate Status',
                description: 'Recognized as a major conglomerate worldwide.',
                cost: 50000000000,
                incomeMultiplier: 2.0
            }
        ]
    },
    // ─── LAYER 5: MACRO INFLUENCE ──────────────────────────────────────────────
    {
        id: 'central_bank_bonds',
        name: 'Sovereign Debt Portfolio',
        description: 'Hold government bonds of multiple nations. Boring, but at this scale... massive.',
        icon: '🏦',
        layer: 5,
        baseCost: 10000000000,
        baseIncomePerSecond: 15000000,
        unlockRequirement: {
            netWorth: 10000000000
        },
        upgrades: [
            {
                id: 'bonds_upg_1',
                name: 'Emerging Markets',
                description: 'Add high-yield EM bonds for better returns.',
                cost: 50000000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'bonds_upg_2',
                name: 'Currency Hedging',
                description: 'Eliminate FX risk with sophisticated hedging.',
                cost: 250000000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'bonds_upg_3',
                name: 'Reserve Currency Exposure',
                description: 'Hold reserves of the world\'s major currencies.',
                cost: 1000000000000,
                incomeMultiplier: 2.0
            }
        ]
    },
    {
        id: 'space_ventures',
        name: 'Space Ventures',
        description: 'The final frontier. Satellite networks, asteroid mining, orbital tourism.',
        icon: '🚀',
        layer: 5,
        baseCost: 100000000000,
        baseIncomePerSecond: 100000000,
        unlockRequirement: {
            netWorth: 100000000000
        },
        upgrades: [
            {
                id: 'space_upg_1',
                name: 'Satellite Constellation',
                description: 'Deploy a global satellite internet network.',
                cost: 500000000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'space_upg_2',
                name: 'Lunar Mining Rights',
                description: 'Secure rights to lunar resource extraction.',
                cost: 2500000000000,
                incomeMultiplier: 2.0
            },
            {
                id: 'space_upg_3',
                name: 'Mars Colony',
                description: 'Fund the first permanent human settlement on Mars.',
                cost: 10000000000000,
                incomeMultiplier: 2.0
            }
        ]
    }
];
const getAssetDefinition = (id)=>ASSET_DEFINITIONS.find((a)=>a.id === id);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/milestones.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MILESTONES",
    ()=>MILESTONES,
    "getMilestoneById",
    ()=>getMilestoneById,
    "getNextMilestone",
    ()=>getNextMilestone
]);
const MILESTONES = [
    {
        id: 'first_grand',
        threshold: 1000,
        title: 'First Grand',
        description: 'You\'ve crossed €1,000. The first milestone of many.',
        unlocks: 'First businesses are now available in the portfolio.',
        passiveBonus: {
            type: 'clickPower',
            multiplier: 1.2
        }
    },
    {
        id: 'ten_thousand',
        threshold: 10000,
        title: 'Five Figures',
        description: 'You\'ve entered the five-figure club.',
        unlocks: 'Business Building layer unlocked.',
        layer: 2,
        passiveBonus: {
            type: 'income',
            multiplier: 1.05
        }
    },
    {
        id: 'hundred_thousand',
        threshold: 100000,
        title: 'Six Figures',
        description: 'The market takes notice. Things are scaling up.',
        unlocks: 'Faster compounding available through upgrades.',
        passiveBonus: {
            type: 'income',
            multiplier: 1.08
        }
    },
    {
        id: 'one_million',
        threshold: 1000000,
        title: 'Millionaire',
        description: 'You\'ve crossed the threshold most only dream about.',
        unlocks: 'Investment layer unlocked. Stocks, ETFs, and real estate available.',
        layer: 3,
        passiveBonus: {
            type: 'income',
            multiplier: 1.1
        }
    },
    {
        id: 'ten_million',
        threshold: 10000000,
        title: 'Deca-Millionaire',
        description: 'Serious money.',
        unlocks: 'Higher tier upgrades available.',
        passiveBonus: {
            type: 'income',
            multiplier: 1.1
        }
    },
    {
        id: 'hundred_million',
        threshold: 100000000,
        title: 'Nine Figures',
        description: 'You\'re playing a different game now.',
        unlocks: 'Corporate layer unlocked. PE funds, holding companies, and bond issuance available.',
        layer: 4,
        passiveBonus: {
            type: 'income',
            multiplier: 1.15
        }
    },
    {
        id: 'one_billion',
        threshold: 1000000000,
        title: 'Billionaire',
        description: 'You can reshape markets. Welcome to the top 1% of the 1%.',
        unlocks: 'Global Influence layer unlocked. Infrastructure, sovereign debt, and space ventures.',
        layer: 5,
        passiveBonus: {
            type: 'income',
            multiplier: 1.2
        }
    },
    {
        id: 'ten_billion',
        threshold: 10000000000,
        title: 'Industry Titan',
        description: 'Governments return your calls.',
        unlocks: 'Massive income multipliers.',
        passiveBonus: {
            type: 'income',
            multiplier: 1.25
        }
    },
    {
        id: 'one_hundred_billion',
        threshold: 100000000000,
        title: 'Century Club',
        description: 'One of the wealthiest humans alive.',
        unlocks: 'All prestige tier assets unlocked.',
        passiveBonus: {
            type: 'income',
            multiplier: 1.3
        }
    },
    {
        id: 'one_trillion',
        threshold: 1000000000000,
        title: 'Trillionaire',
        description: 'You\'ve done it. An empire beyond imagination. Prestige awaits.',
        unlocks: 'Prestige mode unlocked! Reset for a Legacy Bonus and start a new dynasty.',
        passiveBonus: {
            type: 'income',
            multiplier: 1.5
        }
    }
];
const getMilestoneById = (id)=>MILESTONES.find((m)=>m.id === id);
const getNextMilestone = (netWorth)=>MILESTONES.find((m)=>m.threshold > netWorth);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/synergies.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SYNERGIES",
    ()=>SYNERGIES,
    "getActiveSynergies",
    ()=>getActiveSynergies
]);
const SYNERGIES = [
    {
        id: 'caffeine_fueled_coders',
        name: 'Caffeine-Fueled Coders',
        description: 'Coffee Shops boost E-commerce Stores by 50%',
        condition: (state)=>{
            const coffee = state.ownedAssets.find((a)=>a.definitionId === 'coffee_shop')?.count || 0;
            const ecom = state.ownedAssets.find((a)=>a.definitionId === 'ecommerce_store')?.count || 0;
            return coffee >= 10 && ecom >= 1;
        },
        applyBonus: (state, baseIncome, assetId)=>{
            if (assetId === 'ecommerce_store') return baseIncome * 1.5;
            return baseIncome;
        }
    },
    {
        id: 'corporate_lunch',
        name: 'Corporate Lunch Routes',
        description: 'Holding Companies double Food Cart income',
        condition: (state)=>{
            const holding = state.ownedAssets.find((a)=>a.definitionId === 'holding_company')?.count || 0;
            return holding >= 1;
        },
        applyBonus: (state, baseIncome, assetId)=>{
            if (assetId === 'food_cart') return baseIncome * 2.0;
            return baseIncome;
        }
    },
    {
        id: 'tech_hub',
        name: 'Tech Hub',
        description: 'Owning 50 of every Layer 1 & 2 asset boosts ALL income by 25%',
        condition: (state)=>{
            const requiredAssets = [
                'food_cart',
                'car_wash',
                'vending_machines',
                'coffee_shop',
                'ecommerce_store',
                'rental_property'
            ];
            return requiredAssets.every((id)=>{
                return (state.ownedAssets.find((a)=>a.definitionId === id)?.count || 0) >= 50;
            });
        },
        applyBonus: (state, baseIncome)=>{
            return baseIncome * 1.25;
        }
    },
    {
        id: 'mars_logistics',
        name: 'Interplanetary Supply Chain',
        description: 'Space Ventures boost E-commerce Stores by 1000%',
        condition: (state)=>{
            const space = state.ownedAssets.find((a)=>a.definitionId === 'space_ventures')?.count || 0;
            return space >= 1;
        },
        applyBonus: (state, baseIncome, assetId)=>{
            if (assetId === 'ecommerce_store') return baseIncome * 10.0;
            return baseIncome;
        }
    }
];
const getActiveSynergies = (state)=>{
    return SYNERGIES.filter((syn)=>syn.condition(state));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/autoClickerUpgrades.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUTO_CLICKER_UPGRADES",
    ()=>AUTO_CLICKER_UPGRADES,
    "calculateAutoClickerMultipliers",
    ()=>calculateAutoClickerMultipliers,
    "getAvailableUpgrades",
    ()=>getAvailableUpgrades,
    "getUpgradesForAutoClicker",
    ()=>getUpgradesForAutoClicker
]);
const AUTO_CLICKER_UPGRADES = [
    // ─── SPEED UPGRADES ────────────────────────────────────────────────────────
    // Intern Speed Upgrades
    {
        id: 'intern_speed_1',
        name: 'Coffee Break',
        description: 'Interns work 50% faster after their coffee break',
        type: 'speed',
        targetAutoClickerId: 'intern',
        cost: 2500,
        tier: 1,
        effect: {
            speedMultiplier: 1.5
        },
        icon: '☕'
    },
    {
        id: 'intern_speed_2',
        name: 'Energy Drinks',
        description: 'Caffeine boost doubles intern productivity',
        type: 'speed',
        targetAutoClickerId: 'intern',
        cost: 15000,
        tier: 2,
        effect: {
            speedMultiplier: 2.0
        },
        icon: '🥤',
        requiresUpgrade: 'intern_speed_1'
    },
    {
        id: 'intern_speed_3',
        name: 'AI Assistants',
        description: 'Each intern gets a ChatGPT subscription',
        type: 'speed',
        targetAutoClickerId: 'intern',
        cost: 100000,
        tier: 3,
        effect: {
            speedMultiplier: 2.5
        },
        icon: '🤖',
        requiresUpgrade: 'intern_speed_2'
    },
    // Analyst Speed Upgrades
    {
        id: 'analyst_speed_1',
        name: 'Dual Monitors',
        description: 'Analysts can multitask with extra screens',
        type: 'speed',
        targetAutoClickerId: 'analyst',
        cost: 25000,
        tier: 1,
        effect: {
            speedMultiplier: 1.5
        },
        icon: '🖥️'
    },
    {
        id: 'analyst_speed_2',
        name: 'Bloomberg Terminal',
        description: 'Professional trading setup increases efficiency',
        type: 'speed',
        targetAutoClickerId: 'analyst',
        cost: 150000,
        tier: 2,
        effect: {
            speedMultiplier: 2.0
        },
        icon: '📊',
        requiresUpgrade: 'analyst_speed_1'
    },
    {
        id: 'analyst_speed_3',
        name: 'Algorithmic Trading',
        description: 'Analysts automate their workflows',
        type: 'speed',
        targetAutoClickerId: 'analyst',
        cost: 1000000,
        tier: 3,
        effect: {
            speedMultiplier: 2.5
        },
        icon: '📈',
        requiresUpgrade: 'analyst_speed_2'
    },
    // Quant Speed Upgrades
    {
        id: 'quant_speed_1',
        name: 'Quantum Computer Access',
        description: 'Edge computing for faster calculations',
        type: 'speed',
        targetAutoClickerId: 'quant',
        cost: 250000,
        tier: 1,
        effect: {
            speedMultiplier: 1.5
        },
        icon: '⚛️'
    },
    {
        id: 'quant_speed_2',
        name: 'Neural Network Training',
        description: 'ML models optimize trading patterns',
        type: 'speed',
        targetAutoClickerId: 'quant',
        cost: 1500000,
        tier: 2,
        effect: {
            speedMultiplier: 2.0
        },
        icon: '🧠',
        requiresUpgrade: 'quant_speed_1'
    },
    {
        id: 'quant_speed_3',
        name: 'Time Travel Debugging',
        description: 'Fix bugs before they happen',
        type: 'speed',
        targetAutoClickerId: 'quant',
        cost: 10000000,
        tier: 3,
        effect: {
            speedMultiplier: 2.5
        },
        icon: '⏰',
        requiresUpgrade: 'quant_speed_2'
    },
    // ─── POWER UPGRADES ─────────────────────────────────────────────────────
    // Global Power Upgrades (affect all auto-clickers)
    {
        id: 'power_mouse_1',
        name: 'Gaming Mouse',
        description: 'High-precision clicking for everyone',
        type: 'power',
        cost: 5000,
        tier: 1,
        effect: {
            powerMultiplier: 1.5
        },
        icon: '🖱️'
    },
    {
        id: 'power_mouse_2',
        name: 'Mechanical Keyboards',
        description: 'Satisfying clicks with tactile feedback',
        type: 'power',
        cost: 35000,
        tier: 2,
        effect: {
            powerMultiplier: 2.0
        },
        icon: '⌨️',
        requiresUpgrade: 'power_mouse_1'
    },
    {
        id: 'power_monitor_1',
        name: '4K Monitors',
        description: 'See more opportunities on larger screens',
        type: 'power',
        cost: 100000,
        tier: 3,
        effect: {
            powerMultiplier: 2.5
        },
        icon: '🖥️',
        requiresUpgrade: 'power_mouse_2'
    },
    {
        id: 'power_ai_1',
        name: 'Click Prediction AI',
        description: 'Neural networks optimize every click',
        type: 'power',
        cost: 500000,
        tier: 4,
        effect: {
            powerMultiplier: 3.0
        },
        icon: '🎯',
        requiresUpgrade: 'power_monitor_1'
    },
    {
        id: 'power_quantum_1',
        name: 'Quantum Clicking',
        description: 'Click in multiple dimensions simultaneously',
        type: 'power',
        cost: 2500000,
        tier: 5,
        effect: {
            powerMultiplier: 4.0
        },
        icon: '✨',
        requiresUpgrade: 'power_ai_1'
    },
    // ─── SYNERGY UPGRADES ─────────────────────────────────────────────────────
    {
        id: 'synergy_team_1',
        name: 'Team Building Exercise',
        description: 'Each auto-clicker type boosts others by 5%',
        type: 'synergy',
        cost: 10000,
        tier: 1,
        effect: {
            synergyBonus: 0.05
        },
        icon: '🤝'
    },
    {
        id: 'synergy_team_2',
        name: 'Open Office Layout',
        description: 'Collaboration increases efficiency by 10%',
        type: 'synergy',
        cost: 75000,
        tier: 2,
        effect: {
            synergyBonus: 0.10
        },
        icon: '🏢',
        requiresUpgrade: 'synergy_team_1'
    },
    {
        id: 'synergy_team_3',
        name: 'Corporate Retreat',
        description: 'Team bonding improves performance by 15%',
        type: 'synergy',
        cost: 500000,
        tier: 3,
        effect: {
            synergyBonus: 0.15
        },
        icon: '🏖️',
        requiresUpgrade: 'synergy_team_2'
    },
    {
        id: 'synergy_team_4',
        name: 'Cult... I Mean Culture',
        description: 'Maximum synergy achieved through unity',
        type: 'synergy',
        cost: 2500000,
        tier: 4,
        effect: {
            synergyBonus: 0.25
        },
        icon: '🏛️',
        requiresUpgrade: 'synergy_team_3'
    },
    // ─── EFFICIENCY UPGRADES ──────────────────────────────────────────────────
    {
        id: 'efficiency_hr_1',
        name: 'HR Department',
        description: 'Better hiring reduces costs by 5%',
        type: 'efficiency',
        cost: 20000,
        tier: 1,
        effect: {
            costScalingMultiplier: 0.95
        },
        icon: '👔'
    },
    {
        id: 'efficiency_hr_2',
        name: 'Automated Recruitment',
        description: 'AI screening reduces hiring costs by 10%',
        type: 'efficiency',
        cost: 100000,
        tier: 2,
        effect: {
            costScalingMultiplier: 0.90
        },
        icon: '🤖',
        requiresUpgrade: 'efficiency_hr_1'
    },
    {
        id: 'efficiency_outsource_1',
        name: 'Nearshoring',
        description: 'Offshore talent at better rates',
        type: 'efficiency',
        cost: 500000,
        tier: 3,
        effect: {
            costScalingMultiplier: 0.85
        },
        icon: '🌍',
        requiresUpgrade: 'efficiency_hr_2'
    },
    {
        id: 'efficiency_clone_1',
        name: 'Cloning Technology',
        description: 'Replicate your best performers',
        type: 'efficiency',
        cost: 2500000,
        tier: 4,
        effect: {
            costScalingMultiplier: 0.80
        },
        icon: '🧬',
        requiresUpgrade: 'efficiency_outsource_1'
    }
];
function getUpgradesForAutoClicker(autoClickerId) {
    return AUTO_CLICKER_UPGRADES.filter((u)=>u.targetAutoClickerId === autoClickerId || !u.targetAutoClickerId && u.type !== 'synergy' || // Global non-synergy upgrades
        u.type === 'synergy' // Synergies are always available if owned
    );
}
function getAvailableUpgrades(unlockedUpgrades, autoClickers, cash) {
    const ownedTypes = Object.entries(autoClickers).filter(([_, count])=>count > 0).map(([id, _])=>id);
    return AUTO_CLICKER_UPGRADES.filter((upgrade)=>{
        // Already purchased
        if (unlockedUpgrades.includes(upgrade.id)) return false;
        // Check requirements
        if (upgrade.requiresUpgrade && !unlockedUpgrades.includes(upgrade.requiresUpgrade)) {
            return false;
        }
        // Check if auto-clicker is owned (for targeted upgrades)
        if (upgrade.targetAutoClickerId && !ownedTypes.includes(upgrade.targetAutoClickerId)) {
            return false;
        }
        // For synergies, need at least 2 different types
        if (upgrade.type === 'synergy' && ownedTypes.length < 2) {
            return false;
        }
        return true;
    }).sort((a, b)=>a.cost - b.cost);
}
function calculateAutoClickerMultipliers(autoClickerId, unlockedUpgrades, autoClickers) {
    let speedMultiplier = 1;
    let powerMultiplier = 1;
    let costScalingMultiplier = 1;
    let synergyBonus = 0;
    const ownedTypes = Object.entries(autoClickers).filter(([_, count])=>count > 0).map(([id, _])=>id);
    for (const upgradeId of unlockedUpgrades){
        const upgrade = AUTO_CLICKER_UPGRADES.find((u)=>u.id === upgradeId);
        if (!upgrade) continue;
        // Apply speed upgrades for this auto-clicker
        if (upgrade.type === 'speed' && upgrade.targetAutoClickerId === autoClickerId) {
            speedMultiplier *= upgrade.effect.speedMultiplier || 1;
        }
        // Apply power upgrades (global or specific)
        if (upgrade.type === 'power') {
            if (!upgrade.targetAutoClickerId || upgrade.targetAutoClickerId === autoClickerId) {
                powerMultiplier *= upgrade.effect.powerMultiplier || 1;
            }
        }
        // Apply efficiency upgrades (always global)
        if (upgrade.type === 'efficiency') {
            costScalingMultiplier *= upgrade.effect.costScalingMultiplier || 1;
        }
        // Track synergy bonus
        if (upgrade.type === 'synergy') {
            synergyBonus += upgrade.effect.synergyBonus || 0;
        }
    }
    // Apply synergy bonus based on number of different auto-clicker types owned
    if (synergyBonus > 0 && ownedTypes.length > 1) {
        const synergyMultiplier = 1 + synergyBonus * (ownedTypes.length - 1);
        speedMultiplier *= synergyMultiplier;
        powerMultiplier *= synergyMultiplier;
    }
    return {
        speedMultiplier,
        powerMultiplier,
        costScalingMultiplier
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/gameEngine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateAssetIncome",
    ()=>calculateAssetIncome,
    "calculateAutoClickerCost",
    ()=>calculateAutoClickerCost,
    "calculateAutoClickerIncome",
    ()=>calculateAutoClickerIncome,
    "calculateClickValue",
    ()=>calculateClickValue,
    "calculateCurrentLayer",
    ()=>calculateCurrentLayer,
    "calculateLegacyBonus",
    ()=>calculateLegacyBonus,
    "calculateNetWorth",
    ()=>calculateNetWorth,
    "calculateTotalIncomePerSecond",
    ()=>calculateTotalIncomePerSecond,
    "checkMilestones",
    ()=>checkMilestones
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/assets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/milestones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$synergies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/synergies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$autoClickerUpgrades$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/autoClickerUpgrades.ts [app-client] (ecmascript)");
;
;
;
;
function calculateAssetIncome(asset, legacyMultiplier, state) {
    const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetDefinition"])(asset.definitionId);
    if (!def) return 0;
    let income = def.baseIncomePerSecond;
    // Apply purchased upgrades
    for (const upgradeId of asset.unlockedUpgrades){
        const upgrade = def.upgrades.find((u)=>u.id === upgradeId);
        if (upgrade) income *= upgrade.incomeMultiplier;
    }
    // Apply synergies
    const activeSynergies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$synergies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSynergies"])(state);
    for (const syn of activeSynergies){
        income = syn.applyBonus(state, income, asset.definitionId);
    }
    // Legacy multiplier from prestige
    income *= legacyMultiplier;
    // Scale by how many copies are owned
    return Math.max(0, income) * asset.count;
}
function calculateTotalIncomePerSecond(state) {
    const base = state.ownedAssets.reduce((total, asset)=>{
        return total + calculateAssetIncome(asset, state.legacyMultiplier, state);
    }, 0);
    return base;
}
function calculateNetWorth(state) {
    return state.allTimeEarned;
}
function checkMilestones(netWorth, reachedMilestones) {
    for (const milestone of __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONES"]){
        if (netWorth >= milestone.threshold && !reachedMilestones.includes(milestone.id)) {
            return milestone.id;
        }
    }
    return null;
}
function calculateClickValue(state) {
    // Base: €1 per click + 10% of passive income per click
    const baseClick = 1;
    const incomeBonus = state.incomePerSecond * 0.1;
    return (baseClick + incomeBonus) * state.clickPower * state.legacyMultiplier;
}
function calculateCurrentLayer(milestonesReached) {
    if (milestonesReached.includes('one_billion')) return 5;
    if (milestonesReached.includes('hundred_million')) return 4;
    if (milestonesReached.includes('one_million')) return 3;
    if (milestonesReached.includes('ten_thousand')) return 2;
    return 1;
}
function calculateLegacyBonus(prestigeCount) {
    // Each prestige grants +100% income multiplier, stackable
    return 1 + prestigeCount * 1.0;
}
// ─── Auto-Clicker Income ───────────────────────────────────────────────────
// Auto-clicker definitions (must match AutoClickerPanel.tsx)
const AUTO_CLICKER_DEFS = [
    {
        id: 'intern',
        clicksPerSecond: 1,
        baseCost: 500
    },
    {
        id: 'analyst',
        clicksPerSecond: 5,
        baseCost: 5000
    },
    {
        id: 'quant',
        clicksPerSecond: 25,
        baseCost: 50000
    }
];
function calculateAutoClickerIncome(state) {
    let totalIncome = 0;
    for (const def of AUTO_CLICKER_DEFS){
        const count = state.autoClickers[def.id] || 0;
        if (count === 0) continue;
        // Get multipliers from upgrades
        const { speedMultiplier, powerMultiplier } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$autoClickerUpgrades$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAutoClickerMultipliers"])(def.id, state.autoClickerUpgrades, state.autoClickers);
        // Calculate income: clicks/sec × speed multiplier × € per click × power multiplier × legacy
        const effectiveClicksPerSecond = def.clicksPerSecond * speedMultiplier;
        const valuePerClick = 1 * powerMultiplier * state.legacyMultiplier;
        const clickerIncome = count * effectiveClicksPerSecond * valuePerClick;
        totalIncome += clickerIncome;
    }
    return totalIncome;
}
function calculateAutoClickerCost(autoClickerId, baseCost, currentCount, autoClickerUpgrades) {
    const { costScalingMultiplier } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$autoClickerUpgrades$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAutoClickerMultipliers"])(autoClickerId, autoClickerUpgrades, {});
    // Apply efficiency reduction to the 1.15 scaling factor
    const scalingFactor = 1.15 * costScalingMultiplier;
    return Math.ceil(baseCost * Math.pow(scalingFactor, currentCount));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/saveLoad.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSave",
    ()=>deleteSave,
    "exportSave",
    ()=>exportSave,
    "importSave",
    ()=>importSave,
    "loadGame",
    ()=>loadGame,
    "saveGame",
    ()=>saveGame
]);
const SAVE_KEY = 'capital_idle_save_v2';
function saveGame(state) {
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
            autoClickerUpgrades: state.autoClickerUpgrades,
            ownedAssets: state.ownedAssets,
            netWorthHistory: state.netWorthHistory.slice(-500),
            lastSaveTime: Date.now()
        };
        localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
    } catch (e) {
        console.warn('Failed to save game:', e);
    }
}
function loadGame() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        console.warn('Failed to load save:', e);
        return null;
    }
}
function deleteSave() {
    localStorage.removeItem(SAVE_KEY);
}
function exportSave(state) {
    return btoa(JSON.stringify({
        cash: state.cash,
        allTimeEarned: state.allTimeEarned,
        ownedAssets: state.ownedAssets,
        autoClickers: state.autoClickers,
        autoClickerUpgrades: state.autoClickerUpgrades,
        milestonesReached: state.milestonesReached,
        prestigeCount: state.prestigeCount,
        legacyMultiplier: state.legacyMultiplier,
        clickPower: state.clickPower
    }));
}
function importSave(encoded) {
    try {
        return JSON.parse(atob(encoded));
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sounds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSoundVolume",
    ()=>getSoundVolume,
    "setSoundVolume",
    ()=>setSoundVolume,
    "sounds",
    ()=>sounds
]);
// Synthesized sound effects using the Web Audio API.
// All sounds are generated in code — no audio files needed.
let _ctx = null;
function ctx() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!_ctx) {
        _ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
}
/** Master volume gate — set to 0 to mute everything. */ let _masterVolume = 0.5;
function setSoundVolume(v) {
    _masterVolume = Math.max(0, Math.min(1, v));
}
function getSoundVolume() {
    return _masterVolume;
}
// ─── Primitives ────────────────────────────────────────────────────────────
function tone(freq, freqEnd, duration, type, volume, delay = 0, attack = 0.005) {
    const ac = ctx();
    if (!ac || _masterVolume === 0) return;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    const t = ac.currentTime + delay;
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (freqEnd !== freq) {
        osc.frequency.exponentialRampToValueAtTime(freqEnd, t + duration * 0.9);
    }
    const v = volume * _masterVolume;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(v, t + attack);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    osc.start(t);
    osc.stop(t + duration + 0.01);
}
function noise(duration, volume, delay = 0) {
    const ac = ctx();
    if (!ac || _masterVolume === 0) return;
    const bufferSize = ac.sampleRate * duration;
    const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
    const data = buffer.getChannelData(0);
    for(let i = 0; i < bufferSize; i++)data[i] = Math.random() * 2 - 1;
    const source = ac.createBufferSource();
    source.buffer = buffer;
    const filter = ac.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;
    filter.Q.value = 0.5;
    const gain = ac.createGain();
    const t = ac.currentTime + delay;
    const v = volume * _masterVolume;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ac.destination);
    gain.gain.setValueAtTime(v, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    source.start(t);
    source.stop(t + duration + 0.01);
}
const sounds = {
    /** Short tactile click for the work button */ click () {
        tone(1200, 600, 0.04, 'square', 0.08);
        noise(0.03, 0.06);
    },
    /** Coin-drop ascending chime when buying an asset */ purchase () {
        tone(440, 880, 0.12, 'sine', 0.25);
        tone(880, 1320, 0.12, 'sine', 0.18, 0.1);
        tone(1320, 1760, 0.18, 'sine', 0.12, 0.2);
    },
    /** Rising power-up sweep for upgrades */ upgrade () {
        tone(300, 600, 0.08, 'sine', 0.2);
        tone(600, 900, 0.08, 'sine', 0.2, 0.07);
        tone(900, 1400, 0.12, 'sine', 0.18, 0.14);
        tone(1400, 1800, 0.2, 'sine', 0.12, 0.25);
    },
    /** C-major arpeggio fanfare for milestone unlocks */ milestone () {
        // C5, E5, G5, C6 — each note slightly delayed
        const notes = [
            [
                523.25,
                0
            ],
            [
                659.25,
                0.13
            ],
            [
                783.99,
                0.26
            ],
            [
                1046.50,
                0.39
            ]
        ];
        for (const [freq, delay] of notes){
            tone(freq, freq, 0.5, 'sine', 0.22, delay);
        }
        // Add a shimmer layer
        tone(2093, 2093, 0.6, 'sine', 0.08, 0.52);
    },
    /** Soft upward chime for positive market events */ eventPositive () {
        tone(880, 1320, 0.15, 'sine', 0.15);
        tone(1320, 1320, 0.3, 'sine', 0.08, 0.12);
    },
    /** Low descending buzz for negative events */ eventNegative () {
        tone(220, 140, 0.3, 'sawtooth', 0.12);
        noise(0.2, 0.05, 0.05);
    },
    /** Rising sweep when bull market starts */ bullMarket () {
        tone(300, 700, 0.45, 'sine', 0.18);
        tone(700, 700, 0.25, 'sine', 0.1, 0.4);
    },
    /** Falling sweep when bear market starts */ bearMarket () {
        tone(500, 220, 0.45, 'sine', 0.18);
        noise(0.15, 0.06, 0.3);
    },
    /** Subtle tick for passive income (called rarely, not every tick) */ incomeTick () {
        tone(1800, 1800, 0.03, 'sine', 0.04);
    },
    /** Attention-grabbing ascending bells for flash sale */ flashSale () {
        tone(1320, 1320, 0.08, 'sine', 0.28);
        tone(1760, 1760, 0.08, 'sine', 0.22, 0.09);
        tone(2093, 2093, 0.12, 'sine', 0.18, 0.18);
        tone(2637, 2637, 0.22, 'sine', 0.15, 0.30);
    },
    /** Power charge complete — momentum burst activated */ momentumBurst () {
        tone(400, 800, 0.06, 'square', 0.15);
        tone(800, 1600, 0.08, 'square', 0.12, 0.05);
        tone(1600, 2400, 0.18, 'sine', 0.18, 0.12);
        noise(0.08, 0.08, 0.03);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/gameStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameStore",
    ()=>useGameStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/assets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameEngine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$saveLoad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/saveLoad.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/milestones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sounds.ts [app-client] (ecmascript)");
;
;
;
;
;
;
// ─── Initial State ─────────────────────────────────────────────────────────
const createInitialState = ()=>({
        cash: 50,
        netWorth: 0,
        allTimeEarned: 0,
        incomePerSecond: 0,
        sessionStartTime: Date.now(),
        lastSaveTime: Date.now(),
        lastTickTime: Date.now(),
        currentLayer: 1,
        milestonesReached: [],
        prestigeCount: 0,
        legacyMultiplier: 1,
        clickPower: 1,
        autoClickers: {},
        autoClickerUpgrades: [],
        ownedAssets: [],
        netWorthHistory: [
            {
                timestamp: Date.now(),
                value: 0
            }
        ],
        pendingMilestone: null,
        gameSpeed: 1,
        soundEnabled: true,
        offlineEarnings: 0
    });
const useGameStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set, get)=>({
        ...createInitialState(),
        // ─── Click ───────────────────────────────────────────────────────────────
        handleClick: (amount = 1)=>{
            const state = get();
            const now = Date.now();
            const clickValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateClickValue"])(state) * amount;
            set((s)=>({
                    cash: s.cash + clickValue,
                    allTimeEarned: s.allTimeEarned + clickValue,
                    lastTickTime: now
                }));
            const updated = get();
            const netWorth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNetWorth"])(updated);
            set({
                netWorth
            });
            _checkAndTriggerMilestones();
        },
        purchaseAutoClicker: (id, cost)=>{
            const state = get();
            if (state.cash < cost) return;
            set((s)=>({
                    cash: s.cash - cost,
                    autoClickers: {
                        ...s.autoClickers,
                        [id]: (s.autoClickers[id] || 0) + 1
                    }
                }));
            if (state.soundEnabled) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sounds"].upgrade();
        },
        purchaseAutoClickerUpgrade: (upgradeId, cost)=>{
            const state = get();
            if (state.cash < cost) return;
            if (state.autoClickerUpgrades.includes(upgradeId)) return;
            set((s)=>({
                    cash: s.cash - cost,
                    autoClickerUpgrades: [
                        ...s.autoClickerUpgrades,
                        upgradeId
                    ]
                }));
            if (state.soundEnabled) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sounds"].upgrade();
        },
        // ─── Purchase Asset ───────────────────────────────────────────────────────
        purchaseAsset: (definitionId, amount = 1)=>{
            const state = get();
            const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetDefinition"])(definitionId);
            if (!def) return;
            const existing = state.ownedAssets.find((a)=>a.definitionId === definitionId);
            const currentCount = existing?.count ?? 0;
            // Calculate cost for `amount` units with exponential scaling (1.15^count)
            let totalCost = 0;
            for(let i = 0; i < amount; i++){
                totalCost += Math.ceil(def.baseCost * Math.pow(1.15, currentCount + i));
            }
            if (state.cash < totalCost) return;
            let newAssets;
            if (existing) {
                newAssets = state.ownedAssets.map((a)=>a.definitionId === definitionId ? {
                        ...a,
                        count: a.count + amount
                    } : a);
            } else {
                newAssets = [
                    ...state.ownedAssets,
                    {
                        definitionId,
                        purchasedAt: Date.now(),
                        unlockedUpgrades: [],
                        count: amount
                    }
                ];
            }
            set((s)=>({
                    cash: s.cash - totalCost,
                    ownedAssets: newAssets
                }));
            const updated = get();
            const incomePerSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTotalIncomePerSecond"])(updated);
            const netWorth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNetWorth"])(updated);
            const currentLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCurrentLayer"])(updated.milestonesReached);
            set({
                incomePerSecond,
                netWorth,
                currentLayer
            });
            if (state.soundEnabled) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sounds"].upgrade();
        },
        // ─── Purchase Upgrade ─────────────────────────────────────────────────────
        purchaseUpgrade: (definitionId, upgradeId)=>{
            const state = get();
            const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetDefinition"])(definitionId);
            if (!def) return;
            const upgrade = def.upgrades.find((u)=>u.id === upgradeId);
            if (!upgrade) return;
            const assetIdx = state.ownedAssets.findIndex((a)=>a.definitionId === definitionId);
            if (assetIdx === -1) return;
            const asset = state.ownedAssets[assetIdx];
            if (asset.unlockedUpgrades.includes(upgradeId)) return; // Already unlocked
            if (state.cash < upgrade.cost) return;
            const newAssets = [
                ...state.ownedAssets
            ];
            newAssets[assetIdx] = {
                ...asset,
                unlockedUpgrades: [
                    ...asset.unlockedUpgrades,
                    upgradeId
                ]
            };
            set((s)=>({
                    cash: s.cash - upgrade.cost,
                    ownedAssets: newAssets
                }));
            const updated = get();
            const incomePerSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTotalIncomePerSecond"])(updated);
            set({
                incomePerSecond
            });
            if (state.soundEnabled) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sounds"].upgrade();
        },
        // ─── Tick ─────────────────────────────────────────────────────────────────
        tick: (now)=>{
            const state = get();
            const elapsed = (now - state.lastTickTime) / 1000 // seconds
            ;
            if (elapsed <= 0) return;
            const effectiveElapsed = elapsed * state.gameSpeed;
            const incomePerSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTotalIncomePerSecond"])(state);
            const earned = incomePerSecond * effectiveElapsed;
            // Auto-clicker math - auto-clickers give base click value only (no income bonus)
            const AUTO_CLICKERS = [
                {
                    id: 'intern',
                    clicksPerSecond: 1
                },
                {
                    id: 'analyst',
                    clicksPerSecond: 5
                },
                {
                    id: 'quant',
                    clicksPerSecond: 25
                }
            ];
            const totalAutoClicks = AUTO_CLICKERS.reduce((total, clicker)=>{
                return total + (state.autoClickers[clicker.id] || 0) * clicker.clicksPerSecond;
            }, 0);
            // Auto-clickers get base €1 per click + multipliers, but NOT the 10% income bonus
            const autoClickValue = 1 * state.clickPower * state.legacyMultiplier;
            const autoClickEarned = totalAutoClicks * autoClickValue * effectiveElapsed;
            const totalEarned = earned + autoClickEarned;
            const newCash = state.cash + totalEarned;
            const newAllTime = state.allTimeEarned + totalEarned;
            const updatedState = {
                ...state,
                cash: newCash,
                allTimeEarned: newAllTime,
                incomePerSecond
            };
            const newNetWorth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNetWorth"])(updatedState);
            // Update history every 5 seconds
            let netWorthHistory = state.netWorthHistory;
            const lastSnapshot = netWorthHistory[netWorthHistory.length - 1];
            if (!lastSnapshot || now - lastSnapshot.timestamp >= 5000) {
                netWorthHistory = [
                    ...netWorthHistory,
                    {
                        timestamp: now,
                        value: newNetWorth
                    }
                ].slice(-1000);
            }
            const currentLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCurrentLayer"])(state.milestonesReached);
            set({
                cash: newCash,
                allTimeEarned: newAllTime,
                netWorth: newNetWorth,
                incomePerSecond,
                lastTickTime: now,
                netWorthHistory,
                currentLayer
            });
            _checkAndTriggerMilestones();
            _checkAutoSave();
        },
        // ─── Persistence ──────────────────────────────────────────────────────────
        saveGame: ()=>{
            const state = get();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$saveLoad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveGame"])(state);
            set({
                lastSaveTime: Date.now()
            });
        },
        loadGame: ()=>{
            const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$saveLoad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadGame"])();
            if (!saved) return;
            const initial = createInitialState();
            const merged = {
                ...initial,
                ...saved,
                lastTickTime: Date.now(),
                sessionStartTime: Date.now(),
                pendingMilestone: null,
                gameSpeed: 1,
                offlineEarnings: 0
            };
            // Ensure unlockedUpgrades exists for old saves
            if (merged.ownedAssets) {
                merged.ownedAssets = merged.ownedAssets.map((a)=>({
                        ...a,
                        unlockedUpgrades: a.unlockedUpgrades || [],
                        count: a.count ?? 1
                    }));
            }
            const incomePerSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateTotalIncomePerSecond"])(merged);
            const netWorth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNetWorth"])({
                ...merged,
                incomePerSecond
            });
            const currentLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCurrentLayer"])(merged.milestonesReached);
            // Calculate offline earnings (capped at 24 hours)
            const lastSave = saved.lastSaveTime ?? Date.now();
            const offlineSeconds = Math.min((Date.now() - lastSave) / 1000, 24 * 60 * 60);
            const offlineEarnings = offlineSeconds > 5 ? incomePerSecond * offlineSeconds : 0;
            set({
                ...merged,
                incomePerSecond,
                netWorth,
                currentLayer,
                cash: merged.cash + offlineEarnings,
                allTimeEarned: merged.allTimeEarned + offlineEarnings,
                offlineEarnings
            });
        },
        resetGame: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$saveLoad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSave"])();
            set(createInitialState());
        },
        // ─── Prestige ─────────────────────────────────────────────────────────────
        prestige: ()=>{
            const state = get();
            if (state.netWorth < 1_000_000_000_000) return;
            const newPrestigeCount = state.prestigeCount + 1;
            const legacyMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateLegacyBonus"])(newPrestigeCount);
            const fresh = createInitialState();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$saveLoad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSave"])();
            set({
                ...fresh,
                prestigeCount: newPrestigeCount,
                legacyMultiplier
            });
        },
        // ─── UI ───────────────────────────────────────────────────────────────────
        dismissMilestone: ()=>{
            _milestoneCooldownUntil = Date.now() + 2500;
            set({
                pendingMilestone: null
            });
        },
        setGameSpeed: (speed)=>set({
                gameSpeed: speed
            }),
        toggleSound: ()=>{
            const next = !get().soundEnabled;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSoundVolume"])(next ? 0.5 : 0);
            set({
                soundEnabled: next
            });
        },
        dismissOfflineEarnings: ()=>set({
                offlineEarnings: 0
            })
    }));
// ─── Helpers ──────────────────────────────────────────────────────────────
let _lastAutoSave = Date.now();
let _milestoneCooldownUntil = 0;
function _checkAutoSave() {
    const now = Date.now();
    if (now - _lastAutoSave >= 30000) {
        _lastAutoSave = now;
        const state = useGameStore.getState();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$saveLoad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveGame"])(state);
        useGameStore.setState({
            lastSaveTime: now
        });
    }
}
function _checkAndTriggerMilestones() {
    const state = useGameStore.getState();
    if (state.pendingMilestone) return; // already showing one
    if (Date.now() < _milestoneCooldownUntil) return; // cooldown after dismiss
    const newMilestone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkMilestones"])(state.netWorth, state.milestonesReached);
    if (newMilestone) {
        const milestone = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONES"].find((m)=>m.id === newMilestone);
        let clickPower = state.clickPower;
        if (milestone?.passiveBonus?.type === 'clickPower') {
            clickPower *= milestone.passiveBonus.multiplier;
        }
        const newMilestonesReached = [
            ...state.milestonesReached,
            newMilestone
        ];
        const currentLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCurrentLayer"])(newMilestonesReached);
        useGameStore.setState({
            pendingMilestone: newMilestone,
            milestonesReached: newMilestonesReached,
            currentLayer,
            clickPower
        });
        if (state.soundEnabled) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sounds"].milestone();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatDuration",
    ()=>formatDuration,
    "formatNumber",
    ()=>formatNumber,
    "formatPlaytime",
    ()=>formatPlaytime,
    "formatTimeAgo",
    ()=>formatTimeAgo
]);
// Format large numbers with € prefix.
// < 1B: full number with apostrophe thousands separators (e.g. €1'234'567)
// ≥ 1B: abbreviated (e.g. €1.20B)
// compact=true: always abbreviate from 1K up (used for small UI labels)
const _apostrophe = new Intl.NumberFormat('de-CH', {
    maximumFractionDigits: 0
});
function formatCurrency(value, compact = false) {
    if (!isFinite(value)) return '€0';
    const abs = Math.abs(value);
    const sign = value < 0 ? '-' : '';
    // Always abbreviate at billion+ (numbers too wide to show full)
    if (abs >= 1_000_000_000_000_000) return `${sign}€${(abs / 1_000_000_000_000_000).toFixed(2)}Qa`;
    if (abs >= 1_000_000_000_000) return `${sign}€${(abs / 1_000_000_000_000).toFixed(2)}T`;
    if (abs >= 1_000_000_000) return `${sign}€${(abs / 1_000_000_000).toFixed(2)}B`;
    // Compact mode: abbreviate smaller values too (for /s labels etc.)
    if (compact) {
        if (abs >= 1_000_000) return `${sign}€${(abs / 1_000_000).toFixed(2)}M`;
        if (abs >= 1_000) return `${sign}€${(abs / 1_000).toFixed(1)}K`;
    }
    // Full number with apostrophe separators
    if (abs >= 1_000) return `${sign}€${_apostrophe.format(Math.round(abs))}`;
    return `${sign}€${abs.toFixed(2)}`;
}
function formatNumber(value) {
    const a = Math.abs(value);
    if (a >= 1_000_000) return (value / 1_000_000).toFixed(1) + 'M';
    if (a >= 1_000) return (value / 1_000).toFixed(1) + 'K';
    return value.toFixed(0);
}
function formatDuration(seconds) {
    if (seconds < 60) return `${Math.round(seconds)}s`;
    if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
    return `${Math.round(seconds / 3600)}h`;
}
function formatTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
}
function formatPlaytime(startTime) {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/GameLoop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameLoop",
    ()=>GameLoop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TICK_INTERVAL_MS = 100 // 100ms ticks
;
function GameLoop() {
    _s();
    const tick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "GameLoop.useGameStore[tick]": (s)=>s.tick
    }["GameLoop.useGameStore[tick]"]);
    const loadGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "GameLoop.useGameStore[loadGame]": (s)=>s.loadGame
    }["GameLoop.useGameStore[loadGame]"]);
    const offlineEarnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "GameLoop.useGameStore[offlineEarnings]": (s)=>s.offlineEarnings
    }["GameLoop.useGameStore[offlineEarnings]"]);
    // Load saved game on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameLoop.useEffect": ()=>{
            loadGame();
        }
    }["GameLoop.useEffect"], [
        loadGame
    ]);
    // Show offline earnings notification once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameLoop.useEffect": ()=>{
            if (offlineEarnings > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Welcome back! +${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(offlineEarnings)} earned while away`, {
                    description: 'Your assets kept working.',
                    duration: 5000
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"].setState({
                    offlineEarnings: 0
                });
            }
        }
    }["GameLoop.useEffect"], [
        offlineEarnings
    ]);
    // Game tick loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameLoop.useEffect": ()=>{
            const interval = setInterval({
                "GameLoop.useEffect.interval": ()=>{
                    tick(Date.now());
                }
            }["GameLoop.useEffect.interval"], TICK_INTERVAL_MS);
            return ({
                "GameLoop.useEffect": ()=>clearInterval(interval)
            })["GameLoop.useEffect"];
        }
    }["GameLoop.useEffect"], [
        tick
    ]);
    return null;
}
_s(GameLoop, "W5n0qAHWAXHbuitiq7VcnfGJNkc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = GameLoop;
var _c;
__turbopack_context__.k.register(_c, "GameLoop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/NetWorthTicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IncomeTicker",
    ()=>IncomeTicker,
    "NetWorthTicker",
    ()=>NetWorthTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function NetWorthTicker({ value, className }) {
    _s();
    const spring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(value, {
        stiffness: 60,
        damping: 20
    });
    const display = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(spring, {
        "NetWorthTicker.useTransform[display]": (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(v)
    }["NetWorthTicker.useTransform[display]"]);
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(value));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NetWorthTicker.useEffect": ()=>{
            spring.set(value);
        }
    }["NetWorthTicker.useEffect"], [
        value,
        spring
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NetWorthTicker.useEffect": ()=>{
            return display.on('change', {
                "NetWorthTicker.useEffect": (v)=>setDisplayValue(v)
            }["NetWorthTicker.useEffect"]);
        }
    }["NetWorthTicker.useEffect"], [
        display
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        children: displayValue
    }, void 0, false, {
        fileName: "[project]/components/game/NetWorthTicker.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(NetWorthTicker, "prOcwXN6f3by00K7L0NpWYMUgLE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = NetWorthTicker;
function IncomeTicker({ value, className }) {
    const isPositive = value >= 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `${isPositive ? 'text-emerald-400' : 'text-red-400'} ${className ?? ''}`,
        children: [
            isPositive ? '+' : '',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(value),
            "/s"
        ]
    }, void 0, true, {
        fileName: "[project]/components/game/NetWorthTicker.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c1 = IncomeTicker;
var _c, _c1;
__turbopack_context__.k.register(_c, "NetWorthTicker");
__turbopack_context__.k.register(_c1, "IncomeTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Overlay, {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/sheet.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Separator$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript) <export * as Separator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Separator$3e$__["Separator"].Root, {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/TopBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopBar",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$NetWorthTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/game/NetWorthTicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function TopBar() {
    _s();
    const cash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[cash]": (s)=>s.cash
    }["TopBar.useGameStore[cash]"]);
    const netWorth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[netWorth]": (s)=>s.netWorth
    }["TopBar.useGameStore[netWorth]"]);
    const netWorthHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[netWorthHistory]": (s)=>s.netWorthHistory
    }["TopBar.useGameStore[netWorthHistory]"]);
    const currentLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[currentLayer]": (s)=>s.currentLayer
    }["TopBar.useGameStore[currentLayer]"]);
    const incomePerSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[incomePerSecond]": (s)=>s.incomePerSecond
    }["TopBar.useGameStore[incomePerSecond]"]);
    const sessionStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[sessionStartTime]": (s)=>s.sessionStartTime
    }["TopBar.useGameStore[sessionStartTime]"]);
    const gameSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[gameSpeed]": (s)=>s.gameSpeed
    }["TopBar.useGameStore[gameSpeed]"]);
    const setGameSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[setGameSpeed]": (s)=>s.setGameSpeed
    }["TopBar.useGameStore[setGameSpeed]"]);
    const resetGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[resetGame]": (s)=>s.resetGame
    }["TopBar.useGameStore[resetGame]"]);
    const prestige = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[prestige]": (s)=>s.prestige
    }["TopBar.useGameStore[prestige]"]);
    const prestigeCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[prestigeCount]": (s)=>s.prestigeCount
    }["TopBar.useGameStore[prestigeCount]"]);
    const legacyMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[legacyMultiplier]": (s)=>s.legacyMultiplier
    }["TopBar.useGameStore[legacyMultiplier]"]);
    const lastSaveTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[lastSaveTime]": (s)=>s.lastSaveTime
    }["TopBar.useGameStore[lastSaveTime]"]);
    const soundEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[soundEnabled]": (s)=>s.soundEnabled
    }["TopBar.useGameStore[soundEnabled]"]);
    const toggleSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TopBar.useGameStore[toggleSound]": (s)=>s.toggleSound
    }["TopBar.useGameStore[toggleSound]"]);
    const logoClass = currentLayer >= 5 ? 'text-amber-400' : currentLayer >= 3 ? 'text-zinc-100' : 'text-white';
    const accentLine = currentLayer >= 5 ? 'from-transparent via-amber-500/50 to-transparent' : currentLayer >= 4 ? 'from-transparent via-amber-700/35 to-transparent' : currentLayer >= 3 ? 'from-transparent via-amber-900/30 to-transparent' : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative h-14 border-b border-zinc-800 bg-zinc-950 flex items-center px-4 gap-6 shrink-0 z-50",
        children: [
            accentLine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${accentLine}`
            }, void 0, false, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-lg font-bold tracking-tight transition-colors duration-1000 ${logoClass}`,
                        children: "CAPITAL"
                    }, void 0, false, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xs font-mono transition-colors duration-1000 ${currentLayer >= 5 ? 'text-amber-700' : 'text-zinc-500'}`,
                        children: currentLayer >= 5 ? 'EMPIRE' : 'IDLE EMPIRE'
                    }, void 0, false, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                orientation: "vertical",
                className: "h-6 bg-zinc-800"
            }, void 0, false, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-mono text-emerald-500 uppercase tracking-widest",
                            children: "Liquid Cash"
                        }, void 0, false, {
                            fileName: "[project]/components/game/TopBar.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$NetWorthTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetWorthTicker"], {
                            value: cash,
                            className: "text-xl font-bold font-mono text-emerald-400 leading-tight"
                        }, void 0, false, {
                            fileName: "[project]/components/game/TopBar.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/game/TopBar.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                orientation: "vertical",
                className: "h-6 bg-zinc-800"
            }, void 0, false, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-zinc-500 uppercase tracking-widest",
                                children: "Net Worth"
                            }, void 0, false, {
                                fileName: "[project]/components/game/TopBar.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$NetWorthTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetWorthTicker"], {
                                value: netWorth,
                                className: "text-sm font-bold font-mono text-zinc-300 leading-tight"
                            }, void 0, false, {
                                fileName: "[project]/components/game/TopBar.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkline, {
                        data: netWorthHistory.slice(-30).map((s)=>s.value)
                    }, void 0, false, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                orientation: "vertical",
                className: "h-6 bg-zinc-800"
            }, void 0, false, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono text-zinc-500 uppercase tracking-widest",
                        children: "Income/sec"
                    }, void 0, false, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$NetWorthTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IncomeTicker"], {
                        value: incomePerSecond,
                        className: "text-sm font-mono font-semibold leading-tight"
                    }, void 0, false, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            prestigeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                        orientation: "vertical",
                        className: "h-6 bg-zinc-800"
                    }, void 0, false, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-amber-400 uppercase tracking-widest",
                                children: "⚡ Legacy"
                            }, void 0, false, {
                                fileName: "[project]/components/game/TopBar.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono font-bold text-amber-300",
                                children: [
                                    legacyMultiplier.toFixed(2),
                                    "×"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/TopBar.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 text-zinc-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-mono",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SessionTimer, {
                            startTime: sessionStartTime
                        }, void 0, false, {
                            fileName: "[project]/components/game/TopBar.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                orientation: "vertical",
                className: "h-6 bg-zinc-800"
            }, void 0, false, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-8 w-8 text-zinc-400 hover:text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/game/TopBar.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/game/TopBar.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                        className: "bg-zinc-900 border-zinc-800 text-white w-80 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                    className: "text-white font-mono",
                                    children: "Settings"
                                }, void 0, false, {
                                    fileName: "[project]/components/game/TopBar.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/game/TopBar.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-400 font-mono uppercase tracking-wider mb-3",
                                                children: "Game Speed"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    1,
                                                    2,
                                                    5
                                                ].map((speed)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: gameSpeed === speed ? 'default' : 'outline',
                                                        size: "sm",
                                                        onClick: ()=>setGameSpeed(speed),
                                                        className: `flex-1 font-mono ${gameSpeed === speed ? 'bg-sky-600 hover:bg-sky-500 text-white border-sky-500' : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                size: 12,
                                                                className: "mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/game/TopBar.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 21
                                                            }, this),
                                                            speed,
                                                            "x"
                                                        ]
                                                    }, speed, true, {
                                                        fileName: "[project]/components/game/TopBar.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/TopBar.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-zinc-800"
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/TopBar.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-400 font-mono uppercase tracking-wider mb-2",
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-500 font-mono",
                                                children: [
                                                    "Last saved: ",
                                                    new Date(lastSaveTime).toLocaleTimeString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/TopBar.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-zinc-800"
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/TopBar.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-400 font-mono uppercase tracking-wider mb-3",
                                                children: "Sound"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: toggleSound,
                                                className: `w-full font-mono flex items-center gap-2 ${soundEnabled ? 'border-zinc-700 text-zinc-300 hover:bg-zinc-800' : 'border-zinc-700 text-zinc-500 hover:bg-zinc-800'}`,
                                                children: [
                                                    soundEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/TopBar.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 33
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/TopBar.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 57
                                                    }, this),
                                                    soundEnabled ? 'Sound On' : 'Sound Off'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/TopBar.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-zinc-800"
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/TopBar.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-400 font-mono uppercase tracking-wider mb-3",
                                                children: "Dynasty"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, this),
                                            prestigeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg bg-amber-950/30 border border-amber-800/40 p-3 mb-3 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-mono text-amber-400 font-semibold",
                                                        children: [
                                                            "⚡ Legacy Dynasty #",
                                                            prestigeCount
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/game/TopBar.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-mono text-zinc-400",
                                                        children: [
                                                            "All income ×",
                                                            legacyMultiplier.toFixed(2),
                                                            " — permanently"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/game/TopBar.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            netWorth >= 1_000_000_000_000 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                className: "border-amber-700 text-amber-400 hover:bg-amber-950 hover:text-amber-300 w-full font-mono",
                                                onClick: ()=>{
                                                    if (confirm('Start a new dynasty? All progress resets but your Legacy Bonus grows. This cannot be undone.')) {
                                                        prestige();
                                                    }
                                                },
                                                children: "⚡ Dynasty Reset (+100% permanent bonus)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 208,
                                                columnNumber: 16
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-mono text-zinc-600 text-center",
                                                children: "Reach €1T to unlock dynasty reset"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/TopBar.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-zinc-800"
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/TopBar.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-400 font-mono uppercase tracking-wider mb-3",
                                                children: "Danger Zone"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                className: "border-red-800 text-red-400 hover:bg-red-950 hover:text-red-300 w-full font-mono",
                                                onClick: ()=>{
                                                    if (confirm('Reset all progress? This cannot be undone.')) {
                                                        resetGame();
                                                    }
                                                },
                                                children: "Reset Save"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/TopBar.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/TopBar.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/TopBar.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/TopBar.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/TopBar.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game/TopBar.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(TopBar, "ejVQ0fRa12DfPKU4yLHv3EyEmhk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = TopBar;
function Sparkline({ data, width = 64, height = 26 }) {
    if (data.length < 2) return null;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pad = 2;
    const pts = data.map((v, i)=>{
        const x = pad + i / (data.length - 1) * (width - pad * 2);
        const y = pad + (1 - (v - min) / range) * (height - pad * 2);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    const isUp = data[data.length - 1] >= data[0];
    const color = isUp ? '#22c55e' : '#ef4444';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        className: "opacity-50 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: pts,
            fill: "none",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinejoin: "round",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/components/game/TopBar.tsx",
            lineNumber: 274,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/game/TopBar.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_c1 = Sparkline;
function SessionTimer({ startTime }) {
    _s1();
    const [elapsed, setElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionTimer.useEffect": ()=>{
            // Calculate initial elapsed time on mount (client-side only)
            setElapsed(Math.floor((Date.now() - startTime) / 1000));
            const interval = setInterval({
                "SessionTimer.useEffect.interval": ()=>{
                    setElapsed(Math.floor((Date.now() - startTime) / 1000));
                }
            }["SessionTimer.useEffect.interval"], 1000);
            return ({
                "SessionTimer.useEffect": ()=>clearInterval(interval)
            })["SessionTimer.useEffect"];
        }
    }["SessionTimer.useEffect"], [
        startTime
    ]);
    const h = Math.floor(elapsed / 3600);
    const m = Math.floor(elapsed % 3600 / 60);
    const s = elapsed % 60;
    if (h > 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            h,
            "h ",
            m,
            "m"
        ]
    }, void 0, true);
    if (m > 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            m,
            "m ",
            s,
            "s"
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            s,
            "s"
        ]
    }, void 0, true);
}
_s1(SessionTimer, "tfNyuhld8ejacehjDPQ7AFC2SMA=");
_c2 = SessionTimer;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TopBar");
__turbopack_context__.k.register(_c1, "Sparkline");
__turbopack_context__.k.register(_c2, "SessionTimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/LeftPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeftPanel",
    ()=>LeftPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameEngine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/assets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function LeftPanel() {
    _s();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "LeftPanel.useGameStore[handleClick]": (s)=>s.handleClick
    }["LeftPanel.useGameStore[handleClick]"]);
    const ownedAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "LeftPanel.useGameStore[ownedAssets]": (s)=>s.ownedAssets
    }["LeftPanel.useGameStore[ownedAssets]"]);
    const incomePerSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "LeftPanel.useGameStore[incomePerSecond]": (s)=>s.incomePerSecond
    }["LeftPanel.useGameStore[incomePerSecond]"]);
    const allTimeEarned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "LeftPanel.useGameStore[allTimeEarned]": (s)=>s.allTimeEarned
    }["LeftPanel.useGameStore[allTimeEarned]"]);
    const legacyMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "LeftPanel.useGameStore[legacyMultiplier]": (s)=>s.legacyMultiplier
    }["LeftPanel.useGameStore[legacyMultiplier]"]);
    const [floats, setFloats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [incomeRain, setIncomeRain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nextId, setNextId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Passive income rain floats
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeftPanel.useEffect": ()=>{
            if (incomePerSecond <= 0) return;
            const delay = 2500 + Math.random() * 1500 // 2.5–4s
            ;
            const id = setTimeout({
                "LeftPanel.useEffect.id": ()=>{
                    const floatId = Date.now();
                    const amount = incomePerSecond * (2 + Math.random() * 2) // 2–4s worth
                    ;
                    setIncomeRain({
                        "LeftPanel.useEffect.id": (prev)=>[
                                ...prev,
                                {
                                    id: floatId,
                                    value: `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(amount, true)}`,
                                    x: 5 + Math.random() * 80
                                }
                            ]
                    }["LeftPanel.useEffect.id"]);
                    setTimeout({
                        "LeftPanel.useEffect.id": ()=>setIncomeRain({
                                "LeftPanel.useEffect.id": (prev)=>prev.filter({
                                        "LeftPanel.useEffect.id": (f)=>f.id !== floatId
                                    }["LeftPanel.useEffect.id"])
                            }["LeftPanel.useEffect.id"])
                    }["LeftPanel.useEffect.id"], 2200);
                }
            }["LeftPanel.useEffect.id"], delay);
            return ({
                "LeftPanel.useEffect": ()=>clearTimeout(id)
            })["LeftPanel.useEffect"];
        }
    }["LeftPanel.useEffect"], [
        incomePerSecond,
        incomeRain.length
    ]);
    const clickValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateClickValue"])(state);
    const onMainClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LeftPanel.useCallback[onMainClick]": (e)=>{
            handleClick();
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sounds"].click();
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const id = nextId;
            setNextId({
                "LeftPanel.useCallback[onMainClick]": (n)=>n + 1
            }["LeftPanel.useCallback[onMainClick]"]);
            setFloats({
                "LeftPanel.useCallback[onMainClick]": (prev)=>[
                        ...prev,
                        {
                            id,
                            value: `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(clickValue)}`,
                            x,
                            y
                        }
                    ]
            }["LeftPanel.useCallback[onMainClick]"]);
            setTimeout({
                "LeftPanel.useCallback[onMainClick]": ()=>setFloats({
                        "LeftPanel.useCallback[onMainClick]": (prev)=>prev.filter({
                                "LeftPanel.useCallback[onMainClick]": (f)=>f.id !== id
                            }["LeftPanel.useCallback[onMainClick]"])
                    }["LeftPanel.useCallback[onMainClick]"])
            }["LeftPanel.useCallback[onMainClick]"], 900);
        }
    }["LeftPanel.useCallback[onMainClick]"], [
        handleClick,
        clickValue,
        nextId
    ]);
    // Calculate auto-clicker income with upgrades
    const autoClickerIncome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAutoClickerIncome"])(state);
    // All income sources - sorted by highest income first
    const allIncomeSources = [
        // Asset income
        ...ownedAssets.map((asset)=>{
            const def = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSET_DEFINITIONS"].find((d)=>d.id === asset.definitionId);
            const income = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAssetIncome"])(asset, legacyMultiplier, state);
            return {
                name: def?.name ?? asset.definitionId,
                icon: def?.icon ?? '?',
                income
            };
        }).filter((item)=>item.income > 0),
        // Auto-clicker income if present
        ...autoClickerIncome > 0 ? [
            {
                name: 'Auto-Clickers',
                icon: '👆',
                income: autoClickerIncome
            }
        ] : []
    ].sort((a, b)=>b.income - a.income);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex flex-col gap-4 p-4 h-full overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-mono text-zinc-500 uppercase tracking-widest",
                        children: "Click To Earn"
                    }, void 0, false, {
                        fileName: "[project]/components/game/LeftPanel.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onMainClick,
                                className: "relative w-full h-28 rounded-xl border bg-gradient-to-b active:scale-95 transition-all duration-75 flex flex-col items-center justify-center gap-1 cursor-pointer select-none group overflow-hidden border-zinc-700 from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 shadow-lg shadow-black/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100 bg-emerald-500/5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/LeftPanel.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                                        size: 28,
                                        className: "group-active:scale-90 transition-transform text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/LeftPanel.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-zinc-400 group-hover:text-zinc-300",
                                        children: [
                                            "+",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(clickValue),
                                            " per click"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/LeftPanel.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: floats.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute pointer-events-none text-sm font-bold text-emerald-400 font-mono",
                                        style: {
                                            left: f.x,
                                            top: f.y
                                        },
                                        initial: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        animate: {
                                            opacity: 0,
                                            y: -60
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.85,
                                            ease: 'easeOut'
                                        },
                                        children: f.value
                                    }, f.id, false, {
                                        fileName: "[project]/components/game/LeftPanel.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/LeftPanel.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/LeftPanel.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: incomeRain.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute pointer-events-none text-[9px] font-mono text-emerald-400/30 z-10",
                                style: {
                                    left: `${f.x}%`,
                                    top: 0
                                },
                                initial: {
                                    opacity: 0.5,
                                    y: 0
                                },
                                animate: {
                                    opacity: 0,
                                    y: 48
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 2,
                                    ease: 'easeIn'
                                },
                                children: f.value
                            }, f.id, false, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/game/LeftPanel.tsx",
                        lineNumber: 132,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-zinc-800 bg-zinc-900/50 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        size: 12,
                                        className: "text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/LeftPanel.tsx",
                                        lineNumber: 149,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-zinc-400 uppercase tracking-widest",
                                        children: "Income Sources"
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/LeftPanel.tsx",
                                        lineNumber: 150,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 148,
                                columnNumber: 9
                            }, this),
                            allIncomeSources.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-600 font-mono text-center py-2",
                                children: "No passive income yet"
                            }, void 0, false, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    allIncomeSources.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: item.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/game/LeftPanel.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-zinc-400 font-mono truncate",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/game/LeftPanel.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/game/LeftPanel.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-mono text-emerald-400 shrink-0 ml-2",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.income),
                                                        "/s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/game/LeftPanel.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/game/LeftPanel.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-zinc-800 pt-2 flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono text-zinc-400",
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/LeftPanel.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono text-white font-bold",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(incomePerSecond),
                                                    "/s"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/LeftPanel.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/LeftPanel.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/LeftPanel.tsx",
                        lineNumber: 147,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/LeftPanel.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-zinc-800 bg-zinc-900/50 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
                                size: 12,
                                className: "text-zinc-400"
                            }, void 0, false, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-zinc-400 uppercase tracking-widest",
                                children: "Stats"
                            }, void 0, false, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/LeftPanel.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatRow, {
                                label: "All-time Earned",
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(allTimeEarned),
                                valueClass: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatRow, {
                                label: "Assets Owned",
                                value: `${ownedAssets.reduce((sum, a)=>sum + a.count, 0)}`,
                                valueClass: "text-zinc-300"
                            }, void 0, false, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            legacyMultiplier > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatRow, {
                                label: "Prestige Bonus",
                                value: `x${legacyMultiplier}`,
                                valueClass: "text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/components/game/LeftPanel.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/LeftPanel.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/LeftPanel.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game/LeftPanel.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(LeftPanel, "m39Z+Z52xk4RWRo/p3k49kW+rw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = LeftPanel;
function StatRow({ label, value, valueClass }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-mono text-zinc-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/game/LeftPanel.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-xs font-mono font-semibold ${valueClass}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/components/game/LeftPanel.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game/LeftPanel.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_c1 = StatRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "LeftPanel");
__turbopack_context__.k.register(_c1, "StatRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/AssetCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssetCard",
    ()=>AssetCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sounds.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AssetCard({ definition, ownedAsset, canAfford, isLocked, lockReason, currentCost }) {
    _s();
    const cash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AssetCard.useGameStore[cash]": (s)=>s.cash
    }["AssetCard.useGameStore[cash]"]);
    const incomePerSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AssetCard.useGameStore[incomePerSecond]": (s)=>s.incomePerSecond
    }["AssetCard.useGameStore[incomePerSecond]"]);
    const purchaseAsset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AssetCard.useGameStore[purchaseAsset]": (s)=>s.purchaseAsset
    }["AssetCard.useGameStore[purchaseAsset]"]);
    const count = ownedAsset?.count ?? 0;
    const isOwned = count > 0;
    const cashNeeded = currentCost - cash;
    const timeToBuy = !canAfford && incomePerSecond > 0 ? cashNeeded / incomePerSecond : 0;
    // Calculate current effective income per unit
    let perUnitIncome = definition.baseIncomePerSecond;
    if (ownedAsset) {
        for (const upgradeId of ownedAsset.unlockedUpgrades){
            const upgrade = definition.upgrades.find((u)=>u.id === upgradeId);
            if (upgrade) {
                perUnitIncome *= upgrade.incomeMultiplier;
            }
        }
    }
    const totalIncome = perUnitIncome * count;
    // ── Locked state ──────────────────────────────────────────────────────────
    if (isLocked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 rounded-lg border border-zinc-800/60 bg-zinc-900/40 px-3.5 py-3 opacity-60 grayscale-[0.5] transition-opacity hover:opacity-80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "shrink-0 text-[18px] leading-none w-6 text-center opacity-40",
                    children: definition.icon
                }, void 0, false, {
                    fileName: "[project]/components/game/AssetCard.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 mb-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    size: 11,
                                    className: "text-zinc-500 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/components/game/AssetCard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] font-semibold text-zinc-400 leading-tight truncate",
                                    children: definition.name
                                }, void 0, false, {
                                    fileName: "[project]/components/game/AssetCard.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/game/AssetCard.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-zinc-500 leading-tight truncate",
                            children: lockReason ?? 'Locked'
                        }, void 0, false, {
                            fileName: "[project]/components/game/AssetCard.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/game/AssetCard.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "shrink-0 font-mono text-[10px] text-zinc-500",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(definition.baseCost)
                }, void 0, false, {
                    fileName: "[project]/components/game/AssetCard.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/game/AssetCard.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    // ── Owned / available state ────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-lg border px-3.5 py-3 flex flex-col gap-3 transition-colors ${isOwned ? 'border-zinc-700/80 bg-zinc-900/70' : 'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700/60'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 text-[18px] leading-none w-6 text-center",
                        children: definition.icon
                    }, void 0, false, {
                        fileName: "[project]/components/game/AssetCard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-1.5 leading-none mb-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[13px] font-semibold text-white leading-tight truncate",
                                    children: definition.name
                                }, void 0, false, {
                                    fileName: "[project]/components/game/AssetCard.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/game/AssetCard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-zinc-600 leading-tight truncate",
                                children: definition.description
                            }, void 0, false, {
                                fileName: "[project]/components/game/AssetCard.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/AssetCard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shrink-0 rounded-md border font-bold font-mono tabular-nums text-sm leading-none
          flex items-center justify-center min-w-[32px] h-8 px-2 ${count > 0 ? 'border-emerald-600/50 bg-emerald-950/30 text-emerald-400' : 'border-zinc-800/60 bg-transparent text-zinc-700'}`,
                        children: count
                    }, void 0, false, {
                        fileName: "[project]/components/game/AssetCard.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/AssetCard.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 text-[11px] font-mono leading-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        size: 10,
                        className: isOwned ? 'text-emerald-500' : 'text-zinc-600'
                    }, void 0, false, {
                        fileName: "[project]/components/game/AssetCard.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    isOwned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-400 font-semibold",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalIncome),
                                    "/s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/AssetCard.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-zinc-700",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/game/AssetCard.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-zinc-500",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(perUnitIncome),
                                    "/s each"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/AssetCard.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-zinc-500",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(perUnitIncome),
                            "/s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/AssetCard.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/AssetCard.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: !canAfford,
                        onClick: ()=>{
                            purchaseAsset(definition.id, 1);
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sounds"].purchase();
                        },
                        className: `w-full h-8 rounded text-[11px] font-mono font-semibold tracking-wide transition-colors ${canAfford ? 'bg-emerald-700 hover:bg-emerald-600 text-white cursor-pointer' : 'bg-zinc-800/60 text-zinc-600 cursor-not-allowed'}`,
                        children: [
                            "Buy 1 — ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(currentCost)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/AssetCard.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    !canAfford && timeToBuy > 0 && timeToBuy < 600 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] font-mono text-zinc-600 text-right",
                        children: [
                            "~",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(timeToBuy),
                            " away"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/AssetCard.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/AssetCard.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game/AssetCard.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(AssetCard, "bf9C7ry0mBAjaTaCy1JwjugRHls=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = AssetCard;
var _c;
__turbopack_context__.k.register(_c, "AssetCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ScrollArea$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript) <export * as ScrollArea>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ScrollArea$3e$__["ScrollArea"].Root, {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ScrollArea$3e$__["ScrollArea"].Viewport, {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ScrollArea$3e$__["ScrollArea"].Corner, {}, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ScrollArea$3e$__["ScrollArea"].ScrollAreaScrollbar, {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ScrollArea$3e$__["ScrollArea"].ScrollAreaThumb, {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/CenterPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CenterPanel",
    ()=>CenterPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/assets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$AssetCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/game/AssetCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/milestones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript) <export * as Tooltip>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function CenterPanel() {
    _s();
    const cash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CenterPanel.useGameStore[cash]": (s)=>s.cash
    }["CenterPanel.useGameStore[cash]"]);
    const netWorth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CenterPanel.useGameStore[netWorth]": (s)=>s.netWorth
    }["CenterPanel.useGameStore[netWorth]"]);
    const ownedAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CenterPanel.useGameStore[ownedAssets]": (s)=>s.ownedAssets
    }["CenterPanel.useGameStore[ownedAssets]"]);
    const currentLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CenterPanel.useGameStore[currentLayer]": (s)=>s.currentLayer
    }["CenterPanel.useGameStore[currentLayer]"]);
    const sortedAssets = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSET_DEFINITIONS"]
    ].sort((a, b)=>a.baseCost - b.baseCost);
    const getAssetStatus = (def)=>{
        const owned = ownedAssets.find((a)=>a.definitionId === def.id);
        const req = def.unlockRequirement;
        if (def.layer > currentLayer) {
            const m = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONES"].find((m)=>m.layer === def.layer);
            return {
                owned,
                isLocked: true,
                lockReason: `Unlocks at ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(m?.threshold ?? 0)} net worth`
            };
        }
        if (req.netWorth && netWorth < req.netWorth) {
            return {
                owned,
                isLocked: true,
                lockReason: `Requires ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(req.netWorth)} net worth`
            };
        }
        return {
            owned,
            isLocked: false
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col h-full overflow-hidden bg-zinc-950 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Provider, {
            delayDuration: 300,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shrink-0 px-4 pt-4 pb-3 border-b border-zinc-800 relative z-10 bg-zinc-950/80 backdrop-blur-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-mono text-zinc-300 font-semibold tracking-wide uppercase",
                        children: "Store & Upgrades"
                    }, void 0, false, {
                        fileName: "[project]/components/game/CenterPanel.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/game/CenterPanel.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "flex-1 overflow-hidden relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 px-4 py-4 pb-6",
                        children: sortedAssets.map((def)=>{
                            const { owned, isLocked, lockReason } = getAssetStatus(def);
                            // Recalculate dynamic cost
                            const currentCount = owned?.count ?? 0;
                            const currentCost = Math.ceil(def.baseCost * Math.pow(1.15, currentCount));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$AssetCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetCard"], {
                                definition: def,
                                ownedAsset: owned,
                                canAfford: cash >= currentCost,
                                isLocked: isLocked,
                                lockReason: lockReason,
                                currentCost: currentCost
                            }, def.id, false, {
                                fileName: "[project]/components/game/CenterPanel.tsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/game/CenterPanel.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/game/CenterPanel.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/game/CenterPanel.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/game/CenterPanel.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(CenterPanel, "vXTHIXyUaYn0p19P7RF3QPXhGPY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = CenterPanel;
var _c;
__turbopack_context__.k.register(_c, "CenterPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/AutoClickerPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoClickerPanel",
    ()=>AutoClickerPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$autoClickerUpgrades$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/autoClickerUpgrades.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Hardcoded costs/benefits for auto-clickers
const AUTO_CLICKERS = [
    {
        id: 'intern',
        name: 'Unpaid Intern',
        baseCost: 500,
        clicksPerSecond: 1,
        icon: '👨‍🎓'
    },
    {
        id: 'analyst',
        name: 'Junior Analyst',
        baseCost: 5000,
        clicksPerSecond: 5,
        icon: '👔'
    },
    {
        id: 'quant',
        name: 'Quant Developer',
        baseCost: 50000,
        clicksPerSecond: 25,
        icon: '🤓'
    }
];
function AutoClickerPanel() {
    _s();
    const cash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AutoClickerPanel.useGameStore[cash]": (s)=>s.cash
    }["AutoClickerPanel.useGameStore[cash]"]);
    const autoClickers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AutoClickerPanel.useGameStore[autoClickers]": (s)=>s.autoClickers || {}
    }["AutoClickerPanel.useGameStore[autoClickers]"]);
    const autoClickerUpgrades = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AutoClickerPanel.useGameStore[autoClickerUpgrades]": (s)=>s.autoClickerUpgrades || []
    }["AutoClickerPanel.useGameStore[autoClickerUpgrades]"]);
    const purchaseAutoClicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AutoClickerPanel.useGameStore[purchaseAutoClicker]": (s)=>s.purchaseAutoClicker
    }["AutoClickerPanel.useGameStore[purchaseAutoClicker]"]);
    const clickPower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AutoClickerPanel.useGameStore[clickPower]": (s)=>s.clickPower
    }["AutoClickerPanel.useGameStore[clickPower]"]);
    const legacyMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AutoClickerPanel.useGameStore[legacyMultiplier]": (s)=>s.legacyMultiplier
    }["AutoClickerPanel.useGameStore[legacyMultiplier]"]);
    const [floats, setFloats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const floatIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Calculate total auto clicks per second with speed multipliers
    let totalAutoClicks = 0;
    let totalAutoIncome = 0;
    for (const clicker of AUTO_CLICKERS){
        const count = autoClickers[clicker.id] || 0;
        if (count === 0) continue;
        const { speedMultiplier, powerMultiplier } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$autoClickerUpgrades$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAutoClickerMultipliers"])(clicker.id, autoClickerUpgrades, autoClickers);
        const effectiveClicksPerSecond = clicker.clicksPerSecond * speedMultiplier;
        const valuePerClick = 1 * clickPower * powerMultiplier * legacyMultiplier;
        totalAutoClicks += count * effectiveClicksPerSecond;
        totalAutoIncome += count * effectiveClicksPerSecond * valuePerClick;
    }
    // Average value per click for display
    const avgValuePerClick = totalAutoClicks > 0 ? totalAutoIncome / totalAutoClicks : 0;
    const autoIncomeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(totalAutoIncome);
    autoIncomeRef.current = totalAutoIncome;
    // Track auto-click income with floating animations - throttled for performance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutoClickerPanel.useEffect": ()=>{
            if (totalAutoClicks === 0) return;
            // Only show floating numbers occasionally regardless of click speed (max 2/sec)
            const intervalMs = Math.max(500, 1000 / Math.min(totalAutoClicks, 2));
            const interval = setInterval({
                "AutoClickerPanel.useEffect.interval": ()=>{
                    // Show accumulated value instead of per-click
                    const accumulatedValue = autoIncomeRef.current * (intervalMs / 1000);
                    const id = floatIdRef.current++;
                    const xPos = 15 + Math.random() * 60 // Random position 15-75%
                    ;
                    setFloats({
                        "AutoClickerPanel.useEffect.interval": (prev)=>[
                                ...prev,
                                {
                                    id,
                                    value: `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(accumulatedValue, true)}`,
                                    x: xPos
                                }
                            ]
                    }["AutoClickerPanel.useEffect.interval"]);
                    setTimeout({
                        "AutoClickerPanel.useEffect.interval": ()=>{
                            setFloats({
                                "AutoClickerPanel.useEffect.interval": (prev)=>prev.filter({
                                        "AutoClickerPanel.useEffect.interval": (f)=>f.id !== id
                                    }["AutoClickerPanel.useEffect.interval"])
                            }["AutoClickerPanel.useEffect.interval"]);
                        }
                    }["AutoClickerPanel.useEffect.interval"], 1000);
                }
            }["AutoClickerPanel.useEffect.interval"], intervalMs);
            return ({
                "AutoClickerPanel.useEffect": ()=>clearInterval(interval)
            })["AutoClickerPanel.useEffect"];
        }
    }["AutoClickerPanel.useEffect"], [
        totalAutoClicks
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: floats.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute pointer-events-none text-[10px] font-bold text-sky-400 font-mono z-10",
                        style: {
                            left: `${f.x}%`,
                            top: 8
                        },
                        initial: {
                            opacity: 0,
                            y: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            y: -35,
                            scale: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.9,
                            ease: 'easeOut'
                        },
                        children: f.value
                    }, f.id, false, {
                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                        size: 12,
                        className: "text-sky-400"
                    }, void 0, false, {
                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono text-zinc-400 uppercase tracking-widest",
                        children: "Team (Auto-Clickers)"
                    }, void 0, false, {
                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3 bg-zinc-950/50 rounded p-2 border border-zinc-800/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                                size: 12,
                                className: "text-sky-400"
                            }, void 0, false, {
                                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono text-zinc-400",
                                children: "Auto Income:"
                            }, void 0, false, {
                                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-mono font-bold text-sky-400",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalAutoIncome),
                            "/s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: AUTO_CLICKERS.map((clicker)=>{
                    const count = autoClickers[clicker.id] || 0;
                    // Calculate multipliers
                    const { speedMultiplier, powerMultiplier, costScalingMultiplier } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$autoClickerUpgrades$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAutoClickerMultipliers"])(clicker.id, autoClickerUpgrades, autoClickers);
                    // Calculate cost with efficiency upgrades
                    const scalingFactor = 1.15 * costScalingMultiplier;
                    const cost = Math.ceil(clicker.baseCost * Math.pow(scalingFactor, count));
                    const canAfford = cash >= cost;
                    const isActive = count > 0;
                    // Effective stats
                    const effectiveClicksPerSecond = clicker.clicksPerSecond * speedMultiplier;
                    const valuePerClick = 1 * clickPower * powerMultiplier * legacyMultiplier;
                    const hasSpeedUpgrades = speedMultiplier > 1;
                    const hasPowerUpgrades = powerMultiplier > 1;
                    const hasEfficiencyUpgrades = costScalingMultiplier < 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: !canAfford,
                        onClick: ()=>purchaseAutoClicker?.(clicker.id, cost),
                        className: `w-full flex items-center gap-2 p-2 rounded border text-left transition-colors relative overflow-hidden ${canAfford ? 'border-sky-500/30 bg-sky-950/20 hover:bg-sky-900/30 cursor-pointer' : 'border-zinc-800/50 bg-zinc-900/20 opacity-60 cursor-not-allowed'}`,
                        children: [
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 bg-sky-500/5",
                                animate: {
                                    opacity: [
                                        0.02,
                                        0.08,
                                        0.02
                                    ]
                                },
                                transition: {
                                    duration: 2 / effectiveClicksPerSecond,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                lineNumber: 176,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "text-lg w-6 text-center relative z-10",
                                animate: isActive ? {
                                    y: [
                                        0,
                                        -2,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.1,
                                        1
                                    ]
                                } : {},
                                transition: isActive ? {
                                    duration: 1.5 / Math.max(1, effectiveClicksPerSecond * 0.3),
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: Math.random() * 0.5 // Random offset so they don't sync
                                } : {},
                                children: clicker.icon
                            }, void 0, false, {
                                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-baseline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[11px] font-bold truncate ${canAfford ? 'text-zinc-200' : 'text-zinc-500'}`,
                                                children: clicker.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    hasSpeedUpgrades && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
                                                        title: "Speed upgraded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            size: 8,
                                                            className: "inline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 23
                                                    }, this),
                                                    hasPowerUpgrades && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] px-1 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30",
                                                        title: "Power upgraded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                            size: 8,
                                                            className: "inline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 23
                                                    }, this),
                                                    hasEfficiencyUpgrades && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] px-1 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30",
                                                        title: "Efficiency upgraded",
                                                        children: "%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono text-zinc-500 shrink-0 bg-zinc-950 px-1 rounded border border-zinc-800",
                                                        children: count
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono text-sky-400",
                                                        children: [
                                                            "+",
                                                            effectiveClicksPerSecond.toFixed(1),
                                                            " clicks/s"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this),
                                                    speedMultiplier > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] text-emerald-400",
                                                        children: [
                                                            "(×",
                                                            speedMultiplier.toFixed(1),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] font-mono ${canAfford ? 'text-emerald-400' : 'text-red-400/70'}`,
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(cost),
                                                    costScalingMultiplier < 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] text-purple-400 ml-1",
                                                        children: [
                                                            "(-",
                                                            Math.round((1 - costScalingMultiplier) * 100),
                                                            "%)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    isActive && powerMultiplier > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[8px] text-amber-400/70 mt-0.5",
                                        children: [
                                            "€",
                                            valuePerClick.toFixed(2),
                                            "/click (×",
                                            powerMultiplier.toFixed(1),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this)
                        ]
                    }, clicker.id, true, {
                        fileName: "[project]/components/game/AutoClickerPanel.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/game/AutoClickerPanel.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game/AutoClickerPanel.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(AutoClickerPanel, "cpqKT0wGRVIbfahC2xq2lnHMYYE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = AutoClickerPanel;
var _c;
__turbopack_context__.k.register(_c, "AutoClickerPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/PrestigePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrestigePanel",
    ()=>PrestigePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PrestigePanel() {
    _s();
    const prestigeCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "PrestigePanel.useGameStore[prestigeCount]": (s)=>s.prestigeCount
    }["PrestigePanel.useGameStore[prestigeCount]"]);
    const legacyMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "PrestigePanel.useGameStore[legacyMultiplier]": (s)=>s.legacyMultiplier
    }["PrestigePanel.useGameStore[legacyMultiplier]"]);
    const netWorth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "PrestigePanel.useGameStore[netWorth]": (s)=>s.netWorth
    }["PrestigePanel.useGameStore[netWorth]"]);
    const prestige = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "PrestigePanel.useGameStore[prestige]": (s)=>s.prestige
    }["PrestigePanel.useGameStore[prestige]"]);
    // Requirement to prestige (1 Trillion)
    const PRESTIGE_REQ = 1_000_000_000_000;
    const canPrestige = netWorth >= PRESTIGE_REQ;
    // Only show if they've prestiges or are close (100 Billion+)
    if (prestigeCount === 0 && netWorth < 100_000_000_000) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-amber-900/50 bg-amber-950/10 p-3 mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                        size: 12,
                        className: "text-amber-400"
                    }, void 0, false, {
                        fileName: "[project]/components/game/PrestigePanel.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono text-amber-500 uppercase tracking-widest",
                        children: "Dynasty"
                    }, void 0, false, {
                        fileName: "[project]/components/game/PrestigePanel.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/PrestigePanel.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            prestigeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center bg-zinc-950/50 rounded px-2 py-1.5 border border-amber-900/30 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-mono text-zinc-400",
                        children: "Current Bonus:"
                    }, void 0, false, {
                        fileName: "[project]/components/game/PrestigePanel.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-mono font-bold text-amber-400",
                        children: [
                            "+",
                            ((legacyMultiplier - 1) * 100).toFixed(0),
                            "% Income"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/PrestigePanel.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/PrestigePanel.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: !canPrestige,
                        onClick: ()=>{
                            if (confirm('Are you sure you want to end this dynasty? You will lose all assets, cash, and upgrades, but gain a permanent +100% income multiplier for all future playthroughs.')) {
                                prestige();
                            }
                        },
                        className: `w-full flex items-center justify-center gap-1.5 p-2 rounded text-[11px] font-mono font-bold transition-colors ${canPrestige ? 'bg-amber-600 hover:bg-amber-500 text-zinc-950 cursor-pointer shadow-[0_0_15px_rgba(217,119,6,0.3)]' : 'bg-zinc-900 border border-zinc-800 text-zinc-500 cursor-not-allowed'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                size: 12,
                                className: canPrestige ? 'text-zinc-900' : 'text-zinc-600'
                            }, void 0, false, {
                                fileName: "[project]/components/game/PrestigePanel.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            "Ascend to New Dynasty"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/PrestigePanel.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    !canPrestige && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[9px] font-mono text-zinc-500 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Progress to Ascension"
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/PrestigePanel.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            Math.min(100, Math.round(netWorth / PRESTIGE_REQ * 100)),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/PrestigePanel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/PrestigePanel.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 bg-zinc-800 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-amber-500/50 transition-all duration-1000",
                                    style: {
                                        width: `${Math.min(100, netWorth / PRESTIGE_REQ * 100)}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/game/PrestigePanel.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/game/PrestigePanel.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-mono text-zinc-600 text-center mt-1",
                                children: [
                                    "Requires ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(PRESTIGE_REQ),
                                    " Net Worth"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/PrestigePanel.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/PrestigePanel.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game/PrestigePanel.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game/PrestigePanel.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(PrestigePanel, "bi5vQD8lxDHjEURmH8lTSr0+Rc0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = PrestigePanel;
var _c;
__turbopack_context__.k.register(_c, "PrestigePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/RightPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RightPanel",
    ()=>RightPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/milestones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/assets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$autoClickerUpgrades$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/autoClickerUpgrades.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$AutoClickerPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/game/AutoClickerPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$PrestigePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/game/PrestigePanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function RightPanel() {
    _s();
    const milestonesReached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "RightPanel.useGameStore[milestonesReached]": (s)=>s.milestonesReached
    }["RightPanel.useGameStore[milestonesReached]"]);
    const netWorth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "RightPanel.useGameStore[netWorth]": (s)=>s.netWorth
    }["RightPanel.useGameStore[netWorth]"]);
    const ownedAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "RightPanel.useGameStore[ownedAssets]": (s)=>s.ownedAssets
    }["RightPanel.useGameStore[ownedAssets]"]);
    const cash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "RightPanel.useGameStore[cash]": (s)=>s.cash
    }["RightPanel.useGameStore[cash]"]);
    const purchaseUpgrade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "RightPanel.useGameStore[purchaseUpgrade]": (s)=>s.purchaseUpgrade
    }["RightPanel.useGameStore[purchaseUpgrade]"]);
    const autoClickers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "RightPanel.useGameStore[autoClickers]": (s)=>s.autoClickers || {}
    }["RightPanel.useGameStore[autoClickers]"]);
    const autoClickerUpgrades = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "RightPanel.useGameStore[autoClickerUpgrades]": (s)=>s.autoClickerUpgrades || []
    }["RightPanel.useGameStore[autoClickerUpgrades]"]);
    const purchaseAutoClickerUpgrade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "RightPanel.useGameStore[purchaseAutoClickerUpgrade]": (s)=>s.purchaseAutoClickerUpgrade
    }["RightPanel.useGameStore[purchaseAutoClickerUpgrade]"]);
    // Find next milestone
    const nextMilestoneIdx = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONES"].findIndex((m)=>!milestonesReached.includes(m.id));
    // Get asset upgrades
    const assetUpgrades = [];
    ownedAssets.forEach((owned)=>{
        const def = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSET_DEFINITIONS"].find((d)=>d.id === owned.definitionId);
        if (def) {
            def.upgrades.forEach((upg)=>{
                if (!owned.unlockedUpgrades.includes(upg.id)) {
                    assetUpgrades.push({
                        id: upg.id,
                        type: 'asset',
                        assetId: def.id,
                        name: upg.name,
                        desc: upg.description,
                        cost: upg.cost,
                        icon: def.icon,
                        multiplier: upg.incomeMultiplier
                    });
                }
            });
        }
    });
    // Get available auto-clicker upgrades
    const ownedTypes = Object.entries(autoClickers).filter(([_, count])=>count > 0).map(([id])=>id);
    const availableAutoClickerUpgrades = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$autoClickerUpgrades$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTO_CLICKER_UPGRADES"].filter((upgrade)=>{
        // Already purchased
        if (autoClickerUpgrades.includes(upgrade.id)) return false;
        // Check requirements
        if (upgrade.requiresUpgrade && !autoClickerUpgrades.includes(upgrade.requiresUpgrade)) {
            return false;
        }
        // Check if targeted auto-clicker is owned
        if (upgrade.targetAutoClickerId && !ownedTypes.includes(upgrade.targetAutoClickerId)) {
            return false;
        }
        // For synergies, need at least 2 different types
        if (upgrade.type === 'synergy' && ownedTypes.length < 2) {
            return false;
        }
        return true;
    }).map((upgrade)=>({
            id: upgrade.id,
            type: 'autoClicker',
            name: upgrade.name,
            desc: upgrade.description,
            cost: upgrade.cost,
            icon: upgrade.icon,
            effect: upgrade.type === 'speed' ? 'Speed' : upgrade.type === 'power' ? 'Power' : upgrade.type === 'synergy' ? 'Synergy' : 'Efficiency',
            effectValue: upgrade.effect.speedMultiplier || upgrade.effect.powerMultiplier || upgrade.effect.synergyBonus || upgrade.effect.costScalingMultiplier || 1
        }));
    // Combine and sort all upgrades by cost
    const allUpgrades = [
        ...assetUpgrades,
        ...availableAutoClickerUpgrades
    ].sort((a, b)=>a.cost - b.cost);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex flex-col h-full overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full gap-3 p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$PrestigePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrestigePanel"], {}, void 0, false, {
                    fileName: "[project]/components/game/RightPanel.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2f$AutoClickerPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoClickerPanel"], {}, void 0, false, {
                    fileName: "[project]/components/game/RightPanel.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg border border-zinc-800 bg-zinc-900/50 flex flex-col min-h-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 shrink-0 border-b border-zinc-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-zinc-500 uppercase tracking-widest block",
                                children: "Available Upgrades"
                            }, void 0, false, {
                                fileName: "[project]/components/game/RightPanel.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/game/RightPanel.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "flex-1 min-h-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 space-y-2",
                                children: allUpgrades.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-zinc-600 font-mono text-center py-4",
                                    children: "No upgrades available. Keep building."
                                }, void 0, false, {
                                    fileName: "[project]/components/game/RightPanel.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this) : allUpgrades.map((upg)=>{
                                    const canAfford = cash >= upg.cost;
                                    const isAssetUpgrade = upg.type === 'asset';
                                    const isAutoClickerUpgrade = upg.type === 'autoClicker';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: !canAfford,
                                        onClick: ()=>{
                                            if (isAssetUpgrade) {
                                                purchaseUpgrade(upg.assetId, upg.id);
                                            } else {
                                                purchaseAutoClickerUpgrade(upg.id, upg.cost);
                                            }
                                        },
                                        className: `w-full p-2 rounded-md border text-left transition-colors ${canAfford ? isAutoClickerUpgrade ? 'border-sky-500/50 bg-sky-950/20 hover:bg-sky-900/40 cursor-pointer' : 'border-amber-500/50 bg-amber-950/20 hover:bg-amber-900/40 cursor-pointer' : 'border-zinc-800/50 bg-zinc-900/20 opacity-60 cursor-not-allowed'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg leading-none shrink-0",
                                                        children: upg.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/RightPanel.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs font-bold font-mono truncate flex-1 ${canAfford ? isAutoClickerUpgrade ? 'text-sky-400' : 'text-amber-400' : 'text-zinc-500'}`,
                                                        children: upg.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/RightPanel.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono text-zinc-400 shrink-0",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(upg.cost)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/RightPanel.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/RightPanel.tsx",
                                                lineNumber: 149,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2 mt-1.5 pl-7",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-zinc-500 leading-tight line-clamp-2 flex-1",
                                                        children: upg.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/RightPanel.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `shrink-0 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded whitespace-nowrap ${isAutoClickerUpgrade ? 'text-sky-500 bg-sky-950/40' : 'text-emerald-500 bg-emerald-950/40'}`,
                                                        children: isAssetUpgrade ? `${upg.multiplier}x` : upg.effect
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/RightPanel.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/RightPanel.tsx",
                                                lineNumber: 160,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, upg.id, true, {
                                        fileName: "[project]/components/game/RightPanel.tsx",
                                        lineNumber: 130,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/game/RightPanel.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/game/RightPanel.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/game/RightPanel.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                nextMilestoneIdx !== -1 && (()=>{
                    const next = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONES"][nextMilestoneIdx];
                    const prev = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONES"][nextMilestoneIdx - 1];
                    const base = prev?.threshold ?? 0;
                    const pct = Math.min(100, (netWorth - base) / (next.threshold - base) * 100);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2",
                                children: "Next Milestone"
                            }, void 0, false, {
                                fileName: "[project]/components/game/RightPanel.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-[10px] font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white truncate pr-2",
                                                children: next.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/game/RightPanel.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sky-400 shrink-0",
                                                children: [
                                                    Math.round(pct),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/RightPanel.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/RightPanel.tsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 bg-zinc-800 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-sky-500 rounded-full transition-all duration-500",
                                            style: {
                                                width: `${pct}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/game/RightPanel.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/RightPanel.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-mono text-zinc-600 text-right",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(next.threshold)
                                    }, void 0, false, {
                                        fileName: "[project]/components/game/RightPanel.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game/RightPanel.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/RightPanel.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this);
                })()
            ]
        }, void 0, true, {
            fileName: "[project]/components/game/RightPanel.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/game/RightPanel.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(RightPanel, "31afW3oAccOP36H/+Ptisf3R5zw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = RightPanel;
var _c;
__turbopack_context__.k.register(_c, "RightPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/MilestoneOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MilestoneOverlay",
    ()=>MilestoneOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/milestones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function MilestoneOverlay() {
    _s();
    const pendingMilestone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "MilestoneOverlay.useGameStore[pendingMilestone]": (s)=>s.pendingMilestone
    }["MilestoneOverlay.useGameStore[pendingMilestone]"]);
    const dismissMilestone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "MilestoneOverlay.useGameStore[dismissMilestone]": (s)=>s.dismissMilestone
    }["MilestoneOverlay.useGameStore[dismissMilestone]"]);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const milestone = pendingMilestone ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONES"].find((m)=>m.id === pendingMilestone) : null;
    // Simple canvas confetti
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MilestoneOverlay.useEffect": ()=>{
            if (!milestone || !canvasRef.current) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const particles = [];
            const colors = [
                '#10b981',
                '#34d399',
                '#6ee7b7',
                '#fbbf24',
                '#f59e0b',
                '#fff'
            ];
            for(let i = 0; i < 120; i++){
                particles.push({
                    x: Math.random() * canvas.width,
                    y: -20,
                    vx: (Math.random() - 0.5) * 4,
                    vy: Math.random() * 4 + 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 8 + 4,
                    rotation: Math.random() * 360,
                    rotSpeed: (Math.random() - 0.5) * 10
                });
            }
            let animId;
            let start = null;
            const animate = {
                "MilestoneOverlay.useEffect.animate": (t)=>{
                    if (!start) start = t;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    for (const p of particles){
                        p.x += p.vx;
                        p.y += p.vy;
                        p.vy += 0.1;
                        p.rotation += p.rotSpeed;
                        ctx.save();
                        ctx.translate(p.x, p.y);
                        ctx.rotate(p.rotation * Math.PI / 180);
                        ctx.fillStyle = p.color;
                        ctx.globalAlpha = Math.max(0, 1 - (t - start) / 3000);
                        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
                        ctx.restore();
                    }
                    if (t - start < 3500) animId = requestAnimationFrame(animate);
                }
            }["MilestoneOverlay.useEffect.animate"];
            animId = requestAnimationFrame(animate);
            return ({
                "MilestoneOverlay.useEffect": ()=>cancelAnimationFrame(animId)
            })["MilestoneOverlay.useEffect"];
        }
    }["MilestoneOverlay.useEffect"], [
        milestone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: milestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "absolute inset-0 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/components/game/MilestoneOverlay.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "relative z-10 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl",
                    initial: {
                        scale: 0.8,
                        y: 40
                    },
                    animate: {
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        scale: 0.9,
                        opacity: 0
                    },
                    transition: {
                        type: 'spring',
                        stiffness: 200,
                        damping: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🏆"
                        }, void 0, false, {
                            fileName: "[project]/components/game/MilestoneOverlay.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-2",
                            children: "Milestone Reached"
                        }, void 0, false, {
                            fileName: "[project]/components/game/MilestoneOverlay.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-white mb-1",
                            children: milestone.title
                        }, void 0, false, {
                            fileName: "[project]/components/game/MilestoneOverlay.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-zinc-400 mb-1",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(milestone.threshold),
                                " net worth"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/game/MilestoneOverlay.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-zinc-300 mb-4",
                            children: milestone.description
                        }, void 0, false, {
                            fileName: "[project]/components/game/MilestoneOverlay.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-emerald-950/40 border border-emerald-800 p-3 mb-6 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-mono text-emerald-500 uppercase tracking-wider mb-1",
                                    children: "Unlocked"
                                }, void 0, false, {
                                    fileName: "[project]/components/game/MilestoneOverlay.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-emerald-300",
                                    children: milestone.unlocks
                                }, void 0, false, {
                                    fileName: "[project]/components/game/MilestoneOverlay.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/game/MilestoneOverlay.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: dismissMilestone,
                            className: "w-full bg-sky-600 hover:bg-sky-500 text-white font-mono text-sm",
                            children: "Continue Building"
                        }, void 0, false, {
                            fileName: "[project]/components/game/MilestoneOverlay.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/game/MilestoneOverlay.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/game/MilestoneOverlay.tsx",
            lineNumber: 81,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/game/MilestoneOverlay.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(MilestoneOverlay, "HxkBM6Lrt+qrEZydA4zB7SDfCwg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = MilestoneOverlay;
var _c;
__turbopack_context__.k.register(_c, "MilestoneOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/LayerTheme.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayerTheme",
    ()=>LayerTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LayerTheme() {
    _s();
    const currentLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "LayerTheme.useGameStore[currentLayer]": (s)=>s.currentLayer
    }["LayerTheme.useGameStore[currentLayer]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayerTheme.useEffect": ()=>{
            document.documentElement.setAttribute('data-layer', String(currentLayer));
            return ({
                "LayerTheme.useEffect": ()=>{
                    document.documentElement.removeAttribute('data-layer');
                }
            })["LayerTheme.useEffect"];
        }
    }["LayerTheme.useEffect"], [
        currentLayer
    ]);
    return null;
}
_s(LayerTheme, "eO2u6SZ7cZmp+miQkb2Bp/E5H4o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = LayerTheme;
var _c;
__turbopack_context__.k.register(_c, "LayerTheme");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/GoldenCookie.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoldenCookie",
    ()=>GoldenCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// How often can a golden cookie spawn? (min/max in ms)
const SPAWN_MIN_DELAY = 60000 * 2 // 2 minutes
;
const SPAWN_MAX_DELAY = 60000 * 6 // 6 minutes
;
// How long does the cookie stay on screen?
const LIFESPAN = 12000;
function GoldenCookie() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [floatingText, setFloatingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const incomePerSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "GoldenCookie.useGameStore[incomePerSecond]": (s)=>s.incomePerSecond
    }["GoldenCookie.useGameStore[incomePerSecond]"]);
    const spawnCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GoldenCookie.useCallback[spawnCookie]": ()=>{
            if (active || incomePerSecond === 0) return; // Don't spawn if already active or no income
            // Position between 10% and 90% of screen width/height to avoid edges
            const x = 10 + Math.random() * 80;
            const y = 10 + Math.random() * 80;
            setPosition({
                x,
                y
            });
            setActive(true);
            // Auto-despawn
            setTimeout({
                "GoldenCookie.useCallback[spawnCookie]": ()=>{
                    setActive(false);
                }
            }["GoldenCookie.useCallback[spawnCookie]"], LIFESPAN);
        }
    }["GoldenCookie.useCallback[spawnCookie]"], [
        active,
        incomePerSecond
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoldenCookie.useEffect": ()=>{
            let timeoutId;
            const scheduleNext = {
                "GoldenCookie.useEffect.scheduleNext": ()=>{
                    const delay = SPAWN_MIN_DELAY + Math.random() * (SPAWN_MAX_DELAY - SPAWN_MIN_DELAY);
                    timeoutId = setTimeout({
                        "GoldenCookie.useEffect.scheduleNext": ()=>{
                            spawnCookie();
                            scheduleNext();
                        }
                    }["GoldenCookie.useEffect.scheduleNext"], delay);
                }
            }["GoldenCookie.useEffect.scheduleNext"];
            scheduleNext();
            return ({
                "GoldenCookie.useEffect": ()=>clearTimeout(timeoutId)
            })["GoldenCookie.useEffect"];
        }
    }["GoldenCookie.useEffect"], [
        spawnCookie
    ]);
    const handleClick = (e)=>{
        if (!active) return;
        setActive(false);
        const x = e.clientX;
        const y = e.clientY;
        // Calculate reward (e.g., 15 minutes of production or massive flat amount)
        const cpsReward = incomePerSecond * 60 * 15 // 15 mins of production
        ;
        const baseReward = 1000 // Fallback if CPS is low
        ;
        const reward = Math.max(cpsReward, baseReward);
        // Play sound
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sounds"].milestone(); // You can add a dedicated sound later
        } catch  {}
        // Apply reward
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"].setState((s)=>({
                cash: s.cash + reward,
                allTimeEarned: s.allTimeEarned + reward
            }));
        // Show floating text
        const newId = Date.now();
        setFloatingText((prev)=>[
                ...prev,
                {
                    id: newId,
                    text: `+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(reward)}!`,
                    x,
                    y
                }
            ]);
        setTimeout(()=>{
            setFloatingText((prev)=>prev.filter((f)=>f.id !== newId));
        }, 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    initial: {
                        scale: 0,
                        opacity: 0,
                        rotate: -180
                    },
                    animate: {
                        scale: 1,
                        opacity: 1,
                        rotate: 0
                    },
                    exit: {
                        scale: 0,
                        opacity: 0,
                        rotate: 180
                    },
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: 0.9
                    },
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                    },
                    onClick: handleClick,
                    className: "fixed z-[100] cursor-pointer",
                    style: {
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: 'translate(-50%, -50%)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-center w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.5)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                className: "absolute inset-0 rounded-full border border-dashed border-amber-400/30"
                            }, void 0, false, {
                                fileName: "[project]/components/game/GoldenCookie.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 32,
                                className: "text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,1)] fill-amber-400/50"
                            }, void 0, false, {
                                fileName: "[project]/components/game/GoldenCookie.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/GoldenCookie.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/game/GoldenCookie.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/game/GoldenCookie.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: floatingText.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 1,
                            y: f.y,
                            x: f.x
                        },
                        animate: {
                            opacity: 0,
                            y: f.y - 100
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 2,
                            ease: "easeOut"
                        },
                        className: "fixed z-[101] pointer-events-none text-2xl font-bold font-mono text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                        style: {
                            transform: 'translate(-50%, -50%)'
                        },
                        children: f.text
                    }, f.id, false, {
                        fileName: "[project]/components/game/GoldenCookie.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/game/GoldenCookie.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(GoldenCookie, "628hUMJ0x+Va/jzIfxXfEIZQVAI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = GoldenCookie;
var _c;
__turbopack_context__.k.register(_c, "GoldenCookie");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game/IncomeChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IncomeChart",
    ()=>IncomeChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/assets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameEngine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const COLORS = [
    '#10b981',
    '#3b82f6',
    '#f59e0b',
    '#8b5cf6',
    '#ec4899',
    '#14b8a6',
    '#f97316',
    '#6366f1',
    '#84cc16',
    '#eab308'
];
function IncomeChart() {
    _s();
    const ownedAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "IncomeChart.useGameStore[ownedAssets]": (s)=>s.ownedAssets
    }["IncomeChart.useGameStore[ownedAssets]"]);
    const legacyMultiplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "IncomeChart.useGameStore[legacyMultiplier]": (s)=>s.legacyMultiplier
    }["IncomeChart.useGameStore[legacyMultiplier]"]);
    const autoClickers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "IncomeChart.useGameStore[autoClickers]": (s)=>s.autoClickers || {}
    }["IncomeChart.useGameStore[autoClickers]"]);
    const autoClickerUpgrades = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "IncomeChart.useGameStore[autoClickerUpgrades]": (s)=>s.autoClickerUpgrades || []
    }["IncomeChart.useGameStore[autoClickerUpgrades]"]);
    const clickPower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "IncomeChart.useGameStore[clickPower]": (s)=>s.clickPower
    }["IncomeChart.useGameStore[clickPower]"]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IncomeChart.useEffect": ()=>{
            const timer = setTimeout({
                "IncomeChart.useEffect.timer": ()=>setMounted(true)
            }["IncomeChart.useEffect.timer"], 10);
            return ({
                "IncomeChart.useEffect": ()=>clearTimeout(timer)
            })["IncomeChart.useEffect"];
        }
    }["IncomeChart.useEffect"], []);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IncomeChart.useMemo[data]": ()=>{
            const state = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"].getState();
            const items = ownedAssets.filter({
                "IncomeChart.useMemo[data].items": (a)=>a.count > 0
            }["IncomeChart.useMemo[data].items"]).map({
                "IncomeChart.useMemo[data].items": (asset)=>{
                    const def = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSET_DEFINITIONS"].find({
                        "IncomeChart.useMemo[data].items.def": (d)=>d.id === asset.definitionId
                    }["IncomeChart.useMemo[data].items.def"]);
                    const income = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAssetIncome"])(asset, legacyMultiplier, state);
                    return {
                        name: def?.name ?? asset.definitionId,
                        value: income,
                        icon: def?.icon ?? ''
                    };
                }
            }["IncomeChart.useMemo[data].items"]).filter({
                "IncomeChart.useMemo[data].items": (item)=>item.value > 0
            }["IncomeChart.useMemo[data].items"]).sort({
                "IncomeChart.useMemo[data].items": (a, b)=>b.value - a.value
            }["IncomeChart.useMemo[data].items"]);
            // Add auto-clicker income if present (with upgrades)
            const autoClickerIncome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAutoClickerIncome"])(state);
            if (autoClickerIncome > 0) {
                items.unshift({
                    name: 'Auto-Clickers',
                    value: autoClickerIncome,
                    icon: '👆'
                });
            }
            // Limit to top 8 for readability
            return items.slice(0, 8);
        }
    }["IncomeChart.useMemo[data]"], [
        ownedAssets,
        legacyMultiplier,
        autoClickers,
        autoClickerUpgrades,
        clickPower
    ]);
    if (!mounted) return null;
    if (data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col items-center justify-center text-zinc-700/50 gap-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-sm tracking-widest uppercase",
                children: "No Income"
            }, void 0, false, {
                fileName: "[project]/components/game/IncomeChart.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/game/IncomeChart.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full p-4 flex flex-col bg-zinc-900/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 text-center",
                children: "Income Distribution"
            }, void 0, false, {
                fileName: "[project]/components/game/IncomeChart.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-[150px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                data: data,
                                cx: "50%",
                                cy: "50%",
                                innerRadius: "60%",
                                outerRadius: "80%",
                                paddingAngle: 2,
                                dataKey: "value",
                                stroke: "none",
                                children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: COLORS[index % COLORS.length]
                                    }, `cell-${index}`, false, {
                                        fileName: "[project]/components/game/IncomeChart.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/game/IncomeChart.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: ({ active, payload })=>{
                                    if (!active || !payload?.length) return null;
                                    const data = payload[0].payload;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-xs font-mono shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: data.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/IncomeChart.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-300 font-bold",
                                                        children: data.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/game/IncomeChart.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 23
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/IncomeChart.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-emerald-400",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(data.value),
                                                    "/s"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/game/IncomeChart.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game/IncomeChart.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, void 0);
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/game/IncomeChart.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game/IncomeChart.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/game/IncomeChart.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/game/IncomeChart.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game/IncomeChart.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(IncomeChart, "loo7u9LfhpdgJrZZdGPU2KCqx+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = IncomeChart;
var _c;
__turbopack_context__.k.register(_c, "IncomeChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_871d8ff5._.js.map