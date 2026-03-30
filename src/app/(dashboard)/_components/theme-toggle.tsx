"use client"

import { Icon } from "@iconify/react"
import { useCallback, useLayoutEffect, useSyncExternalStore } from "react"

import { cn } from "@/lib/utils"

const listeners = new Set<() => void>()

function subscribeTheme(onChange: () => void) {
  listeners.add(onChange)
  return () => listeners.delete(onChange)
}

function getDarkSnapshot() {
  return document.documentElement.classList.contains("dark")
}

function getServerDarkSnapshot() {
  return false
}

function notifyThemeListeners() {
  listeners.forEach((listener) => listener())
}

function applyStoredTheme() {
  const stored = localStorage.getItem("theme")
  const root = document.documentElement
  if (stored === "dark") root.classList.add("dark")
  else if (stored === "light") root.classList.remove("dark")
  notifyThemeListeners()
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribeTheme,
    getDarkSnapshot,
    getServerDarkSnapshot,
  )

  useLayoutEffect(() => {
    applyStoredTheme()
  }, [])

  const toggle = useCallback(() => {
    const root = document.documentElement
    const next = !root.classList.contains("dark")
    root.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    notifyThemeListeners()
  }, [])

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={cn(
        "group flex cursor-pointer items-center gap-2 rounded-lg p-1 -m-1",
        "outline-none transition-opacity hover:opacity-90",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      <Icon
        icon={
          dark
            ? "line-md:sunny-filled-loop"
            : "line-md:moon-filled-loop"
        }
        className={cn(
          "size-6 shrink-0 transition duration-200 group-hover:rotate-[20deg]",
          dark ? "text-[var(--englify-purple-icon)]" : "text-muted-foreground",
        )}
        aria-hidden
      />
    </button>
  )
}
