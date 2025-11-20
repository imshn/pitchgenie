"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Layers3, Globe2, Database, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: Mail,
    title: "AI Cold Email Generator",
    text: "Hyper-personalized emails crafted using scraped context, personas & tonality."
  },
  {
    icon: Linkedin,
    title: "LinkedIn Personalizer",
    text: "Writes connection requests & follow-ups that sound human — not AI."
  },
  {
    icon: Layers3,
    title: "3–5 Step Email Sequences",
    text: "Multi-touch flows that convert better, stay human & scale easily."
  },
  {
    icon: Globe2,
    title: "Smart Web Scraper",
    text: "Scrapes About/Services/Founder info & injects into emails automatically."
  },
  {
    icon: Database,
    title: "CRM Workspace",
    text: "Lead table, tags, statuses, notes & analytics — everything in one clean UI."
  },
  {
    icon: Sparkles,
    title: "AI Personas & Industry Modes",
    text: "Switch tone for founder/SDR or industry like SaaS/Agency/Real Estate."
  },
];

export function Features() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">What PitchGenie Does</h2>
      <p className="text-lg text-zinc-400 max-w-2xl">
        A premium outbound system — clean, powerful, enterprise-grade.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="
              rounded-3xl border border-white/10 p-6
              bg-black/30 backdrop-blur-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <f.icon className="h-5 w-5 text-sky-300" />
              <h3 className="text-xl font-medium">{f.title}</h3>
            </div>

            <p className="text-zinc-400 text-base leading-relaxed">
              {f.text}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}