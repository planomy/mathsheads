# Maths Heads · Teacher presentation · Year 5 Term 3

**Teacher-only** slide deck for screen share (Teams / classroom). Not a student self-paced app.

## Run

```bash
cd ~/Desktop/mathsheads
python3 -m http.server 8080
```

Open http://localhost:8080 → pick a lesson → press **F** (Present).

## Lesson flow (~50 min teaching · Gradual Release)

| Slide | Mode | What happens |
|-------|------|----------------|
| **Title** | — | Focus + Gradual Release overview |
| **Hook** | TALK | Engaging real-life problem |
| **Retrieval** | TEAMS | Quick warm-up recall (answers via **R**) |
| **Learning intention** | WATCH | WALT + success criteria |
| **Explicit teaching** | WATCH | I do — concept + worked example |
| **Live annotation** | NOTEBOOK | Model on the board (from hook solution) |
| **We do** | TALK | Guided practice together (**R** reveals) |
| **Independent practice** | NOTEBOOK | Calm primary set + soaker + stretch word problems |
| **Exit ticket** | NOTEBOOK | Quick check (**R** reveals) |

Legacy fields in `lessons.js` (`diagnostic`, `hook`, `hookSolution`, `concept`, `practice`, `wordProblems`) are mapped automatically. You can also author explicit `retrieval`, `intention`, `teach`, `annotate`, `wedo`, `soaker`, and `exit` / `exitTicket` when you want tighter control.

**Assessment lessons** (Week 3 L3–L4, Week 7 L1–L4) use a shorter 3-slide flow: **Overview → This session → Official task**.

## Keys

- **← →** or **Space** — next/prev slide; at the last/first slide, jumps to the next/previous lesson
- **F** — Present mode (scale slide for screen share)
- **R** — Reveal answers (retrieval / we do / practice / exit)
- **T** — Teacher notes panel (answers + placement tips)
- **A** — Open assessment task (Week 3 & 7 lessons)
- **Esc** — Exit notes / present / task panel

## Pilot content

**All 40 lessons** are fully authored (34 teach + 6 assessment sessions). Assessments SA5 and SA6 use official task page images.

## Assessments

Official tasks in the project root:

| File | Lessons |
|------|---------|
| `MAT05_SA5_2026.docx` | Week 3 · L3–L4 (split over 2 sessions) |
| `MAT05_SA6_2026.docx` | Week 7 · L1–L4 (investigation over 4 sessions) |

Session plans and teacher notes live in `assessments.js`. The full Word document content is converted to HTML for in-app display:

| HTML file | Source |
|-----------|--------|
| `assessments/sa5-pages/*.png` | `MAT05_SA5_2026.docx` (4 page images) |
| `assessments/sa6-pages/*.png` | `MAT05_SA6_2026.docx` (6 page images) |

Both assessments use **page images** in the app (faithful to the Word layout).

Replace images in `assessments/sa5-pages/` or `assessments/sa6-pages/` if the Word docs change.

## Hero images (easy setup)

```bash
# 1. Free key from https://www.pexels.com/api/
# 2. Add to .env then:
node scripts/fetch-heroes.mjs
node scripts/fetch-hook-images.mjs   # problem-specific images for hook slides
```

See **`IMAGE-SHOPPING-LIST.md`** for manual sourcing or swapping individual files.

## Edit content

All lesson data lives in `lessons.js` — each ready lesson needs:

- `diagnostic` (3 problems) — also feeds retrieval if `retrieval` is omitted
- `hook` + `hookSolution` — hookSolution also feeds live annotation
- `concept` — feeds explicit teaching if `teach` is omitted
- `practice` { 1, 2, 3 } — primary independent set + we-do / exit sources
- `wordProblems` — soaker + stretch
- `notes` — per-slide teacher notes
- `pacing` — suggested minutes per phase
- `hero` — `{ src, alt, caption, diagram? }` for title slide image

Optional Gradual Release overrides: `retrieval`, `intention`, `teach`, `annotate`, `wedo`, `soaker`, `exit` / `exitTicket`.
