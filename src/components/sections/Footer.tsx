"use client";

import { Zap, Mail } from "lucide-react";
import {
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  ThreadsIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Videos", href: "#videos" },
  { label: "Blog", href: "/blog" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
  { Icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { Icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter / X" },
  { Icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { Icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { Icon: ThreadsIcon, href: siteConfig.social.threads, label: "Threads" },
  { Icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span
                className="font-bold text-lg tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Kushal<span className="text-orange-400">.</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm max-w-xs">
              Software engineer, tech creator, and builder. Based online, available worldwide.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500/20 hover:text-orange-400 text-zinc-400 transition-all duration-200"
              >
                <social.Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
