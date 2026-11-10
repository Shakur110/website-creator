import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { formatDate, readingTime, type Block, type Post } from "@/lib/posts";

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
          <h2 key={i}>{b.h2}</h2>
        ) : "ul" in b ? (
          <ul key={i}>
            {b.ul.map((li) => (
              <li key={li}>{inline(li)}</li>
            ))}
          </ul>
        ) : (
          <ol key={i}>
            {b.ol.map((li) => (
              <li key={li}>{inline(li)}</li>
            ))}
          </ol>
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

export function PostCover({ post, className = "" }: { post: Post; className?: string }) {
  return post.cover ? (
    <img
      src={post.cover}
      alt=""
      loading="lazy"
      className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${className}`}
    />
  ) : (
    <div
      aria-hidden
      className={`relative flex h-full w-full items-end overflow-hidden bg-gradient-to-br from-brand to-navy p-6 ${className}`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky/30 blur-2xl" />
      <span className="relative rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
        {post.category}
      </span>
    </div>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/10"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <PostCover post={post} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">{post.category}</p>
        <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between">
          <PostMeta post={post} />
          <ArrowUpRight className="h-4 w-4 text-brand" />
        </div>
      </div>
    </Link>
  );
}
