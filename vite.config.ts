import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Le site est servi sous kimc345.github.io/Waterpearl/, d'où base: '/Waterpearl/'.
// Avec un domaine personnalisé (site à la racine), il faudrait base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Waterpearl/',
})
