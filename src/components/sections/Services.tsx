"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Briefcase,
  Lightbulb,
  UserCheck,
  Video,
  Rocket,
} from "lucide-react";
import { services } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  "code-2": Code2,
  briefcase: Briefcase,
  lightbulb: Lightbulb,
  "user-check": UserCheck,
  youtube: Video,
  rocket: Rocket,
};

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-zinc-50/60" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
            What I Do
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            How I can{" "}
            <span className="gradient-text">help you.</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            From shipping your product to teaching you how — I do it all.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            const col = i % 3;
            const initX = col === 0 ? -50 : col === 2 ? 50 : 0;
            const initY = col === 1 ? 40 : 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: initX, y: initY }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-7 rounded-2xl bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/0 group-hover:from-orange-50/60 group-hover:to-orange-100/20 transition-all duration-500 pointer-events-none rounded-2xl" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3
                    className="font-bold text-zinc-800 text-lg mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
