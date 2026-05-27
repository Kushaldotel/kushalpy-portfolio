"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, Users, Star } from "lucide-react";
import { siteConfig, stats } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-20">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-medium text-orange-700">
                Open to freelance & collaborations
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Engineer.
              <br />
              <span className="gradient-text">Creator.</span>
              <br />
              Builder.
            </motion.h1>

            {/* Sub */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg text-zinc-500 max-w-lg leading-relaxed mb-4"
            >
              I build software products, teach people how to code, and help
              founders ship faster. Software engineer by trade, content creator
              by passion, builder at heart.
            </motion.p>

            {/* Credibility */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-sm font-semibold text-orange-600 mb-8 flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Scaled products to 50K+ users
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#book"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200 glow-orange-sm"
              >
                Book a Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#videos"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border-2 border-zinc-900 text-zinc-900 font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-current" />
                Recent Videos
              </a>
            </motion.div>
          </div>

          {/* Right — floating card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Profile card */}
            <motion.div
              animate={{ y: [0, -14] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatType: "mirror", ease: [0.45, 0, 0.55, 1] }}
              className="relative z-10 glass rounded-3xl p-8 glow-orange-sm border border-orange-100/60 max-w-sm mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-orange-200 glow-orange-sm flex-shrink-0">
                  <Image
                    src="/profile.jpg"
                    alt={siteConfig.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <p
                    className="font-bold text-lg"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {siteConfig.name}
                  </p>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-orange-500 transition-colors"
                  >
                    Software Engineer & Creator
                  </a>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-orange-50 rounded-xl p-3 text-center"
                  >
                    <p
                      className="text-2xl font-black text-orange-600"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2 pt-4 border-t border-orange-100">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-orange-400 fill-orange-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-zinc-500">
                  Trusted by 50K+ users worldwide
                </span>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, 10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: [0.45, 0, 0.55, 1],
                delay: 0.4,
              }}
              className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-3 border border-orange-100 shadow-sm"
            >
              <p className="text-xs font-semibold text-orange-600">
                🔥 Available Now
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: [0.45, 0, 0.55, 1],
                delay: 0.8,
              }}
              className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 border border-orange-100 shadow-sm"
            >
              <p className="text-xs font-semibold text-zinc-700">
                ✅ 10+ Projects Shipped
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-400 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 7] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: "mirror", ease: [0.45, 0, 0.55, 1] }}
          className="w-5 h-8 rounded-full border-2 border-zinc-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-orange-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
