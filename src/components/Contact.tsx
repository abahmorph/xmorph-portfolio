import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { Magnetic } from './ui/Magnetic'
import { profile } from '../data/profile'

const EASE = [0.16, 1, 0.3, 1] as const

const socials = [
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
  {
    label: 'X',
    value: '@abahmorph',
    href: profile.links.x,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l7 8m0 0l-7 8m7-8l6-8m-6 8l6 8M11 12L9 4m2 8l2 8" />
      </svg>
    ),
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

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
                  className="glass group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-blue-400/25"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-200 transition-colors group-hover:text-white">
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
                Currently open to freelance, remote and collaborative work. I usually respond within a day.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="glass-strong relative overflow-hidden rounded-3xl p-7 sm:p-9"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">Message ready to send</h3>
                <p className="mt-2 max-w-sm text-slate-400">
                  Thanks for reaching out. I'll get back to you at {profile.email}.
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-slate-400">Name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-blue-400/50 focus:bg-white/[0.07] focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-slate-400">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-blue-400/50 focus:bg-white/[0.07] focus:outline-none"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-slate-400">Project type</span>
                  <select
                    name="type"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors focus:border-blue-400/50 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-ink-900">Select an option</option>
                    <option className="bg-ink-900">Web application</option>
                    <option className="bg-ink-900">Website / landing page</option>
                    <option className="bg-ink-900">Full-stack product</option>
                    <option className="bg-ink-900">AI / automation</option>
                    <option className="bg-ink-900">Something else</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-slate-400">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me about what you want to build..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-blue-400/50 focus:bg-white/[0.07] focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-110"
                >
                  Start a Conversation
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <p className="text-center text-xs text-slate-600">
                  Or email me directly at{' '}
                  <a href={profile.links.email} className="text-blue-300/80 hover:text-blue-200">
                    {profile.email}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}