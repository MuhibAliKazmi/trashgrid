import { Info, MapPinned, ScanLine } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { projectInfo } from '../data/demoData.js'

const features = [
  {
    icon: ScanLine,
    title: 'AI Waste Detection',
    description:
      'The proposed system uses image analysis to identify waste categories such as plastic, paper, cardboard, and metal.',
  },
  {
    icon: MapPinned,
    title: 'Waste Hotspot Mapping',
    description:
      'Reports associated with geographic areas can be visualised on a map to highlight areas with higher concentrations of reported waste.',
  },
]

export default function About() {
  return (
    <div>
      <PageHeader
        title="About TrashGrid"
        subtitle={projectInfo.tagline}
        badge={
          <span className="rounded-full border border-forest/25 bg-forest-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest">
            Demo
          </span>
        }
      />

      <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(23,35,29,0.04)] sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Project</p>
        <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-ink">{projectInfo.title}</h2>
        <p className="mt-1 text-sm text-muted">Application: {projectInfo.appName}</p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          TrashGrid is a proposed urban waste monitoring system designed to demonstrate how
          image-based waste classification and geographic reporting can help identify waste hotspots
          across Lahore, Pakistan.
        </p>
      </section>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, description }) => (
          <section
            key={title}
            className="rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(23,35,29,0.04)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-soft text-forest">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
          </section>
        ))}
      </div>

      <section className="mt-6 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(23,35,29,0.04)] sm:p-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-soft text-forest">
            <Info className="h-[17px] w-[17px]" aria-hidden="true" />
          </span>
          <h3 className="text-base font-semibold tracking-tight text-ink">Prototype Status</h3>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          This frontend is a static demonstration. AI predictions, report statistics, and map
          hotspots are sample data. No actual image analysis, report storage, location collection,
          or route optimisation is implemented.
        </p>
      </section>
    </div>
  )
}
