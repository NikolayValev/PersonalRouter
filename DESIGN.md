---
name: Nikolay Valev — Root Router
description: A warm, flat, typographic system where one fired-clay accent and a hairline rule do all the signalling.
colors:
  fired-clay: "oklch(0.59 0.14 40)"
  fired-clay-dark: "oklch(0.67 0.15 42)"
  fired-clay-foreground: "oklch(0.985 0.01 75)"
  stock: "oklch(0.992 0.004 75)"
  stock-raised: "oklch(1 0.003 75)"
  stock-muted: "oklch(0.96 0.008 70)"
  ink: "oklch(0.21 0.012 55)"
  ink-muted: "oklch(0.52 0.018 55)"
  seam: "oklch(0.9 0.011 65)"
  stock-night: "oklch(0.175 0.008 55)"
  stock-night-raised: "oklch(0.205 0.009 55)"
  stock-night-muted: "oklch(0.27 0.012 55)"
  ink-night: "oklch(0.96 0.006 75)"
  ink-night-muted: "oklch(0.72 0.012 65)"
  seam-night: "oklch(0.29 0.012 55)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "3.75rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.16em"
  meta:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  full: "9999px"
spacing:
  tight: "0.375rem"
  sm: "1rem"
  md: "1.5rem"
  section: "4rem"
  section-lg: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.fired-clay}"
    textColor: "{colors.fired-clay-foreground}"
    rounded: "{rounded.lg}"
    padding: "0 0.75rem"
    height: "2.25rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 0.75rem"
    height: "2.25rem"
  card:
    backgroundColor: "{colors.stock-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  chip-tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.sm}"
    padding: "0.125rem 0.5rem"
  status-dot-live:
    backgroundColor: "{colors.fired-clay}"
    rounded: "{rounded.full}"
    size: "0.375rem"
  status-dot-wip:
    backgroundColor: "transparent"
    rounded: "{rounded.full}"
    size: "0.375rem"
  accent-rule:
    backgroundColor: "{colors.fired-clay}"
    height: "1px"
    width: "4rem"
---

# Design System: Nikolay Valev — Root Router

## Overview

**Creative North Star: "The Quiet Workshop"**

This is a workshop, not a showroom. The neutrals are unbleached stock — paper that was never chemically whitened — and the single accent is fired clay, the color a kiln leaves behind. Every surface carries a faint warm cast (chroma 0.004–0.018 at hues 55–75), which is why nothing here ever reads as pure white or true black. Warmth comes from material, never from decoration: there are no gradients, no illustrations, no color washes. Dark mode is the same workshop after hours, with its own hand-tuned values rather than an algorithmic inversion.

The system is flat and stays flat. Nothing lifts, floats, or glows. Depth is a hairline seam — a 1px border and a 1px ambient shadow at 7% opacity — and that seam is permanent rather than a state. Because elevation is unavailable as a signal, the work of signalling falls to two things that have to be used with discipline: the accent, and typography. A 1px × 4rem fired-clay rule sits above every page title like a chisel mark, and that single gesture is how a page announces itself.

Components are tactile and confident, but tactility has to be earned without lifting. Presence comes from decisive state change and material warmth: a border that commits fully to the accent on hover, a cover image that pushes 4% closer over 500ms, an arrow that steps diagonally out of its resting position. The restraint is in the palette and the elevation, not in the confidence of the response.

**Key Characteristics:**
- Warm-cast neutrals only — no pure white, no true black, in either theme
- One accent color, used sparingly, never as decoration or segmentation
- Flat at rest; a permanent 1px hairline is the entire depth vocabulary
- Playfair Display against Inter — serif titles, sans everything else
- Breakpoint steps, not fluid clamps: type changes at `sm` and `md`, never in between
- Status and meaning carried by shape and position as well as color
- Both themes are hand-tuned and first-class; neither is derived from the other

## Colors

A workshop palette: one fired ceramic accent against unbleached paper, with every neutral carrying a deliberate warm cast so the page reads as material rather than as screen.

### Primary
- **Fired Clay** (`oklch(0.59 0.14 40)` light, `oklch(0.67 0.15 42)` dark): The only accent in the system. It appears on the page-title rule, primary buttons, the focus ring, text selection, live status dots, link hover, and the active filter underline — and essentially nowhere else. In dark it lightens and gains a touch of chroma to hold contrast against the night stock rather than being reused unchanged.
- **Clay Foreground** (`oklch(0.985 0.01 75)`): The warm off-white that sits on fired clay. Never plain `#fff`; a pure white knockout would break the warm cast the whole palette depends on.

