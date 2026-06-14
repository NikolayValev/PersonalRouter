// One-off generator for project screenshot placeholders.
// Writes /public/projects/<slug>/{cover,01,02}.svg — tasteful "coming soon"
// cards so detail pages look intentional until real screenshots replace them.
// Run: node scripts/gen-placeholders.mjs
import { mkdir, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..", "public", "projects")

// Keep in sync with lib/projects.ts (slug + display name only).
const projects = [
  { slug: "design-system", name: "Design System" },
  { slug: "idle-dungeon-life", name: "Idle Dungeon Life" },
  { slug: "mandate-zero", name: "Mandate Zero" },
  { slug: "bondviz", name: "Bond Visualizer" },
  { slug: "secondbrain", name: "Second Brain" },
  { slug: "quitting-smoking-tracker", name: "Quitting Smoking Tracker" },
]

const slots = [
  { file: "cover.svg", label: "Cover" },
  { file: "01.svg", label: "01" },
  { file: "02.svg", label: "02" },
]

const W = 1600
const H = 1000

function escapeXml(s) {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]))
}

function svg(name, label) {
  const title = escapeXml(name)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${title} screenshot placeholder">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1c1917"/>
      <stop offset="1" stop-color="#262019"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect x="96" y="120" width="84" height="6" rx="3" fill="#c2683f"/>
  <text x="96" y="240" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="700" fill="#f5f0ea" letter-spacing="-1">${title}</text>
  <text x="98" y="320" font-family="ui-monospace, 'Courier New', monospace" font-size="26" letter-spacing="6" fill="#c2683f">SCREENSHOT&#160;&#183;&#160;COMING&#160;SOON</text>
  <text x="${W - 96}" y="${H - 96}" text-anchor="end" font-family="ui-monospace, 'Courier New', monospace" font-size="120" font-weight="700" fill="#ffffff" fill-opacity="0.06">${escapeXml(label)}</text>
</svg>
`
}

for (const p of projects) {
  const dir = join(root, p.slug)
  await mkdir(dir, { recursive: true })
  for (const slot of slots) {
    await writeFile(join(dir, slot.file), svg(p.name, slot.label), "utf8")
  }
}

console.log(`Wrote placeholders for ${projects.length} projects into public/projects/`)
