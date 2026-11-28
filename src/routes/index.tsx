import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home";
import { homeHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => homeHead("en"),
  component: HomePage,
});
