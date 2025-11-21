# 🚀 Installation Guide

Quick reference for setting up the Roots Agency website.

## Prerequisites

Ensure you have these installed:
- **Node.js** 18.x or higher
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version  # Should be v18+
npm --version
```

## Step-by-Step Installation

### 1. Navigate to Project Directory

```bash
cd roots-agency
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- Next.js & React
- Tailwind CSS
- Shadcn UI components
- Framer Motion
- TypeScript
- All dev dependencies

**Time:** ~1-2 minutes

### 3. Start Development Server

```bash
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000)

**You should see:** The Roots homepage with hero section, portfolio grid, and services.

## 📋 Install Commands Reference

Here's every command used to create this project:

### Initial Setup (Already Done)
```bash
# Create Next.js app
npx create-next-app@latest roots-agency --typescript --tailwind --app --no-src-dir --import-alias "@/*" --use-npm --yes

# Install core dependencies
npm install framer-motion clsx tailwind-merge lucide-react

# Initialize Shadcn UI
npx shadcn@latest init -y --defaults

# Add Shadcn components
npx shadcn@latest add button card input textarea label --yes

# Install Prettier
npm install --save-dev prettier prettier-plugin-tailwindcss
```

## 🧪 Verify Installation

After running `npm run dev`, check these:

### ✅ Checklist
- [ ] Homepage loads at localhost:3000
- [ ] Hero section appears with "ROOTS" heading
- [ ] Portfolio grid shows 6 projects
- [ ] Services section has 3 cards
- [ ] Header navigation is visible
- [ ] Footer appears at bottom
- [ ] About page works (/about)
- [ ] Contact page works (/contact)
- [ ] Case study page works (click any portfolio item)

### ❌ Common Issues

**Issue: Port 3000 already in use**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

**Issue: Module not found errors**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Issue: Images not showing**
- Placeholder SVG images should be generated automatically
- Run: `npm run generate:placeholders`

**Issue: Type errors in VS Code**
- Restart TypeScript server: Cmd+Shift+P → "TypeScript: Restart TS Server"

## 📦 What Was Installed?

### Production Dependencies
- `next` - Next.js framework
- `react`, `react-dom` - React library
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `tailwind-merge`, `clsx` - Utility libraries
- `@radix-ui/*` - Shadcn UI base components
- `class-variance-authority` - Component variants

### Development Dependencies
- `typescript` - TypeScript compiler
- `@types/*` - Type definitions
- `tailwindcss` - Tailwind CSS
- `eslint` - Code linting
- `prettier` - Code formatting
- `prettier-plugin-tailwindcss` - Tailwind class sorting

### Configuration Files
- `tailwind.config.ts` - Tailwind configuration
- `postcss.config.mjs` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `components.json` - Shadcn UI configuration
- `.prettierrc` - Prettier configuration
- `.eslintrc.json` - ESLint configuration

## 🎨 Next Steps

After installation:

1. **Explore the site** - Navigate through all pages
2. **Customize content** - Edit `data/portfolio.ts` to add your projects
3. **Replace placeholders** - Add real images to `public/images/`
4. **Update branding** - Change colors in `app/globals.css`
5. **Modify navigation** - Edit `components/layout/Header.tsx`

## 🆘 Need Help?

- Check the main [README.md](README.md) for full documentation
- Review component files for inline comments
- Search [Next.js Docs](https://nextjs.org/docs)
- Check [Shadcn UI](https://ui.shadcn.com/)

---

**Ready to code?** Run `npm run dev` and start customizing! 🎨

