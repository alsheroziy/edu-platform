"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function MobileSidebarTrigger({ className }: { className?: string }) {
  return (
    <SidebarTrigger
      className={cn(
        "shrink-0 text-[var(--englify-purple)] md:hidden dark:text-muted-foreground",
        className,
      )}
      aria-label="Open menu"
    />
  )
}
