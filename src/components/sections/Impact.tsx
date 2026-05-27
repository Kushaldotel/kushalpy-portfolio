"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Code2, Calendar, Video } from "lucide-react";
import { stats } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  code: Code2,
  calendar: Calendar,
  video: Video,
};

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[\d]/g, "");
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * num) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-4">
            Impact & Numbers
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Results that{" "}
            <span className="gradient-text">speak.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Users;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <p
                  className="text-4xl font-black text-white mb-1"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  <AnimatedNumber value={stat.value} />
                </p>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
