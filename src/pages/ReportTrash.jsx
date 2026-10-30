import { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Navigation } from 'lucide-react'
import ImageUploadPanel from '../components/ImageUploadPanel.jsx'
import LocationPermissionModal from '../components/LocationPermissionModal.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { Button, ButtonLink } from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { sampleImages, sampleLocation } from '../data/demoData.js'

const steps = ['Upload Photo', 'Add Location', 'Review Report']

function StepIndicator({ activeStep }) {
  return (
    <ol className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
      {steps.map((label, index) => {
        const number = index + 1
        const isComplete = number < activeStep
        const isActive = number === activeStep
        return (
          <li
            key={label}
            aria-current={isActive ? 'step' : undefined}
            className={[
              'flex items-center gap-3 rounded-xl border px-4 py-3',
              isActive
                ? 'border-forest/30 bg-forest-soft'
                : isComplete
                  ? 'border-line bg-white'
                  : 'border-line bg-white/60',
            ].join(' ')}
          >
            <span
              className={[
                'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold',
                isActive
                  ? 'bg-forest text-white'
                  : isComplete
                    ? 'bg-forest-soft text-forest'
                    : 'bg-canvas text-muted',
              ].join(' ')}
            >
              {isComplete ? <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> : number}
            </span>
            <span
              className={[
                'text-sm font-medium',
                isActive || isComplete ? 'text-ink' : 'text-muted',
              ].join(' ')}
            >
              {label}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

export default function ReportTrash() {
  const [imageIndex, setImageIndex] = useState(null)
  const [locationGranted, setLocationGranted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const selectedImage = imageIndex === null ? null : sampleImages[imageIndex]
  const activeStep = selectedImage ? (locationGranted ? 3 : 2) : 1

  return (
    <div>
      <PageHeader
        title="Report Trash"
        subtitle="Help identify waste hotspots across Lahore."
      />

      <StepIndicator activeStep={activeStep} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <ImageUploadPanel
          selectedImage={selectedImage}
          onSelect={() => setImageIndex(0)}
          onCycle={() => setImageIndex((current) => ((current ?? 0) + 1) % sampleImages.length)}
          onRemove={() => setImageIndex(null)}
        />

        <Card title="Report Location" className="h-fit">

          {locationGranted ? (
            <div className="mt-4 rounded-xl border border-forest/25 bg-forest-soft/70 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-forest">
                  <CheckCircle2 className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink">{sampleLocation.city}</p>
                  <span className="mt-1.5 inline-block rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-forest">
                    Sample Location Selected
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Location helps associate a report with an area on the waste map.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-line bg-canvas p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-forest">
                  <MapPin className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink">{sampleLocation.full}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Location helps associate a report with an area on the waste map.
                  </p>
                </div>
              </div>
              <Button
                variant="secondary"
                className="mt-4 w-full"
                onClick={() => setModalOpen(true)}
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Choose Location
              </Button>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Demo only — no device location or IP address is requested or collected.
              </p>
            </>
          )}
        </Card>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <ButtonLink to="/" variant="secondary">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Map
        </ButtonLink>
        <ButtonLink to="/results" variant="primary">
          Analyze Trash
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>

      <LocationPermissionModal
        open={modalOpen}
        onAllow={() => {
          setLocationGranted(true)
          setModalOpen(false)
        }}
        onDismiss={() => setModalOpen(false)}
      />
    </div>
  )
}
