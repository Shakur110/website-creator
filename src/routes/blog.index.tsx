import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CtaBand, PageHero, Reveal } from "@/components/site/parts";
import { PostCard } from "@/components/site/blog";
import { publishedPosts } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Websites, CRM Automation & AI Tools | Onjoko Tunde" },
      {
        name: "description",
        content:
          "Practical advice on business websites, CRM automation and AI tools, from web designer and automation specialist Onjoko Tunde. New articles every day.",
      },
      { property: "og:title", content: "Blog — Onjoko Tunde" },
      {
        property: "og:description",
        content: "Practical advice on websites, CRM automation and AI tools for business owners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

function Blog() {
  const posts = useMemo(() => publishedPosts(), []);
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts],
  );
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? posts : posts.filter((p) => p.category === filter);
  const [featured, ...rest] = list;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Advice on websites, CRM <em>and AI.</em>
          </>
        }
        intro="Plain-English guides for business owners on getting more from your website, automating follow-up and using AI tools well. New articles every day."
      />
      <section className="container-x pb-8">
        {categories.length > 2 && (
          <div role="group" aria-label="Filter articles" className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  filter === c
                    ? "border-brand bg-brand text-white"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
        {featured && (
          <Reveal key={`${filter}-featured`} className="mb-6">
            <PostCard post={featured} featured />
          </Reveal>
        )}
        <div key={filter} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 60} className="h-full">
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
