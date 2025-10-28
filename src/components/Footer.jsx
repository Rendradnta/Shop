import { MessageCircle, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Resa <span className="text-blue-500">Hosting</span>
            </h3>
            <p className="text-gray-400">
              Solusi hosting Pterodactyl NodeJS terpercaya dengan performa tinggi dan dukungan lengkap.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-400 hover:text-blue-500 transition-colors">
                Fitur
              </a>
              <a href="#pricing" className="block text-gray-400 hover:text-blue-500 transition-colors">
                Paket Harga
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-500 transition-colors">
                Kontak
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">
              Hubungi Kami
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6285117070328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="https://t.me/Rnzzyy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Send size={20} />
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Resa Hosting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer