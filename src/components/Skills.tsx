import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { StaggerContainer, StaggerItem } from './ui/Reveal'
import { skillGroups } from '../data/skills'

const EASE = [0.16, 1, 0.3, 1] as const

const groupIcons: Record<string, JSX.Element> = {
  UI: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm2 3h12" />
    </svg>
  ),
  DB: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7m0 5c0 1.7-3.6 3-8 3s-8-1.3-8-3" />
    </svg>
  ),
  DEPLOY: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3l-7 11h5v7l7-11h-5z" />
    </svg>
  ),
  AI: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1m0-12.8l-2.1 2.1M7.7 16.3l-2.1 2.1M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
}

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A full modern technology ecosystem"
          description="The tools I reach for to design, build and ship real products — from the interface layer down to the data and deployment. Hover a technology to see how I use it."
        />

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2" stagger={0.1}>
          {skillGroups.map((group) => {
            const activeDesc = group.skills.find((s) => s.name === activeSkill)?.use
            return (
              <StaggerItem key={group.label}>
                <div className="glass group relative overflow-hidden rounded-3xl p-6">
                  {/* corner glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-200">
                      {groupIcons[group.icon]}
                    </span>
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                      {group.label}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <button
                        key={skill.name}
                        type="button"
                        onMouseEnter={() => setActiveSkill(skill.name)}
                        onFocus={() => setActiveSkill(skill.name)}
                        onMouseLeave={() => setActiveSkill(null)}
                        onBlur={() => setActiveSkill(null)}
                        className={[
                          'rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300',
                          activeSkill === skill.name
                            ? 'border border-blue-400/50 bg-blue-500/15 text-white shadow-glow'
                            : 'glass-chip text-slate-200 hover:border-blue-400/30 hover:text-white',
                        ].join(' ')}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>

                  {/* Description window */}
                  <div className="mt-4 min-h-[3.5rem]">
                    <AnimatePresence mode="wait">
                      {activeDesc ? (
                        <motion.p
                          key={activeSkill}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          className="rounded-xl border border-blue-400/15 bg-blue-500/5 px-4 py-3 text-sm leading-relaxed text-blue-100/85"
                        >
                          <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-blue-300/70">
                            Use
                          </span>
                          {activeDesc}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="hint"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="px-1 pt-1 font-mono text-[11px] text-slate-600"
                        >
                          ▸ hover a technology
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}