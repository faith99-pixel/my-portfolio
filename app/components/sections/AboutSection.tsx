import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-2xl border border-[#1515151f] shadow-sm">
          <Image
            src="/images/zoe.jpeg"
            alt="Zoe Zebedee portrait"
            width={720}
            height={820}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="section-tag">About</span>
          <h2 className="section-title">Crafting user-centered products with strong frontend foundations.</h2>
          <p className="section-copy">
            I build modern web applications using React, Next.js, Tailwind CSS, and Angular. My focus is clear product thinking and dependable implementation.
          </p>
          <p className="section-copy">
            From early wireframe to polished interface, I prioritize accessibility, responsive behavior, and maintainable code patterns that support fast iteration.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card-paper p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-[#5f5c57]">Strength</p>
              <p className="mt-2 text-lg">UI architecture and component systems</p>
            </div>
            <div className="card-paper p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-[#5f5c57]">Focus</p>
              <p className="mt-2 text-lg">Performance and usability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
