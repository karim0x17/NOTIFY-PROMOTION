import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface DeviceFrameProps {
  src: string
  alt: string
  role: string
  message: string
  accent?: 'teal' | 'navy' | 'accent'
  className?: string
  delay?: number
}

const accentStyles = {
  teal: 'from-teal/18 to-cyan/8 border-teal/25',
  navy: 'from-navy/16 to-cyan/6 border-navy/18',
  accent: 'from-accent/16 to-accentSoft/6 border-accent/18',
}

export function DeviceFrame({
  src,
  alt,
  role,
  message,
  accent = 'teal',
  className = '',
  delay = 0,
}: DeviceFrameProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-panel overflow-hidden rounded-[32px] border border-white/70 p-3 shadow-panel">
        <div className="mb-3 flex items-center justify-between px-2">
          <div className="text-[0.68rem] uppercase tracking-[0.32em] text-navy/45">
            {role}
          </div>
          <div className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(255,47,146,0.08)]" />
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-2">
          <div className="mx-auto mb-3 h-2 w-16 rounded-full bg-white/8" />
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[24px] bg-white">
            {!failed ? (
              <img
                src={src}
                alt={alt}
                className="block h-full w-full object-contain bg-[#151821]"
                onError={() => setFailed(true)}
              />
            ) : (
              <div
                className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${accentStyles[accent]}`}
              >
                <div className="px-5 text-center">
                  <div className="text-[0.68rem] uppercase tracking-[0.34em] text-navy/48">
                    Replace asset
                  </div>
                  <div className="mt-3 text-lg font-semibold text-ink">{role}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={`mt-3 rounded-[20px] border bg-gradient-to-br px-4 py-3 ${accentStyles[accent]}`}
        >
          <div className="text-sm leading-6 text-navy/72">{message}</div>
        </div>
      </div>
    </motion.div>
  )
}
