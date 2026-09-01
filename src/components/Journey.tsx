import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { timeline } from '../data/content'

const EASE = [0.16, 1, 0.3, 1] as const

export function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-24 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Journey"
          title="From first line to full stack"
          description="A cinematic path from learning the basics to building production-style products and pursuing remote work."
        />

        <div className="relative mt-20">
          {/* vertical line */}
          <motion.div
            className="absolute bottom-0 left-[19px] top-0 w-px origin-top bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent sm:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.6, ease: EASE }}
            aria-hidden
          />

          <div className="space-y-14">
            {timeline.map((item, i) => {
              const left = i % 2 === 0
              return (
                <div key={item.stage} className={`relative flex sm:items-center ${left ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                    className="absolute left-[11px] top-6 z-10 grid h-[16px] w-[16px] place-items-center rounded-full border border-blue-400/60 bg-ink-900 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-glow" />
                  </motion.div>

                  {/* card */}
                  <div className={`ml-12 w-full sm:ml-0 ${left ? 'sm:pr-[calc(50%+2.5rem)]' : 'sm:pl-[calc(50%+2.5rem)]'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.8, ease: EASE }}
                      className="glass group rounded-2xl p-6 transition-colors duration-300 hover:border-blue-400/20"
                    >
                      <div className="flex items-center gap-3">
                        <span className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.25em] text-blue-200">
                          {item.stage}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}