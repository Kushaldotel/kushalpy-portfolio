"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogs } from "@/data/blogs";

export function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const preview = blogs.slice(0, 3);

  return (
    <section id="blog" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
              Writing
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Latest <span className="gradient-text">Posts.</span>
            </h2>
            <p className="mt-2 text-zinc-500 text-sm max-w-md">
              In-depth guides on software engineering, career growth, and building products.
            </p>
          </div>
          <a
            href="/blog"
            className="group flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap"
          >
            All posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col rounded-2xl bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 overflow-hidden"
            >
              {/* Cover */}
              <div
                className={`h-44 bg-gradient-to-br ${post.gradient} flex items-end p-5`}
              >
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span>·</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3
                  className="font-bold text-zinc-800 text-base leading-snug mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {post.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-full border border-zinc-100"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a
            href="/blog"
            className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-zinc-900 text-zinc-900 font-bold hover:bg-zinc-900 hover:text-white transition-all duration-200"
          >
            Read all {blogs.length} posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
