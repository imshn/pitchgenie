"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function Preview3D() {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-semibold mb-4">Dashboard Preview</h2>
      <p className="text-lg text-zinc-400 max-w-2xl">
        A clean, fast workspace — sequences, leads, analytics & scraping in one place.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          mt-10 rounded-3xl border border-white/10 p-6
          bg-black/30 backdrop-blur-xl
          shadow-[0_30px_90px_rgba(0,0,0,0.45)]
        "
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-full h-60 rounded-2xl bg-zinc-900/60" />

          <button className="
            flex items-center gap-2 px-4 py-2
            border border-white/15 rounded-full text-zinc-200
            bg-black/40 backdrop-blur-xl
          ">
            <PlayCircle className="h-4 w-4" />
            Watch 60 sec Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}