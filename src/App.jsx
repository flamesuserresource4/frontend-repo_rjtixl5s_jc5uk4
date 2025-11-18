import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedMenu from './components/FeaturedMenu'
import Story from './components/Story'
import Footer from './components/Footer'

function App() {
  const [featured, setFeatured] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${baseUrl}/api/menu`).then(r => r.json()).then(data => {
      setFeatured(data.featured)
    }).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <FeaturedMenu featured={featured} />
        <Story />
      </main>
      <Footer />
    </div>
  )
}

export default App
