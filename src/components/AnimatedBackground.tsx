import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,167,199,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,47,146,0.09),transparent_28%),linear-gradient(180deg,#f8fbfe_0%,#edf4fb_100%)]" />

      <motion.div
        className="absolute -left-16 top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,167,199,0.18),transparent_66%)] blur-3xl"
        animate={{ x: [0, 48, 0], y: [0, 36, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute right-0 top-1/4 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,47,146,0.14),transparent_64%)] blur-3xl"
        animate={{ x: [0, -34, 0], y: [0, 42, 0], scale: [1.06, 1, 1.04] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-0 bg-grid bg-[size:72px_72px] opacity-[0.22]"
        animate={{ backgroundPosition: ['0px 0px', '72px 72px'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/65 to-transparent" />

      <motion.div
        className="absolute left-[8%] top-[14%] h-56 w-56 rounded-full border border-teal/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute right-[14%] bottom-[16%] h-44 w-44 rounded-full border border-accent/18"
        animate={{ rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
