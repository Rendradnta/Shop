import { motion } from 'framer-motion'
import { Shield, MessageCircle, Send } from 'lucide-react'

const Guarantee = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Masa Aktif',
      value: '30 Hari',
      desc: 'Hosting aktif penuh'
    },
    {
      icon: Shield,
      title: 'Garansi Penuh',
      value: '30 Hari',
      desc: 'Jaminan kepuasan'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Garansi & Kontak
          </h2>
          <p className="text-xl text-gray-400">
            Kami siap membantu Anda 24/7
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          {guarantees.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-xl p-8 text-center"
            >
              <div className="bg-blue-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-blue-500" size={40} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {item.value}
              </div>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/628xxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-all duration-200 font-bold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={24} />
            Chat via WhatsApp
          </a>
          <a
            href="https://t.me/xxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-200 font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 w-full sm:w-auto justify-center"
          >
            <Send size={24} />
            Chat via Telegram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Guarantee