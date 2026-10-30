import { recentReports } from '../data/demoData.js'
import { getCategoryIcon } from '../lib/icons.js'
import Card from './ui/Card.jsx'

export default function RecentReports() {
  return (
    <Card
      title="Recent Waste Reports"
      description="The latest entries from the illustrative demo dataset."
    >

      <ul className="divide-y divide-line">
        {recentReports.map((report) => {
          const Icon = getCategoryIcon(report.category)
          return (
            <li
              key={report.id}
              className="flex flex-wrap items-center gap-3 py-3 first:pt-0 last:pb-0 sm:flex-nowrap"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-soft text-forest">
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{report.location}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {report.category} &middot; Reported {report.reported}
                </p>
              </div>
              <span className="rounded-full border border-line bg-canvas px-2.5 py-1 text-[11px] font-medium text-muted">
                {report.status}
              </span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
