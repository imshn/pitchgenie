"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="relative py-32">

      {/* Background Spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 
                        rounded-full blur-[140px]
                        bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="absolute right-1/3 bottom-0 h-[500px] w-[500px] 
                        rounded-full blur-[140px]
                        bg-[radial-gradient(circle,rgba(147,51,234,0.25),transparent_60%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-semibold tracking-tight"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-xl max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            Got a question? Want a demo? Or need help with outbound?
            <br />We typically respond within a few hours.
          </motion.p>
        </div>

        {/* Glass Panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="
            relative border border-white/10 rounded-3xl p-12
            bg-[rgba(255,255,255,0.03)] 
            backdrop-blur-3xl 
            shadow-[0_0_60px_rgba(0,0,0,0.35)]
          "
        >
          {/* Glow Edge */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.04]" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl 
                          bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-[0.05]" />

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* LEFT: Info */}
            <div className="space-y-12">

              <div>
                <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
                <p className="text-zinc-400 text-lg">
                  For demo access or dedicated support
                </p>

                <div className="flex items-center gap-3 text-xl text-zinc-200 mt-5">
                  <Mail className="h-6 w-6 text-sky-300" />
                  support@pitchgenie.in
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Availability</h3>
                <p className="text-zinc-400 text-lg">
                  Monday – Saturday  
                  <br />10 AM – 8 PM IST
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Response Time</h3>
                <p className="text-zinc-400 text-lg">
                  Typically within <span className="text-zinc-200">2–4 hours</span>
                </p>
              </div>

            </div>

            {/* RIGHT: Premium Form */}
            <form className="space-y-6">

              <FormInput placeholder="Your Name" />
              <FormInput placeholder="Your Email" type="email" />
              <FormTextarea placeholder="Tell us how we can help…" />

              <motion.button
                whileHover={{ y: -2, boxShadow: "0 0 40px rgba(56,189,248,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="
                  w-full rounded-xl py-4 text-black font-semibold text-lg
                  bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300
                  shadow-[0_0_25px_rgba(56,189,248,0.35)]
                  transition-all
                "
              >
                Send Message <Send className="inline h-5 w-5 ml-2" />
              </motion.button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =======================
   ULTRA PREMIUM INPUTS
========================= */

function FormInput({ placeholder, type = "text" }: any) {
  return (
    <motion.div whileFocus={{ scale: 1.01 }} className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full px-5 py-4 rounded-xl
          bg-white/[0.05] 
          border border-white/10
          text-zinc-100 placeholder:text-zinc-500
          focus:outline-none focus:border-sky-400/40
          transition-all text-lg
          shadow-[0_0_20px_rgba(0,0,0,0.15)]
        "
      />
    </motion.div>
  );
}

function FormTextarea({ placeholder }: any) {
  return (
    <motion.div whileFocus={{ scale: 1.01 }} className="relative">
      <textarea
        rows={5}
        placeholder={placeholder}
        className="
          w-full px-5 py-4 rounded-xl
          bg-white/[0.05] 
          border border-white/10
          text-zinc-100 placeholder:text-zinc-500
          focus:outline-none focus:border-sky-400/40
          transition-all text-lg
          shadow-[0_0_20px_rgba(0,0,0,0.15)]
        "
      />
    </motion.div>
  );
}