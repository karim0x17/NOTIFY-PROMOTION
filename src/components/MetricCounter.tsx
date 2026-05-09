import { useEffect, useState } from 'react'
import { animate, useMotionValue } from 'framer-motion'

interface MetricCounterProps {
  value: number
  suffix?: string
}

export function MetricCounter({ value, suffix = '' }: MetricCounterProps) {
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest) => {
      setDisplay(Math.round(latest))
    })

    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    })

    return () => {
      unsubscribe()
      controls.stop()
    }
  }, [motionValue, value])

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
