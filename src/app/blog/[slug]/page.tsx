import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { blogs, type ContentBlock } from "@/data/blogs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function CalloutBox({
  variant,
  text,
}: {
  variant: "tip" | "warning" | "info";
  text: string;
}) {
  const styles = {
    tip: "bg-green-50 border-green-300 text-green-900",
    warning: "bg-amber-50 border-amber-300 text-amber-900",
    info: "bg-blue-50 border-blue-300 text-blue-900",
  };
  const labels = { tip: "💡 Tip", warning: "⚠️ Warning", info: "ℹ️ Note" };

  return (
    <div className={`rounded-xl border-l-4 px-5 py-4 my-6 ${styles[variant]}`}>
      <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-70">
        {labels[variant]}
      </p>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function CodeBlock({ lang, text }: { lang: string; text: string }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-zinc-800">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
          <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
        </div>
        <span className="ml-2 text-xs text-zinc-400 font-mono">{lang}</span>
      </div>
      <pre className="overflow-x-auto p-5 bg-zinc-950 text-sm leading-relaxed">
        <code className="text-zinc-100 font-mono">{text}</code>
      </pre>
    </div>
  );
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={index}
          className="text-2xl lg:text-3xl font-black tracking-tight mt-12 mb-4 text-zinc-900"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="text-xl font-bold mt-8 mb-3 text-zinc-800"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p
          key={index}
          className="text-zinc-600 leading-[1.85] text-[1.05rem] mb-5"
        >
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="my-5 space-y-2 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-600 text-[1.05rem] leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="my-5 space-y-2 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-600 text-[1.05rem] leading-relaxed">
              <span
                className="mt-0.5 w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center flex-shrink-0"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "code":
      return <CodeBlock key={index} lang={block.lang} text={block.text} />;
    case "callout":
      return <CalloutBox key={index} variant={block.variant} text={block.text} />;
    case "divider":
      return <hr key={index} className="my-10 border-zinc-100" />;
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const currentIndex = blogs.findIndex((b) => b.slug === slug);
  const prev = blogs[currentIndex - 1] ?? null;
  const next = blogs[currentIndex + 1] ?? null;

  const relatedPosts = blogs
    .filter(
      (b) =>
        b.slug !== slug &&
        b.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${post.gradient} py-20 lg:py-28`}>
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Posts
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/70 text-xs">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="text-white/70 text-xs">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1
            className="text-3xl lg:text-5xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {post.title}
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs text-white/70 border border-white/20 px-2.5 py-1 rounded-full"
              >
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="max-w-[72ch]">
          {post.content.map((block, i) => renderBlock(block, i))}
        </article>

        {/* Prev / Next */}
        <div className="mt-20 pt-10 border-t border-zinc-100 grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group p-5 rounded-2xl border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300"
            >
              <p className="text-xs text-zinc-400 mb-2 flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" /> Previous
              </p>
              <p
                className="font-bold text-zinc-700 group-hover:text-orange-600 transition-colors text-sm line-clamp-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group p-5 rounded-2xl border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 sm:text-right"
            >
              <p className="text-xs text-zinc-400 mb-2 flex items-center gap-1 sm:justify-end">
                Next <ArrowRight className="w-3 h-3" />
              </p>
              <p
                className="font-bold text-zinc-700 group-hover:text-orange-600 transition-colors text-sm line-clamp-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">
              Related Posts
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-4 p-5 rounded-2xl border border-zinc-100 hover:border-orange-200 hover:shadow-md hover:shadow-orange-50 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${related.gradient} flex-shrink-0`}
                  />
                  <div>
                    <p
                      className="font-bold text-zinc-800 text-sm line-clamp-2 group-hover:text-orange-600 transition-colors"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {related.title}
                    </p>
                    <p className="text-zinc-400 text-xs mt-1">{related.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
