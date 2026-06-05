import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/catalog';

export default function Shop() {
  return (
    <main className="container-x py-12">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#0c831f]">BlinkMart store</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Instant grocery catalog</h1>
          <p className="mt-3 max-w-2xl font-medium text-slate-600">Fresh essentials, daily staples and household needs with delivery-time badges and high-converting add buttons.</p>
        </div>
        <select className="input-pill font-bold">
          <option>Sort by fastest delivery</option>
          <option>Price low to high</option>
          <option>Best discount</option>
        </select>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="card h-max p-6 lg:sticky lg:top-28">
          <h3 className="text-xl font-black">Filters</h3>
          <div className="mt-5 space-y-3">
            {categories.map((category) => (
              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-100 p-3 font-bold hover:border-[#0c831f]" key={category.name}>
                <span>{category.emoji} {category.name}</span>
                <input type="checkbox" className="accent-[#0c831f]" />
              </label>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-[#f7cb46]/30 p-4 text-sm font-bold text-slate-700">
            Free delivery unlocked on orders above ₹199.
          </div>
        </aside>

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </section>
      </div>
    </main>
  );
}
