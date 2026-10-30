import L from 'leaflet'
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { hotspotLevels, hotspots, lahoreCenter, mapMarkers } from '../data/demoData.js'
import Card from './ui/Card.jsx'

// Leaflet icon instances are relatively expensive to build and are shared
// across renders, so cache one per colour instead of recreating them.
const iconCache = new Map()

function pinIcon(color) {
  if (!iconCache.has(color)) {
    iconCache.set(
      color,
      L.divIcon({
        className: 'tg-map-marker',
        html: `<span style="width:14px;height:14px;border-radius:9999px;background:${color};border:3px solid #ffffff;box-shadow:0 1px 4px rgba(23,35,29,0.35);display:block;"></span>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      }),
    )
  }
  return iconCache.get(color)
}

const legendItems = [
  { color: hotspotLevels.high.color, label: 'High Report Density' },
  { color: hotspotLevels.medium.color, label: 'Medium Report Density' },
  { color: hotspotLevels.low.color, label: 'Low Report Density' },
]

export default function TrashHeatMap() {
  return (
    <Card
      title="Lahore Trash Heat Map"
      description="Explore areas with higher concentrations of reported waste."
    >
      <div className="relative h-[420px] overflow-hidden rounded-xl border border-line sm:h-[520px]">
        <MapContainer
          center={lahoreCenter}
          zoom={12}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {hotspots.map((spot) => (
            <Circle
              key={spot.id}
              center={spot.position}
              radius={spot.radius}
              pathOptions={{
                color: hotspotLevels[spot.level].color,
                fillColor: hotspotLevels[spot.level].color,
                fillOpacity: 0.28,
                opacity: 0.6,
                weight: 1,
              }}
            >
              <Popup>
                <strong>{spot.area}</strong>
                <br />
                {hotspotLevels[spot.level].label}
                <br />
                <em>Illustrative demo data</em>
              </Popup>
            </Circle>
          ))}
          {mapMarkers.map((marker) => (
            <Marker key={marker.id} position={marker.position} icon={pinIcon('#176b45')}>
              <Popup>
                <strong>{marker.name}</strong>
                <br />
                {marker.note}
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-xl border border-line bg-white/95 px-3.5 py-3 shadow-sm">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted">
            Hotspot Legend
          </p>
          <ul className="space-y-1.5">
            {legendItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-xs text-ink">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color, opacity: 0.75 }}
                  aria-hidden="true"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted">
        Illustrative demo data. Hotspot locations and intensity are not based on verified reports.
      </p>
    </Card>
  )
}
