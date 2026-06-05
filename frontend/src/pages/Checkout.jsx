import { CreditCard, MapPinned, ShieldCheck } from 'lucide-react';
import { cartItems } from '../data/catalog';

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default function Checkout() {
  return (
    <main className="container-x py-12">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#0c831f]">Secure checkout</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Confirm your quick delivery</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <section className="space-y-6 lg:col-span-2">
          <div className="card p-6">
            <div className="flex items-center gap-3"><MapPinned className="text-[#0c831f]" /><h2 className="text-2xl font-black">Delivery address</h2></div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input className="input-pill" placeholder="House / flat number" />
              <input className="input-pill" placeholder="Street / tower" />
              <input className="input-pill md:col-span-2" placeholder="Landmark and delivery instructions" />
            </div>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-3"><CreditCard className="text-[#0c831f]" /><h2 className="text-2xl font-black">Payment method</h2></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {['UPI', 'Cards', 'Cash on delivery'].map((method) => <button className="rounded-2xl border border-slate-200 p-4 text-left font-black hover:border-[#0c831f] hover:text-[#0c831f]" key={method}>{method}</button>)}
            </div>
          </div>
        </section>
        <aside className="card h-max p-6 lg:sticky lg:top-28">
          <div className="flex items-center gap-3"><ShieldCheck className="text-[#0c831f]" /><h2 className="text-2xl font-black">Order review</h2></div>
          <div className="mt-6 space-y-3">
            {cartItems.map((item) => <div className="flex justify-between text-sm font-semibold" key={item.id}><span>{item.quantity} × {item.name}</span><b>₹{item.price * item.quantity}</b></div>)}
          </div>
          <div className="mt-6 flex justify-between border-t border-slate-200 pt-5 text-xl font-black"><span>Total</span><span>₹{subtotal + 9}</span></div>
          <button className="btn-primary mt-6 w-full">Place order</button>
          <p className="mt-4 text-center text-xs font-semibold text-slate-500">Payments, inventory reservations and fraud checks are wired for secure backend APIs.</p>
        </aside>
      </div>
    </main>
  );
}
