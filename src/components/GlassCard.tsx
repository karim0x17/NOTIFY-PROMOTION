import { motion } from 'framer-motion'

interface GlassCardProps {
  eyebrow?: string
  title: string
  description?: string
  value?: string
  className?: string
  delay?: number
}

export function GlassCard({
  eyebrow,
  title,
  description,
  value,
  className = '',
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-panel relative overflow-hidden rounded-[26px] border border-white/60 p-5 shadow-panel ${className}`}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      {eyebrow ? (
        <div className="mb-2 text-[0.68rem] uppercase tracking-[0.34em] text-navy/45">
          {eyebrow}
        </div>
      ) : null}
      {value ? (
        <div className="mb-2 text-3xl font-semibold tracking-tight text-ink">
          {value}
        </div>
      ) : null}
      <div className="text-lg font-semibold text-ink">{title}</div>
      {description ? (
        <div className="mt-2 text-sm leading-6 text-navy/70">{description}</div>
      ) : null}
    </motion.div>
  )
}
