"use client"

import {
  BookOpen,
  BookText,
  FilePenLine,
  Headphones,
  Megaphone,
  WholeWord,
} from "lucide-react"
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const SKILL_ROWS = [
  { skill: "Vocabulary", value: 99, Icon: BookText },
  { skill: "Grammar", value: 99, Icon: WholeWord },
  { skill: "Listening", value: 96, Icon: Headphones },
  { skill: "Writing", value: 65, Icon: FilePenLine },
  { skill: "Reading", value: 91, Icon: BookOpen },
  { skill: "Pronunciation", value: 40, Icon: Megaphone },
] as const

const chartConfig = {
  value: {
    label: "Skills",
    color: "hsl(48 96% 54%)",
  },
} satisfies ChartConfig

const radarRows = SKILL_ROWS.map(({ skill, value }) => ({ skill, value }))

export function SkillsRadar() {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/[0.06] dark:ring-white/10">
      <div
        className="h-1 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"
        aria-hidden
      />
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Skill balance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[min(100%,420px)] [&_.recharts-surface]:outline-none"
        >
          <RadarChart data={radarRows}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarGrid className="stroke-border/50" />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fontSize: 10, fill: "currentColor" }}
              className="text-xs text-muted-foreground"
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tickCount={5}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              fill="var(--color-value)"
              fillOpacity={0.45}
              stroke="var(--color-value)"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "var(--color-value)",
                strokeWidth: 2,
                stroke: "#fff",
              }}
            />
          </RadarChart>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SKILL_ROWS.map(({ skill, value, Icon }) => (
            <div
              key={skill}
              className="flex items-center gap-2 rounded-xl bg-amber-50/90 px-2.5 py-2 dark:bg-amber-950/30"
            >
              <Icon
                className={cn(
                  "size-5 shrink-0 text-amber-500 dark:text-amber-400",
                )}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.65rem] font-medium text-foreground">
                  {skill}
                </p>
                <p className="text-xs font-semibold tabular-nums text-amber-700 dark:text-amber-300">
                  {value}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
