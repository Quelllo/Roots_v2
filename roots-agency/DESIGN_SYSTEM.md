# 🎨 Roots Design System — Organic Brutalism

## Design Philosophy

**Organic Brutalism**: A bold, unapologetic design language that combines the rawness of brutalist web design with organic, nature-inspired elements. This isn't your typical corporate design—it's intentional, opinionated, and memorable.

---

## Typography

### Fraunces (Headings)
**Variable serif with personality**
- Usage: All headings, hero text, section titles
- Weight: 300-900 (variable)
- Character: Old-style serif with optical sizing, softness variations
- Why: Distinctive, editorial feel with organic warmth

### Work Sans (Body)
**Humanist sans-serif**
- Usage: Body copy, descriptions, UI text
- Weight: 300-600
- Character: Clean but warm, excellent readability
- Why: Modern without being sterile, pairs well with Fraunces

### IBM Plex Mono (Accents)
- Usage: Labels, tags, buttons, technical elements
- Weight: 400-700
- Character: Technical, precise, monospaced
- Why: Adds structure and contrast to the organic elements

**Key Principle**: Typography defines the aesthetic, not decorates it.

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Ink Black** | `#0a0a0a` | Primary text, headers, borders, high-contrast elements |
| **Paper Cream** | `#f9f6f0` | Backgrounds, light text, cards |
| **Root Green** | `#2b4a2b` | Primary brand color, CTAs, accents |
| **Moss Accent** | `#5a7a4f` | Secondary accents, hover states |
| **Earth Brown** | `#3d2817` | Tertiary accents (optional use) |

### Contrast Philosophy
- **High contrast**: Black on cream, no gradients
- **Selective color**: Green used sparingly for maximum impact
- **No clichés**: No purple/blue gradients, no pastel smoothness

---

## Visual Language

### Brutalist Elements
- **Zero border radius**: Everything is sharp, rectangular
- **Heavy borders**: 2-4px solid borders on all interactive elements
- **Brutal shadows**: `8px 8px 0 0 black` offset shadows (not soft blur)
- **No gradients**: Flat, solid colors only
- **Asymmetric layouts**: Break the grid intentionally

### Organic Elements
- **Subtle noise texture**: 3% opacity grain overlay on backgrounds
- **Geometric shapes**: Squares and rectangles that reference growth patterns
- **Breathing space**: Generous whitespace, let content breathe
- **Natural movement**: Slow, purposeful animations

---

## Components Style

### Buttons
```tsx
// Primary
<button className="bg-ink-black text-paper-cream border-2 border-ink-black 
                   px-6 py-3 font-mono uppercase hover:-translate-y-1">
  
// Secondary
<button className="border-2 border-ink-black text-ink-black 
                   hover:bg-ink-black hover:text-paper-cream">
  
// Accent
<button className="bg-moss-accent text-paper-cream border-2 border-moss-accent">
```

**No rounded corners. No soft shadows. Bold hover states.**

### Cards
```tsx
<div className="border-brutalist shadow-brutalist bg-paper-cream p-8">
  {/* Content */}
</div>
```

**Heavy borders. Offset shadows. Tactile feel.**

### Typography Hierarchy
```tsx
// Mega heading
<h1 className="text-[clamp(3rem,12vw,10rem)] font-heading font-black leading-[0.9]">

// Section heading
<h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">

// Body
<p className="text-lg font-body leading-relaxed">

// Label/Tag
<span className="font-mono text-sm uppercase tracking-wider">
```

---

## Animation Principles

### Motion Strategy
1. **Purposeful, not decorative**
2. **Easing**: Use `cubic-bezier(0.16, 1, 0.3, 1)` for smooth, natural feel
3. **Sequence**: Staggered reveals with 100-200ms delays
4. **Duration**: 400-800ms (not too fast, not too slow)

### Key Animations
- **Page load**: Slide-in stagger for content blocks
- **Hover**: Translate effects (-y-1, x-1) not scale
- **Mobile menu**: Circular clip-path reveal
- **Scroll**: Parallax on geometric shapes

**One high-quality animation beats many scattered micro-interactions.**

---

## Layout Principles

### Grid & Spacing
- **Container**: Max-width with generous padding
- **Grid**: 12-column for complex layouts, asymmetric splits
- **Spacing scale**: 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96)
- **Breakpoints**: Mobile-first, significant changes only

### Asymmetry
- **Hero**: 7/5 column split, content box offset
- **Portfolio**: Varied card sizes, intentional gaps
- **About**: Split-screen with different background treatments

**Break the grid where it creates impact.**

---

## Texture & Atmosphere

### Noise Texture
```css
.texture-noise::before {
  background-image: url("data:image/svg+xml...");
  opacity: 0.03;
}
```
Adds tactile, printed-matter feel without being heavy.

### Geometric Accents
- Rotating squares in backgrounds
- Static grid overlays
- Border-only shapes for depth

**Backgrounds add depth, ambiance, and identity.**

---

## What Makes This NOT AI Slop

✅ **Distinctive typography**: Fraunces (not Inter/Roboto)  
✅ **High-contrast brutalism**: Black & cream (not purple gradients)  
✅ **Zero border radius**: Sharp, intentional (not rounded everything)  
✅ **Brutal shadows**: Offset, solid (not soft box-shadow blur)  
✅ **Asymmetric layouts**: Intentional breaks (not symmetric grid)  
✅ **Monospace accents**: Technical precision (not generic sans)  
✅ **Purposeful motion**: Cubic-bezier easing (not linear)  
✅ **Noise texture**: Tactile atmosphere (not flat)  

---

## Usage Examples

### Hero Section
- Massive Fraunces heading (10rem at desktop)
- Asymmetric 7/5 grid split
- Black content box with shadow-brutalist
- Monospace tags
- Geometric rotating shapes in background

### Portfolio Grid
- Variable-height cards
- Brutal borders and shadows on hover
- Monospace category labels
- Black overlay with moss accent text

### Navigation
- Fixed header with 4px bottom border
- Square logo icon (10x10 grid)
- Monospace uppercase links
- Circular clip-path mobile menu

---

## Brand Personality

**Bold. Grounded. Intentional.**

This design says:
- "We don't follow trends, we create them"
- "We're confident in our craft"
- "We value substance over style (but we have great style)"
- "We're rooted in reality, growing toward the future"

---

## Implementation Notes

### CSS Variables
All colors defined as CSS variables for easy theming:
```css
var(--ink-black)
var(--paper-cream)
var(--root-green)
var(--moss-accent)
```

### Utility Classes
```css
.border-brutalist    // 3px solid black border
.shadow-brutalist    // 8px 8px offset shadow
.texture-noise       // SVG noise overlay
.font-heading        // Fraunces serif
.font-mono           // IBM Plex Mono
```

### No Generic Components
Every component is custom-designed for this aesthetic. No generic shadcn defaults.

---

**Design Updated**: November 21, 2025  
**Theme**: Organic Brutalism  
**Status**: Production Ready  
**Memorable**: ✅ Absolutely

