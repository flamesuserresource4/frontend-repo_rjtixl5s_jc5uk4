import { ShoppingCart, Coffee, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ onCartOpen }) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 font-semibold text-slate-900">
            <Coffee className="w-6 h-6 text-amber-600" />
            <span>Coffee&Sons</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#menu" className="hover:text-slate-900 transition-colors">Menu</a>
            <a href="#story" className="hover:text-slate-900 transition-colors">Our Story</a>
            <a href="#visit" className="hover:text-slate-900 transition-colors">Visit</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onCartOpen}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-slate-100">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
