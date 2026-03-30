"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

import { MobileSidebarTrigger } from "./mobile-sidebar"
import { ThemeToggle } from "../theme-toggle"

export function DashboardNavbar({
  title,
  className,
}: {
  title?: string
  className?: string
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-zinc-200/90 bg-white px-4 dark:border-border dark:bg-background",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <MobileSidebarTrigger />
        <SidebarTrigger
          className="hidden shrink-0 text-[var(--englify-purple)] md:inline-flex dark:text-muted-foreground"
          aria-label="Toggle sidebar"
        />
        {title ? (
          <h1 className="truncate text-sm font-semibold text-foreground">
            {title}
          </h1>
        ) : null}
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <ThemeToggle />
        <Avatar size="sm" className="size-9 border border-zinc-200 dark:border-zinc-700">
          <AvatarFallback className="bg-zinc-200 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
