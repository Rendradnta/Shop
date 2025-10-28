import { motion } from 'framer-motion'
import { Zap, Shield, Clock } from 'lucide-react'

const Hero = () => {
  const features = [
    { icon: Zap, text: 'CPU Stabil & Performa Tinggi' },
    { icon: Shield, text: 'Instalasi Panel Lengkap' },
    { icon: Clock, text: 'Garansi 30 Hari' }
  ]

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Layanan Hosting Terlengkap
            <span className="block text-blue-500 mt-2">Resa Store</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Solusi hosting profesional dengan VPS performa tinggi, bot WhatsApp RPG, dan Pterodactyl NodeJS. CPU stabil, instalasi lengkap, garansi 30 hari.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 glass px-6 py-3 rounded-lg"
              >
                <feature.icon className="text-blue-500" size={24} />
                <span className="text-gray-200 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            href="#pricing"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg px-10 py-4 rounded-lg transition-all duration-200 font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
          >
            Lihat Paket Harga
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
