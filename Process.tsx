'use client'

import { motion } from 'framer-motion'
import { Droplet, Filter, Package, Truck } from 'lucide-react'

const steps = [
  { icon: Droplet, title: 'Water Collection', description: 'We source our water from pristine Ethiopian highland springs.' },
  { icon: Filter, title: 'Purification', description: 'Our advanced filtration system ensures the highest level of purity.' },
  { icon: Package, title: 'Bottling', description: 'Automated bottling process maintains hygiene and efficiency.' },
  { icon: Truck, title: 'Distribution', description: 'Our products are carefully transported to maintain freshness.' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Our Factory Process
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-blue-200"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

