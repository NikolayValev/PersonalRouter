// PostHog ingestion host for the proxy below. Set as a shared Vercel variable;
// the fallback keeps local builds working without a .env file.
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com"

// PostHog serves its client bundles from a sibling "-assets" host
// (us.i.posthog.com -> us-assets.i.posthog.com). Derived rather than adding a
// second env var. A self-hosted host that does not match simply stays as-is.
const POSTHOG_ASSETS_HOST = POSTHOG_HOST.replace(".i.posthog.com", "-assets.i.posthog.com")

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // PostHog ingestion is sensitive to the trailing-slash redirect Next would
  // otherwise issue, which drops the request body.
  skipTrailingSlashRedirect: true,
  // Same-origin proxy for PostHog ingestion so ad blockers do not drop events.
  // Only ingestion and its static assets are proxied; the dashboard is not.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: `${POSTHOG_ASSETS_HOST}/static/:path*`,
      },
      {
        source: "/ingest/:path*",
        destination: `${POSTHOG_HOST}/:path*`,
      },
    ]
  },
}

export default nextConfig
