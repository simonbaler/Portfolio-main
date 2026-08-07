
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset paths so the site works on sub-path hosts
  // (Render, Railway, Netlify, GitHub Pages, etc.) without 404s.
  base: './',
  plugins: [react(), tailwindcss()],
})
