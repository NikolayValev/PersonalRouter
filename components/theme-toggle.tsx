"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/design-system/components/Button"

const subscribe = () => () => {}

function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false)
}

export function ThemeToggle() {
  const hydrated = useHydrated()
  const { resolvedTheme, setTheme } = useTheme()

  if (!hydrated) {
    return (
      <Button type="button" variant="outline" size="sm" aria-label="Toggle theme" disabled>
        Theme
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"
  const nextTheme = isDark ? "light" : "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
    >
      {`Theme: ${isDark ? "Dark" : "Light"}`}
    </Button>
  )
}
