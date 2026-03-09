import Sidebar from './components/shared/sidebar'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-canvas text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />
      </div>
      <Sidebar />
      <main className="flex-1 pt-20">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
