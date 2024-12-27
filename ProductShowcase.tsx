'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  { name: 'Classic Still', image: '/placeholder.svg' },
  { name: 'Sparkling', image: '/placeholder.svg' },
  { name: 'Flavored Infusions', image: '/placeholder.svg' },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Product Line</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={300}
                className="mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

