"use client"

import { usePathname, useSelectedLayoutSegments } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar"

import { Logo } from "../logo"
import { SidebarItem } from "./sidebar-item"
import {
  englifyNavInstructorMain,
  englifyNavLogout,
  englifyNavMain,
} from "./sidebar-routes"

function isInstructorPath(pathname: string, layoutSegments: string[]) {
  const path = pathname.split("?")[0] ?? ""
  if (path === "/instructor" || path.startsWith("/instructor/")) return true
  return layoutSegments[0] === "instructor"
}

export function DashboardSidebar() {
  const pathname = usePathname() ?? ""
  const layoutSegments = useSelectedLayoutSegments()
  const isInstructor = isInstructorPath(pathname, layoutSegments)
  const navItems = isInstructor ? englifyNavInstructorMain : englifyNavMain
  const logoHref = isInstructor ? "/instructor" : "/student/learning"
  const groupLabel = isInstructor ? "O'qituvchi" : "Talaba"

  return (
    <Sidebar
      collapsible="icon"
      className="border-transparent bg-transparent md:border-r-0"
    >
      <SidebarHeader className="border-0 px-4 pt-5 pb-3">
        <Logo className="pl-0.5" href={logoHref} />
      </SidebarHeader>
      <SidebarContent className="flex flex-1 flex-col gap-0 overflow-y-auto px-3 pb-4">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {groupLabel}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {navItems.map((item) => (
                <SidebarItem key={item.href} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="p-0 pt-2">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              <SidebarItem key="logout" item={englifyNavLogout} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
