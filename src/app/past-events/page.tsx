import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Past Events",
  description: "A look back at oikos Catalyst 2024, 2025, and 2026.",
};

const stats2026 = [
  { label: "Startups pitched", value: "6" },
  { label: "People attended", value: "60" },
  { label: "Prize money rewarded", value: "CHF 4,000" },
];

const stats2025 = [
  { label: "Startups pitched", value: "7" },
  { label: "People attended", value: "60" },
  { label: "Prize money rewarded", value: "CHF 1,500" },
];

const stats2024 = [
  { label: "Startups pitched", value: "4" },
  { label: "People attended", value: "60" },
  { label: "Prize money rewarded", value: "CHF 2,500" },
];

const testimonials2024 = [
  {
    quote:
      "Initiatives like these are super important for startups like us, and sustainability in general. Having participated here was a wonderful opportunity. Keep it up!",
    name: "Marius Semm",
    role: "Niatsu (Winner 2024)",
  },
  {
    quote:
      "Thanks for having me. The event turned out great and we from Foodward are very happy to be part of it. If there are any food related events in the future, we are more than happy to participate again!",
    name: "Philipp Schnöll",
    role: "Foodward (Jury Member & Sponsor 2024)",
  },
  {
    quote:
      "I think it is great and important what you guys are building here. I see that a lot of work has gone into this and appreciate your effort and commitment to creating something like this.",
    name: "Karen Gräfensteiner",
    role: "Gräfensteiner SRE (Jury Member 2024)",
  },
];

function StatRow({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function PastEventsPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/past-events-2026/winners-group.png"
              alt="oikos Catalyst 2026 winners and jury"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Past Events
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-primary sm:text-5xl">
          A look back
        </h1>

        {/* 2026 */}
        <Reveal>
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            oikos Catalyst 2026: &ldquo;Reinventing Impact: Strategies for Change in a
            Volatile World&rdquo;
          </h2>
          <p className="mt-5 leading-relaxed text-foreground/80">
            oikos Catalyst 2026 was the third edition of the sustainable pitching
            competition. The event was held in collaboration with the NextGen Impact
            Forum, and together with oikos Solar, start-up companies focused on
            renewable energies presented their ideas for driving change in an
            increasingly volatile world.
          </p>
          <div className="mt-6">
            <StatRow stats={stats2026} />
          </div>
        </section>
        </Reveal>

        <hr className="my-14 border-border" />

        {/* 2025 */}
        <Reveal>
        <section>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            oikos Catalyst 2025: &ldquo;Today&apos;s Action, Tomorrow&apos;s
            Cities&rdquo;
          </h2>
          <p className="mt-5 leading-relaxed text-foreground/80">
            oikos Catalyst 2025 was the second edition of the new sustainable pitching
            competition. The event was in collaboration with Student Impact and it took
            a focus on urban-focused sustainable startups. Here we tackled the
            challenges of carbon emissions, urban sustainability and circular resource
            use by supporting innovative startups across energy, construction, mobility
            and digital solutions. From real-time emission tracking and composting
            toilets to smart packaging, parking optimization and advanced building
            materials, these ventures are redefining how cities and industries operate
            sustainably, driving systemic change toward a cleaner, more resilient
            future.
          </p>
          <div className="mt-6">
            <StatRow stats={stats2025} />
          </div>
        </section>
        </Reveal>

        <hr className="my-14 border-border" />

        {/* 2024 */}
        <Reveal>
        <section>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            oikos Catalyst 2024: &ldquo;The Future of Food&rdquo;
          </h2>
          <p className="mt-5 leading-relaxed text-foreground/80">
            oikos Catalyst 2024 was the first edition of the new sustainable pitching
            competition. The inauguration event was dedicated to revolutionising
            Switzerland&apos;s food sector. We tackled issues like food waste and
            overconsumption, aiming for a more sustainable future, by supporting the
            startups in the food sector in receiving funding.
          </p>
          <div className="mt-6">
            <StatRow stats={stats2024} />
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-bold text-primary">
              Retrospective by Tom Weltevreden, Project Head &apos;24 &amp; Founder
            </h3>
            <p className="mt-3 leading-relaxed text-foreground/80">
              &ldquo;A rollercoaster of ups and downs, but with a looping in the end!
              From the exhilaration of securing sponsors, jury members, and getting
              startups to join our cause, to the humbling lessons learned through
              failed pitches, delayed responses, and unexpected logistical hiccups (who
              knew room reservations could be so unpredictable?), every twist and turn
              has been a test of our determination and passion for this project. But
              the result that we received in the end made it all worth it.&rdquo;
            </p>
          </div>

          <h3 className="mt-10 text-lg font-bold text-primary">How It Works</h3>
          <div className="mt-4 space-y-5 leading-relaxed text-foreground/80">
            <p>
              Over the past three editions, Catalyst has brought together sustainable
              startups, industry experts, investors, and students at the SQUARE at the
              University of St.Gallen. The event follows a clear and engaging format
              designed to give each startup the opportunity to present its idea,
              receive valuable feedback, and connect with a wider audience.
            </p>
            <p>
              Each participating startup has five minutes to deliver an elevator
              pitch, introducing its business, the problem it addresses, and the
              solution it offers. Following the pitch, the three-member jury has the
              opportunity to ask follow-up questions and learn more about the
              startup&apos;s potential, impact, and business model.
            </p>
            <p>
              Once all startups have presented, the jury discusses the pitches and
              selects the winner of the Jury Prize. At the same time, the audience gets
              involved by voting for the startup they believe should receive the
              Audience Prize.
            </p>
            <p>
              The competition is followed by a networking Apéro, giving students the
              chance to engage directly with the participating startups, jury members,
              and other industry experts. This creates an informal setting for
              exchanging ideas, building connections, and exploring opportunities
              beyond the competition itself.
            </p>
          </div>

          <h3 className="mt-10 text-lg font-bold text-primary">Testimonials</h3>
          <div className="mt-4 space-y-5">
            {testimonials2024.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="italic leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-primary">
                  {t.name}: {t.role}
                </p>
              </blockquote>
            ))}
          </div>
        </section>
        </Reveal>
      </div>
    </>
  );
}
