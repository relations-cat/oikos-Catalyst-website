import type { Metadata } from "next";
import Image from "next/image";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to pitch your sustainable startup at oikos Catalyst.",
};

const requirements = ["Be an independent legal entity", "Be a sustainable startup"];

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

      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-lg font-bold text-primary">Application Requirements</h2>
          <ul className="mt-4 space-y-2">
            {requirements.map((req) => (
              <li
                key={req}
                className="flex items-start gap-3 text-sm text-foreground/80"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-sky text-xs font-bold text-foreground">
                  ✓
                </span>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
