import { createFileRoute, redirect } from "@tanstack/react-router";

// This page is now a section of the homepage. Old links land on that section.
export const Route = createFileRoute("/services")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "services", statusCode: 301 });
  },
});
