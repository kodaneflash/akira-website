# Animation Libraries Setup Guide

This project is configured with three powerful animation libraries: **GSAP with ScrollTrigger**, **Framer Motion**, and **Tailwind CSS v4 custom animations**.

## 🚀 Installed Libraries

### 1. GSAP with ScrollTrigger Plugin
- **Version**: 3.13.0
- **Purpose**: High-performance JavaScript animations with scroll-triggered effects
- **Documentation**: [GSAP Docs](https://gsap.com/docs/v3/)

### 2. Framer Motion
- **Version**: 12.23.12
- **Purpose**: React animation library with declarative API
- **Documentation**: [Framer Motion Docs](https://www.framer.com/motion/)

### 3. Tailwind CSS v4 Custom Animations
- **Purpose**: CSS-based animations with utility classes
- **Configuration**: Located in `app/globals.css`

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Tailwind v4 + Custom animations
│   └── page.tsx            # Main page with AnimationDemo
├── lib/
│   ├── animations.ts       # GSAP utilities and helpers
│   └── framer-variants.ts  # Framer Motion animation variants
├── components/
│   └── AnimationDemo.tsx   # Comprehensive demo component
└── package.json            # Dependencies
```

## 🎨 Available Animation Types

### Tailwind CSS Animations (CSS-based)
- `animate-fade-in` / `animate-fade-out`
- `animate-slide-in-up` / `animate-slide-in-down` / `animate-slide-in-left` / `animate-slide-in-right`
- `animate-scale-in` / `animate-scale-out`
- `animate-rotate-in`
- `animate-bounce-in`
- `animate-pulse-slow`
- `animate-float`
- `animate-glow`
- `animate-shimmer`
- `animate-typewriter`
- `animate-gradient`

### Animation Utilities
- **Delays**: `animate-delay-100` through `animate-delay-1000`
- **Durations**: `animate-duration-75` through `animate-duration-1000`
- **Scroll utilities**: `scroll-animate` class for scroll-triggered animations

### GSAP Animations (JavaScript-based)
```typescript
import { gsapAnimations } from '@/lib/animations'

// Basic animations
gsapAnimations.fadeIn('.element')
gsapAnimations.slideInUp('.element')
gsapAnimations.scaleIn('.element')

// Scroll-triggered animations
gsapAnimations.scrollReveal('.element', {
  start: 'top 80%',
  end: 'bottom 20%'
})

// Parallax effects
gsapAnimations.parallax('.element', 0.5)
```

### Framer Motion Variants (React-based)
```tsx
import { motion } from 'framer-motion'
import { fadeInVariants, slideUpVariants } from '@/lib/framer-variants'

<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
>
  Content
</motion.div>
```

## 🛠️ Usage Examples

### 1. Simple Tailwind Animation
```tsx
<div className="animate-fade-in animate-delay-200">
  This fades in after 200ms delay
</div>
```

### 2. GSAP ScrollTrigger
```tsx
import { useEffect, useRef } from 'react'
import { gsapAnimations } from '@/lib/animations'

function Component() {
  const ref = useRef(null)
  
  useEffect(() => {
    gsapAnimations.scrollReveal(ref.current)
  }, [])
  
  return <div ref={ref}>Animated content</div>
}
```

### 3. Framer Motion with Variants
```tsx
import { motion } from 'framer-motion'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/framer-variants'

<motion.div
  initial="hidden"
  animate="visible"
  variants={staggerContainerVariants}
>
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## 🎯 Key Features

### GSAP Features
- ✅ ScrollTrigger plugin registered
- ✅ Utility functions for common animations
- ✅ Parallax effects
- ✅ Batch animations for multiple elements
- ✅ Timeline creation helpers
- ✅ Responsive animation support

### Framer Motion Features
- ✅ Pre-defined animation variants
- ✅ Stagger animations
- ✅ Page transition variants
- ✅ Interactive hover/tap states
- ✅ Modal/overlay animations
- ✅ Navigation animations

### Tailwind CSS Features
- ✅ Custom keyframes defined
- ✅ Utility classes for quick animations
- ✅ Animation delays and durations
- ✅ Reduced motion support
- ✅ Dark mode compatible
- ✅ Responsive animation controls

## 🚦 Getting Started

1. **View the demo**: Start the development server and visit the homepage
   ```bash
   bun run dev
   ```

2. **Use in your components**: Import the utilities you need
   ```tsx
   // For GSAP
   import { gsapAnimations } from '@/lib/animations'
   
   // For Framer Motion
   import { fadeInVariants } from '@/lib/framer-variants'
   
   // For Tailwind (just use classes)
   <div className="animate-slide-in-up">Content</div>
   ```

3. **Customize**: Modify the variants and utilities in the `lib/` directory

## 🎨 Customization

### Adding New Tailwind Animations
1. Add keyframes and animation variables to the `@theme` block in `app/globals.css`
2. Optionally add utility classes outside the `@theme` block for convenience

### Adding New GSAP Animations
1. Extend the `gsapAnimations` object in `lib/animations.ts`
2. Follow the existing pattern for consistency

### Adding New Framer Motion Variants
1. Add new variants to `lib/framer-variants.ts`
2. Export them for use in components

## 📱 Accessibility

- ✅ Respects `prefers-reduced-motion` setting
- ✅ All animations can be disabled for accessibility
- ✅ Semantic HTML maintained during animations
- ✅ Focus management preserved

## 🔧 Performance Considerations

- GSAP animations are hardware-accelerated
- Framer Motion uses the Web Animations API when possible
- CSS animations are optimized by the browser
- ScrollTrigger efficiently manages scroll listeners
- Animations are cleaned up properly to prevent memory leaks

## 🐛 Troubleshooting

### Common Issues
1. **GSAP not working**: Ensure `'use client'` directive is present in components using GSAP
2. **ScrollTrigger not triggering**: Call `ScrollTrigger.refresh()` after dynamic content changes
3. **Framer Motion variants not animating**: Check that initial/animate props are set correctly

### Performance Tips
- Use `will-change: transform` for elements that will be animated
- Prefer `transform` and `opacity` for animations
- Use `gsap.set()` for immediate property changes
- Batch DOM reads and writes when possible

## 📚 Additional Resources

- [GSAP Learning Center](https://gsap.com/learning/)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)
- [Tailwind CSS Animation Docs](https://tailwindcss.com/docs/animation)
- [Web Animation Performance](https://web.dev/animations/)

---

Happy animating! 🎉
