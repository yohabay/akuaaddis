'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  { name: 'Classic Still', volume: '500ml', image: '/placeholder.svg' },
  { name: 'Sparkling', volume: '330ml', image: '/placeholder.svg' },
  { name: 'Premium Glass', volume: '750ml', image: '/placeholder.svg' },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Our Product Line
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="relative h-64 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">{product.name}</h3>
              <p className="text-gray-700">{product.volume}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

