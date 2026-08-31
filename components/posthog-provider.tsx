"use client"

import type React from "react"
import { useEffect } from "react"
import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"

/**
 * Identifies this app inside the shared PostHog project.
 *
 * All of the portfolio apps report into one PostHog project (one key is set as
 * a shared Vercel variable), so without this super-property every app's events
 * land in a single undifferentiated stream. Registered as a super-property so
 * it rides along on every event automatically, including autocaptured ones.
 */
const APP_NAME = "personal-router"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    // No key in this environment (local dev without .env.local, or an
    // unconfigured preview) -- render untracked rather than throwing.
    if (!key) return

    posthog.init(key, {
      // Same-origin proxy, rewritten in next.config.mjs, so ad blockers do not
      // drop ingestion. NEXT_PUBLIC_POSTHOG_HOST is the proxy's *destination*
      // and is consumed there, not here.
      api_host: "/ingest",
      // Where PostHog's own "view in app" links point.
      ui_host: "https://us.posthog.com",
      // Pins PostHog's recommended defaults as of this date. At >= 2025-05-24
      // this resolves capture_pageview to "history_change", so App Router soft
      // navigations are captured automatically. Do NOT add a manual
      // usePathname/$pageview effect on top -- it double-counts every view.
      defaults: "2026-05-30",
    })

    posthog.register({ app: APP_NAME })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
