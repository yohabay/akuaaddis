'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-blue-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://z-p3-scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/470689354_1136424151822011_4239181490967969812_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHFcbLqTpzY3jg6CvvdudovbymvrJzQc4hvKa-snNBziNQNF_IcBoYrCajsTxvTICirzW7Pz-ZJL0pM4PZ03RKS&_nc_ohc=4WSF-YIlkzIQ7kNvgF5B6Ji&_nc_zt=23&_nc_ht=z-p3-scontent.fadd1-1.fna&_nc_gid=A0bjrrkgl8Lw3mM569ruja-&oh=00_AYBgf7MvZ_265sjzaiKoDy2ReeaaNXtZ7xIKoDQChglpGQ&oe=67742706"
          alt="akuaAddis Water Factory"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            akuaAddis Water Factory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            State-of-the-art water production facility in the heart of Ethiopian Highlands
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            Explore Our Factory
          </motion.button>
        </div>
      </div>
    </section>
  )
}

