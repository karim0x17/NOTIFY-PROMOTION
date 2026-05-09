# NOTIFY Promotion Showcase

Fullscreen animated product showcase for NOTIFY, built for TV displays, event booths, and investor/demo environments.

## Stack

- React
- Tailwind CSS
- Framer Motion
- GSAP
- Vite

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy with GitHub Actions

The repo is configured to deploy automatically to GitHub Pages on every push to `main`.

Expected live URL:

`https://karim0x17.github.io/NOTIFY-PROMOTION/`

One-time GitHub setting:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Source`, choose `GitHub Actions`.

After that, every new push to `main` will rebuild and redeploy the showcase automatically.

## Assets

Replace the real product screenshots in `public/assets/` as needed. The main filenames used by the showcase are:

- `notify-logo.png`
- `dashboard-home.png`
- `alert-creation.png`
- `campus-map.png`
- `analytics.png`
- `users-permissions.png`
- `mobile-student.png`
- `mobile-teacher.png`
- `mobile-technician.png`
- `mobile-staff.png`
- `mobile-admin.png`

Extra admin screenshots can also be used:

- `alerts-admin.png`
- `courses-admin.png`

## Notes

- The animation loop autoplays and is optimized for fullscreen 16:9 presentation.
- Press `Shift+R` to restart the sequence manually.
