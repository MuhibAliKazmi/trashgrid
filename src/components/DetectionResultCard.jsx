import { detectionResults } from '../data/demoData.js'
import { getCategoryIcon } from '../lib/icons.js'
import Card from './ui/Card.jsx'

export default function DetectionResultCard() {
  return (
    <Card
      title="Detected Waste Categories"
      description="Illustrative AI predictions based on a sample image."
    >

      <ul className="space-y-3">
        {detectionResults.map((result) => {
          const Icon = getCategoryIcon(result.category)
          return (
            <li key={result.id} className="rounded-xl border border-line bg-canvas px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-forest">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="truncate text-sm font-medium text-ink">{result.category}</p>
                    <p className="text-sm font-semibold text-forest">{result.confidence}%</p>
                  </div>
                  <div
                    className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line"
                    role="img"
                    aria-label={`${result.category} confidence ${result.confidence} percent`}
                  >
                    <div
                      className="h-full rounded-full bg-forest transition-[width] duration-700 ease-out"
                      style={{ width: `${result.confidence}%` }}
                    />
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Demonstration output only. These values are fixed sample data and are not produced by an
        actual image classification model.
      </p>
    </Card>
  )
}
