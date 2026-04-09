# Services (SSR Categories) — Secondary branch

This branch (`Secondary`) contains a small single-file app used as a workspace for isolated workspaces/apps. It does not affect `main` (do not merge to `main` unless you want these files there).

What this repository contains (on `Secondary`)

- `server.js` — tiny Express server that serves `public/` and exposes two API endpoints:
  - `GET /submissions` — returns an array of submitted selections (in-memory)
  - `POST /submit` — accepts JSON { step1, step2, step3 } and stores it in memory
- `public/` — static frontend
  - `index.html` — the page shown at `/`
  - `script.js` — client logic and the option maps (see below)
  - `styles.css` — styles for the page
- `package.json`, `package-lock.json` — project manifest (dependencies and start script)
- `.gitignore` — `node_modules/` is ignored (do not commit it)

How to run locally

1. Install dependencies (if not already installed):

```powershell
npm install
```

2. Start the server:

```powershell
npm start
```

3. Open http://localhost:3000 in your browser.

What the UI does

- The page title is "Services (SSR Categories)".
- It's a 4-step wizard:
  1. Choose top-level category (the 13 items you provided).
  2. Choose a sub-category (options depend on step 1).
  3. Choose a detail (options depend on step 2 — populated from `thirdMap`).
  4. Send — commits the selection to the server and shows it under Recent submissions.

Where to edit options

- Top-level categories: `public/script.js` — the `topLevel` array (line near top).
- Sub-categories: `public/script.js` — the `subMap` object (maps topIndex -> array of sub-options).
- Third-level (detail) options: `public/script.js` — the `thirdMap` object.
  - Keys in `thirdMap` use the format `"<topIndex>.<subIndex>"` where indices are 0-based.
    - Example: `"0.0"` = user-visible 1.1 (first top-level item, first sub-item).
  - If a key is missing or its array is empty, the UI falls back to a small default list: `["Request Info","Report Issue","Request Access","Other"]`.

Empty third-level entries that need filling

I inspected `public/script.js` and found the following X.Y points currently empty (these use your numbering: X = top-level choice (1..13), Y = sub choice (1..n)):

- 9.1 — "Help me to find right category" → currently has no detailed items (it's a placeholder).
- 13.2 — The 2nd sub-item under "Process and Project Tools" is empty (needs options).
- 13.3 — 3rd sub-item under "Process and Project Tools" is empty (needs options).
- 13.4 — 4th sub-item under "Process and Project Tools" is empty (needs options).
- 13.5 — 5th sub-item under "Process and Project Tools" is empty (needs options).

Notes

- If you want an explicit empty-state (no detail selection & disabled Send) rather than falling back to the default list, tell me and I will change the UI so `thirdMap[key]` empty disables step 3 / send.
- Submissions are stored in memory in `server.js`. If you restart the server, submissions are lost. For persistence, I can add a simple file-backed store (`data/submissions.json`) or integrate a DB — tell me which you prefer.
- `node_modules/` is not committed (it's in `.gitignore`). Recreate it with `npm install` if needed.

Making small edits

- To add detail options for, for example, top-level 1 (Automation & Integration Services) → the sub-category Automation is subIndex 0. Add the array at key `"0.0"` in `thirdMap`.

- After editing `public/script.js` (or any other files), commit only on `Secondary` to keep `main` clean:

```powershell
git add public/script.js
git commit -m "Update thirdMap: add X.Y options"
git push origin Secondary
```
