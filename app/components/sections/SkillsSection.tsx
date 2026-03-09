import React from 'react'

const SkillsSection = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS']
    },
    {
      title: 'Product & UX',
      items: ['Responsive Design', 'Component Design', 'Accessibility', 'Interaction Design', 'Design QA']
    },
    {
      title: 'Engineering',
      items: ['API Integration', 'State Management', 'Git', 'Performance Optimization', 'Node.js', 'MongoDB']
    }
  ]

  return (
    <section id="skills" className="section-shell">
      <span className="section-tag">Skills</span>
      <h2 className="section-title">Tools and capabilities I use to ship quality products.</h2>
      <p className="section-copy">
        I combine design sensitivity with engineering rigor to build interfaces that are scalable and straightforward to maintain.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="card-paper p-6">
            <h3 className="text-xl font-semibold">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="rounded-full border border-[#1515151f] bg-white/70 px-3 py-1 text-sm text-[#3a3936]">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="card-paper mt-8 p-7 md:p-9">
        <h3 className="text-2xl font-semibold">Mission</h3>
        <p className="mt-3 max-w-3xl text-[#5f5c57]">
          To create elegant and practical digital experiences that solve real problems, support business goals, and feel effortless for users.
        </p>
      </div>
    </section>
  )
}

export default SkillsSection
