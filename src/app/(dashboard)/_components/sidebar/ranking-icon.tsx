"use client"

import { useId } from "react"

import { cn } from "@/lib/utils"

export function RankingMedallionIcon({
  className,
  size = 25,
}: {
  className?: string
  size?: number
}) {
  const uid = useId().replace(/:/g, "")
  const gGold = `rk-gold-${uid}`
  const gBar = `rk-bar-${uid}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gGold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="45%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id={gBar} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#713f12" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="10.25"
        fill={`url(#${gGold})`}
        stroke="#92400e"
        strokeWidth="0.75"
      />
      <rect
        x="5.25"
        y="12.5"
        width="3.2"
        height="5.5"
        rx="0.45"
        fill={`url(#${gBar})`}
      />
      <rect
        x="10.4"
        y="9"
        width="3.2"
        height="9"
        rx="0.45"
        fill={`url(#${gBar})`}
      />
      <rect
        x="15.55"
        y="11"
        width="3.2"
        height="7"
        rx="0.45"
        fill={`url(#${gBar})`}
      />
    </svg>
  )
}

export function SidebarIconRanking({ className }: { className?: string }) {
  return <RankingMedallionIcon className={className} size={25} />
}
