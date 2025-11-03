import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For Netlify (site hosted at the root) use '/'. If you need to publish to a GitHub Pages
  // subpath (e.g. /portfolio/) switch this value before building for that target.
  base: '/',
})
