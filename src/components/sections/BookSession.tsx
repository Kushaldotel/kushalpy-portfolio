"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, Briefcase, Lightbulb, Handshake, ArrowRight, Calendar } from "lucide-react";
import { sessionTypes, siteConfig } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  "user-check": UserCheck,
  briefcase: Briefcase,
  lightbulb: Lightbulb,
  handshake: Handshake,
};

export function BookSession() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="book" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/50" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
              Book a Session
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Let&apos;s work{" "}
              <span className="gradient-text">together.</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg">
              Whether you want to level up your dev career, need help with a
              project, want to discuss a collaboration, or want to hire me —
              book a session and let&apos;s make it happen.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {sessionTypes.map((type, i) => {
                const Icon = iconMap[type.icon] ?? UserCheck;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="group p-5 rounded-xl bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-md hover:shadow-orange-50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <Icon className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                        {type.duration}
                      </span>
                    </div>
                    <p className="font-bold text-sm text-zinc-800 mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                      {type.title}
                    </p>
                    <p className="text-zinc-600 text-xs">{type.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — booking CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 lg:p-10 rounded-3xl bg-white border border-orange-100 shadow-xl shadow-orange-50/50 glow-orange-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 glow-orange">
                <Calendar className="w-7 h-7 text-white" />
              </div>

              <h3
                className="text-2xl font-black mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Pick a time that works.
              </h3>
              <p className="text-zinc-500 text-sm mb-8">
                Book a 1-on-1 session directly in my calendar. Slots are
                limited — grab yours before they fill up.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "1-on-1 video call",
                  "Tailored to your goals",
                  "Real, actionable advice",
                  "Follow-up resources included",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                    </div>
                    <span className="text-zinc-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-base hover:opacity-90 hover:scale-[1.02] transition-all duration-200 glow-orange"
              >
                Schedule Your Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-xs text-zinc-500 mt-4">
                Powered by Calendly · Free to book
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
