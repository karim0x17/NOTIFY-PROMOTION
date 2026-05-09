import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useEffect } from 'react'
import { AnimatedBackground } from './components/AnimatedBackground'
import { BrandMark } from './components/BrandMark'
import { SceneAnalytics } from './components/scenes/SceneAnalytics'
import { SceneAlertFlow } from './components/scenes/SceneAlertFlow'
import { SceneDashboard } from './components/scenes/SceneDashboard'
import { SceneIntro } from './components/scenes/SceneIntro'
import { SceneMap } from './components/scenes/SceneMap'
import { SceneOutro } from './components/scenes/SceneOutro'
import { SceneRouting } from './components/scenes/SceneRouting'
import { SceneSecurity } from './components/scenes/SceneSecurity'
import { preloadAssets, showcaseAssets, type SceneId } from './config/showcase'
import { useImagePreloader } from './hooks/useImagePreloader'
import { useShowcaseTimeline } from './hooks/useShowcaseTimeline'

const sceneComponents: Record<SceneId, () => JSX.Element> = {
  intro: SceneIntro,
  dashboard: SceneDashboard,
  'alert-flow': SceneAlertFlow,
  routing: SceneRouting,
  map: SceneMap,
  analytics: SceneAnalytics,
  security: SceneSecurity,
  outro: SceneOutro,
}

export default function App() {
  const ready = useImagePreloader(preloadAssets)
  const { activeScene, sceneKey, totalDuration } = useShowcaseTimeline({ enabled: ready })
  const ActiveScene = sceneComponents[activeScene.id]

  useEffect(() => {
    if (!ready) {
      return
    }

    document.documentElement.dataset.scene = activeScene.id
    ;(window as Window & { __NOTIFY_SCENE__?: string }).__NOTIFY_SCENE__ =
      activeScene.id
  }, [activeScene.id, ready])

  return (
    <MotionConfig transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1] }}>
      <main className="relative h-screen w-screen overflow-hidden bg-[#f3f7fb] text-ink">
        <AnimatedBackground />

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.76),transparent_36%)]" />

        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            {ready ? (
              <ActiveScene key={sceneKey} />
            ) : (
              <motion.div
                key="boot"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col items-center gap-8">
                  <BrandMark logoSrc={showcaseAssets.logo} />
                  <motion.div
                    className="h-1.5 w-48 overflow-hidden rounded-full bg-white/75 shadow-panel"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-teal via-cyan to-accent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </MotionConfig>
  )
}
