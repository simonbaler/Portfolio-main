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
    preview: {
      // Allow the app to be served from any host.
      // This is required when hosting the production build with
      // `vite preview` on platforms like Render/Railway that use
      // dynamic hostnames (e.g. *.onrender.com).
      allowedHosts: true,
    },
  }
})
