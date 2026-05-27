import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "In-depth guides on Python, Django, cloud deployment, SaaS, and building a tech career.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogs;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 lg:py-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
            Writing
          </p>
          <h1
            className="text-4xl lg:text-6xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            All Posts
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl">
            Deep dives on software engineering, cloud infrastructure, SaaS building, and making the most of a tech career.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured post */}
        <div className="mb-12">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5">
            Featured
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-zinc-100 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-50 transition-all duration-300"
          >
            <div
              className={`h-64 lg:h-auto bg-gradient-to-br ${featured.gradient} flex items-end p-8`}
            >
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                {featured.category}
              </span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs text-zinc-400 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featured.readTime}
                </span>
                <span>·</span>
                <span>
                  {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2
                className="text-2xl lg:text-3xl font-black leading-snug mb-4 group-hover:text-orange-600 transition-colors"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {featured.title}
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm">
                Read post
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* All other posts */}
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">
          All Articles
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300"
            >
              <div
                className={`h-40 bg-gradient-to-br ${post.gradient} flex items-end p-5`}
              >
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                  {post.category}
                </span>
              </div>
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
                  className="font-bold text-zinc-800 text-lg leading-snug mb-3 group-hover:text-orange-600 transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {post.tags.slice(0, 3).map((tag) => (
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
