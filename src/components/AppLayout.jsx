import { Outlet } from 'react-router-dom'
import Sidebar, { MobileNav } from './Sidebar.jsx'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-canvas">
      <Sidebar />
      <MobileNav />
      <main className="lg:pl-64">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
