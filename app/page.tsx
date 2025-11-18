'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const FeatureIcon = ({ type }: { type: number }) => {
  const icons = {
    1: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    2: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    3: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    4: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    5: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    6: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  }
  return <div className="text-cyan-400">{icons[type as keyof typeof icons]}</div>
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="bg-black">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-white font-bold text-lg">PitchGenie</span>
            </div>

            {/* Navigation centered */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">Features</a>
              <a href="#why" className="text-white/70 hover:text-white transition-colors text-sm">Why Choose</a>
              <a href="#demo" className="text-white/70 hover:text-white transition-colors text-sm">Demo</a>
              <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact</Link>
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
              <a href="#features" className="block text-white/70 hover:text-white">Features</a>
              <a href="#why" className="block text-white/70 hover:text-white">Why Choose</a>
              <a href="#demo" className="block text-white/70 hover:text-white">Demo</a>
              <Link href="/contact" className="block text-white/70 hover:text-white">Contact</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 py-20 pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/20 via-transparent to-transparent rounded-full blur-3xl opacity-40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-white/80">AI-Powered B2B Outreach</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">Transform</span> <span className="text-white">Your Sales.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
            Generate personalized cold emails and LinkedIn messages with AI. Close more deals in less time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity">
              Join the Beta
            </button>
            <button className="px-8 py-3 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-xl">
              See How It Works
            </button>
          </div>
          <div className="w-full max-w-3xl grid grid-cols-3 gap-4 md:gap-6">
            {[{ label: 'Cold Emails' }, { label: 'LinkedIn Automation' }, { label: 'AI Personalization' }].map((item, idx) => (
              <div key={idx} className="group relative h-28 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/30 flex items-center justify-center">
                    <FeatureIcon type={(idx + 1) as any} />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative min-h-screen py-24 px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Everything you need to scale outreach from research to close</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: 1,
                title: 'AI Cold Email Generator', 
                desc: 'Personalized emails that convert. Our AI analyzes prospects and creates authentic messages that feel genuinely personal—not templated.',
              },
              { 
                icon: 2,
                title: 'LinkedIn Automation', 
                desc: 'Strategic sequences that scale. Connect with prospects and nurture relationships with AI-powered messages that increase acceptance rates by 3x.',
              },
              { 
                icon: 3,
                title: 'Email Sequences', 
                desc: 'Multi-touch campaigns that work. Adaptive sequences respond to prospect behavior and nurture leads automatically from outreach to close.',
              },
              { 
                icon: 4,
                title: 'Company Intelligence', 
                desc: 'Deep prospect research at scale. Automatic insights on company size, tech stack, funding, and team changes to craft compelling pitches.',
              },
              { 
                icon: 5,
                title: 'Lead Dashboard', 
                desc: 'Unified control center. Track engagement, organize leads, and monitor results—all in one intuitive interface for your entire team.',
              },
              { 
                icon: 6,
                title: 'Adaptive AI Modes', 
                desc: 'Industry-specific intelligence. Customized approach for founders, agencies, SDRs, and recruiters with tone and strategy that match your role.',
              },
            ].map((f, idx) => (
              <div key={idx} className="group rounded-2xl overflow-hidden cursor-pointer">
                <div className="relative p-8 h-full flex flex-col justify-between border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-2xl">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/30 flex items-center justify-center mb-4">
                      <FeatureIcon type={f.icon as any} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="relative min-h-screen py-24 px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/15 to-transparent rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See It In Action</h2>
            <p className="text-lg text-white/60">Watch how PitchGenie transforms your outreach</p>
          </div>
          <div className="relative group cursor-pointer rounded-2xl overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-black via-slate-900 to-black flex flex-col items-center justify-center gap-6 p-12 border border-white/10 backdrop-blur-xl rounded-2xl">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-white text-lg font-semibold">60 Second Demo</p>
                <p className="text-white/60 text-sm mt-2">See personalized campaigns in action</p>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[{ number: '5x', label: 'Faster Setup' }, { number: '93%', label: 'Higher Open Rates' }, { number: '3x', label: 'More Connections' }].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="relative min-h-screen py-24 px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-t from-purple-500/15 to-transparent rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose PitchGenie?</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">The platform trusted by 1000+ teams to close bigger deals faster</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { 
                title: 'Enterprise Security', 
                desc: 'Military-grade encryption, SOC 2 Type II compliant, 99.99% uptime. Your data is protected with industry-leading security standards.' 
              },
              { 
                title: 'Lightning Fast', 
                desc: 'Generate entire campaigns in seconds. Test variations, iterate quickly, and outpace your competition with instant AI-powered responses.' 
              },
              { 
                title: 'Built by Sales Experts', 
                desc: 'Every feature designed by SDRs and sales leaders who understand real workflow challenges. Workflows built for practitioners, not theorists.' 
              },
              { 
                title: 'Always Improving', 
                desc: 'Cutting-edge AI powered by OpenAI and Groq. Models continuously learn from your best-performing campaigns to get smarter.' 
              },
              { 
                title: 'Transparent Pricing', 
                desc: 'Pay only for what you use with per-email pricing. No long-term contracts, no hidden fees, no surprise charges. Complete pricing transparency.' 
              },
              { 
                title: 'Trusted at Scale', 
                desc: '1000+ founders and teams across industries already closing bigger deals with PitchGenie every day. Proven results across B2B, SaaS, and agencies.' 
              },
            ].map((b, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/50 flex items-center justify-center">
                  <span className="text-sm font-bold text-cyan-400">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{b.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-cyan-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Start Closing Bigger Deals Today</h2>
            <p className="text-lg text-white/60">Join 1000+ teams transforming their outreach with PitchGenie</p>
          </div>
          <form className="relative">
            <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent px-6 py-3 text-white placeholder-white/40 outline-none" required />
              <button type="submit" className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Get Access
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-white/50 mt-6">Limited beta spots available</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">PitchGenie</h3>
              <p className="text-sm text-white/60 leading-relaxed">AI platform trusted by 1000+ founders and sales teams. We help ambitious teams close bigger deals through personalized, data-driven outreach.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-sm text-white/60">
            <p>© 2025 PitchGenie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
