import { motion } from 'framer-motion'
import { showcaseAssets } from '../../config/showcase'
import { DeviceFrame } from '../DeviceFrame'
import { GlassCard } from '../GlassCard'
import { SceneCopy } from '../SceneCopy'
import { SceneShell } from './SceneShell'

const pins = [
  { top: '18%', left: '56%', label: 'North lab' },
  { top: '44%', left: '75%', label: 'Lecture hall' },
  { top: '62%', left: '54%', label: 'Service zone' },
  { top: '30%', left: '79%', label: 'Access gate' },
]

export function SceneMap() {
  return (
    <SceneShell>
      <div className="grid h-full grid-cols-[0.82fr_1.18fr] items-center gap-10">
        <div className="space-y-8">
          <SceneCopy
            eyebrow="Campus Awareness"
            title="Location-aware visibility across the university."
            description="With campus mapping in the loop, operations teams can see where incidents are happening, who is nearby, and how alerts relate to real physical spaces."
            highlights={['Map context', 'Zone routing', 'Operational awareness']}
          />

          <GlassCard
            eyebrow="Use case"
            title="Maintenance, closures, incidents, and safety zones"
            description="Soft hotspot pulses show where action is needed without overwhelming the screen."
            className="max-w-md"
            delay={0.28}
          />
        </div>

        <div className="relative h-full">
          <motion.div
            className="absolute left-[30%] top-[2%] w-[38%]"
            animate={{ y: [0, -8, 0], rotateY: [0, 1.4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <DeviceFrame
              src={showcaseAssets.campusMap}
              alt="NOTIFY campus map screen"
              role="Campus map"
              message="Live location context shows active pins, nearby zones, and incident visibility in real time."
              accent="navy"
              className="w-full"
            />
          </motion.div>

          {pins.map((pin, index) => (
            <motion.div
              key={pin.label}
              className="absolute z-10"
              style={{ top: pin.top, left: pin.left }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.18 * index }}
            >
              <div className="relative flex items-center gap-3">
                <motion.div
                  className="absolute left-[10px] top-[10px] h-6 w-6 rounded-full bg-teal/20"
                  animate={{ scale: [1, 1.9, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.22 }}
                />
                <div className="relative h-5 w-5 rounded-full bg-accent shadow-[0_0_0_8px_rgba(255,47,146,0.14)]" />
                <div className="rounded-full border border-white/65 bg-white/82 px-4 py-2 text-sm text-navy/72 shadow-panel">
                  {pin.label}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="absolute right-[4%] bottom-[10%] z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GlassCard
              eyebrow="Awareness"
              title="Online active pins"
              description="Map-driven alerts help teams coordinate by zone instead of broadcasting blindly."
              className="w-72"
              delay={0.34}
            />
          </motion.div>
        </div>
      </div>
    </SceneShell>
  )
}
