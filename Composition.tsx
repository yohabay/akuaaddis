'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const chemicals = [
  { name: 'Sodium', value: '7.0', symbol: 'Na' },
  { name: 'Magnesium', value: '2.4', symbol: 'Mg' },
  { name: 'Potassium', value: '1.0', symbol: 'K' },
  { name: 'Chloride', value: '3.5', symbol: 'Cl' },
  { name: 'Fluoride', value: '0.7', symbol: 'F' },
  { name: 'pH', value: '7.2', symbol: 'pH' },
]

export default function Composition() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif">Chemical Composition</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {chemicals.map((chemical, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-900 font-semibold">{chemical.symbol}</span>
                </div>
                <p className="text-sm text-gray-600">{chemical.name}</p>
                <p className="text-lg font-semibold text-blue-900">{chemical.value}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg"
              alt="Water Bottle"
              width={300}
              height={600}
              className="mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

