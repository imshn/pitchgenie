// This file assumes the necessary components (Header, Footer, Spotlight)
// and utilities (cn, motion) are imported and configured from the main project.
// In a real setup, this file must start with "use client";
"use client";
import React from 'react';
import cn from 'clsx'; 
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'; 

// --- Component Placeholders (Reused from previous structure) ---

const Spotlight = ({ className, fill }: { className?: string, fill?: string }) => (
  <div className={cn("absolute h-screen w-screen pointer-events-none", className)}>
    {/* [Aceternity Spotlight Component Placeholder] */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[400px] h-[400px] blur-[150px]" 
         style={{ background: fill || 'radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(14,14,17,0) 70%)' }} />
  </div>
);

// Placeholder for the shared Header (Ensure it links back to home)
const Header = () => (
    <header className="sticky top-0 z-50 w-full bg-[#0E0E11]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
                PitchGenie<span className="text-white/80">.in</span>
            </a>
            <a href="/" className="text-white/70 hover:text-red-500 transition font-medium">
                ← Back to Home
            </a>
        </div>
    </header>
);

// Placeholder for the shared Footer
const Footer = () => (
    <footer className="py-8 px-4 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto text-white/50 text-sm text-center">
            © PitchGenie 2025. All rights reserved.
        </div>
    </footer>
);


// ------------------------------------------------------------------------
// 1. Contact Form Component (Interactive and Client-side focused)
// ------------------------------------------------------------------------
const ContactForm = () => {
    // In a real app, this would handle form state and submission logic
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will be in touch shortly.');
    };

    const inputClasses = "w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/50 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition shadow-inner";
    const labelClasses = "block text-sm font-medium text-white/70 mb-2";

    return (
        <motion.form 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="w-full bg-black/40 border border-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-md shadow-2xl space-y-6"
        >
            <h3 className="text-3xl font-bold text-white mb-6">
                Send Us a Message
            </h3>
            
            <div>
                <label htmlFor="name" className={labelClasses}>Full Name</label>
                <input type="text" id="name" required className={inputClasses} placeholder="John Doe" />
            </div>

            <div>
                <label htmlFor="email" className={labelClasses}>Work Email</label>
                <input type="email" id="email" required className={inputClasses} placeholder="name@company.com" />
            </div>

            <div>
                <label htmlFor="subject" className={labelClasses}>Subject</label>
                <input type="text" id="subject" required className={inputClasses} placeholder="Enterprise Inquiry / Support Request" />
            </div>

            <div>
                <label htmlFor="message" className={labelClasses}>Your Message</label>
                <textarea 
                    id="message" 
                    rows={5} 
                    required 
                    className={cn(inputClasses, "resize-none")} 
                    placeholder="Tell us about your outreach goals..." 
                />
            </div>

            <button 
                type="submit"
                className="w-full py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-red-600 to-blue-600 text-white flex items-center justify-center space-x-2 shadow-lg shadow-red-500/50 hover:from-red-500 hover:to-blue-500 transition duration-300 transform hover:scale-[1.01]"
            >
                <Send className="w-5 h-5" />
                <span>Submit Inquiry</span>
            </button>
        </motion.form>
    );
};


// ------------------------------------------------------------------------
// 2. Info Cards Component
// ------------------------------------------------------------------------
const InfoCards = () => {
    const cards = [
        { 
            icon: Mail, 
            title: "Sales & Enterprise", 
            details: "sales@pitchgenie.in", 
            action: "mailto:sales@pitchgenie.in",
            iconColor: "text-red-500"
        },
        { 
            icon: Phone, 
            title: "Support Hotline", 
            details: "+1 (555) 123-4567", 
            action: "tel:+15551234567",
            iconColor: "text-blue-500"
        },
        { 
            icon: MessageSquare, 
            title: "Live Chat", 
            details: "Available M-F, 9am-5pm EST", 
            action: "#", // Placeholder for Tawk.to or Intercom link
            iconColor: "text-red-500"
        },
        { 
            icon: MapPin, 
            title: "Headquarters", 
            details: "San Francisco, CA, USA", 
            action: "#", 
            iconColor: "text-blue-500"
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="p-6 bg-black/40 border border-white/10 rounded-xl space-y-2 hover:border-red-500/40 transition duration-300 shadow-lg"
                >
                    <card.icon className={cn("w-6 h-6", card.iconColor)} />
                    <h4 className="text-lg font-semibold text-white pt-1">{card.title}</h4>
                    <p className="text-white/60 text-sm">{card.details}</p>
                    {card.action !== '#' && (
                        <a href={card.action} className="text-sm font-medium text-red-500 hover:text-red-400 transition block pt-2">
                            {card.title.includes('Chat') ? 'Start Chat' : card.title.includes('Sales') ? 'Email Us' : 'Call Now'}
                        </a>
                    )}
                </motion.div>
            ))}
        </div>
    );
};


// ------------------------------------------------------------------------
// 3. Main Contact Page Component
// ------------------------------------------------------------------------
const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#0E0E11] text-white font-sans antialiased flex flex-col">
            <Header />
            <main className="flex-grow relative py-20 px-4 overflow-hidden">
                <Spotlight className="top-10 left-1/4 h-[600px] w-[600px]" fill="rgba(239,68,68, 0.4)" />
                <div className="relative z-10 max-w-7xl mx-auto">
                    
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 mb-4">
                            Connect with PitchGenie
                        </h1>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            We're here to help founders, agencies, and sales teams reinvent their outreach.
                        </p>
                    </motion.div>
                    
                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Info Cards */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-semibold text-white mb-6">Our Contact Channels</h2>
                            <InfoCards />
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;