import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Features from './components/Features'
import Guarantee from './components/Guarantee'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen">
        <Navbar />
        <Hero />
        <Pricing />
        <Features />
        <Guarantee />
        <Footer />
      </div>
    </Router>
  )
}

export default App