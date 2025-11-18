import { motion } from 'framer-motion'

function Card({ item, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="h-44 bg-slate-100 overflow-hidden">
        <img src={item.image || 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1974&auto=format&fit=crop'} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-slate-900">{item.name}</h3>
          <span className="font-semibold text-amber-700">${item.price?.toFixed?.(2) ?? item.price}</span>
        </div>
        <p className="text-sm text-slate-600 mt-1 line-clamp-2">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function FeaturedMenu({ featured }) {
  return (
    <section id="menu" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">House Favorites</h2>
            <p className="text-slate-600">Handpicked by our baristas</p>
          </div>
          <a href="#full-menu" className="text-amber-700 font-medium hover:underline">See full menu</a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured?.length ? (
            featured.map((item, i) => <Card key={item._id || i} item={item} delay={i * 0.05} />)
          ) : (
            [
              { name: 'Espresso', price: 3.0, description: 'Rich and velvety single shot.' },
              { name: 'Cappuccino', price: 4.5, description: 'Silky foam and bold espresso.' },
              { name: 'Cold Brew', price: 4.0, description: 'Slow-steeped and super smooth.' },
            ].map((item, i) => <Card key={i} item={item} delay={i * 0.05} />)
          )}
        </div>
      </div>
    </section>
  )
}
