/**
 * All statistics, hotspots, reports and AI detections below are
 * ILLUSTRATIVE DEMO DATA for a static frontend prototype.
 * Nothing here is measured, computed, or fetched from a real system.
 */

export const projectInfo = {
  appName: 'TrashGrid',
  title: 'Smart Urban Waste Detection and Routing System',
  tagline: 'Detect Waste. Map Hotspots. Build a Cleaner Lahore.',
  location: 'Lahore, Pakistan',
  dashboardSubtitle:
    'Monitor reported waste hotspots and explore urban waste patterns across Lahore.',
}

// `iconKey` references src/lib/icons.js so statistics stay decoupled from
// their position in this array.
export const summaryStats = [
  {
    iconKey: 'totalReports',
    label: 'Total Reports',
    value: '248',
    supportingText: 'Illustrative reports',
  },
  {
    iconKey: 'wasteHotspots',
    label: 'Waste Hotspots',
    value: '18',
    supportingText: 'Across Lahore',
  },
  {
    iconKey: 'mostCommonWaste',
    label: 'Most Common Waste',
    value: 'Plastic',
    supportingText: 'Sample classification data',
  },
]

export const hotspotLevels = {
  high: { label: 'High Report Density', color: '#dc2626' },
  medium: { label: 'Medium Report Density', color: '#ea580c' },
  low: { label: 'Low Report Density', color: '#eab308' },
}

// Lahore city centre used to position the heat map
export const lahoreCenter = [31.5204, 74.3587]

// Simulated heat-map circles (decorative only)
export const hotspots = [
  { id: 1, area: 'Johar Town', level: 'high', position: [31.47, 74.27], radius: 1700 },
  { id: 2, area: 'Gulberg III', level: 'high', position: [31.513, 74.343], radius: 1300 },
  { id: 3, area: 'City / Anarkali', level: 'high', position: [31.558, 74.335], radius: 1500 },
  { id: 4, area: 'Sabzazar', level: 'high', position: [31.508, 74.287], radius: 1400 },
  { id: 5, area: 'Model Town', level: 'medium', position: [31.483, 74.321], radius: 1500 },
  { id: 6, area: 'Iqbal Town', level: 'medium', position: [31.525, 74.299], radius: 1400 },
  { id: 7, area: 'DHA Phase 5', level: 'medium', position: [31.468, 74.399], radius: 1600 },
  { id: 8, area: 'Lahore Cantt', level: 'medium', position: [31.501, 74.377], radius: 1200 },
  { id: 9, area: 'Gulshan-e-Ravi', level: 'low', position: [31.518, 74.283], radius: 1200 },
  { id: 10, area: 'Township', level: 'low', position: [31.49, 74.293], radius: 1000 },
  { id: 11, area: 'Sanda Kalan', level: 'low', position: [31.536, 74.318], radius: 900 },
  { id: 12, area: 'Thokar Niaz Baig', level: 'low', position: [31.474, 74.242], radius: 1200 },
  { id: 13, area: 'Bedian Road', level: 'low', position: [31.523, 74.408], radius: 1000 },
]

// A few labelled sample markers to keep the map readable
export const mapMarkers = [
  { id: 'johar', name: 'Johar Town', position: [31.4697, 74.2662], note: 'High report density' },
  { id: 'gulberg', name: 'Gulberg', position: [31.5163, 74.3455], note: 'High report density' },
  { id: 'model-town', name: 'Model Town', position: [31.4799, 74.326], note: 'Medium report density' },
  { id: 'dha', name: 'DHA', position: [31.4708, 74.4125], note: 'Medium report density' },
]

export const recentReports = [
  {
    id: 'DEMO-0246',
    location: 'Johar Town, Lahore',
    category: 'Plastic Bottles',
    reported: '2 hours ago',
    status: 'Demo Report',
  },
  {
    id: 'DEMO-0247',
    location: 'Gulberg III, Lahore',
    category: 'Mixed Waste',
    reported: '5 hours ago',
    status: 'Demo Report',
  },
  {
    id: 'DEMO-0248',
    location: 'Model Town, Lahore',
    category: 'Paper and Cardboard',
    reported: 'Yesterday',
    status: 'Demo Report',
  },
]

// Predefined images shown by the report upload panel (no real file upload)
export const sampleImages = [
  {
    id: 'mixed',
    src: '/assets/sample-mixed-waste.jpg',
    filename: 'sample-waste-report.jpg',
    label: 'Sample Image',
    alt: 'Sample photograph of mixed litter on a grassy roadside, including plastic bags, bottles and paper',
  },
  {
    id: 'recyclables',
    src: '/assets/sample-recyclables.jpg',
    filename: 'sample-recyclables.jpg',
    label: 'Sample Image',
    alt: 'Sample photograph of recyclable waste, including plastic bottles, aluminium cans and paper packaging',
  },
  {
    id: 'bottles',
    src: '/assets/sample-plastic-bottles.jpg',
    filename: 'sample-plastic-bottles.jpg',
    label: 'Sample Image',
    alt: 'Sample photograph of discarded plastic bottles and drink cans collected behind a wooden fence',
  },
]

// Decorative rectangles shown over the detection image (illustrative only)
export const detectionAnnotations = [
  { id: 1, label: 'Plastic bottles', top: '42%', left: '44%', width: '22%', height: '20%' },
  { id: 2, label: 'Plastic container', top: '55%', left: '25%', width: '15%', height: '12%' },
  { id: 3, label: 'Paper and wrappers', top: '64%', left: '56%', width: '21%', height: '14%' },
]

// Predefined demo classification output — not produced by a real model
export const detectionResults = [
  { id: 1, category: 'Plastic Bottles', confidence: 96 },
  { id: 2, category: 'Plastic Wrappers', confidence: 94 },
  { id: 3, category: 'Paper and Cardboard', confidence: 88 },
  { id: 4, category: 'Metal Cans', confidence: 82 },
]

export const reportSummary = {
  reportId: 'DEMO-0248',
  location: 'Johar Town, Lahore',
  image: 'Sample Image',
  status: 'Demo Report',
}

export const sampleLocation = {
  city: 'Johar Town, Lahore',
  full: 'Johar Town, Lahore, Pakistan',
}
