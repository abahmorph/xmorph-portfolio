import { useState } from 'react'
import { Cursor } from './components/Cursor'
import { Background } from './components/Background'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Journey } from './components/Journey'
import { WhyMe } from './components/WhyMe'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [openProject, setOpenProject] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-200">
      <Cursor />
      <Background />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects onOpen={setOpenProject} />
        <Journey />
        <WhyMe />
        <Contact />
      </main>

      <Footer />
      <ProjectModal id={openProject} onClose={() => setOpenProject(null)} />
    </div>
  )
}