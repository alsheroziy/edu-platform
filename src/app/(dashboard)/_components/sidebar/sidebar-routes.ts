import type { ComponentType } from "react"

import {
  SidebarIconAnalytics,
  SidebarIconBiz,
  SidebarIconDars,
  SidebarIconHelp,
  SidebarIconLogout,
  SidebarIconResurs,
  SidebarIconSettings,
  SidebarIconSuhbat,
  SidebarIconTss,
} from "./sidebar-icons"
import { SidebarIconRanking } from "./ranking-icon"

export type SidebarNavIcon = ComponentType<{ className?: string }>

export type SidebarRouteItem = {
  title: string
  icon: SidebarNavIcon
  exact?: boolean
  href?: string
  logout?: boolean
}

export const englifyNavMain: SidebarRouteItem[] = [
  { title: "Darslar", href: "/student/learning", icon: SidebarIconDars },
  { title: "Resuslar", href: "/student/resources", icon: SidebarIconResurs },
  { title: "Suhbatlar", href: "/student/chats", icon: SidebarIconSuhbat },
  { title: "Reyting", href: "/student/ranking", icon: SidebarIconRanking, exact: true },
  { title: "Biz haqimizda", href: "/student/about", icon: SidebarIconBiz, exact: true },
  {
    title: "Sozlamalar",
    href: "/student/settings",
    icon: SidebarIconSettings,
    exact: true,
  },
  { title: "Yordam", href: "/student/help", icon: SidebarIconHelp, exact: true },
  {
    title: "TSS",
    href: "/student/faq",
    icon: SidebarIconTss,
    exact: true,
  },
]

export const englifyNavInstructorMain: SidebarRouteItem[] = [
  {
    title: "O'qituvchi paneli",
    href: "/instructor",
    icon: SidebarIconBiz,
    exact: true,
  },
  { title: "Mening kurslarim", href: "/instructor/courses", icon: SidebarIconDars },
  {
    title: "Analitika",
    href: "/instructor/analytics",
    icon: SidebarIconAnalytics,
    exact: true,
  },
  { title: "Darslar", href: "/instructor/learning", icon: SidebarIconDars },
  { title: "Resuslar", href: "/instructor/resources", icon: SidebarIconResurs },
  { title: "Suhbatlar", href: "/instructor/chats", icon: SidebarIconSuhbat },
  {
    title: "Reyting",
    href: "/instructor/ranking",
    icon: SidebarIconRanking,
    exact: true,
  },
  {
    title: "Biz haqimizda",
    href: "/instructor/about",
    icon: SidebarIconBiz,
    exact: true,
  },
  {
    title: "Sozlamalar",
    href: "/instructor/settings",
    icon: SidebarIconSettings,
    exact: true,
  },
  { title: "Yordam", href: "/instructor/help", icon: SidebarIconHelp, exact: true },
  {
    title: "TSS",
    href: "/instructor/faq",
    icon: SidebarIconTss,
    exact: true,
  },
]

export const englifyNavLogout: SidebarRouteItem = {
  title: "Chiqish",
  icon: SidebarIconLogout,
  logout: true,
}
