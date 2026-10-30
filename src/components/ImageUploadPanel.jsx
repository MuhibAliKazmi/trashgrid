import { Camera, ImagePlus, RefreshCw, X } from 'lucide-react'
import { Button } from './ui/Button.jsx'
import Card from './ui/Card.jsx'

/** Empty state: offers the predefined sample images. No file or camera access. */
function ImagePicker({ onSelect }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-line bg-forest-soft/50 px-6 py-10 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-forest shadow-sm">
        <ImagePlus className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-ink">Upload a Photo of Waste</h3>
      <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted">
        Select a photograph showing litter or waste in your area.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
        <Button variant="primary" onClick={onSelect}>
          <ImagePlus className="h-4 w-4" aria-hidden="true" />
          Choose Image
        </Button>
        <Button variant="secondary" onClick={onSelect}>
          <Camera className="h-4 w-4" aria-hidden="true" />
          Take Photo
        </Button>
      </div>
      <p className="mt-4 text-xs text-muted">
        Demo only — no file is uploaded and no camera access is requested.
      </p>
    </div>
  )
}

/** Preview state: shows the selected sample image with change/remove controls. */
function ImagePreview({ image, onCycle, onRemove }) {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-xl border border-line bg-canvas">
        <img src={image.src} alt={image.alt} className="h-64 w-full object-cover sm:h-80" />
        <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-2.5 py-1 text-[11px] font-medium text-white">
          {image.label}
        </span>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink">{image.filename}</p>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={onCycle}>
            <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
            Change Image
          </Button>
          <Button variant="danger" size="sm" onClick={onRemove} aria-label="Remove selected sample image">
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Remove
          </Button>
        </div>
      </figcaption>
    </figure>
  )
}

/**
 * Report photo card. Selection state belongs to the parent (ReportTrash page);
 * this component only renders the picker or the preview of the chosen image.
 */
export default function ImageUploadPanel({ selectedImage, onSelect, onRemove, onCycle }) {
  return (
    <Card title="Report Photo" description="A predefined sample image stands in for a real upload.">
      {selectedImage ? (
        <ImagePreview image={selectedImage} onCycle={onCycle} onRemove={onRemove} />
      ) : (
        <ImagePicker onSelect={onSelect} />
      )}
    </Card>
  )
}
