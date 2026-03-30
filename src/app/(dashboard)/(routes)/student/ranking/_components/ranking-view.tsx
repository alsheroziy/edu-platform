"use client"

import type { ComponentType } from "react"
import { useState } from "react"
import {
  Award,
  Bell,
  Brain,
  ChevronRight,
  Coins,
  Flag,
  MessageCircle,
  Star,
  TrendingDown,
  Zap,
} from "lucide-react"

import { RankingMedallionIcon } from "@/app/(dashboard)/_components/sidebar/ranking-icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

import { SkillsRadar } from "./skills-radar"

const CEFR_LEVELS = [
  "Starter",
  "Beginner",
  "Elementary",
  "Pre-Intermediate",
  "Intermediate",
  "Upper-Intermediate",
  "IELTS",
] as const

const ME_ROW = {
  rank: 94_866,
  name: "Shehroz Raxmattov",
  score: 101,
  levelLabel: "Beginner 1",
} as const

const LEADERBOARD = [
  { rank: 1, name: "Dilshod Karimov", score: 8042 },
  { rank: 2, name: "Madina Usmonova", score: 7570 },
  { rank: 3, name: "Javohir Tursunov", score: 7120 },
  { rank: 4, name: "Nilufar Rahimova", score: 6890, flags: "🇺🇿 🇬🇧" },
  { rank: 5, name: "Asadbek Jurayev", score: 6540 },
] as const

const levelTabTriggerClass =
  "shrink-0 rounded-full border-0 px-3.5 py-2 text-xs font-semibold shadow-none transition-all " +
  "text-white/95 hover:text-white " +
  "data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md " +
  "dark:data-[state=active]:text-blue-800"

