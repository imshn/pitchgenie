"use client";

import { motion } from "framer-motion";
import { Sparkles, Play, Mail, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="pb-10">
      <div className="text-center space-y-6">

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
            AI Outreach
          </span>{" "}
          Reinvented.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
          Generate high-converting B2B emails, sequences & LinkedIn messages —
          powered by deep personalization & scraping intelligence.
        </p>

        <div className="flex justify-center gap-4 pt-4">

          <motion.button
            whileHover={{ y: -2 }}
            className="
              bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300
              text-black font-medium px-6 py-3 rounded-full
              shadow-[0_0_35px_rgba(56,189,248,0.4)]
            "
          >
            Join the Beta
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            className="
              border border-white/15 px-5 py-3
              rounded-full text-zinc-200 backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4" /> Watch Demo
            </div>
          </motion.button>

        </div>
      </div>

      {/* CLEAN SMALL 3D CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="
          mt-20 mx-auto max-w-xl
          rounded-3xl border border-white/10
          bg-black/40 backdrop-blur-xl
          p-6 shadow-[0_30px_90px_rgba(0,0,0,0.4)]
        "
      >
        <div className="text-sm text-zinc-300 flex items-center justify-between mb-3">
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-sky-300" /> AI Cold Email
          </span>
          <span className="text-emerald-300 text-xs">Personalized ✓</span>
        </div>

        <div className="rounded-xl bg-zinc-900/60 p-4 text-zinc-200 text-sm">
          <p>
            Hi Alex — noticed on your{" "}
            <span className="text-sky-300">pricing page</span> that you're
            pushing annual plans. Built something that could help you increase
            demo calls by 2×.
          </p>
        </div>

        <div className="mt-3 flex justify-between text-xs text-zinc-500">
          <span>Scraped from acmeanalytics.com</span>
          <span className="flex items-center gap-1">
            <Linkedin className="h-3 w-3 text-sky-400" /> LinkedIn step ready
          </span>
        </div>

      </motion.div>
    </section>
  );
}