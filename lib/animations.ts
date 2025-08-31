'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// GSAP Animation Utilities
export const gsapAnimations = {
  // Fade animations
  fadeIn: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.6, ease: 'power2.out', ...options }
    )
  },

  fadeOut: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.to(element, { 
      opacity: 0, 
      duration: 0.4, 
      ease: 'power2.in', 
      ...options 
    })
  },

  // Slide animations
  slideInUp: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', ...options }
    )
  },

  slideInDown: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', ...options }
    )
  },

  slideInLeft: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', ...options }
    )
  },

  slideInRight: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', ...options }
    )
  },

  // Scale animations
  scaleIn: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', ...options }
    )
  },

  scaleOut: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.to(element, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: 'back.in(1.7)',
      ...options
    })
  },

  // Rotation animations
  rotateIn: (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      { rotation: -180, scale: 0.8, opacity: 0 },
      { rotation: 0, scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', ...options }
    )
  },

  // Stagger animations for multiple elements
  staggerIn: (elements: string | Element[], options?: gsap.TweenVars & { stagger?: number }) => {
    const { stagger = 0.1, ...tweenOptions } = options || {}
    return gsap.fromTo(elements,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger,
        ...tweenOptions 
      }
    )
  },

  // Parallax effect
  parallax: (element: string | Element, speed: number = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  },

  // Reveal animation with ScrollTrigger
  scrollReveal: (element: string | Element, options?: gsap.TweenVars & { 
    trigger?: string | Element,
    start?: string,
    end?: string
  }) => {
    const { trigger, start = 'top 80%', end, ...tweenOptions } = options || {}
    
    return gsap.fromTo(element,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: trigger || element,
          start,
          end,
          toggleActions: 'play none none reverse'
        },
        ...tweenOptions
      }
    )
  },

  // Pin element during scroll
  pinElement: (element: string | Element, options?: ScrollTrigger.StaticVars) => {
    return ScrollTrigger.create({
      trigger: element,
      pin: true,
      start: 'top top',
      end: 'bottom top',
      ...options
    })
  },

  // Horizontal scroll
  horizontalScroll: (container: string | Element, items: string | Element[], options?: ScrollTrigger.StaticVars) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (gsap.utils.toArray(items).length - 1),
        start: 'top top',
        end: () => `+=${(gsap.utils.toArray(items).length - 1) * window.innerWidth}`,
        ...options
      }
    })

    tl.to(items, {
      xPercent: -100 * (gsap.utils.toArray(items).length - 1),
      ease: 'none'
    })

    return tl
  }
}

// ScrollTrigger utilities
export const scrollTriggerUtils = {
  // Batch animations for multiple elements
  batch: (elements: string, options?: ScrollTrigger.BatchVars) => {
    return ScrollTrigger.batch(elements, {
      onEnter: (elements) => gsapAnimations.staggerIn(elements, { stagger: 0.15 }),
      onLeave: (elements) => gsap.set(elements, { opacity: 0, y: -100 }),
      onEnterBack: (elements) => gsapAnimations.staggerIn(elements, { stagger: 0.15 }),
      onLeaveBack: (elements) => gsap.set(elements, { opacity: 0, y: 100 }),
      ...options
    })
  },

  // Refresh ScrollTrigger (useful after dynamic content changes)
  refresh: () => ScrollTrigger.refresh(),

  // Kill all ScrollTriggers
  killAll: () => ScrollTrigger.killAll(),

  // Create responsive ScrollTriggers
  matchMedia: (queries: Record<string, () => void>) => {
    return gsap.matchMedia().add(queries)
  }
}

// Timeline utilities
export const createTimeline = (options?: gsap.TimelineVars) => {
  return gsap.timeline(options)
}

// Utility to wait for DOM to be ready
export const waitForDOM = (): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve()
      return
    }
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => resolve())
    } else {
      resolve()
    }
  })
}

// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger }
