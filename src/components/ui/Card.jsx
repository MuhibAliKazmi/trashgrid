const cardClasses =
  'rounded-2xl border border-line bg-white p-4 shadow-[0_1px_2px_rgba(23,35,29,0.04)] sm:p-5'

/**
 * Standard content card: white surface, subtle border and shadow.
 * An optional title/description renders the card's heading block.
 */
export default function Card({ title, description, className = '', children }) {
  const hasHeader = Boolean(title || description)
  return (
    <section className={[cardClasses, className].filter(Boolean).join(' ')}>
      {hasHeader && (
        <div className="mb-4">
          {title && <h2 className="text-base font-semibold tracking-tight text-ink">{title}</h2>}
          {description && <p className="mt-0.5 text-sm text-muted">{description}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
