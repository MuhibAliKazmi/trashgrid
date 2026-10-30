/** Marks any value in the interface as illustrative prototype data. */
export default function DemoBadge({ label = 'Demo' }) {
  return (
    <span className="rounded-full border border-forest/25 bg-forest-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest">
      {label}
    </span>
  )
}
