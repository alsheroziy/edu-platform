"use client"

import { Progress } from "@/components/ui/progress"

export function CourseProgress({
  courseId,
  percent,
}: {
  courseId: string
  percent: number
}) {
  return (
    <div className="space-y-2 rounded-lg border border-border p-4">
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="font-medium">Progress</span>
        <span className="text-muted-foreground tabular-nums">{percent}%</span>
      </div>
      <Progress value={percent} />
      <p className="text-[0.625rem] text-muted-foreground">ID: {courseId}</p>
    </div>
  )
}
