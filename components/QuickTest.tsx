'use client'

import { motion } from 'framer-motion'

export default function QuickTest() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">Animation Test</h1>
        
        {/* Tailwind CSS Animations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tailwind CSS Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg animate-fade-in">
              <h3 className="font-semibold">Fade In</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">CSS fade animation</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg animate-slide-in-up animate-delay-200">
              <h3 className="font-semibold">Slide Up</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">CSS slide animation</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg animate-scale-in animate-delay-500">
              <h3 className="font-semibold">Scale In</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">CSS scale animation</p>
            </div>
          </div>
        </section>

        {/* Framer Motion */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Framer Motion</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-blue-100 dark:bg-blue-900 rounded-lg"
          >
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">Motion Component</h3>
            <p className="text-blue-600 dark:text-blue-300">This animates with Framer Motion</p>
          </motion.div>
        </section>

        {/* Interactive Elements */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Interactive Elements</h2>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold"
            >
              Hover Me
            </motion.button>
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
              CSS Hover
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
