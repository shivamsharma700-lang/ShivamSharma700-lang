import { Clock, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const discount = product.compareAtPrice ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100) : 0;

  return (
    <article className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-emerald-50 p-5">
          {discount > 0 && <span className="absolute left-4 top-4 rounded-full bg-[#0c831f] px-3 py-1 text-xs font-black text-white">{discount}% OFF</span>}
          <img className="h-full w-full rounded-3xl object-cover transition duration-500 group-hover:scale-105" src={product.imageUrls?.[0]} alt={product.name} />
        </div>
      </Link>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span className="flex items-center gap-1"><Clock size={14} /> {product.eta}</span>
          <span className="flex items-center gap-1 text-amber-600"><Star size={14} fill="currentColor" /> {product.rating}</span>
        </div>
        <Link to={`/products/${product.slug}`} className="block min-h-12 font-extrabold leading-snug hover:text-[#0c831f]">{product.name}</Link>
        <p className="text-sm font-semibold text-slate-500">{product.unit}</p>
        <div className="flex items-center justify-between gap-3">
          <div>
            <b>₹{product.price}</b>
            {product.compareAtPrice && <span className="ml-2 text-sm text-slate-400 line-through">₹{product.compareAtPrice}</span>}
          </div>
          <button className="rounded-xl border border-[#0c831f] bg-emerald-50 px-4 py-2 text-sm font-black text-[#0c831f] transition hover:bg-[#0c831f] hover:text-white">
            <Plus size={16} className="inline" /> ADD
          </button>
        </div>
      </div>
    </article>
  );
}
