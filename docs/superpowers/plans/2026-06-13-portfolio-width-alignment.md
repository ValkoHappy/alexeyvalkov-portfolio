# Portfolio Width Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the homepage feel less stretched on desktop by reducing the global content width and keeping `Header`, `Hero`, `Stats`, and `Project Map` on one clean visual axis.

**Architecture:** Keep the existing page structure and solve the issue in the layout system rather than per-section hacks. The implementation should center on `src/app/globals.css`: lower the global container width, then rebalance only the horizontal spacing values that make the new width feel visually even.

**Tech Stack:** Next.js 15, React 19, global CSS, local manual browser QA, `npm run build`

---

## File Map

- Modify: `src/app/globals.css`
- Verify visually: `src/app/page.tsx`
- Runtime target: `http://localhost:3000`

## Task 1: Tighten the global container width

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update the shared max-width variable**

Replace the root width token so the entire site stops using the overly wide desktop container:

```css
:root {
  --bg: #070a0f;
  --bg-soft: #0b1018;
  --surface: rgba(18, 24, 34, 0.78);
  --surface-strong: rgba(23, 31, 44, 0.92);
  --border: rgba(137, 160, 190, 0.16);
  --border-strong: rgba(80, 155, 255, 0.42);
  --text: #f4f7fb;
  --muted: #98a4b6;
  --muted-2: #6e7a8c;
  --accent: #4b93ff;
  --accent-2: #65c7ff;
  --green: #44d19d;
  --amber: #f3b951;
  --rose: #ff6f91;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
  --radius: 8px;
  --max: 1720px;
}
```

- [ ] **Step 2: Keep the shell formula unchanged and verify it remains the single width source**

Confirm that the page shell still uses the global token instead of section-specific widths:

```css
.page-shell {
  width: min(var(--max), calc(100% - 64px));
  margin: 0 auto;
  padding: 20px 0 64px;
}
```

Run:

```powershell
rg -n -- "--max|page-shell" src/app/globals.css
```

Expected:

- one `--max` declaration with `1720px`
- `.page-shell` still using `min(var(--max), calc(100% - 64px))`

## Task 2: Rebalance section internals so the tighter shell still feels premium

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Reduce hero horizontal padding slightly**

Adjust the hero so it fills the tighter shell cleanly without looking over-padded:

```css
.hero-section {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 420px);
  gap: clamp(44px, 4vw, 88px);
  min-height: clamp(480px, 48vh, 620px);
  align-items: center;
  overflow: hidden;
  padding: clamp(54px, 4.5vw, 78px) clamp(36px, 3.8vw, 64px) clamp(50px, 4.5vw, 72px);
}
```

- [ ] **Step 2: Tighten project map side padding and stats max width**

Keep the map in the same visual system as the hero and stats:

```css
.project-map {
  position: relative;
  overflow: hidden;
  min-height: auto;
  padding: 42px 36px 38px;
}

.project-map-wide .map-stage {
  height: clamp(560px, calc(100vh - 310px), 680px);
  min-height: 560px;
  padding: 0;
}

.project-map-wide .map-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%;
  margin: 26px auto 0;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(12, 18, 27, 0.66);
}
```

- [ ] **Step 3: Keep map groups from visually pushing wider than the shell**

Reduce the absolute group offsets so the map reads as centered inside the new width:

```css
.project-map-wide .map-websites,
.project-map-wide .map-bots,
.project-map-wide .map-extensions {
  left: 44px;
  grid-template-columns: 270px 126px;
}

.project-map-wide .map-react,
.project-map-wide .map-parsers,
.project-map-wide .map-automation {
  right: 44px;
  grid-template-columns: 126px 270px;
}
```

Run:

```powershell
rg -n -- "hero-section|project-map \{|map-stats|map-websites|map-react" src/app/globals.css
```

Expected:

- the updated hero padding block is present once
- `.project-map` uses tighter side padding
- `.project-map-wide .map-stats` no longer has a hardcoded `1640px` cap
- left and right map group offsets are `44px`

## Task 3: Verify desktop alignment and build safety

**Files:**
- Verify visually: `src/app/page.tsx`
- Build against existing app setup

- [ ] **Step 1: Start or reuse the local dev server**

Run:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run dev
```

Expected:

- Next.js starts successfully
- local URL is available at `http://localhost:3000`

- [ ] **Step 2: Check desktop width at 1600x900**

Open `http://localhost:3000` and verify:

- header, hero, stats, and map share the same left and right edges
- the hero no longer feels excessively stretched
- the stats row no longer feels too spread out
- there is no horizontal overflow

- [ ] **Step 3: Check wide desktop width at 2048x1152**

Open `http://localhost:3000` on a wide viewport and verify:

- the layout still feels wide and premium
- the page is clearly less stretched than before
- the map no longer reads as a separate wider container than the rest of the page

- [ ] **Step 4: Run the production build**

Run:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run build
```

Expected:

- build completes successfully
- no CSS or route errors are introduced

- [ ] **Step 5: Do not create a commit in this workspace**

The current workspace does not expose a usable Git repository root, so implementation should stop after verification and report the modified files plus validation results.

## Self-Review Notes

- Spec coverage: addressed the global container width, even side spacing, hero/stats/map axis alignment, wide-screen behavior, and build verification.
- Placeholder scan: no `TODO`, `TBD`, or vague implementation steps remain.
- Type consistency: CSS selectors and runtime target names match the current codebase.
