import React from 'react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "HTML", "CSS/SCSS"],
      color: "bg-blue-500"
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "Responsive Design", "UI/UX best practices"],
      color: "bg-green-500"
    },
    {
      title: "Other Skills",
      skills: ["API integration", "State management", "Version control (Git)", "Performance optimization"],
      color: "bg-purple-500"
    }
  ]

  return (
    <section id="skills" className="min-h-screen bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 mb-8 text-center relative inline-block w-full">
          <span className="relative">
            Key Skills & Tools 
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 animate-pulse w-32"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 my-16 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
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