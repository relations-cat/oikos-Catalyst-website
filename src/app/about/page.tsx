import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "oikos Catalyst is a student-led initiative that supports innovative ideas for a sustainable future.",
};

const stats = [
  { label: "Active oikos St.Gallen members", value: "160+" },
  { label: "Unique oikos St.Gallen projects", value: "11" },
  { label: "Pitching competitions hosted", value: "3" },
];

const sections: { number: string; title: string; body: ReactNode }[] = [
  {
    number: "01",
    title: "Our History",
    body: (
      <p>
        The project oikos Catalyst itself is still very young, having launched in
        November 2023 by HSG students Tom Weltevreden and Bosco Merino. Driven by
        their passion for environmental issues and social entrepreneurship, Tom and
        Bosco aim to inspire their peers to engage in meaningful projects that create
        lasting change. Their commitment to collaboration and knowledge-sharing is
        setting a solid foundation for oikos Catalyst to thrive.
      </p>
    ),
  },
  {
    number: "02",
    title: "Mission",
    body: (
      <p>
        We empower the next generation of sustainable innovators by providing a
        unique opportunity to kickstart their business, offering valuable resources,
        mentorship from industry experts, and access to a network of like-minded
        individuals.
      </p>
    ),
  },
  {
    number: "03",
    title: "Method",
    body: (
      <p>
        At its core, oikos Catalyst is a single pitching competition held once a
        year, giving founders the stage to present their ventures to an audience of
        investors, students, and industry experts. Rather than spreading our focus
        across sustainability as a whole, each edition zooms in on one theme, from
        food systems to urban resilience, so the conversations and feedback stay
        sharp and relevant. This focused approach lets us build real depth in that
        year&apos;s chosen sector while keeping the format simple and familiar for
        founders year after year.
      </p>
    ),
  },
  {
    number: "04",
    title: "Motivation",
    body: (
      <p>
        We strive to support and collaborate with talented individuals in
        sustainability to create a positive impact. By fostering partnerships and
        encouraging idea-sharing, we aim to cultivate a community dedicated to
        exploring sustainable solutions for our planet&apos;s challenges. Our
        commitment is rooted in the belief that collective effort and diverse
        perspectives drive meaningful change.
      </p>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <Image
          src="/images/about-hero-audience-v2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/40" />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center [text-shadow:0_2px_12px_rgba(0,0,0,0.75)] md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            About
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Who are we?
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            oikos Catalyst is a student-led initiative that supports innovative ideas
            for a sustainable future. We organize a pitching competition in St. Gallen
            Switzerland, designed specifically for startups focused on sustainability.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-white">
        <Reveal className="mx-auto grid max-w-4xl gap-4 px-6 py-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="overflow-hidden rounded-2xl border border-border bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-1.5 w-full bg-primary" />
              <div className="p-6">
                <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Intro continued */}
      <section className="bg-primary/5">
        <Reveal className="mx-auto max-w-3xl space-y-5 px-6 py-16 leading-relaxed text-foreground/80">
          <p className="border-l-4 border-brand-sky pl-5">
            We are part of oikos St.Gallen, a non-profit organization based at the
            University of St.Gallen. With over 160 active members and 11 unique
            projects, oikos St.Gallen is the largest group at the university working to
            promote sustainability and create a positive impact.
          </p>
          <p>
            Through oikos Catalyst, we aim to connect sustainable startups with the
            resources and support they need to grow their ideas into real solutions.
            We bring together entrepreneurs, investors, students, and industry leaders
            to tackle some of the world&apos;s most pressing environmental and social
            issues. Our goal is to inspire and empower entrepreneurs to make a
            difference in building a more sustainable world, because the next
            breakthrough idea should never fail simply for lack of opportunity to
            grow. We believe that with the right platform, connections, and support,
            sustainable ideas can become the businesses that shape a better future.
          </p>
        </Reveal>
      </section>

      {/* Numbered sections */}
      {sections.map((section, i) => (
        <section
          key={section.number}
          className={i % 2 === 0 ? "bg-white" : "bg-primary/5"}
        >
          <Reveal className="mx-auto max-w-2xl px-6 py-16 text-center">
            <span
              className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-extrabold ${
                i % 2 === 0
                  ? "bg-primary text-white"
                  : "bg-brand-sky text-foreground"
              }`}
            >
              {section.number}
            </span>
            <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
              {section.title}
            </h2>
            <div className="mt-4 text-left leading-relaxed text-foreground/80">
              {section.body}
            </div>
          </Reveal>
        </section>
      ))}
    </>
  );
}
