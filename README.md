# Zenlit Landing Page Redesign

A modern, elegant landing page redesign for Zenlit featuring a clean minimal aesthetic with purple/gold accents. This production-ready site showcases glassmorphic design, optimized video backgrounds, and sophisticated animations while maintaining exceptional performance.

**Live Demo**: https://zenlitclaude.vercel.app

## ✨ Design Philosophy

### Aesthetic Direction: **Modern Minimal Elegance**

**Key Features**: Clean design with strategic neon accents, optimized video hero background, and refined typography for professional appeal.

**Core Characteristics**:
- Dark theme with purple (#8B5CF6) and gold (#d4a574) accents
- Glassmorphic UI elements with subtle shadows
- Optimized video backgrounds with gradient fallbacks
- Smooth, performance-focused animations

## 🎨 Design System

### Color Palette
- **Primary Purple** (#8B5CF6) - Main brand color for CTAs and accents
- **Accent Gold** (#d4a574) - Secondary accent for luxury touch
- **Neon Lime** (#d4ff00) - Accent color from mobile app
- **Neon Cyan** (#00ffc8) - Accent color from mobile app
- **Neon Orange** (#ff8c42) - Accent color from mobile app
- **Dark Backgrounds** - Deep blacks and grays for elegant contrast

### Typography
- **Display**: Playfair Display (Editorial elegance)
- **Body**: DM Sans (Modern readability)

## 🏗️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router with Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Pure CSS with custom keyframes
- **Deployment**: Vercel (auto-deploy from GitHub)
- **Video**: Optimized MP4/WebM formats for hero background

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
zenlit-redesign/
├── app/
│   ├── globals.css          # Theme system & animations
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Main landing page composition
├── components/
│   ├── Navigation.tsx        # Sticky navigation with glassmorphism
│   ├── HeroSection.tsx       # Hero with optimized video background
│   ├── FeaturesSection.tsx   # "Why Zenlit" features with decorative numbers
│   ├── HowItWorksSection.tsx # 3-step timeline with cards
│   ├── CTASection.tsx        # Call-to-action section
│   ├── Footer.tsx            # Footer with links and social
│   ├── GlassCard.tsx         # Reusable glassmorphic card component
│   ├── NeonButton.tsx        # Button with hover effects
│   ├── GlowText.tsx          # Text with gradient effects
│   ├── AnimatedNumber.tsx    # Counting number animations
│   └── StatsSection.tsx      # Statistics display component
├── public/
│   ├── zenlit-hero-video.mp4    # Optimized hero video (2.9MB)
│   ├── zenlit-hero-video.webm   # WebM format (1.4MB)
│   ├── images/                  # SVG illustrations
│   └── Zenlit logo.png          # Brand logo
├── REDESIGN_PLAN.md         # Original redesign specifications
└── SPACING-IMPROVEMENTS.md  # Documentation of spacing fixes
```

## 🎯 Key Features

### Performance
- CSS-only animations (minimal JS)
- Intersection Observer for scroll animations
- Optimized font loading
- ~2-5KB additional CSS bundle

### Responsive Design
- Mobile-first approach
- Fluid typography
- Touch-optimized interactions
- Breakpoints: sm (640px), md (768px), lg (1024px)

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- WCAG AA compliant contrast

## 🎨 Customization

### Component Variants

```tsx
// Buttons
<NeonButton variant="lime" size="lg" pulse>
  Button Text
</NeonButton>

// Cards
<GlassCard variant="cyan" hover>
  Card Content
</GlassCard>

// Text
<GlowText variant="orange" intensity="high" pulse>
  Glowing Text
</GlowText>
```

### Theme Colors

Edit `app/globals.css`:
```css
:root {
  --neon-lime: #d4ff00;
  --neon-cyan: #00ffc8;
  /* Customize colors here */
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

## 🚢 Deployment

### Vercel (Recommended)

This project is configured for automatic deployment:

1. **Push to GitHub**: `git push origin main`
2. **Auto-Deploy**: Vercel automatically builds and deploys
3. **Production URL**: https://zenlitclaude.vercel.app

**Configuration**:
- Connected to GitHub repo: `wesluo/Zenlit-Web-Prototype`
- Production branch: `main`
- Auto-deployments enabled
- Domain alias automatically updates

### Manual Deployment

```bash
vercel deploy --prod
```

## 📊 Performance Targets

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🙏 Credits

- Original: https://zenlitapp.vercel.app
- Fonts: Orbitron, Inter (Google Fonts)
- Built with: Next.js, Tailwind CSS, TypeScript

---

**Built with the frontend-design skill**
*Distinctive. Production-grade. Unforgettable.*
