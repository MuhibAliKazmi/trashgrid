import { Info, LayoutGrid, Leaf, Upload } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { projectInfo } from '../data/demoData.js'
import DemoBadge from './ui/DemoBadge.jsx'

const navItems = [
  { to: '/', label: 'Overview', icon: LayoutGrid, end: true },
  { to: '/report', label: 'Report Trash', icon: Upload, end: false },
  { to: '/about', label: 'About Project', icon: Info, end: false },
]

function navLinkClasses(isActive, isCompact = false) {
  return [
    'flex shrink-0 items-center gap-2 rounded-lg font-medium transition-colors',
    isCompact ? 'px-3 py-2 text-sm' : 'w-full px-3 py-2.5 text-sm',
    isActive ? 'bg-forest-soft text-forest' : 'text-muted hover:bg-white hover:text-ink',
  ]
    .filter(Boolean)
    .join(' ')
}

function NavItem({ to, label, icon: Icon, end, isCompact }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => navLinkClasses(isActive, isCompact)}
    >
      <Icon className={isCompact ? 'h-4 w-4' : 'h-[18px] w-[18px]'} aria-hidden="true" />
      {label}
    </NavLink>
  )
}

export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-white">
        <Leaf className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[17px] font-semibold tracking-tight text-ink">
            {projectInfo.appName}
          </span>
          <DemoBadge />
        </div>
        <p className="mt-0.5 text-xs leading-snug text-muted">{projectInfo.title}</p>
      </div>
    </div>
  )
}

function NavList({ isCompact = false, className = '' }) {
  return (
    <nav aria-label="Main" className={className}>
      {navItems.map((item) => (
        <NavItem key={item.to} {...item} isCompact={isCompact} />
      ))}
    </nav>
  )
}

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line bg-canvas px-4 py-6 lg:flex">
      <BrandMark />

      <NavList className="mt-8 space-y-1" />

      <div className="mt-auto rounded-2xl border border-line bg-white p-4">
        <p className="text-[13px] font-medium leading-snug text-ink">{projectInfo.tagline}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Static demonstration prototype. Statistics, detections and hotspots are illustrative demo
          data.
        </p>
      </div>
    </aside>
  )
}

export function MobileNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/95 backdrop-blur lg:hidden">
      <div className="px-4 py-3">
        <BrandMark />
      </div>
      <NavList isCompact className="flex gap-1 overflow-x-auto px-3 pb-2" />
    </header>
  )
}
