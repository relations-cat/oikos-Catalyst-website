import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind oikos Catalyst.",
};

const members = [
  { name: "Nina Briefel", role: "Project Head", photo: "nina-briefel" },
  { name: "Julia Imhof", role: "Head of Events", photo: "julia-imhof" },
  { name: "Marine Holenstein", role: "Head of Marketing", photo: "marine-holenstein" },
  { name: "Giulia Cavadini", role: "Head of Finance", photo: "giulia-cavadini" },
  { name: "Alicia Prat", role: "Events Team", photo: "alicia-prat" },
  { name: "Nina Ferraro", role: "Marketing Team", photo: "nina-ferraro" },
  { name: "Louis Bäschlin", role: "Finance Team", photo: "louis-baeschlin" },
];

export default function TeamPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            Team
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Meet the Team
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <div className="relative aspect-[1580/1030] w-full overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/team/team-group-v3.jpg"
              alt="The oikos Catalyst team"
              fill
              priority
              quality={95}
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-16 space-y-16">
          {members.map((m) => (
            <Reveal key={m.name}>
              <div className="flex flex-col items-center text-center">
                <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={`/images/team/${m.photo}.jpg`}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="320px"
                    quality={95}
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-primary">{m.name}</h2>
                <p className="mt-2 inline-block rounded-full bg-brand-sky/40 px-4 py-1 text-sm font-semibold text-primary-dark">
                  {m.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
