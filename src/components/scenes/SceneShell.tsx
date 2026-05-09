import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SceneShellProps {
  children: ReactNode
  className?: string
}

export function SceneShell({ children, className = '' }: SceneShellProps) {
  return (
    <motion.section
      className={`absolute inset-0 overflow-hidden px-10 py-8 md:px-14 md:py-12 ${className}`}
      initial={{ opacity: 0, scale: 1.02, filter: 'blur(14px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.985, filter: 'blur(10px)' }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
