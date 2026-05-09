import { motion } from 'framer-motion'
import { showcaseAssets } from '../../config/showcase'
import { BrandMark } from '../BrandMark'
import { SceneCopy } from '../SceneCopy'
import { SceneShell } from './SceneShell'

export function SceneIntro() {
  return (
    <SceneShell className="flex items-center justify-center">
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-10">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,167,199,0.16),transparent_62%)] blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <BrandMark logoSrc={showcaseAssets.logo} />

        <SceneCopy
          align="center"
          eyebrow="Structured Campus Communication"
          title="Real-time university alerts, structured for every role."
          description="NOTIFY gives institutions one trusted communication layer for urgent updates, operational coordination, and campus-wide visibility."
          highlights={['Official alerts only', 'Role-based targeting', 'Location aware']}
        />

        <motion.div
          className="flex items-center gap-6 rounded-full border border-white/60 bg-white/75 px-6 py-4 shadow-panel"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm uppercase tracking-[0.32em] text-navy/50">
            Right alert
          </span>
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm uppercase tracking-[0.32em] text-navy/50">
            Right people
          </span>
          <span className="h-2 w-2 rounded-full bg-teal" />
          <span className="text-sm uppercase tracking-[0.32em] text-navy/50">
            Right moment
          </span>
        </motion.div>
      </div>
    </SceneShell>
  )
}
