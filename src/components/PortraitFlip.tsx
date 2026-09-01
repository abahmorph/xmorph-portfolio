import { useEffect, useRef, useState, useCallback } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from 'framer-motion'

interface PortraitFlipProps {
  src?: string
  name: string
  role: string
}

const EASE = [0.16, 1, 0.3, 1] as const

function Reflections() {
  return (
    <>
      {/* Sweeping glass reflection */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit]"
        aria-hidden
      >
        <motion.div
          className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
          initial={{ x: '-160%' }}
          animate={{ x: '320%' }}
          transition={{ duration: 3.2, delay: 1.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 5 }}
        />
      </motion.div>
      {/* Static inner highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
        style={{
          background:
            'linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.0) 38%, rgba(255,255,255,0.0) 62%, rgba(255,255,255,0.06) 100%)',
        }}
        aria-hidden
      />
    </>
  )
}

function MichaelPanel({
  flipped,
  src,
  onFlip,
  reduce,
}: {
  flipped: boolean
  src?: string
  onFlip: () => void
  reduce: boolean | null
}) {
  const [imgOk, setImgOk] = useState<boolean>(() => !!src)

  return (
    <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
      {/* MICHAEL — front face */}
      <div
        className="absolute inset-0 rounded-[26px] border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_80px_-30px_rgba(0,0,0,0.9)]"
        style={{
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transition: reduce ? 'none' : 'transform 1.6s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <Reflections />
        {src && imgOk ? (
          <img
            src={src}
            alt="Abah Michael Xmorph — portrait"
            className="absolute inset-0 h-full w-full rounded-[26px] object-cover"
            draggable={false}
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <span className="text-gradient-brand text-7xl font-extrabold tracking-tight lg:text-8xl">
                AMX
              </span>
            </div>
          </div>
        )}
        {/* bottom label strip */}
        <div className="absolute inset-x-0 bottom-0 z-30 rounded-b-[26px] bg-gradient-to-t from-black/80 to-transparent px-6 pb-5 pt-14">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-blue-400/80">Identity · 01</div>
          <div className="text-xl font-bold text-white">MICHAEL</div>
        </div>
      </div>

      {/* XMORPH — back face */}
      <div
        className="absolute inset-0 rounded-[26px] border border-white/10 bg-gradient-to-br from-indigo-950/90 via-slate-900/95 to-blue-950/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_80px_-30px_rgba(0,0,0,0.9)]"
        style={{
          transform: flipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transition: reduce ? 'none' : 'transform 1.6s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <Reflections />
        {src && imgOk ? (
          <img
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full rounded-[26px] object-cover opacity-40"
            style={{ filter: 'saturate(1.2) hue-rotate(20deg)' }}
            draggable={false}
          />
        ) : null}
        <div className="absolute inset-0 z-20 grid place-items-center">
          <div className="text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-indigo-300/70">Identity · 02</div>
            <div className="mt-3 bg-gradient-to-r from-blue-300 via-violet-300 to-cyan-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent lg:text-5xl">
              XMORPH
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-30 rounded-b-[26px] bg-gradient-to-t from-black/70 to-transparent px-6 pb-5 pt-14">
          <div className="text-sm font-semibold text-slate-200">Creative Technologist</div>
        </div>
        {!reduce && (
          <button
            onClick={onFlip}
            className="absolute right-4 top-4 z-40 grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            aria-label="Flip portrait to Michael side"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M5.4 9a7.5 7.5 0 0112.6-3.1M18.6 15A7.5 7.5 0 016 18.1" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export function PortraitFlip({ src, name, role }: PortraitFlipProps) {
  const reduce = useReducedMotion()
  const [flipped, setFlipped] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(30)

  const springX = useSpring(rotateY, { stiffness: 120, damping: 18, mass: 0.6 })
  const springY = useSpring(rotateX, { stiffness: 120, damping: 18, mass: 0.6 })

  const tiltX = useTransform(springY, [-10, 10], [8, -8])
  const tiltY = useTransform(springX, [-10, 10], [-10, 10])

  const glareX = useTransform(glowX, [0, 100], ['-40%', '140%'])
  const glareY = useTransform(glowY, [0, 100], ['-40%', '140%'])

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduce) return
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      rotateY.set((px - 0.5) * 14)
      rotateX.set((py - 0.5) * 12)
      glowX.set(px * 100)
      glowY.set(py * 100)
    },
    [reduce, rotateX, rotateY, glowX, glowY],
  )

  const onLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  const flip = useCallback(() => setFlipped((v) => !v), [])

  useEffect(() => {
    const t = setInterval(() => {
      setFlipped((f) => (reduce ? f : !f))
    }, 14000)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-full max-w-[340px] select-none sm:max-w-[400px]"
      style={{ perspective: '1400px' }}
    >
      {/* Ambient glow behind */}
      <div className="pointer-events-none absolute -inset-6 -z-10">
        <motion.div
          className="absolute inset-0 rounded-[40px]"
          style={{
            background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(30,64,175,0.35), rgba(139,92,246,0.10) 45%, transparent 70%)`,
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Moving background glow reacting to cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-8 -z-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(30,64,175,0.20), rgba(139,92,246,0.05) 50%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={reduce ? undefined : { x: -12, y: -10 }}
      />

      <motion.div
        className="relative"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
      >
        <div
          className="relative aspect-[4/5] rounded-[26px]"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(10px)',
          }}
        >
          <MichaelPanel flipped={flipped} src={src} onFlip={flip} reduce={reduce} />
        </div>

        {/* Floating interface chips around portrait */}
        <div
          className="absolute -left-5 top-8 z-30"
          style={{ transform: 'translateZ(40px)' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: EASE }}
            className="animate-float-slow glass rounded-xl px-3 py-2.5"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] tracking-widest text-emerald-300">ONLINE</span>
            </div>
          </motion.div>
        </div>

        <div
          className="absolute -right-4 top-24 z-30 hidden sm:block"
          style={{ transform: 'translateZ(32px)' }}
        >
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: EASE }}
            className="animate-float-slower glass rounded-xl px-3 py-2.5"
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-400">Building</div>
            <div className="font-mono text-[11px] font-semibold text-blue-400">DIGITAL WORLDS</div>
          </motion.div>
        </div>

        <div
          className="absolute bottom-10 -left-6 z-30 hidden sm:block"
          style={{ transform: 'translateZ(28px)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: EASE }}
            className="animate-float-slow glass rounded-xl px-3 py-2.5"
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-400">Role</div>
            <div className="font-mono text-[11px] font-semibold text-violet-200">CREATIVE TECHNOLOGIST</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Manual flip toggle (desktop, subtle) */}
      {!reduce && (
        <AnimatePresence>
          {!flipped && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={flip}
              className="absolute -bottom-4 left-1/2 z-40 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full glass-strong text-slate-300 transition-colors hover:text-white"
              aria-label="Flip portrait to Xmorph side"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      )}

      {/* Center bottom caption */}
      <div className="mt-6 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-500">{name}</div>
        <div className="mt-1 text-sm font-medium text-slate-400">{role}</div>
      </div>
    </div>
  )
}