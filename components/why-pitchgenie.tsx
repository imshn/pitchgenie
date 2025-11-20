"use client";

import { ShieldCheck, Zap, Server, CreditCard, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Enterprise Infrastructure",
    text: "Firestore-backed secure data model tuned for real outbound volumes."
  },
  {
    icon: Zap,
    title: "Fast AI Generation",
    text: "OpenAI today, Groq tomorrow — responses optimized to feel instant."
  },
  {
    icon: Workflow,
    title: "Built for SDR Workflows",
    text: "Sequences, statuses, pipelines — built exactly for outbound roles."
  },
  {
    icon: Server,
    title: "Secure Auth & Storage",
    text: "Row-level protection, isolation & audit logs out of the box."
  },
  {
    icon: CreditCard,
    title: "Razorpay Billing",
    text: "Subscriptions, plans, recurring billing — native for India."
  }
];

export function WhyPitchGenie() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Why Teams Choose PitchGenie</h2>
      <p className="text-lg text-zinc-400 max-w-2xl">
        Under the clean UI, it’s a hardened outbound engine.
      </p>

      <div className="space-y-6 mt-10">
        {ITEMS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="
              border-l border-white/10 pl-6
            "
          >
            <div className="flex items-start gap-4">
              <item.icon className="h-5 w-5 text-sky-300 mt-1" />
              <div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-zinc-400 mt-1">{item.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}