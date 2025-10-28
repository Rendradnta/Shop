import { motion } from 'framer-motion'
import { Film, Image, Code, Package, Gauge, Server, Globe, Shield, Zap, HardDrive } from 'lucide-react'

const Features = () => {
  const panelFeatures = [
    {
      icon: Film,
      name: 'FFMPEG',
      desc: 'Video & audio processing'
    },
    {
      icon: Image,
      name: 'IMAGEMAGICK',
      desc: 'Image manipulation'
    },
    {
      icon: Code,
      name: 'PYTHON3',
      desc: 'Python runtime support'
    },
    {
      icon: Package,
      name: 'NPM',
      desc: 'Node package manager'
    },
    {
      icon: Gauge,
      name: 'SPEEDTEST',
      desc: 'Network speed testing'
    }
  ]

  const vpsFeatures = [
    {
      icon: Server,
      name: 'High Performance',
      desc: 'CPU stabil dengan core dedicated'
    },
    {
      icon: Globe,
      name: 'Multi-Region',
      desc: '6 lokasi server global'
    },
    {
      icon: Shield,
      name: 'Full Guarantee',
      desc: 'Garansi 1 bulan unlimited replace'
    },
    {
      icon: Zap,
      name: 'NVMe Storage',
      desc: 'Storage super cepat'
    },
    {
      icon: HardDrive,
      name: 'IPv4 Dedicated',
      desc: 'IP address eksklusif'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Fitur & Keunggulan
          </h2>
          <p className="text-xl text-gray-400">
            Panel siap pakai dan VPS performa tinggi
          </p>
        </motion.div>

        {/* Panel Features */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-white text-center mb-8">
            🖥️ Panel Pterodactyl Siap Pakai
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {panelFeatures.map((feature, idx) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-500" size={32} />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VPS Features */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-white text-center mb-8">
            💻 Keunggulan VPS Hosting
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {vpsFeatures.map((feature, idx) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-500" size={32} />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features