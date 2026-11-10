import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CtaBand } from "@/components/site/parts";
import { PostBody, PostCard, PostCover, PostMeta } from "@/components/site/blog";
import { getPost, posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post, more: posts.filter((p) => p.slug !== post.slug).slice(0, 2) };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post)
      return {
        meta: [
          { title: "Article not found — Onjoko Tunde" },
          { name: "robots", content: "noindex" },
        ],
      };
    return {
      meta: [
        { title: `${post.title} | Onjoko Tunde` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: "Onjoko Tunde" },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x pb-40 pt-48">
      <h1 className="display text-5xl">Article not found.</h1>
      <Link to="/blog" className="btn btn-primary mt-8">
        Back to the blog
      </Link>
    </div>
  ),
  component: Article,
});

function Article() {
  const { post, more } = Route.useLoaderData();
  return (
    <>
      <article>
        <header className="container-x pt-32 md:pt-40">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <p className="eyebrow mt-10">{post.category}</p>
            <h1 className="display mt-4 text-4xl md:text-6xl">{post.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                OT
              </span>
              <div>
                <p className="text-sm font-semibold">Onjoko Tunde</p>
                <PostMeta post={post} />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 aspect-[16/9] max-w-5xl overflow-hidden rounded-[1.5rem]">
            <PostCover post={post} />
          </div>
        </header>
        <div className="container-x py-16 md:py-20">
          <div className="mx-auto max-w-[42rem]">
            <PostBody blocks={post.body} />
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section className="container-x border-t border-border pt-16 md:pt-20">
          <h2 className="display text-3xl md:text-4xl">Keep reading</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
      <CtaBand
        title={
          <>
            Want this done <em>for you?</em>
          </>
        }
        copy="Tell me about your business and I'll recommend the right platform and plan for your website."
      />
    </>
  );
}
