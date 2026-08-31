"use client"

import type React from "react"
import { useEffect } from "react"
import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    // No key in this environment (local dev without .env.local, or a preview
    // that has not been configured) -- render untracked rather than throwing.
    if (!key) return

    posthog.init(key, {
      // Same-origin proxy, rewritten in next.config.mjs, so ad blockers do not
      // drop ingestion. Only ingestion is proxied.
      api_host: "/ingest",
      // Where PostHog's own "view in app" links point.
      ui_host: "https://us.posthog.com",
      // Pins PostHog's recommended defaults as of this date. At >= 2025-05-24
      // this resolves capture_pageview to "history_change", so App Router soft
      // navigations are captured automatically. Do NOT add a manual
      // usePathname/$pageview effect on top -- it double-counts every view.
      defaults: "2026-05-30",
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
