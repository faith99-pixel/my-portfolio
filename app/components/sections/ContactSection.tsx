'use client'
import React, { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="section-shell pb-24">
      <span className="section-tag">Contact</span>
      <h2 className="section-title">Let&apos;s build something useful together.</h2>
      <p className="section-copy">Send details about your project and I&apos;ll reply as soon as possible.</p>

        <div className="mt-10 grid gap-7 md:grid-cols-2">
          <div className="card-paper p-6 md:p-7">
            <div>
              <h3 className="text-2xl font-semibold">Let&apos;s Connect</h3>
              <p className="mt-4 text-[#5f5c57]">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Feel free to reach out if you have any questions or just want to say hello!
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4 rounded-xl border border-[#1515151f] bg-white/70 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d6e6e]">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:zoezebedee1@gmail.com" className="text-[#0d6e6e] hover:underline">
                    zoezebedee1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-[#1515151f] bg-white/70 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d6e6e]">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/zebedee-zoe-0456a51aa/" target="_blank" rel="noopener noreferrer" className="text-[#0d6e6e] hover:underline">
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-[#1515151f] bg-white/70 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d6e6e]">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a href="https://github.com/faith99-pixel" target="_blank" rel="noopener noreferrer" className="text-[#0d6e6e] hover:underline">
                    View my code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-paper p-6 md:p-7">
            <h3 className="mb-6 text-2xl font-semibold">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#4f4b46]">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-[#fffdf9] px-4 py-3 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-300' : 'border-[#1515151f] focus:ring-[#0d6e6e55]'}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#4f4b46]">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-[#fffdf9] px-4 py-3 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-300' : 'border-[#1515151f] focus:ring-[#0d6e6e55]'}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#4f4b46]">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-[#fffdf9] px-4 py-3 focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-300' : 'border-[#1515151f] focus:ring-[#0d6e6e55]'}`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              
              {submitStatus === 'success' && (
                <div className="rounded-lg bg-green-600 p-3 text-white">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="rounded-lg bg-red-600 p-3 text-white">
                  Failed to send message. Please try again or email me directly.
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg transition-colors duration-200 font-semibold ${
                  isSubmitting 
                    ? 'cursor-not-allowed bg-[#6f706f]' 
                    : 'bg-[#0d6e6e] hover:bg-[#0a5a5a]'
                } text-white`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
    </section>
  )
}

export default ContactSection
