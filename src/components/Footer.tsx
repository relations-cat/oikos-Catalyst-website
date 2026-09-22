import Link from "next/link";
import Logo from "./Logo";
import { footerWhoWeAre, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark text-white/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo className="h-20 w-20" />
          <p className="mt-4 text-sm text-white/70">{siteConfig.tagline}</p>
          <a
            href={siteConfig.impressumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            Impressum
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact page
              </Link>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contactEmail}`} className="break-all hover:text-white">
                {siteConfig.contactEmail}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Who we are</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footerWhoWeAre.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Follow us</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} oikos Catalyst: an initiative by oikos St.Gallen at the
        University of St.Gallen.
      </div>
    </footer>
  );
}
