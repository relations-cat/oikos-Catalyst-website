import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Event",
  description: "Water Innovation for a Sustainable Future",
};

const details = [
  { label: "Place", value: "University of St. Gallen" },
  { label: "Date", value: "April 2027" },
  { label: "Goodie bags", value: "Free for all attendees" },
];

export default function EventPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <Image
          src="/images/event-hero-water.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/60" />
        <div className="mx-auto max-w-4xl px-6 py-20 text-center [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            Event
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Water Innovation for a Sustainable Future
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-white">
            Supporting the ideas that can change how we use, protect, and manage
            water.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            In this year&apos;s edition, Catalyst will bring together ambitious
            startups developing innovative solutions to some of the world&apos;s most
            pressing water challenges, from innovative technologies for clean water
            and agriculture to circular systems and smarter resource management.
          </p>
        </div>
      </section>

      <Reveal className="mx-auto max-w-4xl px-6 py-16">
        <div className="overflow-hidden rounded-2xl bg-primary text-white shadow-md">
          <div className="px-6 py-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Save the Date
            </p>
            <p className="mt-2 text-3xl font-extrabold sm:text-4xl">April 2027</p>
          </div>
          <div className="border-t border-white/10 bg-primary-dark/40 px-6 py-3 text-center text-sm text-white/80">
            Exact day, venue, and prize are still being finalized. Check back for
            updates.
          </div>
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {details.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-2 text-lg font-bold text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center text-foreground/70">
          More information coming soon! Take a look at our{" "}
          <Link
            href="/past-events"
            className="font-semibold text-primary underline decoration-brand-sky decoration-2 underline-offset-4"
          >
            Past Events
          </Link>{" "}
          to learn more about us.
        </p>
      </Reveal>
    </>
  );
}
