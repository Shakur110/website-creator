import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  ClipboardList,
  Globe,
  LayoutTemplate,
  Link2,
  Linkedin,
  MessageCircle,
  RefreshCcw,
  Sparkles,
  Twitter,
  Workflow,
} from "lucide-react";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { formatDate, readingTime, type Block, type Post } from "@/lib/posts";

/** "Why it matters" → "why-it-matters", for in-page links to headings. */
export const headingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Turns **bold** markers into <strong>. */
function inline(text: string): ReactNode {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-article">
      {blocks.map((b, i) =>
        "p" in b ? (
          <p key={i}>{inline(b.p)}</p>
        ) : "h2" in b ? (
          <h2 key={i} id={headingId(b.h2)} className="scroll-mt-28">
            {b.h2}
          </h2>
        ) : "ul" in b ? (
          <ul key={i}>
            {b.ul.map((li) => (
              <li key={li}>{inline(li)}</li>
            ))}
          </ul>
        ) : "ol" in b ? (
          <ol key={i}>
            {b.ol.map((li) => (
              <li key={li}>{inline(li)}</li>
            ))}
          </ol>
        ) : (
          <figure key={i} className="!my-10">
            <img
              src={b.img}
              alt={b.alt}
              loading="lazy"
              className="w-full rounded-2xl border border-border frame"
            />
            {b.caption && (
              <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {b.caption}
              </figcaption>
            )}
          </figure>
        ),
      )}
    </div>
  );
}

export function PostMeta({ post }: { post: Post }) {
  return (
    <p className="text-sm text-muted-foreground">
      <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingTime(post)} min read
    </p>
  );
}

const coverStyle: Record<string, { icon: typeof Globe; from: string }> = {
  "CRM & Automation": { icon: Workflow, from: "from-[#1f8a70]" },
  "AI Tools": { icon: Sparkles, from: "from-[#6d3be0]" },
  Planning: { icon: ClipboardList, from: "from-brand" },
  Platforms: { icon: LayoutTemplate, from: "from-brand" },
  Redesign: { icon: RefreshCcw, from: "from-brand" },
  Websites: { icon: Globe, from: "from-brand" },
};

/** The post's image, or a designed cover in the category's colour when it has none. */
export function PostCover({ post, className = "" }: { post: Post; className?: string }) {
  if (post.cover)
    return (
      <img
        src={post.cover}
        alt=""
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${className}`}
      />
    );
  const style = coverStyle[post.category] ?? { icon: Globe, from: "from-brand" };
  const Icon = style.icon;
  return (
    <div
      aria-hidden
      className={`relative flex h-full w-full items-end overflow-hidden bg-gradient-to-br ${style.from} to-navy p-6 md:p-8 ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
      <Icon
        className="absolute right-6 top-6 h-14 w-14 text-white/25 md:h-20 md:w-20"
        strokeWidth={1.25}
      />
      <div className="relative">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
          {post.category}
        </span>
        <p className="mt-3 line-clamp-2 max-w-md text-lg font-bold leading-snug text-white md:text-xl">
          {post.title}
        </p>
      </div>
    </div>
  );
}

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={`group flex h-full overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/10 ${
        featured ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div className={`aspect-[16/9] overflow-hidden ${featured ? "md:w-3/5" : ""}`}>
        <PostCover post={post} />
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:justify-center md:p-10" : ""}`}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
          {featured ? `Latest · ${post.category}` : post.category}
        </p>
        <h3
          className={`mt-3 font-bold leading-snug tracking-tight transition-colors group-hover:text-brand ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground md:flex-none">
          {post.excerpt}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <PostMeta post={post} />
          <ArrowUpRight className="h-4 w-4 text-brand" />
        </div>
      </div>
    </Link>
  );
}

/** Thin blue bar at the top of the screen showing how far through the article you are. */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full origin-left bg-brand transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

export function TableOfContents({ blocks }: { blocks: Block[] }) {
  const headings = blocks.flatMap((b) => ("h2" in b ? [b.h2] : []));
  if (headings.length < 3) return null;
  return (
    <nav aria-label="In this article" className="rounded-2xl border border-border bg-surface p-6">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">In this article</p>
      <ol className="mt-4 space-y-2.5 text-sm">
        {headings.map((h) => (
          <li key={h}>
            <a
              href={`#${headingId(h)}`}
              className="text-muted-foreground transition-colors hover:text-brand"
            >
              {h}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => setUrl(window.location.href), []);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
    { label: "X", icon: Twitter, href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/?text=${t}%20${u}` },
  ];
  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-brand hover:bg-brand hover:text-white";
  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-sm font-semibold">Share</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Share on ${l.label}`}
          className={btn}
        >
          <l.icon className="h-4 w-4" />
        </a>
      ))}
      <button
        type="button"
        aria-label="Copy link"
        className={btn}
        onClick={() => {
          void navigator.clipboard?.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          });
        }}
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
      <span role="status" className="sr-only">
        {copied ? "Link copied" : ""}
      </span>
    </div>
  );
}
