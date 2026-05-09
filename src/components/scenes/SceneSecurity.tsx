import { motion } from 'framer-motion'
import { securityPoints, showcaseAssets } from '../../config/showcase'
import { BrowserFrame } from '../BrowserFrame'
import { GlassCard } from '../GlassCard'
import { SceneCopy } from '../SceneCopy'
import { SceneShell } from './SceneShell'

export function SceneSecurity() {
  return (
    <SceneShell>
      <div className="grid h-full grid-cols-[0.86fr_1.14fr] items-center gap-10">
        <div className="space-y-8">
          <SceneCopy
            eyebrow="Security & Administration"
            title="An institution-managed system for official communication."
            description="Permissions, user management, and controlled access keep NOTIFY aligned with how universities actually operate: securely, clearly, and with accountability."
            highlights={['Controlled access', 'Permissions', 'Official only', 'Reliable structure']}
          />

          <div className="grid gap-4">
            {securityPoints.map((point, index) => (
              <GlassCard
                key={point}
                eyebrow={`0${index + 1}`}
                title={point}
                delay={0.14 * index}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="relative h-full"
          animate={{ y: [0, -8, 0], rotateY: [0, 1.1, 0] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BrowserFrame
            src={showcaseAssets.usersPermissions}
            alt="NOTIFY users and permissions screen"
            title="Users and permissions"
            subtitle="Institution governance"
            className="h-full"
          />
        </motion.div>
      </div>
    </SceneShell>
  )
}
