'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const HomeSection = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const texts = [
    'I design interfaces people remember.',
    'I build clean products that scale.',
    'I turn ideas into production-ready web apps.'
  ]
  
  useEffect(() => {
    const currentText = texts[currentTextIndex]
    let frame = 0
    let deleting = false

    const loop = window.setInterval(() => {
      if (!deleting && frame <= currentText.length) {
        setDisplayText(currentText.slice(0, frame))
        frame += 1
      } else if (!deleting) {
        deleting = true
      } else if (frame > 0) {
        frame -= 1
        setDisplayText(currentText.slice(0, frame))
      } else {
        deleting = false
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, 95)

    return () => window.clearInterval(loop)
  }, [currentTextIndex])

  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-24 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="section-tag">Portfolio 2026</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Frontend engineering with bold visuals and practical performance.
          </h1>
          <p className="mt-5 min-h-[32px] text-lg text-[#4f4b46] md:text-xl">
            {displayText}
            <span className="ml-0.5 animate-pulse">|</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="rounded-full bg-[#0d6e6e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#0a5a5a]">
              View Projects
            </Link>
            <Link href="#contact" className="rounded-full border border-[#15151530] bg-[#fbf8f2] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#151515] transition-colors hover:bg-[#efe9df]">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="card-paper relative overflow-hidden p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-[#4f4b46]">Quick Intro</p>
          <p className="mt-4 text-lg leading-relaxed text-[#2a2826]">
            I am Zoe Zebedee, a frontend engineer focused on responsive architecture, refined UI systems, and smooth interactions that keep users engaged.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#1515151f] bg-white/60 p-4">
              <p className="text-2xl font-semibold">20+</p>
              <p className="text-sm text-[#5f5c57]">Delivered interfaces</p>
            </div>
            <div className="rounded-xl border border-[#1515151f] bg-white/60 p-4">
              <p className="text-2xl font-semibold">4+</p>
              <p className="text-sm text-[#5f5c57]">Years experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
