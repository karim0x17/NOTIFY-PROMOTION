import { motion } from 'framer-motion'
import { metrics, showcaseAssets } from '../../config/showcase'
import { BrowserFrame } from '../BrowserFrame'
import { MetricCounter } from '../MetricCounter'
import { SceneCopy } from '../SceneCopy'
import { SceneShell } from './SceneShell'

const accentClasses = {
  teal: 'from-teal/16 to-cyan/8 text-teal',
  accent: 'from-accent/14 to-accentSoft/8 text-accent',
  navy: 'from-navy/12 to-cyan/8 text-navy',
}

export function SceneAnalytics() {
  return (
    <SceneShell>
      <div className="grid h-full grid-cols-[0.82fr_1.18fr] items-center gap-10">
        <div className="space-y-8">
          <SceneCopy
            eyebrow="Analytics"
            title="Visibility that proves messages were received."
            description="NOTIFY closes the loop with delivery confirmation, read rates, pending acknowledgements, and response visibility for official campus communication."
            highlights={['Delivered alerts', 'Read rates', 'Acknowledgements', 'Response visibility']}
          />

          <div className="grid gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className={`glass-panel rounded-[28px] border border-white/70 bg-gradient-to-br px-6 py-5 shadow-panel ${accentClasses[metric.accent]}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.82,
                  delay: 0.14 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="text-[0.68rem] uppercase tracking-[0.34em] text-navy/45">
                  Live metric
                </div>
                <div className="mt-2 text-4xl font-semibold tracking-tight text-ink">
                  <MetricCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="mt-1 text-sm text-navy/68">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="h-full"
          animate={{ y: [0, -10, 0], rotateY: [0, -1.2, 0] }}
          transition={{ duration: 8.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BrowserFrame
            src={showcaseAssets.analytics}
            alt="NOTIFY analytics screen"
            title="Delivery and response analytics"
            subtitle="Operational accountability"
            className="h-full"
          />
        </motion.div>
      </div>
    </SceneShell>
  )
}
