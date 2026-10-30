import { Link } from 'react-router-dom'

const base = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors'

const variants = {
  primary: 'bg-forest text-white hover:bg-forest-dark',
  secondary: 'border border-line bg-white text-ink hover:border-forest/40 hover:text-forest',
  danger: 'border border-line bg-white text-muted hover:border-hot-high/40 hover:text-hot-high',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2.5 text-sm',
}

function buttonClassName({ variant = 'primary', size = 'md', className = '' } = {}) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(' ')
}

/** Native button action. */
export function Button({ variant, size, className, type = 'button', ...props }) {
  return <button type={type} className={buttonClassName({ variant, size, className })} {...props} />
}

/** Navigating action rendered as a React Router link. */
export function ButtonLink({ variant, size, className, ...props }) {
  return <Link className={buttonClassName({ variant, size, className })} {...props} />
}
