'use client'

import { useEffect, useState } from 'react'
import { useSpring, useTransform } from 'framer-motion'
import { formatCurrency } from '@/lib/format'

interface NetWorthTickerProps {
  value: number
  className?: string
}

export function NetWorthTicker({ value, className }: NetWorthTickerProps) {
  const spring = useSpring(value, { stiffness: 60, damping: 20 })
  const display = useTransform(spring, (v) => formatCurrency(v))
  const [displayValue, setDisplayValue] = useState(formatCurrency(value))

  useEffect(() => {
    spring.set(value)
  }, [value, spring])

  useEffect(() => {
    return display.on('change', (v) => setDisplayValue(v))
  }, [display])

  return (
    <span className={className}>
      {displayValue}
    </span>
  )
}

interface IncomeTickerProps {
  value: number
  className?: string
}

export function IncomeTicker({ value, className }: IncomeTickerProps) {
  const isPositive = value >= 0
  return (
    <span className={`${isPositive ? 'text-emerald-400' : 'text-red-400'} ${className ?? ''}`}>
      {isPositive ? '+' : ''}{formatCurrency(value)}/s
    </span>
  )
}
