import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Reveal } from "@/components/site/parts";
import { PostCard } from "@/components/site/blog";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Website Advice for Business Owners | Onjoko Tunde" },
      {
        name: "description",
        content:
          "Practical advice on website platforms, redesigns and planning a new business website, from freelance website designer Onjoko Tunde.",
      },
      { property: "og:title", content: "Blog — Onjoko Tunde" },
      {
        property: "og:description",
        content: "Practical website advice for business owners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Website advice for <em>business owners.</em>
          </>
        }
        intro="Plain-English guides on platforms, redesigns and planning a website that brings in work."
      />
      <section className="container-x pb-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
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
