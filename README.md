# Nurrrr — A Midnight Fairytale Birthday Website

React + Vite. No backend, no website-builder dependency.

## Run locally
Requires Node 18+.
```
npm install
npm run dev
```
Open the URL it prints (usually http://localhost:5173).

## Production build
```
npm run build
npm run preview   # optional: serve the built site locally
```
Output goes to `dist/`.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com choose "Add New > Project" and import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click Deploy.

Or with the CLI: `npm i -g vercel`, then `vercel` in this folder, and `vercel --prod`.

## Where things live
- `src/scene.html` — all scene markup (sky, moon, mountains, puppy, letter). The birthday text is here.
- `src/styles.css` — all styling and keyframe animations.
- `src/experience.js` — stars, shooting stars, petals, tulip bouquet SVG, reveal sequence, replay.
- `src/App.jsx` — mounts the scene and starts/cleans up the experience.

Fonts (Cormorant Garamond, Lora, Caveat) load from Google Fonts with Georgia/cursive fallbacks.
