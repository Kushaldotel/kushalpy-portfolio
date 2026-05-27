"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/content";

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Things I&apos;ve <span className="gradient-text">built.</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            A selection of products, tools, and freelance work — built to solve
            real problems.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-3 gap-5 mb-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative p-7 rounded-2xl bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <span className="text-orange-500 font-black text-sm" style={{ fontFamily: "var(--font-syne)" }}>
                    {String(Number(project.id)).padStart(2, "0")}
                  </span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <h3
                className="font-bold text-zinc-800 text-xl mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">
                {project.summary}
              </p>

              <div className="flex items-center gap-1.5 text-orange-600 text-xs font-semibold mb-4">
                <Users className="w-3.5 h-3.5" />
                {project.impact}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-zinc-50 text-zinc-600 border border-zinc-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-orange-200 hover:bg-white hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 flex gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex-shrink-0 flex items-center justify-center">
                  <span className="text-orange-500 font-black text-xs">
                    {String(Number(project.id)).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-zinc-800 text-sm" style={{ fontFamily: "var(--font-syne)" }}>
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-orange-500 transition-colors flex-shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
