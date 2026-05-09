import { motion } from 'framer-motion'
import { showcaseAssets } from '../../config/showcase'
import { DeviceFrame } from '../DeviceFrame'
import { GlassCard } from '../GlassCard'
import { ScreenPreviewCard } from '../ScreenPreviewCard'
import { SceneCopy } from '../SceneCopy'
import { SceneShell } from './SceneShell'

const steps = [
  'Alert type',
  'Priority level',
  'Target audience',
  'Location / zone',
]

const priorities = ['Normal', 'High', 'Critical']
const audiences = ['Students', 'Teachers', 'Technicians', 'Staff']

export function SceneAlertFlow() {
  return (
    <SceneShell>
      <div className="grid h-full grid-cols-[0.88fr_1.12fr] items-center gap-10">
        <div className="space-y-8">
          <SceneCopy
            eyebrow="Alert Creation"
            title="Structured logic behind every alert."
            description="NOTIFY is not a chat feed. Each alert follows a guided workflow so urgency, audience, and location are always explicit before delivery."
            highlights={['Normal / high / critical', 'Audience targeting', 'Location aware']}
          />

          <div className="grid grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <GlassCard
                key={step}
                eyebrow={`Step 0${index + 1}`}
                title={step}
                description="Clear fields support fast, accurate institutional messaging."
                delay={0.16 * index}
              />
            ))}
          </div>
        </div>

        <div className="relative h-full">
          <motion.div
            className="absolute left-[21%] top-[3%] w-[38%]"
            animate={{ rotateX: [0, -1.6, 0], rotateY: [0, -2.2, 0], y: [0, -10, 0] }}
            transition={{ duration: 8.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <DeviceFrame
              src={showcaseAssets.alertCreation}
              alt="NOTIFY alert creation screen"
              role="Alert composer"
              message="Define the type, then apply urgency, audience, and zone before publishing."
              accent="teal"
              className="w-full"
            />
          </motion.div>

          <motion.div
            className="absolute right-[2%] top-[8%] w-[38%]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ScreenPreviewCard
              src={showcaseAssets.adminAlerts}
              alt="NOTIFY alerts administration screen"
              eyebrow="Admin feed"
              title="Published alert oversight"
              className="w-full"
              imageClassName="object-contain bg-[#161d2d]"
              delay={0.3}
            />
          </motion.div>

          <motion.div
            className="glass-panel absolute -left-4 bottom-[15%] z-10 rounded-[24px] border border-white/70 p-5 shadow-panel"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[0.68rem] uppercase tracking-[0.34em] text-navy/45">
              Priority
            </div>
            <div className="mt-3 flex gap-2">
              {priorities.map((priority, index) => (
                <motion.span
                  key={priority}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    priority === 'Critical'
                      ? 'bg-accent text-white'
                      : priority === 'High'
                        ? 'bg-navy text-white'
                        : 'bg-mist text-navy'
                  }`}
                  animate={{ y: [0, -2, 0], opacity: [0.85, 1, 0.85] }}
                  transition={{
                    duration: 2.8,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {priority}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-panel absolute right-[4%] bottom-[12%] z-10 rounded-[24px] border border-white/70 p-5 shadow-panel"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[0.68rem] uppercase tracking-[0.34em] text-navy/45">
              Target audience
            </div>
            <div className="mt-3 flex max-w-xs flex-wrap gap-2">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy/75"
                >
                  {audience}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SceneShell>
  )
}
