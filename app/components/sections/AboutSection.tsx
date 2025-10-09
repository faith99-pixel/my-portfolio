import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-white pb-10 md:pb-14 md:pt-14 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 animate-pulse w-16"></span>
          </h2>
        </div>
        <div className="md:flex md:items-stretch md:gap-12">
          <div className="hidden md:block md:w-1/3">
            <Image
              src="/images/zoe.jpeg"
              alt="Zoe Zebedee"
              width={400}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed space-y-6 md:flex md:flex-col md:justify-center">
            <p>
              Hi, I'm Zebedee Zoe, a passionate Frontend Developer dedicated to crafting clean, responsive,
              and user-friendly web applications. I specialize in modern technologies like React, Next.js,
              Tailwind CSS, and Angular, building interfaces that are both visually appealing and highly functional.
            </p>

            <p>
              I enjoy turning ideas into interactive digital experiences, with a focus on performance,
              accessibility, and intuitive design. Whether it's developing from scratch or refining existing
              features, I approach every project with creativity, precision, and a love for problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection