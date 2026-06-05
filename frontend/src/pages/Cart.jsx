import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { cartItems } from '../data/catalog';

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const handling = 9;
const delivery = subtotal > 199 ? 0 : 25;
const total = subtotal + handling + delivery;

export default function Cart() {
  return (
    <main className="container-x py-12">
      <div className="flex items-center gap-4">
        <span className="grid size-14 place-items-center rounded-2xl bg-[#0c831f] text-white"><ShoppingBag /></span>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#0c831f]">Your basket</p>
          <h1 className="text-5xl font-black tracking-tight">Cart ready in 8 minutes</h1>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <section className="space-y-4">
          {cartItems.map((item) => (
            <article className="card flex flex-col gap-5 p-4 sm:flex-row sm:items-center" key={item.id}>
              <img className="size-28 rounded-3xl object-cover" src={item.imageUrls[0]} alt={item.name} />
              <div className="flex-1">
                <p className="text-xs font-black uppercase tracking-widest text-[#0c831f]">{item.eta} delivery</p>
                <h2 className="mt-1 text-xl font-black">{item.name}</h2>
                <p className="font-semibold text-slate-500">{item.unit}</p>
                <button className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-red-500"><Trash2 size={15} /> Remove</button>
              </div>
              <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-2 text-[#0c831f]">
                  <button className="grid size-8 place-items-center rounded-xl bg-white"><Minus size={14} /></button>
                  <b>{item.quantity}</b>
                  <button className="grid size-8 place-items-center rounded-xl bg-white"><Plus size={14} /></button>
                </div>
                <b className="text-xl">₹{item.price * item.quantity}</b>
              </div>
            </article>
          ))}
        </section>

        <aside className="card h-max p-6 lg:sticky lg:top-28">
          <h2 className="text-2xl font-black">Bill summary</h2>
          <div className="mt-6 space-y-4 text-sm font-semibold text-slate-600">
            <div className="flex justify-between"><span>Items total</span><b className="text-slate-950">₹{subtotal}</b></div>
            <div className="flex justify-between"><span>Delivery fee</span><b className="text-[#0c831f]">{delivery === 0 ? 'FREE' : `₹${delivery}`}</b></div>
            <div className="flex justify-between"><span>Handling charge</span><b className="text-slate-950">₹{handling}</b></div>
          </div>
          <div className="mt-6 rounded-3xl bg-[#f7cb46]/30 p-4 text-sm font-black text-slate-800">You saved ₹74 on this order.</div>
          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 text-xl font-black"><span>To pay</span><span>₹{total}</span></div>
          <a href="/checkout" className="btn-primary mt-6 w-full">Proceed to checkout</a>
        </aside>
      </div>
    </main>
  );
}
