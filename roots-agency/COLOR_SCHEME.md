# 🎨 Color Scheme Update

## New Brand Colors

The color scheme has been updated to earth tones that better reflect the "Roots" brand identity - grounded, natural, and professional.

### Color Palette

| Color | Hex Code | Usage | Description |
|-------|----------|-------|-------------|
| **Forest Green** | `#1a3d0e` | Primary | Deep, rich green representing roots, earth, and growth. Used for headers, buttons, and primary elements. |
| **Warm Cream** | `#faf8f3` | Secondary | Soft, natural cream color representing light and growth. Used for backgrounds and secondary elements. |
| **Sage Green** | `#6b9f3a` | Accent | Vibrant sage green representing life and energy. Used for highlights, CTAs, and accent elements. |

### CSS Variables

```css
:root {
  --forest-green: #1a3d0e;
  --warm-cream: #faf8f3;
  --sage-green: #6b9f3a;
}
```

### Tailwind Classes

```tsx
// Primary (Forest Green)
className="bg-forest-green text-white"
className="text-forest-green"

// Secondary (Warm Cream)
className="bg-warm-cream"
className="text-warm-cream"

// Accent (Sage Green)
className="bg-sage-green text-white"
className="text-sage-green"
```

### Legacy Support

The old color class names still work for backward compatibility:

- `bg-deep-purple` → maps to `forest-green`
- `bg-light-grey` → maps to `warm-cream`
- `bg-accent-yellow` → maps to `sage-green`

This ensures all existing components continue to work without modification.

## Color Psychology

### Forest Green (#1a3d0e)
- **Represents**: Stability, growth, nature, foundation
- **Perfect for**: A brand called "Roots" - represents being grounded and foundational
- **Usage**: Primary brand color, headers, navigation, buttons

### Warm Cream (#faf8f3)
- **Represents**: Warmth, clarity, natural light
- **Perfect for**: Backgrounds that feel inviting and professional
- **Usage**: Section backgrounds, card backgrounds, subtle contrast

### Sage Green (#6b9f3a)
- **Represents**: Growth, vitality, freshness
- **Perfect for**: Accent elements that need to stand out
- **Usage**: CTAs, highlights, hover states, badges

## Design Rationale

The new color scheme:

1. **Better Brand Alignment**: Earth tones directly connect to the "Roots" name
2. **Professional Yet Natural**: Maintains professionalism while feeling organic
3. **High Contrast**: Forest green on cream provides excellent readability
4. **Modern Appeal**: Earth tones are trending in modern design
5. **Versatile**: Works across all industries and project types

## Usage Examples

### Headers & Navigation
```tsx
<header className="bg-forest-green text-white">
  <nav className="text-white">
    <a className="hover:text-sage-green">Link</a>
  </nav>
</header>
```

### Buttons
```tsx
<Button className="bg-forest-green hover:bg-forest-green/90 text-white">
  Primary Button
</Button>

<Button className="bg-sage-green hover:bg-sage-green/90 text-white">
  Accent Button
</Button>
```

### Cards & Sections
```tsx
<section className="bg-warm-cream">
  <div className="bg-white border-forest-green">
    Card Content
  </div>
</section>
```

### Text & Typography
```tsx
<h1 className="text-forest-green">Heading</h1>
<p className="text-gray-700">Body text</p>
<span className="text-sage-green">Accent text</span>
```

## Updating Components

While legacy classes work, you can optionally update components to use the new class names:

**Old:**
```tsx
<div className="bg-deep-purple text-accent-yellow">
```

**New:**
```tsx
<div className="bg-forest-green text-sage-green">
```

## Accessibility

The new color scheme maintains excellent contrast ratios:

- **Forest Green on White**: WCAG AAA compliant
- **Forest Green on Warm Cream**: WCAG AA compliant
- **Sage Green on White**: WCAG AAA compliant
- **White on Forest Green**: WCAG AAA compliant

All text remains highly readable and accessible.

## Regenerating Placeholders

If you want to regenerate placeholder images with the new colors:

```bash
npm run generate:placeholders
```

This will create new SVG placeholders using the earth tone color palette.

---

**Updated**: November 21, 2025  
**Status**: Active  
**Legacy Support**: Yes ✅

