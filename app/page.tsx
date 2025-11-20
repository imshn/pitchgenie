// This entire file is structured as a single Next.js page component.
// NOTE: In a real project, all components using 'motion' must be in separate files
// with the "use client" directive at the very top.
"use client";
import React from 'react';
import cn from 'clsx'; 
import { motion } from 'framer-motion';
// --- Lucide Icons Imports ---
import { 
    Mail, Link, Clock, Search, Briefcase, Zap, Globe, User, Shield, Target, Menu, Phone
} from 'lucide-react'; 

// --- 1. Component Placeholders (Styling only) ---

const MagicGlobe = () => (
  <div className="absolute inset-0 z-0 opacity-50">
    {/* [MagicUI Globe/Particles Component Placeholder] */}
    <div className="w-full h-full bg-gradient-to-t from-[#0E0E11] via-transparent to-transparent" />
  </div>
);

const Spotlight = ({ className, fill }: { className?: string, fill?: string }) => (
  <div className={cn("absolute h-screen w-screen pointer-events-none", className)}>
    {/* [Aceternity Spotlight Component Placeholder] */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[400px] h-[400px] blur-[150px]" 
         style={{ background: fill || 'radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(14,14,17,0) 70%)' }} />
  </div>
);

// --- 2. Client-Side Components (Requires "use client") ---

// Client Component for 3D Feature Cards
const FeatureCard3D = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ rotateX: 0, rotateY: 0 }}
    whileHover={{ rotateX: 2, rotateY: -2 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    className={cn(
      "relative p-6 bg-black/30 border border-white/5 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-neon-glow transition-all duration-300 transform-gpu",
      className
    )}
    style={{ transformStyle: "preserve-3d" }}
  >
    {children}
  </motion.div>
);

// Client Component for Product Preview Animation
const AnimatedProductDemoCard = () => (
  <motion.div
    initial={{ rotateX: 10, rotateY: -10, scale: 0.8, opacity: 0 }}
    whileInView={{ rotateX: 0, rotateY: 0, scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative w-full h-[450px] md:h-[600px] bg-black/50 border-2 border-blue-500/50 rounded-3xl shadow-[0_0_100px_rgba(59,130,246,0.3)] p-4 transform-gpu"
    style={{ perspective: 1000 }}
  >
    <div className="absolute inset-0 bg-gray-900/50 rounded-2xl flex items-center justify-center">
      <div className="absolute inset-4 rounded-xl bg-gray-800/80 border border-blue-500/10 flex items-center justify-center">
        <Globe className="w-16 h-16 text-blue-400 opacity-60 mb-4" />
        <p className="text-white/80 text-lg">AI-Powered Dashboard View</p>
      </div>
      
      <button className="absolute bottom-8 right-8 px-6 py-3 bg-red-600 text-white font-bold rounded-full flex items-center space-x-2 shadow-lg hover:bg-red-500 transition">
        <Target className="w-5 h-5" />
        <span>Watch 60 sec demo</span>
      </button>
    </div>
    
    <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-clip-border bg-gradient-to-br from-red-500/50 to-blue-500/50 opacity-50" />
  </motion.div>
);


// --- 3. Navigation Header ---

const Header = () => (
    <header className="sticky top-0 z-50 w-full bg-[#0E0E11]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo/Brand */}
            <a href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
                PitchGenie<span className="text-white/80">.in</span>
            </a>
            
            {/* Navigation Links (Desktop) */}
            <nav className="hidden md:flex space-x-8">
                {['Features', 'Demo', 'Advantage', 'Contact'].map((item) => (
                    <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        className="text-white/70 hover:text-red-500 transition font-medium"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* CTA Button */}
            <button className="hidden md:block px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-md shadow-red-500/30 hover:from-red-500 hover:to-blue-500 transition">
                Join Beta
            </button>

            {/* Mobile Menu Icon */}
            <button className="md:hidden text-white">
                <Menu className="w-6 h-6" />
            </button>
        </div>
    </header>
);


// --- 4. Main Sections (Server Components) ---

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden text-center pt-24 pb-12 bg-[#0E0E11]">
    <MagicGlobe />
    <Spotlight className="top-0 left-1/2 -translate-x-1/2 h-[800px] w-[800px]" fill="rgba(239,68,68, 0.4)" />
    
    <div className="relative z-10 max-w-4xl px-4">
      {/* Floating Icons (Conceptual Visuals) */}
      <div className="absolute -top-10 left-1/4 animate-pulse"><Zap className="w-8 h-8 text-red-400" /></div>
      <div className="absolute top-10 right-1/4 animate-bounce-slow"><Link className="w-8 h-8 text-blue-400" /></div>
      <div className="absolute bottom-0 left-1/3 animate-spin-slow-reverse"><Mail className="w-8 h-8 text-red-400" /></div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-white mb-6"
      >
        AI Outreach Reinvented.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10"
      >
        Generate high-converting B2B emails, sequences & LinkedIn messages — powered by **deep personalization** and lead intelligence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-center space-x-4"
      >
        <button className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg shadow-red-500/50 hover:from-red-500 hover:to-blue-500 transition duration-300 transform hover:scale-105">
          Join the Beta
        </button>
        <button className="px-8 py-3 text-lg font-semibold rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition duration-300">
          Watch Demo
        </button>
      </motion.div>
    </div>
  </section>
);

const FeatureGrid = () => {
  const features = [
    { title: "AI Cold Email Generator", description: "Hyper-personalized outreach crafted by expert-tuned AI, using real-time data.", icon: Mail },
    { title: "LinkedIn Personalizer", description: "Auto-writes connection requests & timely follow-ups to keep the conversation flowing.", icon: Link },
    { title: "Email Sequences (3–5 Steps)", description: "Build professional, multi-touch flows for B2B outreach with automatic delay and smart sequencing.", icon: Clock },
    { title: "Smart Web Scraper", description: "PitchGenie scrapes target websites (About, Services, Founder) to inject deep personalization.", icon: Search },
    { title: "CRM Workspace", description: "All-in-one lead table with tags, notes, statuses, and timeline events for full context.", icon: Briefcase },
    { title: "AI Personas & Industry Modes", description: "Emails adapt to your role (Founder, SDR) and target industry (SaaS, Real Estate) for perfect tone.", icon: User },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-[#0E0E11] relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Engineered for Enterprise Outreach
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard3D key={index} className="hover:border-red-400/50">
            <feature.icon className="w-8 h-8 mb-4 text-red-400/80" />
            <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{feature.title}</h3>
            <p className="text-white/60">{feature.description}</p>
          </FeatureCard3D>
        ))}
      </div>
    </section>
  );
};

const ProductDemoSection = () => (
  <section id="demo" className="py-24 px-4 bg-[#0E0E11] relative overflow-hidden">
    <Spotlight className="top-1/4 right-0 h-[600px] w-[600px]" fill="rgba(59, 130, 246, 0.2)" />
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        The Future of Lead Intelligence
      </h2>
      <p className="text-xl text-white/70 max-w-3xl mx-auto mb-16">
        A clean, intuitive workspace where data and AI converge to drive meaningful conversations.
      </p>
      <AnimatedProductDemoCard /> 
    </div>
  </section>
);


const WhyPitchGenie = () => {
  const points = [
    { title: "Enterprise-Grade Infrastructure", description: "Built on battle-tested systems for high availability and security.", icon: Globe },
    { title: "Lightning-Fast AI", description: "Powered by advanced models (soon Groq for free inference) for instant generation.", icon: Zap },
    { title: "Secure & Reliable Backend", description: "Using Google Firestore for secure, scalable data management.", icon: Shield },
    { title: "Designed for SDR Workflows", description: "More than just emails—a complete system for BDRs, SDRs, and Growth teams.", icon: Target },
  ];

  return (
    <section id="advantage" className="py-24 px-4 bg-[#0E0E11] relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            The PitchGenie Advantage
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {points.map((point, index) => (
                <div
                    key={index}
                    className="p-6 border border-white/5 rounded-xl bg-black/40 backdrop-blur-sm hover:border-blue-400/40 transition duration-300"
                >
                    <point.icon className="w-10 h-10 mb-4 text-blue-400/80" />
                    <h3 className="text-xl font-semibold mb-2 text-white">{point.title}</h3>
                    <p className="text-white/60 text-sm">{point.description}</p>
                </div>
            ))}
        </div>
    </section>
  );
};

const EarlyAccessCTA = () => (
    <section className="py-24 px-4 bg-[#0E0E11] relative overflow-hidden">
        <Spotlight className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px]" fill="rgba(239,68,68,0.4)" />
        <div className="max-w-3xl mx-auto text-center relative z-10 p-10 bg-black/30 border border-white/5 rounded-3xl backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400 mb-4">
                Join the Founding Team
            </h2>
            <p className="text-xl text-white/70 mb-8">
                Be one of the first founders and agencies to use PitchGenie. Limited slots available.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                <input
                    type="email"
                    placeholder="Enter your professional email"
                    required
                    className="flex-1 px-5 py-3 rounded-full bg-black border border-white/10 text-white placeholder-white/50 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                />
                <button 
                    type="submit"
                    className="px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg shadow-red-500/50 hover:from-red-500 hover:to-blue-500 transition duration-300 transform hover:scale-[1.02]"
                >
                    Get Early Access
                </button>
            </form>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contact" className="py-24 px-4 bg-black border-t border-white/5">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
                Get in Touch
            </h2>
            <p className="text-lg text-white/70 mb-10">
                For enterprise inquiries, partnerships, or support, reach out to our team directly.
            </p>
            <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-red-500" />
                    <a href="mailto:sales@pitchgenie.in" className="text-xl text-white hover:text-red-400 transition">
                        sales@pitchgenie.in
                    </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-500" />
                    <p className="text-xl text-white">+1 (555) 123-4567</p>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
  <footer className="py-8 px-4 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
      <p className="mb-4 md:mb-0">© PitchGenie 2025. All rights reserved.</p>
      <nav className="flex space-x-6">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
    </div>
  </footer>
);


// --- Main Page Component ---
const PitchGenieLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0E0E11] text-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <FeatureGrid />
        <ProductDemoSection />
        <WhyPitchGenie />
        <EarlyAccessCTA />
        <ContactSection /> {/* New Contact Section */}
      </main>
      <Footer />
    </div>
  );
};

export default PitchGenieLandingPage;