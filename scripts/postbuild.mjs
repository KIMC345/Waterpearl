// GitHub Pages ne sert que des fichiers existants : /a-propos renverrait une
// erreur 404. On copie donc dist/index.html dans dist/<page>/index.html pour
// chaque page de src/routes.ts, plus un 404.html pour les adresses inconnues.
import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { ROUTES } from '../src/routes.ts'

const dist = 'dist'
const index = join(dist, 'index.html')

for (const { path } of ROUTES) {
  if (path === '/') continue
  const dir = join(dist, path)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, join(dir, 'index.html'))
}
copyFileSync(index, join(dist, '404.html'))

console.log(`Pages générées : ${ROUTES.length} (+ 404.html)`)
