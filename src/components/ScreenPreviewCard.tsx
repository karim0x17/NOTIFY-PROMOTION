import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ScreenPreviewCardProps {
  src: string
  alt: string
  eyebrow: string
  title: string
  className?: string
  imageClassName?: string
  aspectClassName?: string
  delay?: number
}

export function ScreenPreviewCard({
  src,
  alt,
  eyebrow,
  title,
  className = '',
  imageClassName = '',
  aspectClassName = 'aspect-[16/9]',
  delay = 0,
}: ScreenPreviewCardProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  return (
    <motion.div
      className={`glass-panel rounded-[26px] border border-white/70 p-4 shadow-panel ${className}`}
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-3">
        <div className="text-[0.68rem] uppercase tracking-[0.34em] text-navy/45">
          {eyebrow}
        </div>
        <div className="mt-1 text-base font-semibold text-ink">{title}</div>
      </div>

      <div
        className={`screen-reflection relative overflow-hidden rounded-[18px] border border-slate-200/90 bg-white ${aspectClassName}`}
      >
        {!failed ? (
          <img
            src={src}
            alt={alt}
            className={`block h-full w-full object-cover ${imageClassName}`}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-mist to-white px-6 text-center text-sm text-navy/60">
            Replace preview asset
          </div>
        )}
      </div>
    </motion.div>
  )
}
