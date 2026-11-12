# nikolayvalev.com

Personal site: projects, resume, and engineering notes.

Next.js (App Router), React 19, Tailwind v4, built on
[`@nikolayvalev/design-system`](https://designsystem.nikolayvalev.com). Every route is static.

| Route | What's there |
|---|---|
| `/` | Intro and featured projects |
| `/work` | All projects, filterable by type |
| `/work/[slug]` | One page per project |
| `/recruiters` | Resume |
| `/engineers` | How each project is built |

Project data lives in `lib/projects.ts`, resume data in `lib/resume.ts`. Screenshots go in
`public/projects/<slug>/`.

```bash
pnpm install
pnpm dev
```

Deployed on Vercel from `main`. Analytics: PostHog (proxied through `/ingest`) and Vercel Analytics.
