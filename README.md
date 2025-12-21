# nikolayvalev.com — Root Router

This repository contains the **root landing page** for `nikolayvalev.com`.

Its sole purpose is **traffic segmentation**.

Visitors are forced to self-select into one of three audiences:
- Recruiters
- Engineers
- Clients

Each path routes to a dedicated subdomain with content, tone, and structure optimized for that audience.

This is not a portfolio.  
This is a decision surface.

---

## Philosophy

- No scrolling required to decide
- No mixed audiences on a single page
- No narrative, no SEO padding, no filler
- Structure over decoration
- Copy over color
- Intentional friction over friendliness

If a visitor does not immediately know where to go, the page has failed.

---

## Structure

Root domain:
- `nikolayvalev.com` → router only

Subdomains (separate repos / deployments):
- `recruiters.nikolayvalev.com`
- `engineers.nikolayvalev.com`
- `clients.nikolayvalev.com`

Each subdomain evolves independently and serves exactly one audience.

---

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Vercel deployment
- OKLCH-based design tokens

No CMS. No runtime dependencies. No analytics coupling.

---

## Design Constraints

- Typography-first (Playfair Display + Inter)
- Single primary color
- No accent-driven segmentation
- Cards are the interface
- Hover states only, no motion

---

## What This Repo Does NOT Contain

- Resume content
- Project galleries
- Blog posts
- Client work
- Engineering writeups
- Contact forms

Those belong in the subdomains.

---

## Deployment Model

- Root router deployed independently
- Each subdomain can diverge in layout, content depth, and cadence
- Shared visual language, not shared pages

---

## Status

Stable. Intentionally minimal.  
Changes are structural, not cosmetic.

---

## License

MIT
