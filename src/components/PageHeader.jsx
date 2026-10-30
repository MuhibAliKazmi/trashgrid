export default function PageHeader({ title, subtitle, badge }) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">{title}</h1>
        {badge}
      </div>
      {subtitle && (
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  )
}
