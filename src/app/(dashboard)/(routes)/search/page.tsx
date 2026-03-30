import { Categories } from "./_components/categories"

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Search</h1>
        <p className="text-sm text-muted-foreground">
          Browse courses by category — connect search and filters next.
        </p>
      </div>
      <Categories />
      <div className="rounded-xl border border-dashed border-border bg-muted/10 p-8 text-center text-sm text-muted-foreground">
        Course grid placeholder
      </div>
    </div>
  )
}
