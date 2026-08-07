# Deployment Fix — Task List

## Goal
Fix Render/Railway deployment errors and make the portfolio deploy-ready across all major platforms.

## Steps
- [x] 1. Investigate build and identify root cause (Node version mismatch, missing deploy config)
- [x] 2. Add `engines.node` and `start` script to `package.json`
- [x] 3. Add dynamic `base` path to `vite.config.js` (relative + GitHub Pages aware)
- [x] 4. Create `render.yaml` for Render
- [x] 5. Create `.nvmrc` (Node 20.19.0) for Railway/nvm
- [x] 6. Add SPA fallback + SEO files: `_redirects`, `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`
- [x] 7. Add platform configs: `vercel.json`, `netlify.toml`, `railway.json`, `Procfile`
- [x] 8. Add Docker support: `Dockerfile`, `.dockerignore`
- [x] 9. Add GitHub Actions workflow for GitHub Pages auto-deploy
- [x] 10. Add `.env.example` for EmailJS credentials
- [x] 11. Verify `npm run build` succeeds and public files are copied to `dist`
- [x] 12. Commit locally — push blocked: local git credential `Nani2128` has no write access to `simonbaler/Portfolio-main`
- [ ] 13. Push to GitHub (need auth: `git push origin main` with owner account)
- [ ] 14. Configure platform (Node >= 20.19, publish dir = `dist`, set EmailJS env vars)
