import { CourseProgress } from "./_components/course-progress"

type PageProps = { params: Promise<{ courseId: string }> }

export default async function StudentCourseLearningPage({ params }: PageProps) {
  const { courseId } = await params

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Course</h1>
        <p className="text-sm text-muted-foreground">Course ID: {courseId}</p>
      </div>
      <CourseProgress courseId={courseId} percent={0} />
      <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
        Lesson content and player go here.
      </div>
    </div>
  )
}
