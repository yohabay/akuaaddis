'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-16">Key Customers</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {[1, 2, 3, 4, 5].map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-16"
            >
              <Image
                src="/placeholder.svg"
                alt={`Partner ${partner}`}
                fill
                className="object-contain mx-auto grayscale hover:grayscale-0 transition-all"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

