'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const resumeViewUrl = 'https://drive.google.com/file/d/1s6-1uU2_djASbgpbRtqW1G34RdYSpMQ4/view?usp=sharing'
const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=1s6-1uU2_djASbgpbRtqW1G34RdYSpMQ4'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showResumeModal, setShowResumeModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (!element) continue
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(item.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#1515151f] bg-[#0f0f0f]/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#home" className="text-xl font-semibold text-white">
            Zoe Zebedee
          </a>

          <ul className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${activeSection === item.id ? 'bg-[#ffffff24] text-white' : 'text-[#d7d7d7] hover:bg-[#ffffff14] hover:text-white'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => setShowResumeModal(true)}
              className="rounded-full border border-[#ffffff35] px-4 py-2 text-sm text-white transition-colors hover:bg-[#ffffff14]"
            >
              Resume
            </button>
            <Link href="mailto:zoezebedee1@gmail.com" className="rounded-full bg-[#0d6e6e] px-4 py-2 text-sm text-white transition-colors hover:bg-[#0a5a5a]">
              Hire Me
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full border border-[#ffffff30] p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-30 bg-black/45 md:hidden" onClick={() => setIsOpen(false)} />
          <div className="no-scrollbar fixed inset-x-4 top-24 z-40 max-h-[68vh] overflow-y-auto rounded-2xl border border-[#1515151f] bg-[#0f0f0f] p-4 md:hidden">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-[15px] transition-colors ${activeSection === item.id ? 'bg-[#ffffff22] text-white' : 'text-[#d7d7d7] hover:bg-[#ffffff14] hover:text-white'}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setShowResumeModal(true)
                  }}
                  className="mt-2 block w-full rounded-lg border border-[#ffffff26] px-3 py-2.5 text-left text-[15px] text-[#ececec] transition-colors hover:bg-[#ffffff14]"
                >
                  Resume
                </button>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[#c2c2c2]">Open to freelance and full-time opportunities.</p>
          </div>
        </>
      )}

      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl border border-[#1515151f] bg-[#f5f0e8] p-6 shadow-xl">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0d6e6e1f]">
                <svg className="h-7 w-7 text-[#0d6e6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#151515]">Download Resume</h3>
              <p className="mb-6 text-[#56534f]">Choose how you want to open your resume.</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="flex-1 rounded-lg border border-[#1515151f] px-4 py-2 text-[#3f3d39] transition-colors hover:bg-[#ede8df]"
                >
                  Cancel
                </button>
                <a
                  href={resumeViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg border border-[#1515151f] px-4 py-2 text-center text-[#3f3d39] transition-colors hover:bg-[#ede8df]"
                >
                  View
                </a>
                <a
                  href={resumeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-[#0d6e6e] px-4 py-2 text-center text-white transition-colors hover:bg-[#0a5a5a]"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
