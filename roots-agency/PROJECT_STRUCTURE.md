# 📁 Project Structure

Visual guide to the Roots Agency website file organization.

## 🏗️ Directory Tree

```
roots-agency/
│
├── 📱 app/                          # Next.js App Router
│   ├── about/
│   │   └── page.tsx                 # About page
│   ├── contact/
│   │   └── page.tsx                 # Contact page
│   ├── work/
│   │   └── [slug]/
│   │       └── page.tsx             # Dynamic case study pages
│   ├── layout.tsx                   # Root layout (fonts, metadata)
│   ├── page.tsx                     # Homepage
│   └── globals.css                  # Global styles, theme, colors
│
├── 🧩 components/                   # React Components
│   ├── layout/
│   │   ├── Header.tsx               # Navigation header with menu
│   │   └── Footer.tsx               # Site footer with links
│   ├── sections/
│   │   ├── Hero.tsx                 # Hero section with video
│   │   ├── Portfolio.tsx            # Portfolio grid with projects
│   │   └── Services.tsx             # Services cards section
│   └── ui/                          # Shadcn UI Components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── label.tsx
│
├── 📊 data/                         # Content Data
│   └── portfolio.ts                 # Portfolio projects data & types
│
├── 🖼️ public/                       # Static Assets
│   ├── images/
│   │   ├── portfolio/               # Project images (36 SVG files)
│   │   │   ├── urban-brew-hero.svg
│   │   │   ├── nexus-hero.svg
│   │   │   ├── earthwise-hero.svg
│   │   │   ├── lumina-hero.svg
│   │   │   ├── pulse-hero.svg
│   │   │   ├── artisan-hero.svg
│   │   │   └── ... (+ detail images)
│   │   ├── team/                    # Team member photos (4 SVG files)
│   │   │   ├── sarah.svg
│   │   │   ├── marcus.svg
│   │   │   ├── emma.svg
│   │   │   └── david.svg
│   │   ├── hero-poster.svg          # Hero background
│   │   ├── about-story.svg          # About page image
│   │   └── placeholder.txt          # Image requirements guide
│   └── videos/
│       └── placeholder.txt          # Video requirements guide
│
├── 🔧 scripts/                      # Utility Scripts
│   └── generate-placeholders.js     # Generate SVG placeholders
│
├── 🛠️ lib/                          # Utilities
│   └── utils.ts                     # Helper functions (cn, etc.)
│
├── ⚙️ Configuration Files
│   ├── next.config.ts               # Next.js configuration
│   ├── tailwind.config.ts           # Tailwind CSS config
│   ├── postcss.config.mjs           # PostCSS config
│   ├── tsconfig.json                # TypeScript config
│   ├── components.json              # Shadcn UI config
│   ├── .eslintrc.json               # ESLint rules
│   ├── .prettierrc                  # Prettier rules
│   └── .prettierignore              # Prettier ignore patterns
│
├── 📚 Documentation
│   ├── README.md                    # Complete documentation
│   ├── INSTALL.md                   # Installation guide
│   ├── COMMANDS.md                  # Command reference
│   └── PROJECT_STRUCTURE.md         # This file
│
└── 📦 Package Files
    ├── package.json                 # Dependencies & scripts
    └── package-lock.json            # Locked versions
```

## 📄 Key Files Explained

### App Directory (Routes)

| File | Purpose | Route |
|------|---------|-------|
| `app/page.tsx` | Homepage with Hero, Portfolio, Services | `/` |
| `app/about/page.tsx` | About page with story and team | `/about` |
| `app/contact/page.tsx` | Contact form and info | `/contact` |
| `app/work/[slug]/page.tsx` | Dynamic case study pages | `/work/urban-brew` |
| `app/layout.tsx` | Root layout, fonts, metadata | All pages |
| `app/globals.css` | Global styles, theme colors | All pages |

### Components

#### Layout Components
- **Header.tsx** - Fixed navigation, mobile menu, scroll effects
- **Footer.tsx** - Site footer with links and social icons

#### Section Components
- **Hero.tsx** - Full-screen hero with video background
- **Portfolio.tsx** - Grid of portfolio items with hover effects
- **Services.tsx** - Three service cards with animations

