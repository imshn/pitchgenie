'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="bg-black min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-white font-bold text-lg">PitchGenie</span>
            </Link>

            {/* Navigation centered */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/#features" className="text-white/70 hover:text-white transition-colors text-sm">Features</a>
              <a href="/#why" className="text-white/70 hover:text-white transition-colors text-sm">Why Choose</a>
              <a href="/#demo" className="text-white/70 hover:text-white transition-colors text-sm">Demo</a>
              <a href="/contact" className="text-cyan-400 font-medium transition-colors text-sm">Contact</a>
            </div>

            {/* CTA button on the right */}
            <div className="hidden md:block">
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm">
                Join Beta
              </button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-black border-t border-white/10 p-4 space-y-4 mt-4">
              <a href="/#features" className="block text-white/70 hover:text-white">Features</a>
              <a href="/#why" className="block text-white/70 hover:text-white">Why Choose</a>
              <a href="/#demo" className="block text-white/70 hover:text-white">Demo</a>
              <a href="/contact" className="block text-cyan-400 font-medium">Contact</a>
            </div>
          )}
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20 pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/15 via-transparent to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-emerald-500/10 via-transparent to-transparent rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative z-10 max-w-2xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-white/60">Have questions about PitchGenie? We'd love to help you start closing bigger deals.</p>
          </div>

          <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            {submitted && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-2xl backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white text-xl font-semibold">Message sent successfully!</p>
                  <p className="text-white/60 text-sm mt-2">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none"
                  placeholder="How can we help you? Tell us about your outreach goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/50 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-white/60 text-sm">hello@pitchgenie.com</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/50 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Response Time</h3>
              <p className="text-white/60 text-sm">Within 24 hours</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/50 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Location</h3>
              <p className="text-white/60 text-sm">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 px-4 py-8">
        <div className="max-w-6xl mx-auto text-center text-sm text-white/60">
          <p>© 2025 PitchGenie. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
