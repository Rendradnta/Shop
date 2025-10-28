import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Fitur', href: '#features' },
    { name: 'Paket Harga', href: '#pricing' },
    { name: 'Kontak', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://raw.githubusercontent.com/Rendradnta/BoboiboyDB/main/database/77f244731a4c83b0.png"
              alt="Resa Host Logo"
              className="h-10 w-auto object-contain"
              style={{ aspectRatio: '16/9' }}
            />
            <a href="#" className="font-heading text-2xl font-bold text-white">
              Resa <span className="text-blue-500">Hosting</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              Order Sekarang
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-300 hover:text-white"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-slate-800/50"
        >
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-blue-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium text-center"
            >
              Order Sekarang
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar