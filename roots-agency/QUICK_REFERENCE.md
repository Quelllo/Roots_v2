# ⚡ Quick Reference - Roots Agency

One-page reference for everything you need to know.

---

## 🚀 START HERE (3 Commands)

```bash
cd roots-agency
npm install
npm run dev
```

**Open:** http://localhost:3000

---

## 📦 All Install Commands Used

```bash
# 1. Create Next.js Project
npx create-next-app@latest roots-agency --typescript --tailwind --app --no-src-dir --import-alias "@/*" --use-npm --yes

# 2. Install Framer Motion & Utilities
npm install framer-motion clsx tailwind-merge lucide-react

# 3. Initialize Shadcn UI
npx shadcn@latest init -y --defaults

# 4. Add Shadcn Components
npx shadcn@latest add button card input textarea label --yes

# 5. Install Prettier
npm install --save-dev prettier prettier-plugin-tailwindcss

# 6. Generate Placeholders
node scripts/generate-placeholders.js
```

---

## 🎨 Brand Colors (Copy-Paste Ready)

```css
/* Primary */
--deep-purple: #5d3a5d;

/* Secondary */
--light-grey: #eaeaea;

/* Accent */
--accent-yellow: #fff56e;
```

**Tailwind classes:**
```tsx
className="bg-deep-purple text-accent-yellow"
className="bg-light-grey text-deep-purple"
```

---

## 📁 File Locations

| What | Where |
|------|-------|
| Portfolio data | `data/portfolio.ts` |
| Brand colors | `app/globals.css` |
| Navigation menu | `components/layout/Header.tsx` |
| Homepage | `app/page.tsx` |
| Hero section | `components/sections/Hero.tsx` |
| Images | `public/images/` |

---

## 🔧 Common Tasks

### Add New Portfolio Project

**Edit:** `data/portfolio.ts`

```typescript
{
  id: "7",
  slug: "project-slug",
  title: "Project Title",
  category: "Branding",
  description: "Short description",
  image: "/images/portfolio/project-hero.svg",
  client: "Client Name",
  year: "2024",
  challenge: "The challenge...",
  solution: "Our solution...",
  results: ["Result 1", "Result 2"],
  images: ["/images/portfolio/project-1.svg"],
  tags: ["Tag1", "Tag2"],
}
```

### Change Brand Color

**Edit:** `app/globals.css`

```css
:root {
  --deep-purple: #YOUR_NEW_COLOR;
}
```

### Add Navigation Link

**Edit:** `components/layout/Header.tsx`

```typescript
const navigation = [
  { name: "New Page", href: "/new-page" },
];
```

### Replace Placeholder Image

1. Add image to `public/images/`
2. Update path in data file
3. Change `.svg` to `.jpg` or `.png`

---

## 📋 Essential Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Run production build

# Code Quality
npm run lint             # Check code
npm run format           # Format code

# Utilities
npm run generate:placeholders  # Make placeholder images
```

---

## 🗂️ Project Structure (Simplified)

```
roots-agency/
├── app/                 # Pages (routing)
├── components/          # React components
├── data/                # Content data
├── public/              # Images, videos
└── [docs & config]
```

---

## 📄 Pages & Routes

| Page | Route | File |
|------|-------|------|
| Home | `/` | `app/page.tsx` |
| About | `/about` | `app/about/page.tsx` |
| Contact | `/contact` | `app/contact/page.tsx` |
| Case Study | `/work/[slug]` | `app/work/[slug]/page.tsx` |

---

## 🎯 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Library:** Shadcn UI
- **Animation:** Framer Motion
- **Icons:** Lucide React

---

## 📚 Documentation Files

1. `README.md` - Full documentation
2. `INSTALL.md` - Installation guide
3. `COMMANDS.md` - All commands
4. `PROJECT_STRUCTURE.md` - File organization
5. `QUICK_REFERENCE.md` - This file
6. `PROJECT_COMPLETE.md` - Completion summary

---

## 🐛 Quick Fixes

**Port in use:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Module errors:**
```bash
rm -rf node_modules package-lock.json && npm install
```

**Images not showing:**
```bash
npm run generate:placeholders
```

---

## 🚢 Deploy to Vercel

```bash
npm i -g vercel
vercel
```

---

## 🎨 Customization Checklist

- [ ] Update portfolio projects in `data/portfolio.ts`
- [ ] Replace placeholder images
- [ ] Change brand colors if needed
- [ ] Update team member info
- [ ] Add hero video
- [ ] Customize service descriptions
- [ ] Update contact information
- [ ] Add social media links
- [ ] Modify navigation menu
- [ ] Update meta tags

---

## 📊 What's Included

- ✅ 4 complete pages
- ✅ 8 custom components
- ✅ 6 portfolio projects
- ✅ 43 placeholder images
- ✅ Smooth animations
- ✅ Responsive design
- ✅ TypeScript types
- ✅ Full documentation

---

## ⚡ Speed Tips

1. **Use hot reload:** Changes appear instantly in dev mode
2. **Edit data first:** Update `portfolio.ts` before building pages
3. **Format on save:** Configure your editor to auto-format
4. **Use TypeScript:** Catch errors before runtime
5. **Check build:** Run `npm run build` before deploying

---

## 🔗 Quick Links

- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com
- Shadcn: https://ui.shadcn.com
- Framer: https://framer.com/motion

---

## 💡 Pro Tips

1. Keep `data/portfolio.ts` as single source of truth
2. Use Shadcn components for consistency
3. Add new images to `public/images/`
4. Test on mobile devices early
5. Run `npm run build` to check for errors
6. Use TypeScript for better developer experience
7. Customize colors in one place (`globals.css`)
8. Add pages in `app/` directory (automatic routing)

---

## 🎓 Learning Path

**Beginner:**
1. Edit portfolio data
2. Change colors
3. Update text content

**Intermediate:**
1. Add new components
2. Modify layouts
3. Customize animations

**Advanced:**
1. Add new pages
2. Integrate APIs
3. Add advanced features

---

## ✅ Pre-Launch Checklist

- [ ] All content updated
- [ ] Images replaced
- [ ] Colors customized
- [ ] Navigation updated
- [ ] Contact form tested
- [ ] Mobile responsive checked
- [ ] All links working
- [ ] Build successful
- [ ] SEO tags updated
- [ ] Analytics added
- [ ] Performance tested
- [ ] Browser compatibility checked

---

## 🎉 You're Ready!

**Everything works out of the box.**  
**Start customizing and deploy when ready.**

**Questions?** Check the full README.md

---

**Last Updated:** November 21, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅

