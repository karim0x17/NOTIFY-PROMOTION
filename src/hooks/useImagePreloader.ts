import { useEffect, useMemo, useState } from 'react'

export function useImagePreloader(paths: readonly string[], maxWaitMs = 1800) {
  const [ready, setReady] = useState(false)

  const uniquePaths = useMemo(
    () => Array.from(new Set(paths.filter(Boolean))),
    [paths],
  )

  useEffect(() => {
    if (uniquePaths.length === 0) {
      setReady(true)
      return
    }

    let cancelled = false
    let completed = 0

    const timeoutId = window.setTimeout(() => {
      if (!cancelled) {
        setReady(true)
      }
    }, maxWaitMs)

    const markComplete = () => {
      completed += 1
      if (!cancelled && completed >= uniquePaths.length) {
        window.clearTimeout(timeoutId)
        setReady(true)
      }
    }

    uniquePaths.forEach((path) => {
      const img = new Image()
      img.onload = markComplete
      img.onerror = markComplete
      img.src = path
    })

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [maxWaitMs, uniquePaths])

  return ready
}
