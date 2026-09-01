import { motion, useReducedMotion } from 'framer-motion'
import { StaggerContainer, StaggerItem } from './ui/Reveal'
import { whyMe } from '../data/content'

const EASE = [0.16, 1, 0.3, 1] as const

export function WhyMe() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-6 py-28 lg:py-40">
      {/* ambient center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(104,178,255,0.4), rgba(139,92,246,0.15) 55%, transparent 75%)',
          filter: 'blur(70px)',
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: EASE }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <div className="font-mono text-sm uppercase tracking-[0.4em] text-slate-500">
          {whyMe.kicker}
        </div>
        <div className="text-gradient-brand mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {whyMe.headline}
        </div>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
          {whyMe.body}
        </p>
      </motion.div>

      <StaggerContainer className="relative mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {whyMe.highlights.map((h) => (
          <StaggerItem key={h.title}>
            <div className="glass group h-full rounded-2xl p-6 text-center transition-transform duration-500 hover:-translate-y-1.5">
              <div className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-2xl border border-blue-700/25 bg-gradient-to-br from-blue-800/30 to-indigo-900/30 text-blue-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3l-7 11h5v7l7-11h-5z" />
                </svg>
              </div>
              <div className="text-base font-bold text-white">{h.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-400">{h.text}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}