"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { videos, siteConfig } from "@/data/content";

function ReelCard({
  video,
  index,
  inView,
}: {
  video: (typeof videos)[0];
  index: number;
  inView: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="group rounded-2xl overflow-hidden bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 flex flex-col"
    >
      {/* Embed / placeholder */}
      <div className="relative aspect-[9/16] bg-zinc-900 overflow-hidden flex-shrink-0">
        {loaded ? (
          <>
            <iframe
              src={video.embedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
              scrolling="no"
              allowFullScreen
              loading="lazy"
              title={video.title}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
            {/* Close overlay */}
            <button
              onClick={() => setLoaded(false)}
              className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              aria-label="Close embed"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>
          </>
        ) : (
          /* Placeholder — click to load */
          <button
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 flex flex-col items-center justify-center group/play"
            onClick={() => setLoaded(true)}
            aria-label={`Play ${video.title}`}
          >
            {/* IG logo watermark */}
            <div className="absolute top-4 right-4 opacity-25">
              <InstagramIcon className="w-8 h-8 text-white" />
            </div>
            {/* Reel chip */}
            <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm">
              <span className="text-white text-[10px] font-bold tracking-wide uppercase">
                Reel
              </span>
            </div>

            {/* Play button */}
            <div className="w-[68px] h-[68px] rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-4 group-hover/play:scale-110 group-hover/play:bg-white/30 transition-all duration-200">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </div>

            {/* Title */}
            <p className="text-white font-semibold text-sm text-center px-6 line-clamp-3 leading-snug drop-shadow">
              {video.title}
            </p>

            <p className="text-white/60 text-xs mt-3 flex items-center gap-1.5">
              <Play className="w-2.5 h-2.5 fill-white/60" />
              Tap to play
            </p>
          </button>
        )}
      </div>

      {/* Card info */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[10px] font-bold bg-gradient-to-r from-purple-600 to-pink-500">
            <InstagramIcon className="w-3 h-3" />
            Instagram
          </span>
          {loaded && (
            <span className="text-[10px] text-zinc-400 font-medium">
              🔊 Use player controls to mute/unmute
            </span>
          )}
        </div>

        <h3
          className="font-bold text-zinc-800 text-sm mb-2 line-clamp-2 leading-snug"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {video.title}
        </h3>

        <p className="text-zinc-500 text-xs line-clamp-2 mb-4 leading-relaxed">
          {video.description}
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setLoaded((v) => !v)}
            className="text-xs font-medium text-zinc-400 hover:text-orange-500 transition-colors"
          >
            {loaded ? "Hide player" : "Load player"}
          </button>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-orange-500 text-xs font-semibold hover:text-orange-600 transition-colors"
          >
            Open on Instagram
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Videos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="videos" className="py-24 lg:py-32 bg-zinc-50/60" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
              Latest Content
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Recent <span className="gradient-text">Reels.</span>
            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Tap a card to play. Mute / unmute inside the Instagram player.
            </p>
          </div>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap"
          >
            <InstagramIcon className="w-4 h-4" />
            View all reels
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <ReelCard key={video.id} video={video} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
