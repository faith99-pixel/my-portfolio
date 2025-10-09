'use client'
import React, { useState, useEffect } from 'react'

const HomeSection = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const texts = [
    'I am a Frontend Engineer',
    'I build user-centric websites',
    'Let\'s create a unique digital experience'
  ]
  
  useEffect(() => {
    let index = 0
    let isDeleting = false
    const currentText = texts[currentTextIndex]
    
    const timer = setInterval(() => {
      if (!isDeleting && index < currentText.length) {
        setDisplayText(currentText.slice(0, index + 1))
        index++
      } else if (!isDeleting && index === currentText.length) {
        setTimeout(() => { isDeleting = true }, 2000)
      } else if (isDeleting && index > 0) {
        setDisplayText(currentText.slice(0, index - 1))
        index--
      } else if (isDeleting && index === 0) {
        isDeleting = false
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)
    
    return () => clearInterval(timer)
  }, [currentTextIndex])

  return (
    <section 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/zoe.jpeg')" }}
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