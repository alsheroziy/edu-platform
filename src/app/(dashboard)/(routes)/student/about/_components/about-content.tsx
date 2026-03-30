"use client"

import { Icon } from "@iconify/react"
import { motion } from "motion/react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"

const legalLinks = [
  { href: "/student/about/ommaviy-taklif", label: "Ommaviy taklif" },
  { href: "/student/about/maxfiylik", label: "Maxfiylik siyosati" },
  {
    href: "/student/about/shaxsiy-rozilik",
    label: "Shaxsiy ma'lumotlarni qayta ishlashga rozilik",
  },
] as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export function AboutContent() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 text-center text-xl font-bold text-[var(--englify-purple)] dark:text-violet-200"
      >
        Biz haqimizda
      </motion.h1>

      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-3"
      >
        {legalLinks.map((row) => (
          <motion.li key={row.href} variants={item}>
            <Link
              href={row.href}
              className={cn(
                "flex items-center justify-between gap-3 rounded-xl border border-slate-200/90 bg-white px-4 py-3.5 text-left text-sm font-semibold text-[var(--englify-purple)] shadow-sm transition",
                "hover:border-[var(--englify-purple)]/25 hover:shadow-md active:scale-[0.99]",
                "dark:border-border dark:bg-card dark:text-violet-200 dark:hover:border-violet-500/30",
              )}
            >
              <span className="min-w-0 flex-1 leading-snug">{row.label}</span>
              <ChevronRight
                className="size-5 shrink-0 text-[var(--englify-purple-icon)] opacity-70 dark:text-violet-300"
                aria-hidden
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="mt-4 grid grid-cols-2 gap-3"
      >
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex h-16 items-center justify-center rounded-xl border border-slate-200/90 bg-white shadow-sm transition",
            "hover:border-[var(--englify-purple)]/25 hover:shadow-md active:scale-[0.98]",
            "dark:border-border dark:bg-card dark:hover:border-violet-500/30",
          )}
          aria-label="YouTube"
        >
          <Icon
            icon="mdi:youtube"
            className="size-8 text-[var(--englify-purple)] dark:text-violet-300"
            aria-hidden
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex h-16 items-center justify-center rounded-xl border border-slate-200/90 bg-white shadow-sm transition",
            "hover:border-[var(--englify-purple)]/25 hover:shadow-md active:scale-[0.98]",
            "dark:border-border dark:bg-card dark:hover:border-violet-500/30",
          )}
          aria-label="Instagram"
        >
          <Icon
            icon="mdi:instagram"
            className="size-8 text-[var(--englify-purple)] dark:text-violet-300"
            aria-hidden
          />
        </a>
      </motion.div>
    </div>
  )
}
