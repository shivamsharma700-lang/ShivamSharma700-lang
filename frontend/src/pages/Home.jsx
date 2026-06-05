import { ArrowRight, BadgePercent, Bike, ShieldCheck, Sparkles, Timer } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/catalog';

const heroStats = [
  { label: 'Average delivery', value: '8 min', icon: Timer },
  { label: 'Daily essentials', value: '5,000+', icon: Sparkles },
  { label: 'Freshness checks', value: '100%', icon: ShieldCheck },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-[#fff7c2] via-[#f0ffd8] to-white">
        <div className="container-x grid min-h-[680px] items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#0c831f] shadow-sm">
              <Bike size={18} /> India’s quick-commerce style grocery experience
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-7xl">
              Groceries delivered before your chai gets cold.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600">
              BlinkMart is a production-ready Blinkit-inspired storefront with rapid delivery UX, category discovery, cart, checkout, admin insights and polished responsive screens.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary gap-2" href="/shop">Start shopping <ArrowRight size={18} /></a>
              <a className="btn-secondary" href="#categories">Browse categories</a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map(({ label, value, icon: Icon }) => (
                <div className="soft-panel p-5" key={label}>
                  <Icon className="text-[#0c831f]" />
                  <b className="mt-3 block text-2xl">{value}</b>
                  <span className="text-sm font-semibold text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-24 -top-16 size-72 rounded-full bg-[#f7cb46]/40 blur-3xl" />
            <div className="relative rounded-[3rem] bg-white p-5 shadow-2xl shadow-emerald-900/10">
              <img className="h-[520px] w-full rounded-[2.25rem] object-cover" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop" alt="Fresh grocery delivery basket" />
              <div className="absolute bottom-10 left-10 right-10 rounded-[2rem] bg-white/95 p-5 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-[#0c831f]">Live delivery promise</p>
                    <h2 className="mt-1 text-2xl font-black">Arrives in 7–12 minutes</h2>
                  </div>
                  <span className="rounded-2xl bg-[#f7cb46] p-4"><BadgePercent /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="container-x py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#0c831f]">Shop by aisle</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Everything you need, sorted fast</h2>
          </div>
          <a className="btn-secondary" href="/shop">View all products</a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a href={`/shop?category=${encodeURIComponent(category.name)}`} className={`rounded-[2rem] p-6 transition hover:-translate-y-1 hover:shadow-xl ${category.tone}`} key={category.name}>
              <span className="text-4xl">{category.emoji}</span>
              <h3 className="mt-5 text-xl font-black">{category.name}</h3>
              <p className="mt-1 text-sm font-bold opacity-70">{category.items} · delivered in minutes</p>
            </a>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="rounded-[2.5rem] bg-[#0c831f] p-6 text-white md:p-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f7cb46]">Top deals</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight">Fresh offers for tonight</h2>
            </div>
            <span className="rounded-full bg-white/15 px-5 py-3 font-black">Up to 30% off</span>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
    </>
  );
}
