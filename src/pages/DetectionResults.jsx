import { ArrowLeft, ArrowRight, Clock, FileImage, MapPin, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import DetectionResultCard from '../components/DetectionResultCard.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { detectionAnnotations, reportSummary, sampleImages } from '../data/demoData.js'

const detectionImage = sampleImages[0]

const summaryRows = [
  { icon: Tag, label: 'Report ID', value: reportSummary.reportId },
  { icon: MapPin, label: 'Location', value: reportSummary.location },
  { icon: FileImage, label: 'Image', value: reportSummary.image },
  { icon: Clock, label: 'Status', value: reportSummary.status },
]

export default function DetectionResults() {
  return (
    <div>
      <Link
        to="/report"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-forest"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Report Trash
      </Link>

      <PageHeader
        title="AI Trash Detection"
        subtitle="Visual demonstration of the proposed waste classification system."
        badge={
          <span className="rounded-full border border-forest/25 bg-forest-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest">
            Demo Results
          </span>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <section className="rounded-2xl border border-line bg-white p-4 shadow-[0_1px_2px_rgba(23,35,29,0.04)] sm:p-5">
          <div className="mb-4">
            <h2 className="text-base font-semibold tracking-tight text-ink">Analyzed Photo</h2>
            <p className="mt-0.5 text-sm text-muted">
              Sample image with illustrative detection boxes.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-line">
            <img
              src={detectionImage.src}
              alt={detectionImage.alt}
              className="h-72 w-full object-cover sm:h-[420px]"
            />
            {detectionAnnotations.map((box) => (
              <div
                key={box.id}
                className="absolute rounded border-2 border-forest"
                style={{ top: box.top, left: box.left, width: box.width, height: box.height }}
              >
                <span className="absolute -top-6 left-0 whitespace-nowrap rounded bg-forest px-1.5 py-0.5 text-[11px] font-medium text-white">
                  {box.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Bounding boxes are decorative annotations for demonstration purposes and do not
            represent actual model output.
          </p>
        </section>

        <div className="space-y-6">
          <DetectionResultCard />

          <section className="rounded-2xl border border-line bg-white p-4 shadow-[0_1px_2px_rgba(23,35,29,0.04)] sm:p-5">
            <h2 className="text-base font-semibold tracking-tight text-ink">Report Summary</h2>
            <dl className="mt-3 space-y-2.5">
              {summaryRows.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-line bg-canvas px-3.5 py-2.5"
                >
                  <Icon className="h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                  <dt className="text-xs text-muted">{label}</dt>
                  <dd className="ml-auto text-sm font-medium text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Link
          to="/report"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-forest/40 hover:text-forest"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Report
        </Link>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-forest px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forest-dark"
        >
          Return to Map
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
