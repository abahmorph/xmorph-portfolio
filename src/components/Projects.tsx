import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { StaggerContainer, StaggerItem } from './ui/Reveal'
import { TiltCard } from './ui/TiltCard'
import { projects, type Project } from '../data/projects'

const EASE = [0.16, 1, 0.3, 1] as const

/* Stylized product preview — an abstract "running interface" in the project's accent */
function ProjectPreview({ project }: { project: Project }) {
  const { previewHue } = project
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ background: `hsl(${previewHue} 45% 8%)` }}>
      {/* soft tint washes */}
      <div
        className="absolute -left-1/4 -top-1/4 h-[70%] w-[70%] rounded-full blur-[70px]"
        style={{ background: `hsl(${previewHue} 80% 55% / 0.28)` }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[70%] w-[70%] rounded-full blur-[70px]"
        style={{ background: `hsl(${(previewHue + 60) % 360} 80% 55% / 0.2)` }}
      />
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* mini web-app chrome */}
      <div className="absolute inset-x-4 top-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 h-2.5 w-24 rounded-full bg-white/10" />
        </div>
        {/* skeleton rows */}
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-1.5">
            <span
              className="h-5 w-5 rounded-md"
              style={{ background: `hsl(${previewHue + i * 12} 70% 55% / 0.5)` }}
            />
            <span className="h-2 flex-1 rounded bg-white/15" />
            <span className="h-2 w-8 rounded bg-white/10" />
            <span className="h-2 w-12 rounded bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (id: string) => void
}) {
  return (
    <TiltCard
      className="rounded-3xl"
      maxTilt={5}
      onClick={() => onOpen(project.id)}
    >
      {/* interactive "open case study" overlay keeps keyboard/tap accessible */}
      <div className="glass group relative cursor-pointer overflow-hidden rounded-3xl transition-colors duration-300 hover:border-white/15">
        {/* preview */}
        <div className="relative aspect-[16/9] w-full border-b border-white/5">
          <ProjectPreview project={project} />
          {/* hover scrim */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
          {/* status badge */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-200">
              {project.status}
            </span>
          </div>
          {/* name overlay */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="text-2xl font-extrabold tracking-tight text-white">{project.name}</div>
            <div className="mt-1 text-sm text-slate-300">{project.tagline}</div>
          </div>
        </div>

        {/* body */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="glass-chip rounded-lg px-2.5 py-1 font-mono text-[11px] text-slate-300"
              >
                {t}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-lg px-2.5 py-1 font-mono text-[11px] text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">{project.description}</p>

          <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
            <span className="text-xs font-medium text-slate-500">Role · {project.role}</span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-blue-300/80 transition-colors group-hover:text-blue-200">
              Open case study
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}

export function Projects({
  onOpen,
}: {
  onOpen: (id: string) => void
}) {
  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects built like real products"
          description="Each one started as a problem worth solving — then got engineered, designed and shipped. Click any project for the full case study."
        />

        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-2" stagger={0.12}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} onOpen={onOpen} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* note about adding real links */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-12 text-center text-sm text-slate-500"
        >
          More experiments are always in motion. Live demos & deeper write-ups are wired in as they ship.
        </motion.p>
      </div>
    </section>
  )
}