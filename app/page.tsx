import Sidebar from './components/shared/sidebar'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'

export default function Home() {
  return (
    <div className="flex bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
