"use client"

import { useState } from "react"

import { CategoryItem } from "./category-item"

const DEFAULT_CATEGORIES = [
  "All",
  "Development",
  "Design",
  "Business",
  "Languages",
]

export function Categories({
  categories = DEFAULT_CATEGORIES,
}: {
  categories?: string[]
}) {
  const [active, setActive] = useState(categories[0] ?? "All")

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <CategoryItem
          key={c}
          label={c}
          active={c === active}
          onSelect={() => setActive(c)}
        />
      ))}
    </div>
  )
}
