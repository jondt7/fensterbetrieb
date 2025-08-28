import Link from "next/link"
import { CITIES } from "@/data/cities"

export function CityLinks({ title = "Auch in Ihrer Nähe:" }: { title?: string }) {
  return (
    <div className="mt-10 rounded-[8px] border border-zinc-200 bg-white p-6">
      <div className="text-sm font-semibold text-brand">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {CITIES.map((c) => (
          <Link
            key={c.slug}
            href={`/einzugsgebiet/${c.slug}`}
            className="rounded-[8px] bg-brand-light px-3 py-1 text-sm text-brand hover:opacity-90"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
