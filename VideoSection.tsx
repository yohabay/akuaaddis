'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'

export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Water Service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <button 
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                aria-label="Play video"
              >
                <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-serif mb-6">Helping To Improve</h2>
            <p className="text-gray-600 text-lg">
              We are proud to contribute significantly and directly to improving the health and wellness of our community. Our commitment to quality and service has made us a trusted name in the industry, serving thousands of satisfied customers daily.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

