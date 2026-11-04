# Sparkle to Christmas

A Simple Pink Countdown to Christmas.

Live site: [https://tschoi5675.github.io/Sparkle-to-Christmas-/](https://tschoi5675.github.io/Sparkle-to-Christmas-/)

## About

This repository contains a Vite + React + TypeScript countdown app with snowfall, festive magic messages, and a pink sparkly aesthetic.

## Features

* **Pink Theme:** A visually appealing pink aesthetic for a festive feel.
* **Countdown Timer:** Displays the time remaining until Christmas.
* **Snowfall:** Animated snow for a cozy holiday mood.
* **Festive Magic:** Curated Christmas wishes and holiday styling tips (no API keys required).

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (default port 3000).

## Build and preview

```bash
npm run build
npm run preview
```

The app is configured with `base: '/Sparkle-to-Christmas-/'` in `vite.config.ts` so asset paths work on GitHub Pages.

## Deploying to GitHub Pages

Deployment runs automatically via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`, or manually from the **Actions** tab (**Deploy to GitHub Pages** → **Run workflow**).

**One-time setup (repo owner):**

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

After the workflow succeeds, the site is published at the URL above. No secrets or API keys are needed for the app to run.

## Contributing

Contributions are welcome! If you have any ideas for improvements, bug fixes, or new features, please feel free to open an issue or submit a pull request.

## License

*MIT License*
