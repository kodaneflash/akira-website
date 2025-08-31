'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsapAnimations, scrollTriggerUtils } from '@/lib/animations'
import {
  fadeInVariants,
  slideUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  cardHoverVariants,
  buttonVariants
} from '@/lib/framer-variants'

export default function AnimationDemo() {
  const gsapRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animations
    if (gsapRef.current) {
      gsapAnimations.fadeIn(gsapRef.current, { delay: 0.5 })
    }

    // ScrollTrigger batch animation for cards
    scrollTriggerUtils.batch('.scroll-card', {
      onEnter: (elements) => gsapAnimations.staggerIn(elements, { stagger: 0.2 }),
      onLeave: (elements) => gsapAnimations.fadeOut(elements),
      onEnterBack: (elements) => gsapAnimations.staggerIn(elements, { stagger: 0.2 })
    })

    // Cleanup function
    return () => {
      scrollTriggerUtils.killAll()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section - Framer Motion */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Animation Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Showcasing GSAP, ScrollTrigger, and Framer Motion
          </p>
        </motion.div>

        {/* GSAP Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">GSAP Animations</h2>
          <div ref={gsapRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Fade In</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Smooth opacity transition powered by GSAP
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Scale Animation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Scale and fade animations with easing
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Stagger Effect</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sequential animations with delay
              </p>
            </div>
          </div>
        </section>

        {/* Framer Motion Section */}
        <section className="mb-24">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Framer Motion Animations
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={staggerItemVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer"
                {...cardHoverVariants}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-2">Card {item}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Interactive card with hover effects
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tailwind CSS Animations */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Tailwind CSS Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-fade-in">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 animate-pulse-slow" />
              <h3 className="font-semibold mb-2">Fade In</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">CSS fade animation</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-slide-in-up animate-delay-200">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 animate-float" />
              <h3 className="font-semibold mb-2">Slide Up</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">CSS slide animation</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-scale-in animate-delay-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 animate-shimmer" />
              <h3 className="font-semibold mb-2">Scale In</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">CSS scale animation</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-rotate-in animate-delay-500">
              <div className="w-12 h-12 bg-red-500 rounded-lg mb-4 animate-glow" />
              <h3 className="font-semibold mb-2">Rotate In</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">CSS rotate animation</p>
            </div>
          </div>
        </section>

        {/* ScrollTrigger Section */}
        <section className="mb-24" ref={scrollRef}>
          <h2 className="text-3xl font-bold text-center mb-12">ScrollTrigger Animations</h2>
          <div className="space-y-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="scroll-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex items-center space-x-6"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scroll Item {item}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    This element animates when it enters the viewport using ScrollTrigger.
                    Scroll up and down to see the enter/leave animations.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Buttons */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Interactive Elements</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg"
            >
              Framer Motion Button
            </motion.button>
            
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
              CSS Hover Button
            </button>
            
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg animate-pulse-slow">
              CSS Animated Button
            </button>
          </div>
        </section>

        {/* Typewriter Effect */}
        <section className="mt-24 text-center">
          <div className="animate-typewriter text-2xl font-mono text-gray-800 dark:text-gray-200 mx-auto max-w-fit">
            This text appears with a typewriter effect...
          </div>
        </section>

        {/* Gradient Animation */}
        <section className="mt-16 text-center">
          <div className="animate-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white p-8 rounded-xl mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Animated Gradient Background</h3>
            <p>This background gradient animates continuously using CSS animations.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
