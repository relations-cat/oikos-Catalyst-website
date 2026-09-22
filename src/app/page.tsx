import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black text-white">
        <Image
          src="/images/hero-earth.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/35" />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] md:py-36">
          <p className="text-sm font-bold uppercase tracking-widest text-white">
            University of St.Gallen
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            oikos Catalyst
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-semibold text-white">
            oikos Catalyst is a pitching competition dedicated entirely to sustainable
            startups. We bridge the gap between green startups and angel investors
            ready to back eco-friendly solutions. Along with potential investment
            opportunities, we offer substantial prize money to the evening&apos;s top
            pitch. The event also serves as a showcase for students interested in the
            startup world, offering a firsthand look at sustainable innovation in
            action.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* An Initiative by */}
      <section className="border-b border-border bg-white">
        <Reveal className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            An Initiative by
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
            {siteConfig.initiatives.map((org) => (
              <a
                key={org.url}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={org.width}
                  height={org.height}
                  className="h-16 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Becoming a Catalyst of Sustainability */}
      <Reveal className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl">
          Becoming a Catalyst of Sustainability
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Sustainability has become an increasingly important part of how we think
            about the future. Yet while innovative ideas are emerging every day, many
            sustainable startups still struggle to access the funding, visibility, and
            connections they need to turn those ideas into lasting impact.
          </p>
          <p>That is where Catalyst comes in.</p>
          <p>
            We aim to become a catalyst for sustainable startups in Switzerland by
            giving ambitious founders a platform to share their ideas, connect with
            investors, and gain access to a community that believes in the potential
            of sustainable innovation.
          </p>
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/about"
            className="inline-block text-sm font-semibold text-primary underline decoration-brand-sky decoration-2 underline-offset-4 hover:text-primary-light"
          >
            Learn more →
          </Link>
        </div>
      </Reveal>

      {/* Realize Your Ideas */}
      <section className="bg-muted/60">
        <Reveal className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:order-2">
            <Image
              src="/images/audience-pitching-competition.png"
              alt="Audience at an oikos Catalyst pitching competition"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Realize Your Ideas
            </h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              oikos Catalyst is still in its babyshoes, as it was launched 3 years ago
              and had its inauguration event in 2024. In 2027, we are excited to host
              our fourth edition of the pitching competition at the University of
              St.Gallen. This event provides a platform for entrepreneurs to present
              their ideas, with insights and expertise shared by leading sustainability
              experts to inspire both participants and attendees.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Next event banner */}
      <section className="bg-brand-sky">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
              Save the date
            </p>
            <p className="mt-1 text-xl font-bold text-foreground">
              Our Next Event: April 2027. Exact date &amp; location coming soon.
            </p>
          </div>
          <Link
            href="/event"
            className="shrink-0 rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Event details
          </Link>
        </Reveal>
      </section>

      {/* Testimonial */}
      <Reveal className="mx-auto max-w-4xl px-6 py-20 text-center">
        <blockquote className="text-xl font-medium italic leading-relaxed text-foreground/90 sm:text-2xl">
          &ldquo;I&apos;d suggest oikos Catalyst to any aspiring startup which is
          addressing the emerging world of sustainability concerns. The visibility,
          which Niatsu gained, was super helpful in developing links with industry
          players, expanding our business network and connecting with a renowned
          university. This is an opportunity I&apos;d advise other startups to grab and
          make their presence felt.&rdquo;
        </blockquote>
        <p className="mt-6 text-sm font-semibold text-primary">
          Marius Semm: Co-founder &amp; CEO of Niatsu (Winner 2024)
        </p>
      </Reveal>

      {/* Three Musketeers */}
      <section className="bg-muted/60">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-bold text-primary">
                Networking: For Investors
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                Early, exclusive access to the newest sustainable early-stage startups.
                Sounds good? That&apos;s what we provide! Contact us below.
              </p>
              <a
                href={`mailto:${siteConfig.sponsoringEmail}`}
                className="mt-5 inline-block text-sm font-semibold text-primary underline decoration-brand-sky decoration-2 underline-offset-4"
              >
                Get in touch →
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-bold text-primary">
                Kick starting: For Startups
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                Does your startup align with our mission and you are eager to have a
                chance to participate at our event? Please apply with the link below!
                P.S. there are no fees to apply and participate at our event!
              </p>
              <Link
                href="/apply"
                className="mt-5 inline-block text-sm font-semibold text-primary underline decoration-brand-sky decoration-2 underline-offset-4"
              >
                Apply now →
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-bold text-primary">
                Making it happen: For Sponsors
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                Innovation, sustainability, creativity &amp; the future of business. We
                give you the unique opportunity to align your brand with these, while
                gaining valuable marketing exposure.
              </p>
              <Link
                href="/support-us"
                className="mt-5 inline-block text-sm font-semibold text-primary underline decoration-brand-sky decoration-2 underline-offset-4"
              >
                Support us →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
