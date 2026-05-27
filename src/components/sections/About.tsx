"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Hammer, Users } from "lucide-react";
import { trustCards } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  "code-2": Code2,
  "graduation-cap": GraduationCap,
  hammer: Hammer,
  users: Users,
};

const EASE = [0.22, 1, 0.36, 1] as const;

function FadeFrom({
  children,
  delay,
  x = 0,
  y = 0,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — sequential reveal */}
          <div>
            {/* 1. Label */}
            <motion.p
              className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: -12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0, ease: EASE }}
            >
              About Me
            </motion.p>

            {/* 2. Heading slides from left */}
            <motion.h2
              className="text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-syne)" }}
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            >
              Building things that{" "}
              <span className="gradient-text">actually matter.</span>
            </motion.h2>

            {/* 3. Paragraphs stagger in */}
            <div className="space-y-4 text-zinc-500 leading-relaxed">
              {[
                "I'm Kushal — a full-time Python Django backend and platform engineer who builds products, creates educational content, and helps developers level up their careers.",
                "I've scaled products to over 50K users, shipped 30+ projects across web and mobile, and spent years teaching through YouTube — breaking down complex tech into real, actionable knowledge. My core stack: Next.js, Python/Django DRF, AWS, GCP, Celery, and Redis.",
                "Whether it's freelance work, a consultation, a code review, or just figuring out your next move as a developer — I've got you. Let's build something real.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.35 + i * 0.13, ease: EASE }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right — cards come in one by one from right */}
          <div className="grid grid-cols-2 gap-4">
            {trustCards.map((card, i) => {
              const Icon = iconMap[card.icon] ?? Code2;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: EASE }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-6 rounded-2xl border border-zinc-100 bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <p className="font-bold text-zinc-800 text-sm">{card.label}</p>
                </motion.div>
              );
            })}

            {/* Orange CTA card — last to appear */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + trustCards.length * 0.15, ease: EASE }}
              className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white"
            >
              <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                Ready to collaborate?
              </p>
              <p className="text-orange-100 text-sm">
                From MVP builds to content partnerships — let&apos;s talk.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
