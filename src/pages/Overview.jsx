import { ArrowRight } from 'lucide-react'
import RecentReports from '../components/RecentReports.jsx'
import StatCard from '../components/StatCard.jsx'
import TrashHeatMap from '../components/TrashHeatMap.jsx'
import { ButtonLink } from '../components/ui/Button.jsx'
import DemoBadge from '../components/ui/DemoBadge.jsx'
import { projectInfo, summaryStats } from '../data/demoData.js'
import { getStatIcon } from '../lib/icons.js'

export default function Overview() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">
              {projectInfo.appName}
            </h1>
            <DemoBadge />
          </div>
          <p className="mt-1.5 text-sm font-medium text-ink">{projectInfo.title}</p>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
            {projectInfo.dashboardSubtitle}
          </p>
        </div>
        <ButtonLink to="/report" className="shrink-0">
          Report Trash
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {summaryStats.map((stat) => (
          <StatCard
            key={stat.label}
            icon={getStatIcon(stat.iconKey)}
            label={stat.label}
            value={stat.value}
            supportingText={stat.supportingText}
          />
        ))}
      </div>

      <div className="mt-6">
        <TrashHeatMap />
      </div>

      <div className="mt-6">
        <RecentReports />
      </div>
    </div>
  )
}
