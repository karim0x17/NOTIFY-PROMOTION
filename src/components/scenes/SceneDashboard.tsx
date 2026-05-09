import { motion } from 'framer-motion'
import { showcaseAssets } from '../../config/showcase'
import { BrowserFrame } from '../BrowserFrame'
import { GlassCard } from '../GlassCard'
import { ScreenPreviewCard } from '../ScreenPreviewCard'
import { SceneCopy } from '../SceneCopy'
import { SceneShell } from './SceneShell'

export function SceneDashboard() {
  return (
    <SceneShell>
      <div className="grid h-full grid-cols-[0.82fr_1.18fr] items-center gap-10">
        <SceneCopy
          eyebrow="Command Center"
          title="One operational view for campus-wide awareness."
          description="The admin dashboard becomes the control plane for official alerts, delivery status, user roles, and campus health in a single, readable system."
          highlights={['Active alerts', 'Delivery tracking', 'User roles', 'Campus status']}
        />

        <div className="relative h-full">
          <motion.div
            className="absolute -left-4 top-[12%] z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GlassCard
              eyebrow="Live"
              value="08"
              title="Active alerts"
              description="Current messages routed by urgency, role, and zone."
              delay={0.25}
              className="w-56"
            />
          </motion.div>

          <motion.div
            className="absolute -right-6 top-[26%] z-10"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GlassCard
              eyebrow="Delivery"
              value="98.4%"
              title="Delivery status"
              description="Critical messages verified across targeted recipients."
              delay={0.35}
              className="w-60"
            />
          </motion.div>

          <motion.div
            className="absolute left-[10%] bottom-[6%] z-10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ScreenPreviewCard
              src={showcaseAssets.adminCourses}
              alt="NOTIFY courses administration screen"
              eyebrow="Admin preview"
              title="Courses and enrolments"
              className="w-80"
              imageClassName="object-contain bg-white"
              delay={0.45}
            />
          </motion.div>

          <motion.div
            className="absolute right-[4%] bottom-[14%] z-10"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GlassCard
              eyebrow="Status"
              title="Campus status"
              description="Facilities, services, and critical incidents stay visible in real time."
              delay={0.55}
              className="w-60"
            />
          </motion.div>

          <motion.div
            className="absolute inset-y-[8%] right-0 left-8"
            animate={{ rotateX: [0, -1.5, 0], rotateY: [0, 1.4, 0], y: [0, -8, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <BrowserFrame
              src={showcaseAssets.dashboardHome}
              alt="NOTIFY dashboard home screen"
              title="Admin dashboard"
              subtitle="Institution command center"
              className="h-full"
              imageClassName="aspect-[16/9] bg-white"
            />
          </motion.div>
        </div>
      </div>
    </SceneShell>
  )
}
