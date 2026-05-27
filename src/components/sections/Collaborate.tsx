"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/content";

const collabTypes = [
  { label: "Brands & Sponsors", desc: "Content partnerships and sponsored videos" },
  { label: "Founders", desc: "Technical co-founder or advisory support" },
  { label: "Students & Devs", desc: "Mentorship, career advice, roadmaps" },
  { label: "Dev Teams", desc: "Consulting, code reviews, architecture" },
];

export function Collaborate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-zinc-50/60" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
              Collaborate
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Open to the{" "}
              <span className="gradient-text">right opportunities.</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-12">
              Whether you&apos;re a brand, a founder, a student, or a team —
              I&apos;m open to collaborations that create real value.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {collabTypes.map((type, i) => (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="group p-5 rounded-2xl bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-md hover:shadow-orange-50 transition-all duration-300 text-left"
              >
                <p className="font-bold text-zinc-800 text-sm mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                  {type.label}
                </p>
                <p className="text-zinc-400 text-xs">{type.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200 glow-orange-sm"
            >
              <Mail className="w-4 h-4" />
              Send me an email
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-zinc-400 font-mono text-sm">{siteConfig.email}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