export function RankingView() {
  const [cefrLevel, setCefrLevel] = useState<string>("Beginner")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <RankingMedallionIcon size={36} className="drop-shadow-sm" />
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Ranking
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
            <Bell className="size-5" />
          </Button>
          <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
            <MessageCircle className="size-5" />
          </Button>
          <div className="flex items-center gap-2 rounded-full bg-card py-1 pr-3 pl-1 shadow-sm ring-1 ring-black/[0.06] dark:ring-white/10">
            <Avatar className="size-9 border border-border">
              <AvatarImage src={undefined} alt="" />
              <AvatarFallback className="bg-muted text-xs font-medium">
                SH
              </AvatarFallback>
            </Avatar>
            <div className="text-left leading-tight">
              <p className="text-xs font-semibold">Shakhzodbek</p>
              <p className="text-[0.65rem] text-muted-foreground">Elementary</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
        <Card className="overflow-hidden rounded-3xl border-0 shadow-lg ring-1 ring-blue-700/15 dark:ring-blue-500/20">
          <div className="bg-blue-600 px-4 pt-4 pb-3 text-white dark:bg-blue-800">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <Avatar className="size-12 shrink-0 border-2 border-white/40 bg-white/20">
                  <AvatarImage src={undefined} alt="" />
                  <AvatarFallback className="bg-white/25 text-sm font-bold text-white">
                    SR
                  </AvatarFallback>
                </Avatar>
                <p className="truncate text-base font-bold">{ME_ROW.name}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-800">
                  {ME_ROW.levelLabel}
                </span>
                <PointsPill score={ME_ROW.score} variant="onBlue" />
              </div>
            </div>

            <Tabs value={cefrLevel} onValueChange={setCefrLevel} className="mt-4 w-full">
              <TabsList className="inline-flex h-auto w-full min-w-0 flex-nowrap justify-start gap-2 overflow-x-auto overscroll-x-contain rounded-none border-0 bg-transparent p-0 shadow-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {CEFR_LEVELS.map((level) => (
                  <TabsTrigger
                    key={level}
                    value={level}
                    className={levelTabTriggerClass}
                  >
                    {level}
                  </TabsTrigger>
                ))}
              </TabsList>
              {CEFR_LEVELS.map((level) => (
                <TabsContent key={level} value={level} className="sr-only" />
              ))}
            </Tabs>
          </div>

          <CardContent className="space-y-2 bg-white p-3 dark:bg-zinc-950">
            <div
              className={cn(
                "flex items-center gap-3 rounded-2xl border-2 border-violet-600 bg-white px-3 py-3 dark:border-violet-500 dark:bg-zinc-900",
              )}
            >
              <span className="w-14 shrink-0 text-right text-sm font-bold tabular-nums text-foreground">
                {ME_ROW.rank.toLocaleString()}
              </span>
              <Avatar className="size-10 shrink-0 border border-zinc-200 dark:border-zinc-700">
                <AvatarFallback className="bg-zinc-200 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                  SR
                </AvatarFallback>
              </Avatar>
              <span className="min-w-0 flex-1 truncate text-sm font-bold text-foreground">
                {ME_ROW.name}
              </span>
              <PointsPill score={ME_ROW.score} />
            </div>

            {LEADERBOARD.map((row) => (
              <div
                key={row.rank}
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-3 py-3 dark:border-zinc-800 dark:bg-zinc-900/80"
              >
                <span className="w-14 shrink-0 text-right text-sm font-bold tabular-nums text-foreground">
                  {row.rank}
                </span>
                <Avatar className="size-10 shrink-0 border border-zinc-200 dark:border-zinc-700">
                  <AvatarFallback className="bg-zinc-100 text-xs font-semibold dark:bg-zinc-800">
                    {row.name
                      .replace(/[\u{1F1E6}-\u{1F1FF}\s]/gu, "")
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <span className="text-sm font-bold text-foreground">
                    {row.name.replace(/🇺🇿|🇬🇧/g, "").trim()}
                    {"flags" in row && row.flags ? (
                      <span className="ml-1.5 text-base leading-none">
                        {row.flags}
                      </span>
                    ) : null}
                  </span>
                </div>
                <PointsPill score={row.score} />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="rounded-2xl shadow-sm ring-1 ring-black/[0.06] dark:ring-white/10">
            <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
              <Avatar className="size-20 border-2 border-red-500/80 ring-4 ring-red-500/15">
                <AvatarFallback className="text-lg font-bold">SI</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-lg font-bold">Shakhzodbek Ismatov</p>
                <p className="text-sm text-muted-foreground">
                  Maksim Gorkiy | Elementary
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 text-right sm:shrink-0">
                <span className="text-3xl font-black tabular-nums tracking-tight">
                  84.96%
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
                  <TrendingDown className="size-3.5" />
                  -12.92%
                </span>
                <p className="text-[0.65rem] text-muted-foreground">
                  May progress
                </p>
              </div>
              <ChevronRight className="hidden size-5 shrink-0 text-muted-foreground sm:block" />
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            <StatTile
              icon={Coins}
              iconClassName="text-amber-500"
              label="Coins"
              value="5 397"
            />
            <StatTile
              icon={Star}
              iconClassName="fill-amber-400 text-amber-500"
              label="Score"
              value="4 319"
            />
            <StatTile
              icon={Award}
              iconClassName="text-emerald-600 dark:text-emerald-400"
              label="Branch ranking"
              value="111th"
            />
            <StatTile
              icon={Flag}
              iconClassName="text-slate-600 dark:text-slate-300"
              label="Sprint winner"
              value="×0"
            />
            <StatTile
              icon={Brain}
              iconClassName="text-violet-600 dark:text-violet-400"
              label="Smart winner"
              value="×0"
            />
          </div>

          <div className="flex justify-center gap-2 py-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "size-2 rounded-full",
                  i === 0 ? "bg-amber-400" : "bg-zinc-300 dark:bg-zinc-600",
                )}
              />
            ))}
          </div>

          <SkillsRadar />
        </div>
      </div>
    </div>
  )
}

function PointsPill({
  score,
  variant = "onWhite",
}: {
  score: number
  variant?: "onWhite" | "onBlue"
}) {
  const formatted = score.toLocaleString("en-US").replace(/,/g, " ")
  if (variant === "onBlue") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-bold tabular-nums text-emerald-600 shadow-sm dark:bg-white">
        <Zap
          className="size-3.5 shrink-0 fill-emerald-500 text-emerald-600"
          aria-hidden
        />
        {formatted}
      </span>
    )
  }
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-bold tabular-nums text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50">
      <Zap
        className="size-3.5 shrink-0 fill-emerald-500 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400"
        aria-hidden
      />
      {formatted}
    </span>
  )
}

function StatTile({
  icon: Icon,
  iconClassName,
  label,
  value,
  className,
}: {
  icon: ComponentType<{ className?: string }>
  iconClassName?: string
  label: string
  value: string
  className?: string
}) {
  return (
    <Card
      className={cn(
        "rounded-2xl shadow-sm ring-1 ring-black/[0.06] dark:ring-white/10",
        className,
      )}
    >
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex size-10 items-center justify-center rounded-xl bg-muted/80">
          <Icon className={cn("size-5", iconClassName)} aria-hidden />
        </div>
        <p className="text-[0.65rem] font-medium text-muted-foreground">
          {label}
        </p>
        <p className="text-lg font-bold tabular-nums">{value}</p>
      </CardContent>
    </Card>
  )
}
