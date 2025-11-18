export default function Footer(){
  return (
    <footer id="visit" className="py-12 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-slate-900">Coffee&Sons</h4>
          <p className="text-slate-600 text-sm mt-2">123 Market Street, Springfield</p>
          <p className="text-slate-600 text-sm">Open daily 7am — 6pm</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Stay in the loop</h4>
          <form className="mt-2 flex gap-2">
            <input placeholder="Your email" className="flex-1 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            <button className="px-4 py-2 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700">Join</button>
          </form>
        </div>
        <div className="text-sm text-slate-500 md:text-right">
          © {new Date().getFullYear()} Coffee&Sons. Crafted with love.
        </div>
      </div>
    </footer>
  )
}
