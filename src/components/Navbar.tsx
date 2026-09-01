import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrolled } from '../hooks/useScrolled'
import { Magnetic } from './ui/Magnetic'
import { profile } from '../data/profile'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const scrolled = useScrolled(50)
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      >
        <nav
          className={[
            'mt-4 flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 transition-all duration-500',
            scrolled
              ? 'glass-strong h-14 shadow-glow/40'
              : 'glass h-16 border-transparent',
          ].join(' ')}
        >
          <a href="#home" className="group flex items-center gap-2" aria-label="Xmorph home">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-extrabold text-white shadow-glow">
              X
            </span>
            <span
              className={[
                'font-extrabold uppercase tracking-[0.18em] transition-all duration-300',
                scrolled ? 'text-sm' : 'text-base',
              ].join(' ')}
            >
              {profile.wordmark}
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Magnetic>
              <a
                href="#contact"
                className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:brightness-110 md:inline-flex"
              >
                Let's Talk
              </a>
            </Magnetic>

            <button
              className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-200 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded bg-current transition-all duration-300 ${open ? 'top-[6px] rotate-45' : ''}`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[2px] w-full rounded bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-[2px] w-full rounded bg-current transition-all duration-300 ${open ? 'top-[6px] -rotate-45' : ''}`}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-4 top-20 z-40 glass-strong rounded-2xl p-4 md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}