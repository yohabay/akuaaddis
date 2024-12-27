'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Manufacturing() {
  return (
    <section className="relative py-32 bg-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg"
          alt="Manufacturing Facility"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-serif mb-6">For a Golden Life.</h2>
          <p className="text-lg text-blue-100">
            Our state-of-the-art manufacturing facility ensures the highest quality standards in every drop. 
            With advanced technology and rigorous quality control, we deliver pure, refreshing water that 
            enhances your daily life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

