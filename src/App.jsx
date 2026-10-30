import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Overview from './pages/Overview.jsx'
import ReportTrash from './pages/ReportTrash.jsx'
import DetectionResults from './pages/DetectionResults.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/report" element={<ReportTrash />} />
        <Route path="/results" element={<DetectionResults />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Overview />} />
      </Route>
    </Routes>
  )
}
