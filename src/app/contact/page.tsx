import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the oikos Catalyst team.",
};

const cards = [
  {
    label: "General inquiries",
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
  },
  {
    label: "Sponsoring & partnerships",
    value: siteConfig.sponsoringEmail,
    href: `mailto:${siteConfig.sponsoringEmail}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
];

export default function ContactPage() {
  return (
    <Reveal className="mx-auto max-w-3xl px-6 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Contact
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-primary sm:text-5xl">
        Get in touch
      </h1>
      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-foreground/80">
        Questions about the event, sponsoring, or applying to pitch? Reach out: we&apos;d
        love to hear from you.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {card.label}
            </p>
            <p className="mt-2 break-words text-sm font-semibold text-primary">
              {card.value}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:border-primary hover:text-primary"
        >
          LinkedIn
        </a>
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:border-primary hover:text-primary"
        >
          Instagram
        </a>
      </div>
    </Reveal>
  );
}
