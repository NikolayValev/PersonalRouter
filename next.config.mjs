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
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ]
  },
 
}

export default nextConfig