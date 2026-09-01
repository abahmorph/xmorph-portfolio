import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { Magnetic } from './ui/Magnetic'
import { profile } from '../data/profile'

const EASE = [0.16, 1, 0.3, 1] as const

const socials = [
  {
    label: 'X (Twitter)',
    value: '@iamxmorph',
    href: profile.links.x,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 6-7zm-1.3 19.4h2L6.5 3.3h-2.2l13.3 17.3z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: profile.email,
    href: profile.links.email,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zm0 1l8 6 8-6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/abahmorph',
    href: profile.links.github,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/abahmorph',
    href: profile.links.linkedin,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 100-4 2 2 0 000 4zM4 8v11m6-11v11m0-5.5c0-2 1.5-3.5 3.5-3.5S17 11.5 17 13.5V19" />
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Got something worth building?"
          description="Let's turn the idea into something impossible to ignore."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Social rail */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="space-y-4"
          >
            {socials.map((s) => (
              <Magnetic key={s.label} strength={0.2}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  className="glass group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-blue-700/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-800/30 to-indigo-900/30 text-blue-400 transition-colors group-hover:text-white">
                    {s.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{s.label}</span>
                    <span className="block truncate text-sm font-medium text-slate-200">{s.value}</span>
                  </span>
                </a>
              </Magnetic>
            ))}

            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-medium text-slate-200">{profile.availability}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Currently open to freelance, remote and collaborative work. Fastest reply is a direct message on X.
              </p>
            </div>
          </motion.div>

          {/* Contact CTA panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="glass-strong relative flex flex-col justify-center overflow-hidden rounded-3xl p-8 sm:p-12"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-800/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-indigo-900/20 blur-3xl" />

            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-blue-400/80">Start here</div>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Start a conversation
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-slate-400">
                The fastest way to reach me is a direct message on X. I'm most responsive there —
                ping{' '}
                <a
                  href={profile.links.x}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-400 underline decoration-blue-700/50 underline-offset-4 transition-colors hover:text-white"
                >
                  @iamxmorph
                </a>{' '}
                anytime.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Magnetic>
                  <a
                    href={profile.links.x}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-800 to-indigo-800 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-125"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 6-7zm-1.3 19.4h2L6.5 3.3h-2.2l13.3 17.3z" />
                    </svg>
                    Message me on X
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
                    href={profile.links.email}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zm0 1l8 6 8-6" />
                    </svg>
                    Email me
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}