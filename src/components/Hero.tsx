import { motion, useReducedMotion } from 'framer-motion'
import { PortraitFlip } from './PortraitFlip'
import { Magnetic } from './ui/Magnetic'
import { profile } from '../data/profile'

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT — text */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-slate-300">
              {profile.availability}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
            className="mt-7 font-mono text-[11px] uppercase tracking-[0.45em] text-blue-400/80"
          >
            ABAH MICHAEL XMORPH
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.26, ease: EASE }}
            className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.3rem]"
          >
            <span className="text-gradient">I build digital experiences</span>
            <br />
            <span className="text-gradient-brand">that demand attention.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.42, ease: EASE }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0"
          >
            Full-stack developer and creative technologist building modern web applications,
            intelligent experiences, and digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.58, ease: EASE }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-800 to-indigo-800 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-110"
              >
                Explore My Work
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.links.x}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:text-white"
              >
                Let's Build Something
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mt-12 flex items-center justify-center gap-6 text-xs text-slate-500 lg:justify-start"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-700" />
            <span className="font-mono tracking-[0.3em] uppercase">Full-Stack · AI · Products</span>
          </motion.div>
        </div>

        {/* RIGHT — signature portrait */}
        <div className="relative z-10">
          <PortraitFlip
            src={`${import.meta.env.BASE_URL}portrait.jpg`}
            name={profile.name}
            role={profile.role}
          />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <a
          href="#about"
          aria-label="Scroll to about"
          className="flex flex-col items-center gap-2 text-slate-600 transition-colors hover:text-slate-300"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.span>
        </a>
      </motion.div>
    </section>
  )
}