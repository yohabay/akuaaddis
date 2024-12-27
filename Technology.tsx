'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = [
  { 
    name: 'Advanced Filtration System', 
    image: 'https://z-p3-scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/468331396_1121483613316065_1590933442677040313_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHjCwN1WeFC7rmzdHvsRszTOIQCtWYwpOo4hAK1ZjCk6mmvZ235iwuxuhYaK5vqkDsfZ7glzTYoct05cqGR644K&_nc_ohc=xDs0lFZO_IAQ7kNvgGM55W0&_nc_zt=23&_nc_ht=z-p3-scontent.fadd1-1.fna&_nc_gid=A403kWG8h46nJl8gNWZrHhL&oh=00_AYCE-iDkstYZR40EOND10pJsQ1uU8G7CGg3uOgNPnNRI9w&oe=67740DBB', 
    description: 'Multi-stage filtration process ensuring the highest level of water purity' 
  },
  { 
    name: 'High-Speed Bottling Line', 
    image: '/placeholder.svg', 
    description: 'Automated, high-capacity bottling system for maximum efficiency and hygiene' 
  },
  { 
    name: 'Quality Control Laboratory', 
    image: '/placeholder.svg', 
    description: 'State-of-the-art testing facility for continuous quality assurance and product safety' 
  },
  { 
    name: 'Eco-Friendly Production', 
    image: '/placeholder.svg', 
    description: 'Sustainable energy systems and waste reduction technologies for environmentally conscious manufacturing' 
  },
]

export default function Technology() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Cutting-Edge Factory Technology
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={tech.image}
                alt={tech.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">{tech.name}</h3>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

