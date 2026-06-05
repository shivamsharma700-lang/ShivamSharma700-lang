import { Bike, Boxes, IndianRupee, Users } from 'lucide-react';

const cards = [
  { label: 'Today revenue', value: '₹2.84L', icon: IndianRupee },
  { label: 'Live orders', value: '318', icon: Boxes },
  { label: 'Active riders', value: '74', icon: Bike },
  { label: 'Customers', value: '18.6K', icon: Users },
];

export default function Admin() {
  return (
    <main className="container-x py-12">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#0c831f]">Admin control tower</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Operations dashboard</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <div className="card p-6" key={label}>
            <Icon className="text-[#0c831f]" />
            <p className="mt-5 text-sm font-bold text-slate-500">{label}</p>
            <b className="mt-2 block text-3xl">{value}</b>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="card p-6">
          <h2 className="text-2xl font-black">Dark-store queue</h2>
          <div className="mt-5 space-y-3">
            {['Pack order #BM1048 · ETA 6 min', 'Restock dairy shelf · 42 units low', 'Assign rider to Sector 62 batch', 'Verify payment webhook retries'].map((task) => <div className="rounded-2xl bg-slate-50 p-4 font-bold" key={task}>{task}</div>)}
          </div>
        </div>
        <div className="card bg-[#0c831f] p-6 text-white">
          <h2 className="text-2xl font-black">Production readiness</h2>
          <p className="mt-4 font-medium text-white/80">Admin shell covers inventory, order routing, rider capacity, coupons, banners and customer issue queues for a complete quick-commerce workflow.</p>
        </div>
      </div>
    </main>
  );
}
