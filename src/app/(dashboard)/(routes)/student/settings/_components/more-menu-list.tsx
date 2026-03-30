"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ChevronRight,
  Globe,
  Info,
  Lightbulb,
  LogOut,
  MessageCircleQuestion,
  Wallet,
} from "lucide-react"

import { cn } from "@/lib/utils"

type Row =
  | { label: string; href: string; icon: typeof Wallet; logout?: false }
  | { label: string; icon: typeof LogOut; logout: true }

const rows: Row[] = [
  { label: "Xaridlar", href: "/student/purchases", icon: Wallet },
  {
    label: "Tez-tez so'raladigan savollar",
    href: "/student/faq",
    icon: MessageCircleQuestion,
  },
  { label: "Biz haqimizda", href: "/student/about", icon: Info },
  { label: "Yordam", href: "/student/help", icon: Lightbulb },
  {
    label: "Ilova interfeys tili",
    href: "/student/settings/language",
    icon: Globe,
  },
  { label: "Chiqish", icon: LogOut, logout: true },
]

const rowClass =
  "flex w-full items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3.5 text-left shadow-sm transition-colors hover:bg-zinc-50/90 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800/90"

const iconClass =
  "size-5 shrink-0 text-[var(--englify-purple-icon)] dark:text-violet-400"

export function MoreMenuList() {
  const router = useRouter()

  return (
    <ul className="mx-auto flex w-full max-w-md flex-col gap-3">
      {rows.map((row) => {
        if (row.logout) {
          return (
            <li key={row.label}>
              <button
                type="button"
                className={cn(rowClass, "cursor-pointer")}
                onClick={() => router.push("/sign-in")}
              >
                <row.icon className={iconClass} aria-hidden />
                <span className="flex-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {row.label}
                </span>
                <ChevronRight
                  className="size-4 shrink-0 text-zinc-400 dark:text-zinc-500"
                  aria-hidden
                />
              </button>
            </li>
          )
        }

        return (
          <li key={row.href}>
            <Link href={row.href} className={rowClass}>
              <row.icon className={iconClass} aria-hidden />
              <span className="flex-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {row.label}
              </span>
              <ChevronRight
                className="size-4 shrink-0 text-zinc-400 dark:text-zinc-500"
                aria-hidden
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
