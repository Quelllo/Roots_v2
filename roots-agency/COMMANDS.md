# 📋 Command Reference Guide

Complete list of all commands for the Roots Agency website project.

## 🚀 Getting Started

```bash
# Navigate to project
cd roots-agency

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Development Commands

### Start Development Server
```bash
npm run dev
```
- Starts Next.js development server
- Opens at http://localhost:3000
- Hot reload enabled
- Shows real-time errors

### Build for Production
```bash
npm run build
```
- Creates optimized production build
- Type-checks all files
- Generates static pages
- Output in `.next/` directory

### Start Production Server
```bash
npm run start
```
- Runs the production build
- Requires `npm run build` first
- No hot reload (production mode)

## 🧹 Code Quality

### Lint Code
```bash
npm run lint
```
- Runs ESLint on all files
- Checks for code issues
- Shows warnings and errors

### Format Code
```bash
# Format all files
npm run format

# Check formatting without changing
npm run format:check
```
- Uses Prettier
- Sorts Tailwind classes
- Consistent code style

## 🎨 Utilities

### Generate Placeholder Images
```bash
npm run generate:placeholders
```
- Creates SVG placeholder images
- For portfolio, team, and hero sections
- Run when starting fresh

### Clear Cache & Reinstall
```bash
# Remove dependencies
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Clean Build
```bash
# Remove build artifacts
rm -rf .next

# Rebuild
npm run build
```

## 📦 Package Management

### Install New Package
```bash
# Production dependency
npm install package-name

# Development dependency
npm install --save-dev package-name
```

### Update Packages
```bash
# Update all packages
npm update

# Check outdated packages
npm outdated
```

### Add Shadcn Component
```bash
# Add single component
npx shadcn@latest add component-name

# Add multiple components
npx shadcn@latest add button card input
```

## 🔍 Debugging

### TypeScript Check
```bash
# Check types without building
npx tsc --noEmit
```

### Find Port Usage
```bash
# macOS/Linux - Find what's using port 3000
lsof -ti:3000

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Run on Different Port
```bash
npm run dev -- -p 3001
```

## 🚢 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Build for Any Platform
```bash
# Standard build
npm run build

# Export static site (if needed)
npm run build && npm run export
```

## 🔄 Git Commands (Reference)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Roots agency website"

# Add remote
git remote add origin <your-repo-url>

# Push to main
git push -u origin main
```

## 📊 Project Analysis

### Check Bundle Size
```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze
ANALYZE=true npm run build
```

### Check Dependencies
```bash
# List all dependencies
npm list --depth=0

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

## 🧪 Testing (Future)

```bash
# Add testing libraries (not included yet)
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Run tests (once configured)
npm test
```

## 📝 Documentation

### View README
```bash
# View in terminal (macOS)
cat README.md

# Open in browser
open README.md
```

### Generate Component Documentation
```bash
# List all components
find components -name "*.tsx" -type f

# Count components
find components -name "*.tsx" | wc -l
```

## 🎯 Quick Scripts

### Open in VS Code
```bash
code .
```

### Open in Browser
```bash
# macOS
open http://localhost:3000

# Linux
xdg-open http://localhost:3000

# Windows
start http://localhost:3000
```

### Watch File Changes
```bash
# Watch TypeScript files
npx tsc --watch
```

## 🔐 Environment Variables (Future)

```bash
# Create .env.local file
touch .env.local

# Edit environment variables
nano .env.local

# Example variables
# NEXT_PUBLIC_API_URL=https://api.example.com
# CONTACT_EMAIL=hello@example.com
```

## 📱 Mobile Testing

```bash
# Find your local IP
# macOS
ipconfig getifaddr en0

# Access from mobile
# http://YOUR_IP:3000
```

## 🛠️ Advanced

### Analyze Build
```bash
npm run build -- --profile
```

### Development with Turbopack
```bash
npm run dev --turbo
```

### Clean Everything
```bash
# Remove all generated files
rm -rf node_modules .next out dist package-lock.json

# Fresh start
npm install
npm run dev
```

## ⚡ Keyboard Shortcuts (Development Server)

When `npm run dev` is running:
- `Ctrl + C` - Stop server
- `Ctrl + D` - Stop server (alternative)

## 📚 Help Commands

```bash
# Next.js help
npx next --help

# npm help
npm help

# Package info
npm info next
npm info react
```

---

## 🎓 Most Common Workflow

```bash
# 1. Start development
cd roots-agency
npm install
npm run dev

# 2. Make changes to code
# (Edit files in your editor)

# 3. Format code
npm run format

# 4. Check for errors
npm run lint
npm run build

# 5. Commit changes
git add .
git commit -m "Your changes"
git push

# 6. Deploy
vercel --prod
```

---

**Need a specific command?** Search this file with `Ctrl + F` (or `Cmd + F` on Mac)

