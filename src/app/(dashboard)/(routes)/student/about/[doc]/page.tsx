import Link from "next/link"

const TITLES: Record<string, string> = {
  "ommaviy-taklif": "Ommaviy taklif",
  maxfiylik: "Maxfiylik siyosati",
  "shaxsiy-rozilik": "Shaxsiy ma'lumotlarni qayta ishlashga rozilik",
}

type PageProps = { params: Promise<{ doc: string }> }

export default async function StudentAboutDocPage({ params }: PageProps) {
  const { doc } = await params
  const title = TITLES[doc]

  if (!title) {
    return (
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm text-muted-foreground">Sahifa topilmadi.</p>
        <Link
          href="/student/about"
          className="mt-4 inline-block text-sm font-semibold text-[var(--englify-purple)] dark:text-violet-300"
        >
          Orqaga
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-lg space-y-4">
      <Link
        href="/student/about"
        className="inline-flex text-sm font-medium text-muted-foreground transition hover:text-[var(--englify-purple)] dark:hover:text-violet-300"
      >
        ← Biz haqimizda
      </Link>
      <h1 className="text-xl font-bold text-[var(--englify-purple)] dark:text-violet-200">
        {title}
      </h1>
      <div className="rounded-xl border border-slate-200/90 bg-white p-4 text-sm leading-relaxed text-muted-foreground shadow-sm dark:border-border dark:bg-card">
        <p>
          Hujjat matni tez orada joylashtiriladi. Savollar bo&apos;yicha qo&apos;llab-quvvatlash
          xizmatiga murojaat qiling.
        </p>
      </div>
    </div>
  )
}
