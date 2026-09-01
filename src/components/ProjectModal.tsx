import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

const EASE = [0.16, 1, 0.3, 1] as const

interface ProjectModalProps {
  id: string | null
  onClose: () => void
}

const blocks = [
  { key: 'problem', label: 'Problem', field: 'problem' as const },
  { key: 'solution', label: 'Solution', field: 'solution' as const },
  { key: 'result', label: 'Result', field: 'result' as const },
]

export function ProjectModal({ id, onClose }: ProjectModalProps) {
  const project = projects.find((p) => p.id === id) ?? null

  useEffect(() => {
    if (!id) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [id, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] overflow-y-auto bg-black/70 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} case study`}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <div className="flex min-h-full items-start justify-center px-4 py-8 sm:py-14">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="glass-strong relative w-full max-w-3xl overflow-hidden rounded-3xl"
            >
              {/* accent header glow */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-40"
                style={{
                  background: `radial-gradient(60% 100% at 50% 0%, hsl(${project.previewHue} 80% 55% / 0.22), transparent 70%)`,
                }}
              />
              {/* header */}
              <div className="relative flex items-start justify-between gap-4 p-7 pb-4 sm:p-9 sm:pb-5">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-slate-300">{project.tagline}</p>
                </div>
                <button
                  onClick={onClose}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/15 hover:text-white"
                  aria-label="Close case study"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* case-study body */}
              <div className="relative space-y-8 px-7 pb-8 sm:px-9 sm:pb-9">
                {/* role + actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/5 py-4">
                  <span className="text-sm text-slate-400">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Role · </span>
                    {project.role}
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => project.demo === '#' && e.preventDefault()}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-800 to-indigo-800 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => project.repo === '#' && e.preventDefault()}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Problem / Solution / Result */}
                {blocks.map((block, i) => (
                  <motion.div
                    key={block.key}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE }}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-400/80">
                        {`0${i + 1}`} · {block.label}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-blue-400/30 to-transparent" />
                    </div>
                    <p className="text-[15px] leading-relaxed text-slate-300">{project[block.field]}</p>
                  </motion.div>
                ))}

                {/* Technology */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.34, ease: EASE }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-400/80">Technology</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-violet-400/30 to-transparent" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="glass-chip rounded-lg px-3 py-1.5 font-mono text-xs text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-400/80">Key Features</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />
                  </div>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-3 text-sm text-slate-300">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}