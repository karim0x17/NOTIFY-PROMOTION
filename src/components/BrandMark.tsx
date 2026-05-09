import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface BrandMarkProps {
  logoSrc: string
  compact?: boolean
}

export function BrandMark({ logoSrc, compact = false }: BrandMarkProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [logoSrc])

  if (!failed) {
    return (
      <motion.img
        src={logoSrc}
        alt="NOTIFY logo"
        className={
          compact
            ? 'h-14 w-auto max-w-[26rem] object-contain'
            : 'h-20 w-auto max-w-[40rem] object-contain'
        }
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <motion.div
      className="inline-flex items-center gap-5"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative grid h-16 w-16 place-items-center rounded-[22px] bg-ink text-white shadow-halo">
        <div className="absolute inset-2 rounded-[18px] border border-white/15" />
        <div className="relative h-8 w-8">
          <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan" />
          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="absolute right-1.5 bottom-0 h-2 w-2 rounded-full bg-teal" />
          <span className="absolute left-2.5 top-2.5 h-px w-5 rotate-[-20deg] bg-white/80" />
          <span className="absolute left-3 top-3.5 h-px w-4 rotate-[38deg] bg-white/80" />
        </div>
      </div>

      <div>
        <div className="text-[0.75rem] uppercase tracking-[0.55em] text-navy/50">
          University alerts
        </div>
        <div className="text-5xl font-semibold tracking-[0.22em] text-ink">
          NOTIFY
        </div>
      </div>
    </motion.div>
  )
}
