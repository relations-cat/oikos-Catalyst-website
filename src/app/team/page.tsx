import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "New team coming soon.",
};

export default function TeamPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-28 text-center">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">
        New team coming soon!
      </h1>
      <p className="mt-4 text-foreground/70">Stay tuned for updates.</p>
    </section>
  );
}