### Neutral — Unbleached Stock
- **Stock** (`oklch(0.992 0.004 75)`): Page background. Almost white, never white — the 0.004 chroma at hue 75 is the difference between paper and screen.
- **Stock Raised** (`oklch(1 0.003 75)`): Card and popover surface. Sits *above* the page by being fractionally brighter and slightly less warm, not by casting a shadow.
- **Stock Muted** (`oklch(0.96 0.008 70)`): Recessed fills — image wells behind screenshots, hover backgrounds on quiet controls.
- **Ink** (`oklch(0.21 0.012 55)`): Body and heading text. A warm near-black; it carries more chroma than the backgrounds do, which keeps text from looking cold against warm paper.
- **Ink Muted** (`oklch(0.52 0.018 55)`): Secondary text, meta lines, tag labels, inactive navigation.
- **Seam** (`oklch(0.9 0.011 65)`): Borders and dividers. Almost always used at 60% opacity (`border-border/60`), which is what makes the hairline read as a seam in paper rather than as a drawn line.

### Neutral — Night Stock
- **Stock Night** (`oklch(0.175 0.008 55)`) / **Raised** (`oklch(0.205 0.009 55)`) / **Muted** (`oklch(0.27 0.012 55)`): The dark surfaces. Hue shifts from 75 toward 55 relative to light mode — the room gets warmer as it gets darker, not cooler.
- **Ink Night** (`oklch(0.96 0.006 75)`) / **Muted** (`oklch(0.72 0.012 65)`): Text on night stock.
- **Seam Night** (`oklch(0.29 0.012 55)`): The hairline in dark, lifted well above the raised surface so the seam survives without a visible shadow.

### Named Rules

**The One Ink Rule.** Fired Clay is the only chromatic color in the system. It never segments, never categorizes, and never decorates. If a new surface needs to distinguish two things from each other, it distinguishes them with type, position, weight, or shape — introducing a second hue to solve a hierarchy problem is the failure mode this rule exists to prevent.

**The Two Namespaces Rule.** Every color is defined twice in `app/globals.css`: once in the Tailwind utility namespace (`--background`, `--foreground`, `--primary`, …) in OKLCH, and once in the design-system namespace (`--vde-color-*`) in HSL. The two are the same colors and must be edited together. Changing one and not the other produces a page where Tailwind-styled regions and design-system components disagree — and because the upstream package ships no dark values for `--vde-color-*` at all, this repo is the only source of the dark half. This is a maintenance hazard, not a feature; treat the pair as a single edit.

**The Warm Cast Rule.** No neutral in this system has zero chroma. Every background, border, and text color carries 0.003–0.018 chroma at hue 55–75. A neutral introduced at chroma 0 will look grey and out of place next to everything around it, even though it will look correct in isolation.

## Typography

**Display Font:** Playfair Display (with Georgia, serif)
**Body Font:** Inter (with system-ui, sans-serif)
**Mono Font:** Geist Mono (declared in `--font-family-mono` but currently unused in the UI)

**Character:** A high-contrast transitional serif doing every title, against a neutral grotesque doing everything else. The pairing is doing one job: making headings feel set rather than styled. Playfair's thin-to-thick modulation is the only ornament in the system, which is why it is allowed to appear at 4.5rem without the page feeling loud.

### Hierarchy
- **Display** (Playfair, 400, 3rem → 4.5rem at `md`, line-height 1.05, tracking -0.025em): The name on the home page. Used exactly once per site, not once per page.
- **Headline** (Playfair, 400, 2.25rem → 3.75rem at `md`, tracking -0.025em): Page titles — "Work", a project name on its detail page.
- **Title** (Playfair, 400, 1.5rem → 1.875rem at `md`, tracking -0.025em): Section headings — "Selected work", "Under the hood".
- **Card Title** (Playfair, 600, 1.25rem): Project names inside cards. The one place Playfair carries semibold weight; at this size the 400 weight goes limp against the body text beneath it.
- **Body** (Inter, 400, 0.875rem → 1rem at `md`, line-height 1.5–1.625): Prose and descriptions. Long-form copy is held to `max-w-3xl` (48rem) at the page level and `max-w-xl` (36rem) for the hero summary.
- **Label** (Inter, 600, 0.75rem, uppercase, tracking 0.16em): Section eyebrows — "Start here", "Overview", "Highlights". Always `text-muted-foreground`, never the accent, except the single eyebrow on audience pages.
- **Meta** (Inter, 400, 0.6875rem, uppercase, tracking 0.14em): The card status/type/year line. Deliberately smaller than Label so a card's metadata never competes with a page's section eyebrow.

### Named Rules

**The Serif Is Structural Rule.** Playfair appears on titles and nothing else. It is never used for body copy, never for a button, never for a label, and never for emphasis inside a sentence. Seeing the serif *is* how a reader knows something is a heading, so using it decoratively destroys the only structural signal the type system has.

**The Step, Don't Flow Rule.** Type scales at breakpoints (`sm`, `md`) and holds still in between. There is no `clamp()` anywhere in this system and adding one would break its character — the sizes are chosen for two specific reading distances, not interpolated between them.

