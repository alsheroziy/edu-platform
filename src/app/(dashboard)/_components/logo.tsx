import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({
  className,
  href = "/student/learning",
}: {
  className?: string
  href?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-2 py-1 text-xl font-bold tracking-tight text-[var(--englify-purple)] no-underline dark:text-foreground",
        className,
      )}
      style={{
        fontFamily: "var(--font-englify), var(--font-sans), system-ui, sans-serif",
      }}
    >
      <span className="rounded-lg px-0.5 group-data-[collapsible=icon]:px-0">
        Englify
      </span>
    </Link>
  )
}
