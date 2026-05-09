import { motion } from 'framer-motion'
import { showcaseAssets } from '../../config/showcase'
import { BrandMark } from '../BrandMark'
import { SceneCopy } from '../SceneCopy'
import { SceneShell } from './SceneShell'

export function SceneOutro() {
  return (
    <SceneShell className="flex items-center justify-center">
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-12">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/12"
          animate={{ scale: [1, 1.06, 1], rotate: [0, 4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/12"
          animate={{ scale: [1.04, 1, 1.04], rotate: [0, -6, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <BrandMark logoSrc={showcaseAssets.logo} compact />

        <SceneCopy
          align="center"
          eyebrow="NOTIFY"
          title="The right alert. The right people. The right moment."
          description="Safer, faster, smarter campus communication for universities that need structured, real-time operational clarity."
          highlights={['Official communication', 'Campus safety', 'Operational trust']}
        />

        <motion.div
          className="flex items-center gap-5 rounded-full border border-white/60 bg-white/75 px-6 py-4 text-sm uppercase tracking-[0.34em] text-navy/52 shadow-panel"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.84, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Official</span>
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>Instant</span>
          <span className="h-2 w-2 rounded-full bg-teal" />
          <span>Precise</span>
        </motion.div>
      </div>
    </SceneShell>
  )
}
