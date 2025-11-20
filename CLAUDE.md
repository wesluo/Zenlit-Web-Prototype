# CLAUDE.md - Development Notes

## Project Overview

This is a production-ready landing page redesign for Zenlit, featuring modern minimal elegance with glassmorphic design elements and optimized video backgrounds.

**Live Site**: https://zenlitclaude.vercel.app
**Repository**: https://github.com/wesluo/Zenlit-Web-Prototype

## Tech Stack

- **Framework**: Next.js 16.0.3 with App Router and Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel (auto-deploy from GitHub main branch)
- **Fonts**: Playfair Display (display), DM Sans (body)

## Key Implementation Details

### Video Background Optimization

**Challenge**: Original 6.3MB `.mov` file with spaces in filename caused deployment issues.

**Solution** (Commits: 20438a7, 8e21dd1):
1. Converted to web-optimized formats:
   - `zenlit-hero-video.mp4` (2.9MB, H.264 codec)
   - `zenlit-hero-video.webm` (1.4MB, VP9 codec)
2. Implemented source hierarchy: WebM → MP4 → MOV fallback
3. Added animated gradient background as base layer (always visible)
4. Set video opacity to 70% for better text readability
5. URL-encoded original filename to handle spaces

**Files**:
- `components/HeroSection.tsx` - Video implementation
- `app/globals.css` - Gradient and video fade-in animations
- `next.config.ts` - Caching headers and file size limits

### TypeScript Error Fixes

**Issue**: `StatsSection.tsx` used invalid GlassCard variant types.

**Solution** (Commit: 2755c21):
- `GlassCard` only accepts `'primary' | 'default'` variants
- Changed StatsSection to use `variant="primary"` instead of color names

### Text Spacing Fix

**Issue**: "pay off" text was truncated due to CSS clipping with gradient text.

**Solution** (Commit: 20438a7):
- Added `paddingRight: '0.2em'` and `minWidth: 'max-content'` to span
- Italic text with `-webkit-text-fill-color: transparent` needs extra space
- Updated `globals.css` with `padding-inline-end` for all gradient text

**Documentation**: See `SPACING-IMPROVEMENTS.md` for detailed analysis

### Feature Number Bubbles

**Issue**: Decorative circles overlaid feature numbers (01, 02, 03), making them illegible.

**Solution**:
- Removed circular bubble overlay from FeaturesSection.tsx
- Kept large decorative numbers visible without obstruction
- Maintained asymmetric layout with numbers alternating left/right

## Component Architecture

### Core Components

1. **Navigation** - Sticky header with glassmorphism
   - Scroll-triggered background change
   - Smooth transitions

2. **HeroSection** - Video background with gradient fallback
   - Multi-format video sources (WebM, MP4, MOV)
   - Always-visible animated gradient base
   - Optimized for all browsers

3. **FeaturesSection** - "Why Zenlit" with decorative numbers
   - Large 120px-140px numbers (01, 02, 03)
   - Asymmetric grid layout (alternating)
   - No bubble overlays

4. **HowItWorksSection** - 3-step timeline
   - Vertical timeline connector
   - Glassmorphic cards
   - SVG illustrations

5. **CTASection** - Call-to-action
   - Dual download buttons
   - Social proof elements

6. **Footer** - Multi-column footer
   - Company, legal links
   - Social media icons
   - Disclaimer text

### Reusable UI Components

- **GlassCard**: Glassmorphic card with `'primary' | 'default'` variants
- **NeonButton**: Button with hover effects
- **GlowText**: Text with gradient effects and intensity levels
- **AnimatedNumber**: Counting animations (not currently used in main page)

## Deployment Configuration

### Vercel Setup

**Domain**: `zenlitclaude.vercel.app` (production domain, auto-updates)

**Auto-Deployment**:
- GitHub repo connected: `wesluo/Zenlit-Web-Prototype`
- Production branch: `main`
- Every push to `main` triggers automatic deployment
- Domain alias updates automatically (configured in Vercel dashboard)

**Build Configuration**:
- Build command: `npm run build`
- Output directory: `.next`
- Node version: 18.x
- Environment: Production

### Important: Domain Alias Behavior

**Learned**: Vercel auto-deploys on git push, but custom aliases (`vercel alias`) don't automatically update to new deployments.

**Solution**: Configure the domain as a "Production Domain" in Vercel dashboard (Settings → Domains) instead of using CLI aliases. This ensures the domain always points to the latest production deployment.

## Known Issues & Workarounds

### 1. Video File in Git
**Issue**: 6.3MB `.mov` file is tracked in git
**Status**: Acceptable for now, but consider using Git LFS or external hosting for larger projects

### 2. StatsSection Not Used
**Status**: Component exists but not included in main page.tsx
**Action**: Remove if not needed, or integrate into design

### 3. CSS Gradient Text Clipping
**Watch For**: Any italic text with gradient effects may need extra padding
**Solution**: Add `padding-inline-end` and `min-width` as needed

## Build & Development

### Local Development
```bash
npm run dev  # Runs on http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Deployment
```bash
git push origin main  # Auto-deploys to Vercel
```

## File Organization

- **Design docs**: `REDESIGN_PLAN.md`, `SPACING-IMPROVEMENTS.md`
- **Components**: Single-purpose, reusable components
- **Styles**: Tailwind utility classes + custom CSS in `globals.css`
- **Assets**: All in `/public` directory
- **Config**: `next.config.ts` for Next.js optimization

## Performance Optimizations

1. **Video Formats**: WebM (1.4MB) for modern browsers, MP4 (2.9MB) fallback
2. **Caching**: Aggressive caching headers for video files (next.config.ts)
3. **Animations**: CSS-only, GPU-accelerated transforms
4. **Fonts**: Optimized loading via next/font
5. **Images**: SVG icons for small file sizes

## Future Improvements

1. Consider video CDN for large video files
2. Add image optimization for screenshots
3. Implement lazy loading for below-fold sections
4. Add analytics integration
5. Consider removing unused StatsSection component
6. Add E2E tests for critical paths

---

**Last Updated**: November 20, 2024
**Status**: ✅ Production Ready
**Deployment**: ✅ Live at https://zenlitclaude.vercel.app
