import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built by family since 2004</h2>
          <p className="mt-3 text-slate-700">
            Coffee&Sons started as a tiny bar with a big dream: brew coffee that sparks conversation. Today, we still roast small batches, source seasonally, and welcome everyone like family.
          </p>
          <p className="mt-2 text-slate-700">
            From seasonal pour-overs to decadent mochas, we craft each cup with care and a smile.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
