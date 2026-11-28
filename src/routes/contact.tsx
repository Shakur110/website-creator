import { createFileRoute, redirect } from "@tanstack/react-router";

// This page is now a section of the homepage. Old links land on that section.
export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "contact", statusCode: 301 });
  },
});
