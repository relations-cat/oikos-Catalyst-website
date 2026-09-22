// Central place for site-wide links, contact info, and nav: sourced from
// oikos-catalyst-content.md. Update here rather than hunting through pages.

export const siteConfig = {
  name: "oikos Catalyst",
  tagline: "A pitching competition exclusively for sustainable startups in Switzerland.",
  contactEmail: "catalyst@stgallen.oikos-international.org",
  sponsoringEmail: "sponsoring-cat@oikos-international.org",
  phone: "+41 77 446 1736",
  impressumUrl: "https://www.oikos-stgallen.com/impressum",
  social: {
    linkedin: "https://www.linkedin.com/company/oikoscatalyst/",
    instagram: "https://www.instagram.com/oikos_catalyst/",
  },
  initiatives: [
    {
      name: "oikos International",
      url: "https://oikos-international.org/",
      logo: "/logos/oikos-international.png",
      width: 219,
      height: 121,
    },
    {
      name: "oikos St. Gallen",
      url: "https://www.oikos-stgallen.com/",
      logo: "/logos/oikos-stgallen.png",
      width: 200,
      height: 200,
    },
    {
      name: "University of St. Gallen",
      url: "https://www.unisg.ch",
      logo: "/logos/university-st-gallen.png",
      width: 200,
      height: 200,
    },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/support-us", label: "Support Us" },
  { href: "/event", label: "Event" },
  { href: "/past-events", label: "Past Events" },
  { href: "/faq", label: "FAQ" },
  { href: "/team", label: "Team" },
] as const;

export const footerWhoWeAre = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/team", label: "Team" },
] as const;
