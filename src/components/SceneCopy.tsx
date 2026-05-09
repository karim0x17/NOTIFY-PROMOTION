import { motion } from 'framer-motion'

interface SceneCopyProps {
  eyebrow: string
  title: string
  description: string
  highlights?: string[]
  align?: 'left' | 'center'
}

export function SceneCopy({
  eyebrow,
  title,
  description,
  highlights = [],
  align = 'left',
}: SceneCopyProps) {
  const isCentered = align === 'center'

  return (
    <div
      className={`relative z-10 flex max-w-[34rem] flex-col gap-5 ${
        isCentered ? 'mx-auto items-center text-center' : 'items-start text-left'
      }`}
    >
      <motion.div
        className="rounded-full border border-teal/20 bg-white/65 px-4 py-2 text-[0.72rem] uppercase tracking-[0.4em] text-navy/60 shadow-panel"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow}
      </motion.div>

      <motion.h1
        className="text-balance text-[2.75rem] font-semibold leading-[1.02] text-ink md:text-[4.8rem]"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="max-w-[32rem] text-lg leading-8 text-navy/72 md:text-[1.2rem]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        {description}
      </motion.p>

      {highlights.length > 0 ? (
        <motion.div
          className={`flex flex-wrap gap-3 ${isCentered ? 'justify-center' : 'justify-start'}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-navy/10 bg-white/80 px-4 py-2 text-sm font-medium text-navy/75 shadow-panel"
            >
              {item}
            </span>
          ))}
        </motion.div>
      ) : null}
    </div>
  )
}
