# Portfolio Width Alignment Design

Date: 2026-06-13
Project: `E:\Проекты\portfolio-site`
Scope: Home page width alignment and global container tuning

## Goal

Make the portfolio feel less stretched on desktop while keeping a single clean width system across the major homepage sections.

The main user-facing outcome is:

- the site should feel slightly more compact on wide screens
- `Header`, `Hero`, `Stats`, and `Project Map` should sit on the same visual axis
- side paddings should feel even
- the map should not read as a wider or separate layout system

## Current Problems

Based on code inspection and user screenshots:

- the global page container is too wide for the current content density
- the homepage reads as horizontally stretched, especially in the hero and stats row
- the project map visually reinforces the stretched feeling because it fills the same very wide canvas
- there are multiple map-related style layers in `globals.css`, so even when the axes line up, the section can still feel like a different layout block

## Non-Goals

This pass does not:

- redesign section order
- rewrite project content or portfolio messaging
- change the clean dark visual direction
- fix the broken Cyrillic text encoding issues currently present in content files

## Design Decision

Use one global width system instead of tuning individual blocks independently.

Recommended direction:

- reduce the effective desktop content width from the current `1840px` system to a more compact value around `1720px`
- preserve one shared container for the main page structure
- make only light proportional adjustments to section inner padding where needed
- keep `Hero`, `Stats`, and `Project Map` visually tied to the same container edges

This is preferred over shrinking only the hero or only the map because isolated changes would reintroduce the "different sites stitched together" feeling.

## Implementation Plan

Primary files:

- `src/app/globals.css`

Possible touch points if needed for verification only:

- `src/app/page.tsx`
- `src/components/ProjectMap.tsx`

Expected CSS changes:

1. Update the global max width variable used by `.page-shell`.
2. Preserve one consistent shell width across homepage sections.
3. Slightly rebalance inner horizontal paddings in the hero and map only if the new container width makes them feel too open or too tight.
4. Check for map-specific width exceptions such as local `max-width`, custom margins, or spacing rules that could make it look wider than the surrounding blocks.

## Acceptance Criteria

Desktop `1600x900`:

- the site feels less stretched than the current version
- header, hero, stats, and map align on the same left and right edges
- no horizontal overflow appears

Wide desktop `2048x1152`:

- the homepage still feels premium and wide, but not excessive
- the map remains inside the same visual width system as the hero and stats
- no section appears noticeably wider than the others

Build and stability:

- `npm run build` passes
- no intentional structural markup changes are required unless CSS alone cannot achieve the alignment cleanly

## Risks

- shrinking too aggressively can make the hero feel cramped and reduce the premium look
- changing only the container width without rebalancing inner padding can make the hero and map feel under-filled
- touching map spacing too much can accidentally break the previously validated no-overflow behavior

## Verification

After implementation:

- inspect the homepage at `1600x900`
- inspect the homepage at `2048x1152`
- run `npm run build`

## Notes

The repository currently appears to be outside a Git repository root from the current workspace, so the spec may not be commit-able from this environment unless repository context changes.
