import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-extrabold text-white">
              X
            </span>
            <span className="font-extrabold uppercase tracking-[0.18em] text-white">{profile.wordmark}</span>
          </div>
          <p className="mt-2 text-sm text-slate-500">{profile.role}</p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { label: 'GitHub', href: profile.links.github },
            { label: 'LinkedIn', href: profile.links.linkedin },
            { label: 'X', href: profile.links.x },
            { label: 'Email', href: profile.links.email },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer noopener"
              className="glass-chip rounded-lg px-3 py-2 text-xs font-medium text-slate-400 transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-white/5 pt-6 text-center">
        <p className="font-mono text-xs text-slate-600">© 2026 Abah Michael Xmorph · Full-Stack Developer & Creative Technologist</p>
      </div>
    </footer>
  )
}