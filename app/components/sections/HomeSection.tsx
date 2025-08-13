'use client'
import React, { useState, useEffect } from 'react'

const HomeSection = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'I am a Frontend Engineer'
  
  useEffect(() => {
    let index = 0
    let isDeleting = false
    
    const timer = setInterval(() => {
      if (!isDeleting && index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else if (!isDeleting && index === fullText.length) {
        setTimeout(() => { isDeleting = true }, 2000)
      } else if (isDeleting && index > 0) {
        setDisplayText(fullText.slice(0, index - 1))
        index--
      } else if (isDeleting && index === 0) {
        isDeleting = false
      }
    }, isDeleting ? 50 : 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/zee.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4 md:px-8">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Zoe Zebedee</h1>
          <p className="text-2xl">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection