"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function EarlyAccessCTA() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          rounded-3xl border border-white/10 p-10
          bg-gradient-to-r from-sky-500/10 via-purple-600/10 to-emerald-500/10
          backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.35)]
        "
      >
        <h2 className="text-3xl font-semibold mb-2">Get Early Access</h2>
        <p className="text-lg text-zinc-300 max-w-xl mb-6">
          Join the beta for early features, support & onboarding priority.
        </p>

        <form className="flex gap-3 max-w-md">
          <input
            placeholder="you@company.com"
            className="
              flex-1 rounded-xl px-4 py-3 bg-black/40
              border border-white/10 text-zinc-200
            "
          />

          <motion.button
            whileHover={{ y: -2 }}
            className="
              rounded-xl px-5 py-3 text-black font-semibold
              bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300
              shadow-[0_0_35px_rgba(56,189,248,0.35)]
            "
          >
            Join <ArrowRight className="inline h-4 w-4 ml-1" />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}