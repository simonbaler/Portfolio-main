import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Determine the base path automatically:
  // - GitHub Pages: served from /Portfolio-main/ (repo name)
  // - Render/Railway/Vercel/Netlify: served from root "/"
  // - Local production preview: relative "./"
  let base = './'
  if (command === 'build') {
    if (process.env.VITE_BASE_PATH) {
      base = process.env.VITE_BASE_PATH
    } else if (process.env.GITHUB_ACTIONS === 'true') {
      base = '/Portfolio-main/'
    } else {
      base = './'
    }
  }

  return {
    base,
    plugins: [react(), tailwindcss()],
  }
})
