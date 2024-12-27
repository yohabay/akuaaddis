'use client'

import { motion } from 'framer-motion'
import { Factory, FlaskRound, Truck, Recycle } from 'lucide-react'

const features = [
  {
    icon: Factory,
    title: 'Advanced Production Facility',
    description: 'Our modern factory utilizes cutting-edge technology to ensure the highest quality water production.'
  },
  {
    icon: FlaskRound,
    title: 'On-Site Quality Control Lab',
    description: 'Our state-of-the-art laboratory conducts continuous testing to maintain unparalleled water purity.'
  },
  {
    icon: Truck,
    title: 'Efficient Distribution Network',
    description: 'Our fleet ensures timely delivery of fresh akuaAddis water across Ethiopia.'
  },
  {
    icon: Recycle,
    title: 'Sustainable Manufacturing',
    description: 'We implement eco-friendly practices throughout our production process to minimize environmental impact.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Our Factory Highlights
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

