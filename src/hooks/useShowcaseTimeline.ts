import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { showcaseScenes } from '../config/showcase'

interface TimelineOptions {
  enabled: boolean
}

export function useShowcaseTimeline({ enabled }: TimelineOptions) {
  const [state, setState] = useState({ sceneIndex: 0, sceneToken: 0 })
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const totalDuration = useMemo(
    () => showcaseScenes.reduce((sum, scene) => sum + scene.duration, 0),
    [],
  )

  const activateScene = useCallback((sceneIndex: number) => {
    setState((current) => ({
      sceneIndex,
      sceneToken: current.sceneToken + 1,
    }))
  }, [])

  useLayoutEffect(() => {
    if (!enabled) {
      return
    }

    activateScene(0)

    const timeline = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'none' },
    })

    let cursor = 0

    showcaseScenes.forEach((scene, index) => {
      timeline.call(() => activateScene(index), [], cursor)
      timeline.to({}, { duration: scene.duration }, cursor)
      cursor += scene.duration
    })

    timeline.call(() => activateScene(0), [], cursor)
    timelineRef.current = timeline

    return () => {
      timeline.kill()
      timelineRef.current = null
    }
  }, [activateScene, enabled])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.code === 'KeyR') {
        timelineRef.current?.restart(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return {
    activeScene: showcaseScenes[state.sceneIndex],
    sceneKey: `${state.sceneIndex}-${state.sceneToken}`,
    totalDuration,
    restart: () => timelineRef.current?.restart(true),
  }
}
