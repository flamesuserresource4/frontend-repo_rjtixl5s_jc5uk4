import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white" />
      <div className="absolute -top-40 -right-40 w-[540px] h-[540px] rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[540px] h-[540px] rounded-full bg-rose-200/40 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Crafted coffee. Family warmth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="mt-4 text-lg md:text-xl text-slate-700"
          >
            Welcome to Coffee&Sons — a neighborhood space for slow mornings and lively afternoons. Sip something special.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#menu" className="px-5 py-3 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors">Explore Menu</a>
            <a href="#visit" className="px-5 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">Visit Us</a>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
