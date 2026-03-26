# Option Tree (simple static app)

This is a minimal static app that implements a 3-level option tree using 2/2/2 buttons (top to bottom).

Behavior summary

- Top row: two buttons (A / B). Buttons are intentionally left with empty visible text so you can label them.
- Second row: two buttons. Which values they represent depends on whether you clicked A or B.
  - If you clicked A, second row represents `x` and `y`.
  - If you clicked B, second row represents `z` and `v`.
- Third row: two buttons. Which pair is shown depends on the second-row choice:
  - `x` -> shows `1` and `2`
  - `y` -> shows `3` and `4`
  - `z` -> shows `5` and `6`
  - `v` -> shows `7` and `8`

Files

- `index.html` — layout and the 2/2/2 buttons.
- `styles.css` — simple two-column layout and styles.
- `script.js` — logic (mappings and show/hide behavior).

How to run

1. Open `index.html` in a browser directly (file://). Or run a small static server from the folder. In PowerShell:

```powershell
# from this folder
python -m http.server 8000
# then open http://localhost:8000 in a browser
```

Notes

- Buttons are left empty for you to add labels; the app uses `data-*` attributes for option mapping so labels can be changed safely.
- Use the Reset button to hide subsequent rows and clear mappings.
# Itsm_Decision_Tree_ISS
