import { motion } from 'framer-motion'
import { roleDeliveries, showcaseAssets } from '../../config/showcase'
import { BrowserFrame } from '../BrowserFrame'
import { DeviceFrame } from '../DeviceFrame'
import { GlassCard } from '../GlassCard'
import { SceneCopy } from '../SceneCopy'
import { SceneShell } from './SceneShell'

const routingPaths = [
  { d: 'M 288 302 C 386 228, 530 134, 676 92', delay: 0.1 },
  { d: 'M 288 302 C 430 266, 560 232, 704 212', delay: 0.2 },
  { d: 'M 288 302 C 438 308, 572 336, 716 390', delay: 0.3 },
  { d: 'M 288 302 C 384 356, 470 434, 566 524', delay: 0.4 },
  { d: 'M 288 302 C 438 396, 586 506, 744 572', delay: 0.5 },
]

export function SceneRouting() {
  return (
    <SceneShell>
      <div className="absolute left-14 top-14 z-10 w-[34rem]">
        <SceneCopy
          eyebrow="Smart Routing"
          title="Each role receives the alert that actually applies."
          description="From a single official alert, NOTIFY routes context to the right recipients instantly, so students, teachers, technicians, staff, and administrators each see their own operational reality."
          highlights={['Role-based delivery', 'Mobile visibility', 'Instant targeting']}
        />
      </div>

      <div className="absolute bottom-12 left-[38%] right-12 top-16">
        <div className="relative h-full w-full">
          <motion.div
            className="absolute bottom-0 left-[8%] h-[42%] w-[38%]"
            animate={{ y: [0, -10, 0], rotateY: [0, 2, 0] }}
            transition={{ duration: 8.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <BrowserFrame
              src={showcaseAssets.dashboardHome}
              alt="NOTIFY dashboard routing overview"
              title="Central dispatch"
              subtitle="One alert, many precise outcomes"
              className="h-full"
            />
          </motion.div>

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 820 640"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="route-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,167,199,0.25)" />
                <stop offset="50%" stopColor="rgba(0,167,199,0.8)" />
                <stop offset="100%" stopColor="rgba(255,47,146,0.85)" />
              </linearGradient>
            </defs>

            {routingPaths.map((path) => (
              <motion.path
                key={path.d}
                d={path.d}
                stroke="url(#route-stroke)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 12"
                initial={{ pathLength: 0, opacity: 0.18 }}
                animate={{ pathLength: 1, opacity: [0.18, 0.9, 0.3] }}
                transition={{
                  duration: 2.8,
                  delay: path.delay,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </svg>

          <motion.div
            className="absolute left-[35%] top-[50%] z-20 h-5 w-5 rounded-full bg-white shadow-[0_0_0_12px_rgba(0,167,199,0.12)]"
            animate={{ scale: [1, 1.35, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="absolute inset-0 rounded-full bg-teal" />
          </motion.div>

          <DeviceFrame
            src={roleDeliveries[0].src}
            alt="Student mobile screen"
            role={roleDeliveries[0].role}
            message={roleDeliveries[0].message}
            accent="teal"
            className="absolute left-[8%] top-[8%] z-20 w-[15%]"
            delay={0.18}
          />
          <DeviceFrame
            src={roleDeliveries[1].src}
            alt="Teacher mobile screen"
            role={roleDeliveries[1].role}
            message={roleDeliveries[1].message}
            accent="navy"
            className="absolute left-[14%] bottom-[0%] z-20 w-[15%]"
            delay={0.28}
          />
          <motion.div
            className="absolute right-[8%] top-[14%] z-20"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard
              eyebrow="Technician"
              title="Equipment issue in Zone 4"
              description="Maintenance teams receive the exact incident and location they need."
              className="w-64"
            />
          </motion.div>

          <motion.div
            className="absolute right-[6%] top-[40%] z-20"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard
              eyebrow="Staff"
              title="Operational coordination live"
              description="Service teams stay aligned on closures, interruptions, and response steps."
              className="w-64"
            />
          </motion.div>

          <motion.div
            className="absolute right-[24%] bottom-[10%] z-20"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard
              eyebrow="Admin"
              title="Critical approval ready"
              description="Institution-wide alerts stay controlled and official before broad delivery."
              className="w-64"
            />
          </motion.div>
        </div>
      </div>
    </SceneShell>
  )
}