#### UI Components (Shadcn)
- **button.tsx** - Button component with variants
- **card.tsx** - Card container component
- **input.tsx** - Form input field
- **textarea.tsx** - Multi-line text input
- **label.tsx** - Form label

### Data

**portfolio.ts** contains:
- `PortfolioItem` interface/type
- `portfolioItems` array with 6 sample projects
- All project data (title, images, challenge, solution, results)

### Assets

**Images (43 total)**:
- 1 hero poster
- 1 about story image
- 6 portfolio hero images
- 24 portfolio detail images (4 per project)
- 4 team member photos
- All currently SVG placeholders

**Videos**:
- `hero-bg.mp4` location prepared (not included)

## 🎯 How Pages Work

### Homepage Flow
```
app/page.tsx
  ├─ imports Header
  ├─ imports Hero
  ├─ imports Portfolio
  ├─ imports Services
  └─ imports Footer
```

### Case Study Flow
```
app/work/[slug]/page.tsx
  ├─ Gets slug from URL params
  ├─ Finds project in data/portfolio.ts
  ├─ Displays project details
  └─ Shows image gallery
```

## 📊 Component Hierarchy

```
RootLayout (app/layout.tsx)
└─ Body with fonts
    └─ {children} (page content)

Page (app/page.tsx)
├─ Header
├─ Hero
├─ Portfolio
│   └─ PortfolioItem × 6
├─ Services
│   └─ ServiceCard × 3
└─ Footer
```

## 🎨 Styling Architecture

### Tailwind Configuration
- Colors defined in `app/globals.css` CSS variables
- Custom utilities added for brand colors
- Font families configured in `app/layout.tsx`

### Theme Variables
```css
/* In globals.css */
:root {
  --deep-purple: #5d3a5d;
  --light-grey: #eaeaea;
  --accent-yellow: #fff56e;
}
```

### Usage in Components
```tsx
// Tailwind classes
<div className="bg-deep-purple text-accent-yellow">

// Shadcn variants
<Button className="bg-deep-purple hover:bg-deep-purple/90">
```

## 🔄 Data Flow

```
data/portfolio.ts (source of truth)
         ↓
components/sections/Portfolio.tsx (grid view)
         ↓
app/work/[slug]/page.tsx (detail view)
```

## 📝 Adding New Content

### Add Portfolio Project
1. Edit `data/portfolio.ts`
2. Add images to `public/images/portfolio/`
3. Project automatically appears on homepage
4. Detail page automatically created

### Add New Page
1. Create `app/new-page/page.tsx`
2. Add to navigation in `components/layout/Header.tsx`
3. Route automatically available at `/new-page`

### Add New Component
1. Create in `components/` directory
2. Import where needed
3. Use TypeScript for props

## 🔍 Finding Things Quickly

| Looking for... | Check... |
|----------------|----------|
| Page routes | `app/` directory |
| Portfolio data | `data/portfolio.ts` |
| Navigation menu | `components/layout/Header.tsx` |
| Brand colors | `app/globals.css` |
| Font setup | `app/layout.tsx` |
| Button styles | `components/ui/button.tsx` |
| Portfolio grid | `components/sections/Portfolio.tsx` |
| Hero section | `components/sections/Hero.tsx` |
| Contact form | `app/contact/page.tsx` |
| Team members | `app/about/page.tsx` |

## 📦 Dependencies Location

All npm packages installed in:
```
node_modules/           # Don't edit directly
```

Managed by:
```
package.json           # Add/remove here
package-lock.json      # Auto-generated
```

## 🚀 Build Output

After `npm run build`:
```
.next/                 # Compiled production build
  ├── server/          # Server-rendered pages
  ├── static/          # Static assets
  └── ...
```

---

## 💡 Quick Tips

- **Pages**: Add new pages in `app/` directory
- **Components**: Reusable components in `components/`
- **Images**: All images in `public/images/`
- **Data**: Edit portfolio projects in `data/portfolio.ts`
- **Styles**: Global styles in `app/globals.css`
- **Config**: Most config in root directory

---

**File Count Summary**:
- 5 Page routes
- 8 Component files
- 1 Data file
- 43 Placeholder images
- 3 Documentation files
- 8 Config files

**Total Custom Code Files**: ~25 (excluding node_modules)

