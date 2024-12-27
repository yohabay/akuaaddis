'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote: "akuaAddis water has a crisp, clean taste that's unmatched. It's become an essential part of my daily hydration routine.",
    author: "Abebe M., Fitness Enthusiast",
    image: "/placeholder.svg"
  },
  {
    quote: "As a chef, the quality of water I use is crucial. akuaAddis enhances the flavors in my dishes without any unwanted taste.",
    author: "Tigist W., Professional Chef",
    image: "/placeholder.svg"
  },
  {
    quote: "I appreciate akuaAddis's commitment to sustainability. It's refreshing to enjoy water that's not only pure but also environmentally responsible.",
    author: "Kidist G., Environmental Activist",
    image: "/placeholder.svg"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-900 mb-12"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <p className="font-semibold text-blue-900">{testimonial.author}</p>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

