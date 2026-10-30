# TrashGrid — Smart Urban Waste Detection and Routing System

> Detect Waste. Map Hotspots. Build a Cleaner Lahore.

A static frontend prototype for a Final Year Project demonstration. TrashGrid shows how an urban
waste monitoring system for Lahore could let people report waste by photograph, classify the waste
with AI, and visualise waste hotspots on a map.

**This is a demonstration prototype.** There is no backend, database, authentication, AI model, real
report submission, or location tracking. All statistics, AI detections and map hotspots are
hardcoded illustrative demo data stored in `src/data/demoData.js`.

## Run the application

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Routes

| Route       | Page                        | Description                                                          |
| ----------- | --------------------------- | -------------------------------------------------------------------- |
| `/`         | Overview dashboard          | Project header, summary statistics, Lahore heat map, recent reports  |
| `/report`   | Report Trash                | Sample photo preview, sample location card, location permission modal |
| `/results`  | AI Detection Results        | Sample image with decorative detection boxes and demo predictions     |
| `/about`    | About Project               | Project description, proposed features and prototype status           |

The demonstration flow is: Overview → Report Trash → Location Modal → AI Detection Results →
Return to Map. Every page is also reachable from the sidebar navigation.

## Technology

- React 19 (JavaScript/JSX) with Vite
- Tailwind CSS v4
- React Router
- Lucide React (icons)
- Leaflet + React Leaflet with OpenStreetMap tiles (attribution shown on the map)

## Project structure

```
src/
  components/   AppLayout, Sidebar, PageHeader, StatCard, TrashHeatMap,
                RecentReports, ImageUploadPanel, LocationPermissionModal,
                DetectionResultCard
  data/         demoData.js — all fictional reports, hotspots and detections
  pages/        Overview, ReportTrash, DetectionResults, About
  App.jsx       Routes
  main.jsx      App entry
  index.css     Tailwind theme tokens and Leaflet tweaks
public/
  assets/       Local sample photographs (see sources below)
```

## Image sources and licences

Sample photographs were downloaded from Wikimedia Commons and stored locally in `public/assets/`.
They are used as stand-in "user uploads"; no photo depicts a real TrashGrid report.

| File                             | Source (Wikimedia Commons)                                | Author            | Licence      |
| -------------------------------- | --------------------------------------------------------- | ----------------- | ------------ |
| `sample-mixed-waste.jpg`         | [File:Basura20220312.jpg](https://commons.wikimedia.org/wiki/File:Basura20220312.jpg) | Lmalena           | CC BY-SA 4.0 |
| `sample-recyclables.jpg`         | [File:2023.05.09 Recycling From Walking Trail.jpg](https://commons.wikimedia.org/wiki/File:2023.05.09_Recycling_From_Walking_Trail.jpg) | Itsasatire        | CC0          |
| `sample-plastic-bottles.jpg`     | [File:An Unbearable Tidiness of Cans.jpg](https://commons.wikimedia.org/wiki/File:An_Unbearable_Tidiness_of_Cans.jpg) | Alan Stanton      | CC BY-SA 2.0 |

Images were cropped and resized for the web. CC BY and CC BY-SA images require attribution, which is
given here; if you republish, keep the attribution with the images.

Map tiles are © OpenStreetMap contributors, rendered via the standard OpenStreetMap tile server and
shown with on-map attribution. Please use the demo modestly and consider a dedicated tile server
for any public deployment.

## Notes

- The location permission modal is a styled dialog only. It never calls browser geolocation APIs and
  never collects an IP address; it simply selects the fictional "Johar Town, Lahore" sample location.
- The project title mentions routing, but route optimisation is intentionally out of scope for this
  frontend prototype.
