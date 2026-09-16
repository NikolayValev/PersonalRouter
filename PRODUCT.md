# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two co-primary audiences, confirmed as genuinely equal rather than ranked:

- **Recruiters and hiring managers** screening Nikolay against an open role. They arrive cold from LinkedIn, a referral, or outreach they initiated, and they are scanning — they need the resume, the stack, and evidence of shipped work fast enough to decide whether to make contact.
- **Engineers and engineering managers** reading for judgment and taste rather than credentials. They want the decisions behind the work and whether those decisions would survive a code review.

Forcing the visitor to self-select between these two is the site's organizing structure, not a navigation convenience.

**Clients (freelance/contract) is not an audience.** The README names it and no code implements it; it is confirmed abandoned. Future work should not build toward it or restore it.

## Product Purpose

The root landing page at `nikolayvalev.com`. It is deliberately **hybrid**: a router-first decision surface above the fold — the visitor picks Recruiters or Engineers — with enough depth behind that choice (resume, work index, per-project detail pages) that a visitor never has to leave to be convinced.

Both layers are intentional and both stay. The README's older framing, which declares this "not a portfolio" and forbids resume and project galleries on the root, is superseded by this record.

Success is three things at once, all confirmed:

1. **Inbound interview requests.** Nikolay is actively looking, so every surface should work for someone deciding whether to make contact.
2. **Standing credibility.** When anyone looks him up — recruiter, peer, conference contact, GitHub visitor — the impression should be unambiguous without any conversion event.
3. **Proof of craft.** A skeptical engineer who reads the detail, or the code, should come away convinced.

## Positioning

Three things a neighboring portfolio could not truthfully copy:

- **The site runs on its own published design system.** `@nikolayvalev/design-system` is a real npm package with a hosted MCP server; this site consumes it as a dependency. The interface is an instance of the product it points at.
- **Every project is actually reachable.** Six run in production at their own subdomains with public source, rather than being described from a screenshot.
- **Self-selection is the structural bet.** Most portfolios average their audiences into one page. This one refuses to, and the two paths are allowed to diverge in tone, depth, and content.

## Operating Context

