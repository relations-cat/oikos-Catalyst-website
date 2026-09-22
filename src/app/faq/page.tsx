import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about oikos Catalyst.",
};

const faqs = [
  {
    q: "Who do you operate under?",
    a: (
      <p>
        oikos Catalyst acts under the supervision and assistance of the umbrella
        association oikos St.Gallen.
      </p>
    ),
  },
  {
    q: "What startups will be present?",
    a: (
      <div className="space-y-3">
        <p>
          The startups of our earliest event are characterized by four aspects:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>An independent legal entity</li>
          <li>Based/created in Switzerland</li>
          <li>Most importantly: a sustainable startup in the specific industry</li>
        </ul>
        <p>
          For more specific information, reach out via email. Startups are selected by
          the team based on application and fit to the topic.
        </p>
      </div>
    ),
  },
  {
    q: "How do you choose the partners you work with (i.e., sponsors for prize money)?",
    a: (
      <p>
        We are very selective when choosing our partners. They need to be in line with
        our values and mission in order to work with us.
      </p>
    ),
  },
  {
    q: "When was oikos Catalyst founded?",
    a: (
      <p>
        oikos Catalyst was founded on the 1st of November 2023 and had its first event
        on the 24th of April 2024.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <Reveal className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        FAQ
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-primary sm:text-5xl">
        Frequently asked questions
      </h1>

      <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-white">
        {faqs.map((item) => (
          <details key={item.q} className="group px-6 py-5">
            <summary className="-mx-6 flex cursor-pointer list-none items-center justify-between gap-4 px-6 text-left font-semibold text-foreground transition-colors hover:bg-muted/60">
              {item.q}
              <span className="shrink-0 text-xl text-primary transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="mt-3 leading-relaxed text-foreground/80">
                  {item.a}
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </Reveal>
  );
}
