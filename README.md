# 🎨 Roots — Creative Design Agency Website

A production-ready, modern portfolio website for Roots, a graphic design agency. Built with Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Framer Motion, inspired by fold7.com's high-impact layouts and animations.

![Roots Agency](public/images/hero-poster.svg)

## ✨ Features

- **Bold Hero Section** with video background and smooth animations
- **Interactive Portfolio Grid** with hover effects and case study pages
- **Animated Services Section** with icon-based cards
- **About Page** with split-screen layout and team showcase
- **Contact Form** with clean, centered design
- **Fully Responsive** mobile-first design
- **Smooth Animations** powered by Framer Motion
- **Modern UI Components** from Shadcn UI
- **TypeScript** for type safety
- **SEO Optimized** with Next.js App Router

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Installation

```bash
# Navigate to the project directory
cd roots-agency

# Install dependencies
npm install

# Generate placeholder images (already done, but you can regenerate)
node scripts/generate-placeholders.js

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn UI** - High-quality, accessible component library
- **Custom Design System** - Brand colors and typography

### Animation
- **Framer Motion** - Smooth, production-ready animations

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting with Tailwind CSS plugin

## 🎨 Brand Identity

### Colors
- **Deep Purple**: `#5d3a5d` - Primary brand color
- **Light Grey**: `#eaeaea` - Background and secondary elements
- **Accent Yellow**: `#fff56e` - Highlights and CTAs

### Typography
- **Headings**: Montserrat (Bold, 600-800 weight)
- **Body**: Open Sans (Regular)
- **UI Elements**: Inter (Fallback)

### Usage in Code

```tsx
// Tailwind classes
className="bg-deep-purple text-accent-yellow"

// CSS variables
background-color: var(--deep-purple);
```

## 📁 Project Structure

```
roots-agency/
├── app/                        # Next.js App Router
│   ├── about/                  # About page
│   ├── contact/                # Contact page
│   ├── work/[slug]/           # Case study detail pages
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles & theme
├── components/
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Site footer
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx            # Hero section with video
│   │   ├── Portfolio.tsx       # Work grid
│   │   └── Services.tsx        # Services cards
│   └── ui/                     # Shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── label.tsx
├── data/
│   └── portfolio.ts            # Portfolio project data
├── public/
│   ├── images/                 # Image assets
│   │   ├── portfolio/          # Project images
│   │   └── team/               # Team photos
│   └── videos/                 # Video assets
├── scripts/
│   └── generate-placeholders.js # Placeholder image generator
└── lib/
    └── utils.ts                # Utility functions
```

## 🖼️ Content Management

### Adding a New Portfolio Project

1. **Add project data** in `data/portfolio.ts`:

```typescript
{
  id: "7",
  slug: "new-project",
  title: "New Project",
  category: "Branding",
  description: "Project description",
  image: "/images/portfolio/new-project-hero.svg",
  client: "Client Name",
  year: "2024",
  challenge: "The challenge...",
  solution: "Our solution...",
  results: ["Result 1", "Result 2"],
  images: [
    "/images/portfolio/new-project-1.svg",
    "/images/portfolio/new-project-2.svg",
  ],
  tags: ["Branding", "Web Design"],
}
```

2. **Add images** to `public/images/portfolio/`
3. The project will automatically appear on the homepage and have its own detail page at `/work/new-project`

### Replacing Placeholder Images

The project uses SVG placeholders for development. To add real images:

1. Replace SVG files in `public/images/` with JPG/PNG files
2. Update file extensions in `data/portfolio.ts` from `.svg` to `.jpg` or `.png`
3. Update image paths in component files if needed

**Recommended image sizes:**
- Hero images: 800×1000px (portrait)
- Project images: 1200×900px (landscape)
- Team photos: 600×800px (portrait)
- About story: 1200×900px (landscape)

### Adding Video Background

1. Add your video file to `public/videos/hero-bg.mp4`
2. Keep file size under 5MB for performance
3. Use H.264 codec for best browser compatibility
4. Recommended: 1920×1080, 10-30 seconds, looped

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Utility
node scripts/generate-placeholders.js  # Generate placeholder images
```

## 🎯 Key Components

### Header
- Fixed navigation with scroll effect
- Mobile-friendly hamburger menu
- Smooth animations on open/close

### Hero Section
- Full-screen video background
- Gradient overlay for readability
- Animated text and CTAs
- Scroll indicator

### Portfolio Grid
- Masonry-style grid layout
- Hover zoom with overlay
- Category badges
- Smooth page transitions to detail views

### Services Section
- Three-column card layout
- Icon animations on hover
- Feature lists
- CTA block

### Case Study Pages
- Dynamic routing with `/work/[slug]`
- Challenge, Solution, Results structure
- Image gallery
- Related work suggestions

### Contact Form
- Form validation
- Clean, centered layout
- Contact information sidebar
- Map integration placeholder

## 🎨 Animation Guidelines

All animations use Framer Motion. Common patterns:

```tsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

```tsx
// Hover scale
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

## 📱 Responsive Design

The site is mobile-first with breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔧 Customization

### Changing Brand Colors

Edit `app/globals.css`:

```css
:root {
  --deep-purple: #5d3a5d;
  --light-grey: #eaeaea;
  --accent-yellow: #fff56e;
}
```

### Changing Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Montserrat, Open_Sans } from "next/font/google";

// Configure fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});
```

### Modifying Navigation

Edit `components/layout/Header.tsx`:

```typescript
const navigation = [
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Platforms

The project works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

Build command: `npm run build`
Output directory: `.next`

## 📚 Learn More

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Shadcn UI
- [Shadcn UI](https://ui.shadcn.com/)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🎓 Design Inspiration

This project draws inspiration from:
- [fold7.com](https://fold7.com) - Bold layouts and smooth animations
- Modern portfolio best practices
- Minimalist, high-contrast design principles

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with ❤️ using:
- Next.js by Vercel
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Lucide Icons

---

**Ready to customize?** Start by replacing placeholder images, updating portfolio data, and adjusting the brand colors to match your agency's identity. Happy coding! 🚀
