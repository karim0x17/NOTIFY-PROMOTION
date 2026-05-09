import { useEffect, useState } from 'react'

interface BrowserFrameProps {
  src: string
  alt: string
  title: string
  subtitle?: string
  className?: string
  imageClassName?: string
}

export function BrowserFrame({
  src,
  alt,
  title,
  subtitle,
  className = '',
  imageClassName = '',
}: BrowserFrameProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  return (
    <div
      className={`relative overflow-hidden rounded-[30px] border border-white/70 bg-white/90 shadow-halo ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-200/80 bg-white/90 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff8d86]" />
          <span className="h-3 w-3 rounded-full bg-[#ffd45d]" />
          <span className="h-3 w-3 rounded-full bg-[#35d58a]" />
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm text-slate-500">
          notify.university/console
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Live
        </div>
      </div>

      <div className="relative p-5">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.36em] text-navy/45">
              Real screen
            </div>
            <div className="text-lg font-semibold text-ink">{title}</div>
          </div>
          {subtitle ? (
            <div className="rounded-full bg-mist px-4 py-2 text-sm text-navy/65">
              {subtitle}
            </div>
          ) : null}
        </div>

        <div className="screen-reflection relative aspect-[16/9] overflow-hidden rounded-[22px] border border-slate-200/90 bg-gradient-to-br from-slate-100 to-slate-50">
          {!failed ? (
            <img
              src={src}
              alt={alt}
              className={`block h-full w-full object-contain bg-white ${imageClassName}`}
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(0,167,199,0.08),transparent_45%),linear-gradient(180deg,#f8fbfe,#eef4fa)] p-10 text-center">
              <div className="max-w-sm">
                <div className="text-sm uppercase tracking-[0.34em] text-navy/40">
                  Missing asset
                </div>
                <div className="mt-3 text-2xl font-semibold text-ink">{title}</div>
                <div className="mt-3 text-sm leading-6 text-navy/65">
                  Add <span className="font-semibold">{src}</span> to
                  <span className="font-semibold"> showcase/public/assets/</span> to
                  display the real NOTIFY screen here.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
