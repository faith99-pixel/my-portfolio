import React from 'react'

const SkillsSection = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Angular", "HTML", "CSS/SCSS",
    "Tailwind CSS", "Responsive Design", "UI/UX Design", "API Integration", 
    "State Management", "Git", "Performance Optimization", "Node.js", "MongoDB"
  ]

  return (
    <section id="skills" className="min-h-screen bg-gray-50 pt-16 pb-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 mb-8 text-center relative inline-block w-full">
          <span className="relative">
            Key Skills & Tools 
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 animate-pulse w-32"></span>
          </span>
        </h2>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Skills</h3>
            <p className="text-gray-600">Technologies and tools I work with</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  index % 4 === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' :
                  index % 4 === 1 ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' :
                  index % 4 === 2 ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' :
                  'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="relative bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-10 text-center overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
          
          <div className="absolute top-6 left-8 text-8xl text-blue-500/40 font-serif leading-none select-none">&ldquo;</div>
          <div className="absolute bottom-6 right-8 text-8xl text-purple-500/40 font-serif leading-none rotate-180 select-none">&ldquo;</div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 italic">My Mission</h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed italic font-medium">
              To create beautiful, functional, and impactful digital experiences that solve real-world problems and bring ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection