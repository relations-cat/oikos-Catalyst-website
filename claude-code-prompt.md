# Project Brief: oikos Catalyst website rebuild

## Context
I'm rebuilding the website for oikos Catalyst (a sustainability pitch competition run by
oikos St.Gallen at the University of St.Gallen). The current site is on WordPress and is
outdated. I want a new site built from scratch, deployable to Vercel.

All existing content to reuse is in `oikos-catalyst-content.md` in this folder — read it
fully before writing any code. Do not invent facts, stats, quotes, or event details that
aren't in that file; ask me if something is missing.

**Explicitly excluded:** the Team page/content. There is a new team and I'll provide that
separately later. Add a placeholder "Team" nav link/page for now, or omit it — your call,
but don't fabricate team members.

## Tech stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Deploy target: Vercel (so keep everything Vercel-compatible — no server assumptions that
  break on serverless, e.g. no writing to local disk at runtime)

## Site structure
Pages, based on the existing site:
- Home
- About
- Support Us
- Event (current/upcoming event)
- Past Events
- FAQ
- Team (placeholder page for now — "New team coming soon" or similar)
- Contact (there's a /contact/ link referenced in the old site's footer — create a simple
  contact page or mailto-based section, your judgment)

## Design direction
- Clean, modern, sustainability-forward feel (greens/earth tones are fine but don't force it
  if a more neutral palette looks better — use your design judgment)
- Fully responsive (mobile-first)
- Reuse the copy from `oikos-catalyst-content.md` verbatim where it's solid; light editing
  for clarity is fine but flag any meaningful rewording to me
- Don't hotlink the old WordPress image URLs. Use placeholder images/colored blocks for now
  wherever the brief references an image I haven't supplied — I'll swap in real assets after

## Functionality
- **Newsletter signup** (was Mailchimp/WordPress-native before): stub this as a simple form
  that logs to console or hits a placeholder API route for now — I'll wire up a real provider
  (e.g., Mailchimp, ConvertKit, or a Vercel-compatible form service) later
- **Startup application link** and **event sign-up (Google Form)**: keep these as external
  links exactly as given in the content file, unless I say otherwise
- **Contact**: mailto links are fine, matching the addresses in the content file — flag the
  email inconsistency noted in the content file and ask me which address is correct before
  finalizing

## Known content issues — ask me, don't guess
The content file has a "Known content issues to resolve before rebuild" section at the
bottom. Read it and check in with me on each point before treating that content as final.

## Workflow
1. Scaffold the Next.js + TypeScript + Tailwind project
2. Build out the pages using the content file
3. Run locally (`npm run dev`) so I can review
4. Once I approve, help me initialize git, commit, and push to a new GitHub repo
5. Walk me through importing the repo into Vercel for deployment

Start by scaffolding the project and building the Home page first, then we'll go
page-by-page.