- **Deployment:** Vercel, built from `main` on push via the GitHub integration. No preview-gate ritual — pushing `main` publishes.
- **Subdomain constellation:** each project is an independently deployed repo at its own subdomain (`dungeonlife`, `designsystem`, `bondviz`, `secondbrain`, `smoking`, `mandate-zero` — all `.nikolayvalev.com`). This site links out to them; it does not embed or proxy them.
- **Analytics:** PostHog plus Vercel Analytics. PostHog ingestion is proxied same-origin through `/ingest` (rewrites in `next.config.mjs`) specifically so ad blockers do not drop events — an important constraint, since recruiters and engineers are both above-average ad-blocker populations. `NEXT_PUBLIC_POSTHOG_*` variables are shared across several of Nikolay's apps.
- **Visit shape:** cold, short, and often mobile. The visitor did not plan to be here and is deciding whether to keep reading.

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind CSS v4, pnpm. Fully static: every route prerenders, including one page per project via `generateStaticParams`.
- Routes: `/`, `/recruiters`, `/engineers`, `/work`, `/work/[slug]`.
- Consumes `@nikolayvalev/design-system` from npm. Components read CSS custom properties in two kept-in-sync namespaces: `--vde-color-*` for design-system components and the Tailwind utility tokens. Theming is a variable swap, never a component rewrite.
- Light and dark are both first-class and hand-tuned; `next-themes` with `system` as the default. The upstream package ships no dark values for `--vde-color-*`, so this repo supplies them in `app/globals.css`.
- No CMS, no database, no forms, no contact form. Contact is `mailto:hello@nikolayvalev.com`, GitHub, and LinkedIn.
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`. Neither is load-bearing; both are inherited from the original v0 scaffold and could be revisited.
- The `package.json` name is still `my-v0-project` from that scaffold.

**Open decisions, recorded rather than invented:**

- The dependency is pinned at `@nikolayvalev/design-system@^1.2.0` while npm latest is `2.1.0`. Whether to take the major is undecided.
- Two stale `TODO` comments describe a reality that no longer exists (`lib/resume.ts:2` claims placeholder specifics; `app/work/[slug]/page.tsx:193` refers to placeholder SVGs that were replaced with real screenshots). They are comments, not open work.

## Brand Commitments

- **Name and mark:** "Nikolay Valev" with a serif **NV** monogram, drawn as an inline SVG path and reused as the site logo and the favicon set (light, dark, SVG, Apple icon), cache-busted with a `?v=` query when the art changes.
- **Typefaces:** Playfair Display for display/serif, Inter for body, both via `next/font/google` and exposed to the design system as `--vde-font-display` / `--vde-font-body`.
- **Color:** a single accent — warm terracotta — over warm neutrals, in both themes. One accent only; segmentation is never carried by color.
- **Voice:** plain English, specific, unpadded. Commit subjects and UI copy both read as prose rather than boilerplate, and the register tolerates em dashes and long sentences.
- The README additionally declares: typography-first, structure over decoration, copy over color, cards as the interface, hover states only with no motion, and no scrolling required to decide. These are the incumbent constraints visible in the code. They were not re-confirmed in this interview and the README's scope claims around them are superseded — treat them as the standing visual position, not as fresh instruction.

## Evidence on Hand

**Real, and usable:**

- Full structured resume in `lib/resume.ts`: Medscape (Frontend Software Developer, Oct 2022 – present, Newark NJ), Superfan (intern, 2022, Brooklyn), Ramapo College (Network Support Technician, 2018–2022); B.S. Computer Science with a Mathematics minor, Ramapo College, cum laude, 3.5. Includes specific outcome claims (a Vue 3 design system across 3 affiliates and 12 sites, a Vue 2→3 migration, 20% retention lift on mobile infinite scroll, 40% fewer deployment errors).
- Real screenshots in `public/projects/<slug>/`, including eight Idle Dungeon Life captures generated by Playwright driving the actual game.
- Six production URLs and seven public GitHub repositories, all live and linkable.
- The design system itself, browsable at `designsystem.nikolayvalev.com` with a component catalog, docs, and Storybook.

**Absent — must not be fabricated:**

- No testimonials, client logos, press mentions, or third-party quotes of any kind.
- No traffic, revenue, or user-count numbers for any personal project. The only metrics that exist are the employment claims in the resume.
- **The resume PDF is missing.** `lib/resume.ts` points the `/recruiters` download button at `/nikolay-valev-resume.pdf`, but that file is untracked and has never been committed, so the button 404s in production. It is not gitignored — it was simply never added.
- Ralph has no screenshot because it has no UI; its card renders a typographic panel rather than borrowed or invented imagery.

## Product Principles

1. **Two audiences, never averaged.** Self-selection is the structure. A page that tries to serve the recruiter and the engineer simultaneously serves neither, and merging the paths would dismantle the site's only real thesis.
2. **Decide in one viewport, then go as deep as you like.** Nothing essential to the decision sits below the fold; everything that rewards curiosity sits behind it.
3. **Every claim is checkable.** Each project links to something running and something readable. Nothing is asserted that a visitor cannot go verify in under a minute.
4. **The site is itself an exhibit.** It ships on Nikolay's own published design system, so an implementation shortcut here is visible evidence against the argument the site is making.
5. **Currency is credibility.** A wrong stack, a stale year, or a missing project reads as carelessness in a way that a plain layout never would. Drift in the facts costs more here than restraint in the design.

## Accessibility & Inclusion

No product-specific standard was established in this interview. The implementation carries commitments that future work should preserve rather than regress:

- A consistent accent-colored `:focus-visible` ring on all links and controls, defined once globally.
- `prefers-reduced-motion` honored for smooth scrolling.
- Decorative imagery marked `aria-hidden` with empty `alt`; status conveyed by shape as well as color, so the single-accent palette never becomes the only signal.
