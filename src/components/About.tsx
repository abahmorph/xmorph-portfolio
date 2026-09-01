import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { StaggerContainer, StaggerItem } from './ui/Reveal'
import { aboutHighlights, stats } from '../data/content'

const EASE = [0.16, 1, 0.3, 1] as const

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="The person behind the build"
          description="Abah Michael Xmorph combines engineering, design, curiosity and execution to build things that work and feel right."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Profile glass card */}
          <StaggerContainer className="space-y-4">
            <StaggerItem>
              <div className="glass rounded-3xl p-8 lg:p-10">
                <div className="flex flex-wrap gap-2">
                  {aboutHighlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-blue-700/40 hover:text-white"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-slate-400">
                  <p>
                    I don't just build websites — I build <span className="font-semibold text-slate-200">digital products and experiences</span>.
                    From modern frontends to full-stack systems, APIs and intelligent features, I care about how a product feels, not just how it works.
                  </p>
                  <p>
                    Every project is treated like a real product: considered architecture, clean interfaces,
                    responsive behaviour, and deployment that actually ships. If I don't know something yet, I learn it — quickly, and in service of the product.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Stats */}
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className={s.label.length > 14 ? 'col-span-2' : ''}>
                <div className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-800/20 blur-2xl transition-opacity group-hover:opacity-100" />
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="text-gradient-brand text-3xl font-extrabold tracking-tight lg:text-4xl"
                  >
                    {s.figure}
                  </motion.div>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    {s.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}