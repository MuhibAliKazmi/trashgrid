import { useEffect, useRef } from 'react'

/**
 * Accessible dialog shell: darkened backdrop, Escape-to-close, initial focus
 * and focus containment on the panel. Dialog content and copy belong to the
 * caller, which supplies the aria-labelledby / aria-describedby ids.
 */
export default function Modal({
  open,
  onClose,
  labelledBy,
  describedBy,
  className = '',
  children,
}) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    panelRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-end justify-center bg-ink/45 p-4 backdrop-blur-[2px] sm:items-center"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        tabIndex={-1}
        className={[
          'w-full max-w-md rounded-2xl border border-line bg-white p-6 shadow-xl outline-none',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
