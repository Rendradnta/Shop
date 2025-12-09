import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Bot, Crown, Calculator, Server, Globe, Shield } from 'lucide-react'

const Pricing = () => {
  const [mainCategory, setMainCategory] = useState('hosting')
  const [category, setCategory] = useState('standard')
  const [vpsCategory, setVpsCategory] = useState('low')

  // RPG Bot States
  const [botForm, setBotForm] = useState({
    linkGroup: '',
    durasi: '',
    maxMember: '50'
  })
  const [premiumForm, setPremiumForm] = useState({
    durasi: ''
  })

  const categories = [
    { id: 'lite', name: 'Lite 💡', desc: 'Untuk project kecil' },
    { id: 'standard', name: 'Standar 📦', desc: 'Paling populer' },
    { id: 'premium', name: 'Premium 🌟', desc: 'Performa maksimal' }
  ]

  const vpsCategories = [
    { id: 'low', name: 'Low 💡', desc: 'Entry level dengan promo' },
    { id: 'medium', name: 'Medium 📦', desc: 'Balanced performance' },
    { id: 'performance', name: 'Performance 🚀', desc: 'Maximum power' }
  ]

  const plans = {
    lite: [
      {
        name: 'Lite V1',
        ram: '1.5GB',
        disk: '2.5GB',
        cpu: '65%',
        price: 3000,
        features: ['CPU Stabil 65%', 'RAM 1.5GB', 'Disk 2.5GB', 'Garansi 30 Hari']
      },
      {
        name: 'Lite V2',
        ram: '2GB',
        disk: '2.5GB',
        cpu: '70%',
        price: 6000,
        features: ['CPU Stabil 70%', 'RAM 2GB', 'Disk 2.5GB', 'Garansi 30 Hari']
      }
    ],
    standard: [
      {
        name: 'Standar V1',
        ram: '3.5GB',
        disk: '4GB',
        cpu: '90%',
        price: 10000,
        features: ['CPU Stabil 90%', 'RAM 3.5GB', 'Disk 4GB', 'Garansi 30 Hari']
      },
      {
        name: 'Standar V2',
        ram: '4.5GB',
        disk: '4.5GB',
        cpu: '125%',
        price: 12000,
        popular: true,
        features: ['CPU Stabil 125%', 'RAM 4.5GB', 'Disk 4.5GB', 'Garansi 30 Hari']
      }
    ],
    premium: [
      {
        name: 'Premium V1',
        ram: '5GB',
        disk: '6.5GB',
        cpu: '170%',
        price: 15000,
        features: ['CPU Stabil 170%', 'RAM 5GB', 'Disk 6.5GB', 'Garansi 30 Hari']
      },
      {
        name: 'Premium V2',
        ram: '6GB',
        disk: '10GB',
        cpu: 'Unlimited',
        price: 20000,
        features: ['CPU Unlimited', 'RAM 6GB', 'Disk 10GB', 'Garansi 30 Hari']
      }
    ]
  }

  const vpsPlans = {
    low: [
      {
        name: 'Mini VPS',
        core: '2 Core 2.5Ghz',
        ram: '4GB',
        storage: '25GB',
        originalPrice: 40000,
        price: 20000,
        promo: true,
        features: [
          '2 Core CPU @ 2.5GHz',
          '4GB RAM DDR4',
          '25GB NVMe Storage',
          'Ubuntu 18.04/20/24 atau Debian 11',
          'Region: SG, AUS, US, JP, IND, HK',
          'FREE Pterodactyl Setup',
          'IPv4 Dedicated',
          'Garansi 1 Bulan (Unlimited Replace)'
        ]
      },
      {
        name: 'Lite VPS',
        core: '4 Core',
        ram: '4GB',
        storage: '25GB',
        originalPrice: 60000,
        price: 40000,
        promo: true,
        features: [
          '4 Core CPU',
          '4GB RAM DDR4',
          '25GB NVMe Storage',
          'Ubuntu 18.04/20/24 atau Debian 11',
          'Region: SG, AUS, US, JP, IND, HK',
          'FREE Pterodactyl Setup',
          'IPv4 Dedicated',
          'Garansi 1 Bulan (Unlimited Replace)'
        ]
      }
    ],
    medium: [
      {
        name: 'West VPS',
        core: '4 Core',
        ram: '8GB',
        storage: '100GB',
        price: 100000,
        features: [
          '4 Core CPU',
          '8GB RAM DDR4',
          '100GB NVMe Storage',
          'Ubuntu 18.04/20/24 atau Debian 11',
          'Region: SG, AUS, US, JP, IND, HK',
          'FREE Pterodactyl Setup',
          'IPv4 Dedicated',
          'Garansi 1 Bulan (Unlimited Replace)'
        ]
      },
      {
        name: 'North VPS',
        core: '8 Core',
        ram: '16GB',
        storage: '100GB',
        price: 150000,
        popular: true,
        features: [
          '8 Core CPU',
          '16GB RAM DDR4',
          '100GB NVMe Storage',
          'Ubuntu 18.04/20/24 atau Debian 11',
          'Region: SG, AUS, US, JP, IND, HK',
          'FREE Pterodactyl Setup',
          'IPv4 Dedicated',
          'Garansi 1 Bulan (Unlimited Replace)'
        ]
      }
    ],
    performance: [
      {
        name: 'Kominfo VPS',
        core: '16 Core',
        ram: '32GB',
        storage: '250GB',
        price: 200000,
        features: [
          '16 Core CPU',
          '32GB RAM DDR4',
          '250GB NVMe Storage',
          'Ubuntu 18.04/20/24 atau Debian 11',
          'Region: SG, AUS, US, JP, IND, HK',
          'FREE Pterodactyl Setup',
          'IPv4 Dedicated',
          'Priority Support'
        ]
      }
    ]
  }

  // Calculate Bot Rental Price
  const calculateBotPrice = () => {
    const hari = parseInt(botForm.durasi) || 0
    const maxmember = parseInt(botForm.maxMember) || 50
    const hargaPerHari = maxmember === 50 ? 230 : (maxmember === 150 ? 450 : 600)
    return hargaPerHari * hari
  }

  // Calculate Premium Role Price
  const calculatePremiumPrice = () => {
    const hari = parseInt(premiumForm.durasi) || 0
    return 100 * hari
  }

  // Validate and redirect for Bot Rental
  const handleBotOrder = () => {
    if (!botForm.linkGroup || !botForm.durasi || !botForm.maxMember) {
      alert('Mohon lengkapi semua field!')
      return
    }
    if (!/^https?:\/\/.+/.test(botForm.linkGroup)) {
      alert('Link group harus berupa URL yang valid!')
      return
    }
    const message = `.sewa ${botForm.linkGroup} ${botForm.maxMember} ${botForm.durasi}`
    window.open(`https://wa.me/6285691421353?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Validate and redirect for Premium Role
  const handlePremiumOrder = () => {
    if (!premiumForm.durasi) {
      alert('Mohon masukkan durasi!')
      return
    }
    const message = `.buyprem ${premiumForm.durasi}`
    window.open(`https://wa.me/6285691421353?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Paket Harga
          </h2>
          <p className="text-xl text-gray-400">
            Pilih layanan yang sesuai dengan kebutuhan Anda
          </p>
        </motion.div>

        {/* Main Category Toggle */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setMainCategory('hosting')}
            className={`px-8 py-4 rounded-lg font-bold transition-all duration-200 ${
              mainCategory === 'hosting'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'glass text-gray-300 hover:text-white'
            }`}
          >
            <div className="text-xl">🖥️ Hosting NodeJS</div>
            <div className="text-sm opacity-80">Pterodactyl Panel</div>
          </button>
          <button
            onClick={() => setMainCategory('vps')}
            className={`px-8 py-4 rounded-lg font-bold transition-all duration-200 ${
              mainCategory === 'vps'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'glass text-gray-300 hover:text-white'
            }`}
          >
            <div className="text-xl">💻 VPS Hosting</div>
            <div className="text-sm opacity-80">High Performance</div>
          </button>
          <button
            onClick={() => setMainCategory('rpg')}
            className={`px-8 py-4 rounded-lg font-bold transition-all duration-200 ${
              mainCategory === 'rpg'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'glass text-gray-300 hover:text-white'
            }`}
          >
            <div className="text-xl">🎮 WhatsApp RPG Bot</div>
            <div className="text-sm opacity-80">Sewa & Premium</div>
          </button>
        </div>

        {/* Hosting Plans */}
        {mainCategory === 'hosting' && (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    category === cat.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'glass text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="text-lg">{cat.name}</div>
                  <div className="text-sm opacity-80">{cat.desc}</div>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {plans[category].map((plan, idx) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative glass rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 ${
                    plan.popular ? 'border-2 border-blue-500 shadow-xl shadow-blue-500/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star size={16} fill="currentColor" />
                        Paling Populer
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-blue-500">
                        Rp{plan.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-gray-400">/30 Hari</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="text-blue-500 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    Order Sekarang
                  </a>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* VPS Plans */}
        {mainCategory === 'vps' && (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {vpsCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setVpsCategory(cat.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    vpsCategory === cat.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'glass text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="text-lg">{cat.name}</div>
                  <div className="text-sm opacity-80">{cat.desc}</div>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {vpsPlans[vpsCategory].map((plan, idx) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative glass rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 ${
                    plan.popular ? 'border-2 border-blue-500 shadow-xl shadow-blue-500/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star size={16} fill="currentColor" />
                        Paling Populer
                      </div>
                    </div>
                  )}

                  {plan.promo && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        PROMO 50%
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Server className="text-blue-500" size={28} />
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-400">CPU</div>
                        <div className="text-lg font-bold text-blue-400">{plan.core}</div>
                      </div>
                      <div className="h-8 w-px bg-slate-700" />
                      <div className="text-center">
                        <div className="text-sm text-gray-400">RAM</div>
                        <div className="text-lg font-bold text-blue-400">{plan.ram}</div>
                      </div>
                      <div className="h-8 w-px bg-slate-700" />
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Storage</div>
                        <div className="text-lg font-bold text-blue-400">{plan.storage}</div>
                      </div>
                    </div>

                    <div className="flex items-baseline justify-center gap-2">
                      {plan.promo && (
                        <span className="text-xl text-gray-500 line-through">
                          Rp{plan.originalPrice.toLocaleString('id-ID')}
                        </span>
                      )}
                      <span className="text-4xl font-bold text-blue-500">
                        Rp{plan.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-gray-400">/Bulan</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    Order Sekarang
                  </a>
                </motion.div>
              ))}
            </div>

            {/* VPS Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 glass rounded-xl p-8 max-w-5xl mx-auto"
            >
              <h3 className="font-heading text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
                <Shield className="text-blue-500" size={28} />
                Keunggulan VPS Resa Hosting
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="text-blue-500" size={32} />
                  </div>
                  <h4 className="font-bold text-white mb-2">Multi-Region</h4>
                  <p className="text-sm text-gray-400">Pilih lokasi server: Singapore, Australia, US, Japan, India, Hong Kong</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Server className="text-blue-500" size={32} />
                  </div>
                  <h4 className="font-bold text-white mb-2">FREE Pterodactyl</h4>
                  <p className="text-sm text-gray-400">Instalasi panel Pterodactyl gratis untuk semua paket VPS</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="text-blue-500" size={32} />
                  </div>
                  <h4 className="font-bold text-white mb-2">Garansi Penuh</h4>
                  <p className="text-sm text-gray-400">1 bulan garansi dengan unlimited replace untuk tier Low & Medium</p>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {/* RPG Bot Services */}
        {mainCategory === 'rpg' && (
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Sewa Bot WhatsApp RPG */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Bot className="text-blue-500" size={32} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Sewa Bot WhatsApp RPG
                  </h3>
                  <p className="text-gray-400 text-sm">Rental bot untuk grup Anda</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Link Group WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="https://chat.whatsapp.com/..."
                    value={botForm.linkGroup}
                    onChange={(e) => setBotForm({ ...botForm, linkGroup: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Durasi (Hari)
                  </label>
                  <input
                    type="number"
                    placeholder="30"
                    min="1"
                    value={botForm.durasi}
                    onChange={(e) => setBotForm({ ...botForm, durasi: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Maksimal Member
                  </label>
                  <select
                    value={botForm.maxMember}
                    onChange={(e) => setBotForm({ ...botForm, maxMember: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="50">50 Member (Rp230/hari)</option>
                    <option value="150">150 Member (Rp450/hari)</option>
                    <option value="200">200+ Member (Rp600/hari)</option>
                  </select>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calculator className="text-blue-500" size={20} />
                    <span className="text-gray-300 font-medium">Total Harga:</span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-500">
                      Rp{calculateBotPrice().toLocaleString('id-ID')}
                    </div>
                    {botForm.durasi && (
                      <div className="text-sm text-gray-400">
                        {botForm.durasi} hari × Rp{(parseInt(botForm.maxMember) === 50 ? 230 : (parseInt(botForm.maxMember) === 150 ? 450 : 600)).toLocaleString('id-ID')}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handleBotOrder}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <Bot size={20} />
                Order via WhatsApp
              </button>
            </motion.div>

            {/* Buy Premium Role */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <Crown className="text-yellow-500" size={32} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Buy Premium Role
                  </h3>
                  <p className="text-gray-400 text-sm">Akses fitur premium bot</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Durasi (Hari)
                  </label>
                  <input
                    type="number"
                    placeholder="30"
                    min="1"
                    value={premiumForm.durasi}
                    onChange={(e) => setPremiumForm({ ...premiumForm, durasi: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-yellow-500" size={18} />
                    <span className="text-yellow-500 font-bold">Harga Spesial</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Hanya <span className="font-bold text-yellow-500">Rp100 per hari</span> untuk akses penuh fitur premium bot RPG!
                  </p>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calculator className="text-yellow-500" size={20} />
                    <span className="text-gray-300 font-medium">Total Harga:</span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-yellow-500">
                      Rp{calculatePremiumPrice().toLocaleString('id-ID')}
                    </div>
                    {premiumForm.durasi && (
                      <div className="text-sm text-gray-400">
                        {premiumForm.durasi} hari × Rp100
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handlePremiumOrder}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 rounded-lg transition-all duration-200 shadow-lg shadow-yellow-500/30 flex items-center justify-center gap-2"
              >
                <Crown size={20} />
                Order via WhatsApp
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Pricing
