# 🎨 Color Update - How to See Changes

The color scheme has been updated from purple/yellow to earth tones (green/cream). If you're not seeing the changes, follow these steps:

## 🔄 Step 1: Clear Browser Cache

### Chrome/Edge:
1. Press `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows) for hard refresh
2. Or: Open DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"

### Firefox:
1. Press `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
2. Or: `Cmd + Shift + Delete` → Clear cache

### Safari:
1. Press `Cmd + Option + R`
2. Or: Safari menu → Develop → Empty Caches

## 🚀 Step 2: Restart Dev Server

```bash
# Stop the current server (Ctrl + C)
# Then restart:
cd roots-agency
npm run dev
```

## ✅ Step 3: Verify Colors

The new colors should be:
- **Forest Green** (#2d5016) - Dark green (was purple #5d3a5d)
- **Warm Cream** (#f5f1e8) - Light cream (was grey #eaeaea)  
- **Sage Green** (#6b9f3a) - Vibrant green (was yellow #fff56e)

## 🎯 What Should Look Different

- **Header/Footer**: Should be dark green instead of purple
- **Buttons**: Should be green instead of purple
- **Accent highlights**: Should be green instead of yellow
- **Backgrounds**: Should be warm cream instead of grey

## 🔍 Quick Test

Open the browser console and run:
```javascript
getComputedStyle(document.documentElement).getPropertyValue('--forest-green')
```

Should return: `#2d5016`

If it still shows the old purple, the cache needs clearing.

## 🛠️ Nuclear Option

If still not working:
```bash
cd roots-agency
rm -rf .next node_modules/.cache
npm run dev
```

Then hard refresh browser (Cmd+Shift+R)

---

**New Colors:**
- Primary: `#2d5016` (Forest Green)
- Secondary: `#f5f1e8` (Warm Cream)
- Accent: `#6b9f3a` (Sage Green)

