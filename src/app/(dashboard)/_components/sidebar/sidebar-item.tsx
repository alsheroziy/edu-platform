"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

import type { SidebarRouteItem } from "./sidebar-routes"

function routeIsActive(pathname: string, item: SidebarRouteItem) {
  if (!item.href) return false
  if (item.exact) {
    return pathname === item.href
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`)
}

const navButtonClass = cn(
  "h-auto min-h-11 w-full gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold tracking-tight",
  "text-[var(--englify-purple)] dark:text-sidebar-foreground",
  "[&_.nav-ic_svg]:!h-6 [&_.nav-ic_svg]:!w-[25px] [&_.nav-ic_svg]:shrink-0",
  "[&_.nav-ic]:text-[var(--englify-purple-icon)]",
  "dark:[&_.nav-ic]:text-muted-foreground",
  "data-active:[&_.nav-ic]:text-[var(--englify-purple-icon)]",
  "dark:data-active:[&_.nav-ic]:text-sidebar-foreground",
  "data-active:bg-[var(--englify-sidebar-active)] data-active:font-semibold",
  "dark:data-active:bg-sidebar-accent",
  "hover:bg-black/[0.04] dark:hover:bg-sidebar-accent/60",
  "data-active:hover:bg-[var(--englify-sidebar-active)] dark:data-active:hover:bg-sidebar-accent",
)

export function SidebarItem({ item }: { item: SidebarRouteItem }) {
  const pathname = usePathname()
  const router = useRouter()
  const isActive = routeIsActive(pathname, item)
  const Icon = item.icon

  if (item.logout) {
    return (
      <SidebarMenuItem className="w-full">
        <SidebarMenuButton
          type="button"
          tooltip={item.title}
          className={navButtonClass}
          onClick={() => {
            router.push("/sign-in")
          }}
        >
          <span className="nav-ic flex items-center justify-center">
            <Icon />
          </span>
          <span>{item.title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  if (!item.href) {
    return null
  }

  return (
    <SidebarMenuItem className="w-full">
      <SidebarMenuButton
        asChild
        isActive={isActive}
        tooltip={item.title}
        className={navButtonClass}
      >
        <Link href={item.href}>
          <span className="nav-ic flex items-center justify-center">
            <Icon />
          </span>
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