**The Uppercase Needs Air Rule.** Every uppercase run carries at least 0.14em letter-spacing. Uppercase at default tracking reads as shouting in a system this quiet.

## Layout

A single centered column, `max-w-5xl` (64rem), with `px-4` gutters that open to `px-6` at `md`. Every page — home, audience pages, work index, project detail — uses the same container, so the measure never shifts as a visitor moves between them.

Vertical rhythm runs on a coarse scale: `py-12 md:py-20` for the home main, `py-10 md:py-16` elsewhere, and section gaps of `mt-14 md:mt-20` / `mt-16 md:mt-24`. The gaps are large enough that sections read as separate sheets without needing a divider between them.

Grids step 1 → 2 → 3: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` for project cards, `md:grid-cols-2` for the audience cards and the recruiter project grid, and `md:grid-cols-3` with a `col-span-2` body for the project detail page. Grid gaps are `gap-4` (1rem) stepping to `md:gap-6` (1.5rem).

Only `sm` (640px) and `md` (768px) are used. The system defines no behavior at `lg` and above — the 64rem container simply centers in whatever space remains, which is why the design holds on a wide monitor without a dedicated wide layout.

Cards in a grid row stretch to equal height (`h-full` with a `flex flex-col` body), and their action rows are pinned to the bottom with `mt-auto`. Ragged card bottoms in a row are a defect, not a variation.

### Named Rules

**The One Measure Rule.** Every page uses the same `max-w-5xl` container and the same gutters. A surface that needs a different width is a surface that needs a different justification — reaching for a wider container to fit content is how a system loses its spine.

## Elevation & Depth

**Flat at rest, hairline ambient.** Surfaces never rise. The entire depth vocabulary is a 1px border at 60% opacity plus a 1px ambient shadow — `0 1px 2px hsl(28 30% 20% / 0.07)` in light, `0 1px 2px hsl(0 0% 0% / 0.4)` in dark — and that shadow is a permanent seam separating a card from the page, not a response to interaction. `--vde-surface-blur` is `0px`; there is no glass, no backdrop filter, no translucency anywhere in the system.

Because the z-axis is unavailable, state is expressed by **border color**: a card at rest has a seam-colored border, and a card under the cursor has a fired-clay one. That single substitution is the system's primary interactive signal, and it works precisely because nothing else in the resting state is accent-colored.

### Shadow Vocabulary
- **Ambient seam** (`box-shadow: 0 1px 2px hsl(28 30% 20% / 0.07)` light, `0 1px 2px hsl(0 0% 0% / 0.4)` dark): Applied permanently to every Card and Layout surface. Never varied, never removed, never intensified on hover.
- **Hard** and **Neon** (`none`): Defined upstream as `none` and deliberately left that way. There is no second shadow in this system.

### Named Rules

**The Nothing Rises Rule.** No element in this system translates on the Y axis, scales its container, or increases its shadow on hover. If a component needs to feel more present under the cursor, it changes its border color, its text color, or the content inside its frame — the frame itself holds still.

## Shapes

Corners are gently curved and consistent: `0.5rem` (`--vde-boundary-radius`) on every card, panel, and button; `0.375rem` on image frames and the project-detail cover; `0.25rem` on tags, chips, and the focus ring; fully round only on the 6px status dots. The radius shrinks as the element shrinks, which keeps small elements from reading as pills.

Borders are the primary form-giving device. Every card, panel, tag, and image frame is outlined at 1px, almost always at 60% opacity, and the resulting hairline grid is what gives the page its drafted, laid-out quality. Image wells are cropped to a fixed `16/10` aspect and clipped by the frame rather than sized by their content, so a grid of screenshots from six different apps still lines up.

The one recurring non-rectangular gesture is the **accent rule**: a 1px × 4rem bar of fired clay sitting above a page title with `mb-5`/`mb-6` beneath it. It is the closest thing this system has to a logo mark in layout form.

### Named Rules

**The Frame, Not the Fill Rule.** Containers are defined by their border, not by a background fill. A card's surface differs from the page by roughly one percent of lightness — the border is doing the work. Solving a grouping problem by adding a filled panel is out of character; add a frame instead.

## Components

### Buttons
- **Shape:** Gently curved (`0.5rem`), height 2.25rem at `sm` size (`h-9 px-3 text-sm`), which is the only size used in this project.
- **Primary:** Fired clay fill with the warm off-white foreground. Reserved for the single most important action on a surface — "View work" on the home hero, "Visit live" on a project page.
- **Outline:** Transparent with a seam-colored border and ink text; hovers to the muted fill. The default for everything secondary.
- **Hover / Focus:** Primary drops to 90% opacity; outline takes a muted background. Focus is the global 2px fired-clay ring at 2px offset, never a border swap.
- **Restraint:** Project cards deliberately use *text links*, not buttons, for Visit and Source. A grid of six filled buttons out-shouts the screenshots the grid exists to show.

### Cards / Containers
- **Corner Style:** `0.5rem`.
- **Background:** Stock Raised, roughly one percent brighter than the page.
- **Shadow Strategy:** The permanent ambient seam; see Elevation & Depth. Never changes on hover.
- **Border:** 1px seam at 60%, swapping to full fired clay on hover.
- **Internal Padding:** 1rem, derived from `--vde-typography-scale-body`.
- **Structure:** Cover image (16/10, cropped, `object-top`) → meta line → title with trailing arrow → three-line clamped description → tags → bottom-pinned action row. The whole card is a stretched link to the detail page (`after:absolute after:inset-0`), with outbound links raised to `z-10` so they stay independently clickable.

### Chips / Tags
- **Style:** Transparent fill, 1px seam border at 60%, `0.25rem` radius, `0.125rem 0.5rem` padding, ink-muted text at 0.75rem.
- **Overflow:** Capped at three visible tags with a `+N` counter carrying the remainder in its `title`. Keeping the tag row to a single line is what lets card headers stay level across a row.

### Navigation
- **Style:** Inline text links at 0.875rem in ink-muted, spaced `gap-5`, hidden below `sm`. The current page is ink, not accent.
- **Hover:** Color only, ink-muted → ink. No underline, no background, no movement.
- **Header:** A single 1px seam under a `py-4` bar, holding the NV lockup on the left and the theme toggle on the right.

### Status Dot
- **Live:** 6px filled fired-clay circle.
- **In progress:** 6px circle with a fired-clay border and no fill.
- **Demo:** 6px filled ink-muted circle at 50%.
- **Why:** With one accent available, a colored badge cannot encode three states. Shape does it instead — filled, hollow, or grey — so the signal survives the One Ink Rule and does not depend on color vision.

### Accent Rule (signature)
A 1px × 4rem fired-clay bar above a page title. It appears on the home hero, the work index, and every project detail page, and it is the system's most repeated gesture. Treat it as the marker that says "a page starts here"; using it mid-page as a divider would dilute it.

### Typographic Cover (signature)
For projects with no screenshot, a 16/10 muted panel holding the project's initials in Playfair at 3.75rem, `text-foreground/15`, over a faint 135° fired-clay gradient at 7% opacity. It exists so an imageless project still holds its place in a grid, and so that no project is ever illustrated with borrowed or generated imagery.

### Filter Control (signature)
A quiet segmented row above the work grid: each filter is a text label with a smaller tabular count beside it; the active one goes ink with the count in fired clay and a 1px fired-clay underline sitting on the row's bottom border; the rest are ink-muted with a muted hover fill. It reads as a table of contents rather than a set of buttons, which keeps the cards below it as the loudest thing on the page.

## Do's and Don'ts

### Do:
- **Do** define every new color in both namespaces — OKLCH in the Tailwind block and HSL in the `--vde-color-*` block, light and dark — in the same edit.
- **Do** give every neutral a warm cast (chroma 0.003–0.018 at hue 55–75).
- **Do** express interactive state through border color, text color, or content, since elevation is unavailable.
- **Do** put a 1px × 4rem fired-clay rule above a page title, and only above a page title.
- **Do** cap repeating metadata (tags, chips) so rows stay level and card footers align across a grid row.
- **Do** carry meaning in shape as well as color — filled, hollow, and grey status dots rather than three hues.
- **Do** pin card action rows to the bottom with `mt-auto` so a grid row reads as a set.
- **Do** hand-tune dark values; the upstream package ships none for `--vde-color-*`.

### Don't:
- **Don't** introduce a second accent hue. Solve hierarchy with type, weight, position, or shape instead.
- **Don't** add drop shadows, glass, backdrop blur, or gradients as surface treatment. `--vde-surface-blur` is `0` on purpose.
- **Don't** translate, lift, or scale a container on hover. The frame holds still; its contents may respond.
- **Don't** use Playfair for body copy, buttons, labels, or inline emphasis.
- **Don't** introduce `clamp()` type. This system steps at `sm` and `md` by design.
- **Don't** use pure `#fff` or `#000`, including as a knockout color on the accent.
- **Don't** fill a container to group things when a 1px border at 60% opacity will do it.
- **Don't** put filled primary buttons on repeating cards; text links keep the imagery loudest.
- **Don't** reach past `max-w-5xl` for a surface that feels cramped.
- **Don't** build toward the two anti-references this system is defined against: the default SaaS template (blue accent, heavy shadows, gradient hero, `rounded-2xl` everything) and the dark glass developer portfolio (glassmorphism, neon gradient text, animated grid backgrounds, purple-to-cyan).
