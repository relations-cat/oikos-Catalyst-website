import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Support Us",
  description: "Help us make our event reality and support us financially.",
};

const impactStats = [
  { label: "Total prize money awarded to date", value: "CHF 8,000" },
  { label: "Startups supported", value: "17" },
  { label: "Pitching competitions hosted", value: "3" },
];

const sponsorBenefits = [
  "Brand visibility and marketing exposure at our event",
  "Direct access to students, investors, and industry leaders",
  "Association with innovation, sustainability, and the future of business",
];

export default function SupportUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <Image
          src="/images/audience-pitching-competition.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/60" />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            Support Us
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Take part in our initiative.
          </h1>
          <div className="mx-auto mt-6 max-w-xl space-y-4 text-lg text-white/85">
            <p>Help us make our event reality and support us financially.</p>
            <p>
              Are you a medium to large cap business and want a special
              sponsor-/partnership contract? Then we are happy to receive your ideas.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.sponsoringEmail}`}
            className="mt-8 inline-block rounded-full bg-brand-sky px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-brand-sky-dark"
          >
            Send us an email
          </a>
        </div>
      </section>

      {/* Impact stats */}
      <section className="border-b border-border bg-white">
        <Reveal className="mx-auto grid max-w-4xl gap-4 px-6 py-12 sm:grid-cols-3">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* For Sponsors */}
      <section className="bg-muted/60">
        <Reveal className="mx-auto grid max-w-5xl items-start gap-12 px-6 py-20 md:grid-cols-2">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Help shape what comes next
            </h2>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-foreground/80">
              Partner with Catalyst to support ambitious sustainable startups and
              connect your brand with the people shaping the future of business. Gain
              meaningful visibility among students, founders, investors, and industry
              leaders while contributing to an event that turns innovative ideas into
              real opportunities.
            </p>
          </div>

          <div>
            <ul className="space-y-4">
              {sponsorBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-sky text-xs font-bold text-foreground">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/80">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <a
                href={`mailto:${siteConfig.sponsoringEmail}`}
                className="inline-block text-sm font-semibold text-primary underline decoration-brand-sky decoration-2 underline-offset-4 hover:text-primary-light"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
