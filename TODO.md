# Deployment Fix — Task List

## Goal
Fix Render/Railway deployment errors for the Vite + React portfolio.

## Steps
- [x] 1. Investigate build and identify root cause (Node version mismatch, missing deploy config)
- [x] 2. Add `engines.node` and `start` script to `package.json`
- [x] 3. Add `base: './'` to `vite.config.js` (fixes asset 404s on subpath hosting)
- [x] 4. Create `render.yaml` for Render static site deployment
- [x] 5. Run `npm run build` to confirm clean build (467 modules, success)
- [x] 6. Verify relative asset paths in `dist/index.html` (`base: './'` working)
- [ ] 7. Commit and push to GitHub (`origin` = simonbaler/Portfolio-main)
- [ ] 8. Configure platforms (Node >= 20.19, Render publish dir = `dist`)
