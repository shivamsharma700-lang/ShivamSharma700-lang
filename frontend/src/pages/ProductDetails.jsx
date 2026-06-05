import { Clock, Minus, Plus, ShieldCheck, Star, Truck } from 'lucide-react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { findProduct, products } from '../data/catalog';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = findProduct(slug);
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <main className="container-x py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_.9fr]">
        <div className="card overflow-hidden bg-gradient-to-br from-white to-emerald-50 p-6">
          <img className="h-[560px] w-full rounded-[2rem] object-cover" src={product.imageUrls[0]} alt={product.name} />
        </div>
        <section className="lg:sticky lg:top-28 h-max">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#0c831f]">{product.category}</p>
          <h1 className="mt-4 text-5xl font-black capitalize tracking-tight">{product.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-bold text-slate-600">
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[#0c831f]"><Clock size={16} /> {product.eta}</span>
            <span className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-amber-700"><Star size={16} fill="currentColor" /> {product.rating}</span>
            <span>{product.unit}</span>
          </div>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-sm font-bold text-slate-500">MRP inclusive of all taxes</p>
            <div className="mt-2 flex items-end gap-3">
              <b className="text-4xl">₹{product.price}</b>
              <span className="text-xl font-bold text-slate-400 line-through">₹{product.compareAtPrice}</span>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-3">
              <div className="flex items-center gap-3">
                <button className="grid size-10 place-items-center rounded-xl bg-white shadow-sm"><Minus size={16} /></button>
                <b>1</b>
                <button className="grid size-10 place-items-center rounded-xl bg-white shadow-sm"><Plus size={16} /></button>
              </div>
              <button className="btn-primary flex-1">Add to cart</button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="soft-panel p-5"><Truck className="text-[#0c831f]" /><b className="mt-3 block">Fast doorstep delivery</b><p className="text-sm text-slate-500">Dark-store picking optimized for minutes.</p></div>
            <div className="soft-panel p-5"><ShieldCheck className="text-[#0c831f]" /><b className="mt-3 block">Quality checked</b><p className="text-sm text-slate-500">Packed safely with freshness controls.</p></div>
          </div>
        </section>
      </div>
      {related.length > 0 && (
        <section className="py-16">
          <h2 className="text-3xl font-black">More from {product.category}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div>
        </section>
      )}
    </main>
  );
}
