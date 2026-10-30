export default function StatCard({ icon: Icon, label, value, supportingText }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(23,35,29,0.04)]">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-soft text-forest">
          {Icon ? <Icon className="h-[17px] w-[17px]" aria-hidden="true" /> : null}
        </span>
        <span className="text-[13px] font-medium text-muted">{label}</span>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-ink">{value}</p>
      <p className="mt-1 text-xs text-muted">{supportingText}</p>
    </div>
  )
}
