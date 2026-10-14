import type { Metadata } from "next";
import Image from "next/image";
import GoogleFormEmbed from "@/components/GoogleFormEmbed";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to pitch your sustainable startup at oikos Catalyst.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScPMCwN5y6Wt9DtCbAkbW4nAuOIYehMov4y3ecSf4WBXyj6aQ/viewform";

export default function ApplyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <Image
          src="/images/apply-hero-truck.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/60" />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            Apply
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Apply to oikos Catalyst
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            Ready to pitch your sustainable startup? Fill out the application below.
            There are no fees to apply or participate.
          </p>
        </div>
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <GoogleFormEmbed
            src={`${FORM_URL}?embedded=true`}
            title="oikos Catalyst application form"
          />
          <p className="mt-4 text-center text-sm text-foreground/70">
            Form not loading?{" "}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline decoration-brand-sky decoration-2 underline-offset-4"
            >
              Open it in a new tab
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
