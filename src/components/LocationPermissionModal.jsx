import { MapPin, X } from 'lucide-react'
import { Button } from './ui/Button.jsx'
import Modal from './ui/Modal.jsx'

/**
 * Location permission dialog. The generic dialog behaviour (backdrop,
 * Escape-to-close, focus) lives in <Modal>; this component only owns the
 * location-specific copy and actions.
 */
export default function LocationPermissionModal({ open, onAllow, onDismiss }) {
  return (
    <Modal
      open={open}
      onClose={onDismiss}
      labelledBy="location-modal-title"
      describedBy="location-modal-description"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-soft text-forest">
          <MapPin className="h-6 w-6" aria-hidden="true" />
        </span>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close location dialog"
          className="rounded-lg p-1.5 text-muted transition-colors hover:bg-canvas hover:text-ink"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <h2 id="location-modal-title" className="mt-4 text-lg font-semibold text-ink">
        Allow Location Access?
      </h2>
      <p id="location-modal-description" className="mt-2 text-sm leading-relaxed text-muted">
        Your report location helps us identify waste hotspots across Lahore.
      </p>
      <p className="mt-3 rounded-xl border border-line bg-canvas px-3.5 py-3 text-xs leading-relaxed text-muted">
        This demonstration uses a sample location. No device location or IP address is collected.
      </p>

      <div className="mt-6 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">
        <Button variant="secondary" onClick={onDismiss}>
          Not Now
        </Button>
        <Button variant="primary" onClick={onAllow}>
          Allow Location
        </Button>
      </div>
    </Modal>
  )
}
