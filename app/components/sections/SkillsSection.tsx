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
    <section id="skills" className=" pb-4 md:pb-16 md:pt-14 px-4 md:px-8">
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
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Mission</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            To create beautiful, functional, and impactful digital experiences that solve real-world problems and bring ideas to life.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection