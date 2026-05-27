"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import {
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  ThreadsIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/content";

const socials = [
  { Icon: YoutubeIcon, label: "YouTube", href: siteConfig.social.youtube },
  { Icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.social.linkedin },
  { Icon: TwitterIcon, label: "X (Twitter)", href: siteConfig.social.twitter },
  { Icon: InstagramIcon, label: "Instagram", href: siteConfig.social.instagram },
  { Icon: FacebookIcon, label: "Facebook", href: siteConfig.social.facebook },
  { Icon: ThreadsIcon, label: "Threads", href: siteConfig.social.threads },
];

const reasons = [
  "Got a project you want to build",
  "Looking to hire a backend engineer",
  "Want to collaborate on content",
  "Need a consultation or code review",
  "Just want to say hi",
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s <span className="gradient-text">connect.</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Have a project, a question, or just want to say hi? My inbox is
            always open — email me directly.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-lg shadow-orange-50/60 mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 glow-orange-sm">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-zinc-800 text-lg mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                Drop me an email
              </p>
              <p className="text-zinc-500 text-sm">
                The fastest way to reach me. I reply within 24 hours.
              </p>
            </div>
          </div>

          <ul className="space-y-2 mb-8">
            {reasons.map((reason, i) => (
              <motion.li
                key={reason}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.07 }}
                className="flex items-center gap-3 text-sm text-zinc-600"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                {reason}
              </motion.li>
            ))}
          </ul>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-base hover:opacity-90 hover:scale-[1.02] transition-all duration-200 glow-orange"
          >
            {siteConfig.email}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <p className="text-sm font-semibold text-zinc-500 mb-4 text-center">
            Or find me on
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-zinc-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
              >
                <social.Icon className="w-4 h-4 text-zinc-400 group-hover:text-orange-500 transition-colors" />
                <span className="text-sm font-medium text-zinc-600 group-hover:text-orange-600 transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
