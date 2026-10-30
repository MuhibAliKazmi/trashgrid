import { BarChart3, FileText, MapPinned, Package, Recycle, Trash2 } from 'lucide-react'

/**
 * Single source of truth for icon mapping. Components ask this module for an
 * icon instead of hardcoding their own lookup tables, so adding a waste
 * category or a dashboard statistic means editing one file, not several.
 */

const categoryIcons = {
  'Plastic Bottles': Recycle,
  'Plastic Wrappers': Package,
  'Paper and Cardboard': FileText,
  'Metal Cans': Package,
  'Mixed Waste': Trash2,
}

const defaultCategoryIcon = Trash2

export function getCategoryIcon(category) {
  return categoryIcons[category] ?? defaultCategoryIcon
}

const statIcons = {
  totalReports: BarChart3,
  wasteHotspots: MapPinned,
  mostCommonWaste: Recycle,
}

const defaultStatIcon = BarChart3

export function getStatIcon(key) {
  return statIcons[key] ?? defaultStatIcon
}
