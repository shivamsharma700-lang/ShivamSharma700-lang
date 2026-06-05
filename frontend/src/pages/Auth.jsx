import { useState } from 'react';
import { Smartphone, UserRound } from 'lucide-react';

export default function Auth() {
  const [phone, setPhone] = useState('');

  return (
    <main className="container-x grid min-h-[72vh] place-items-center py-12">
      <form className="card w-full max-w-md p-8" onSubmit={(event) => event.preventDefault()}>
        <div className="grid size-16 place-items-center rounded-3xl bg-emerald-50 text-[#0c831f]"><UserRound size={30} /></div>
        <h1 className="mt-6 text-4xl font-black tracking-tight">Login to BlinkMart</h1>
        <p className="mt-3 font-medium text-slate-600">Use OTP login for customers, riders and store admins.</p>
        <label className="mt-8 block text-sm font-black text-slate-700">Mobile number</label>
        <div className="mt-2 flex items-center gap-3 input-pill">
          <Smartphone size={18} className="text-[#0c831f]" />
          <span className="font-bold">+91</span>
          <input className="w-full bg-transparent outline-none" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="98765 43210" />
        </div>
        <button className="btn-primary mt-6 w-full">Send OTP</button>
        <button type="button" className="btn-secondary mt-3 w-full">Continue as demo user</button>
      </form>
    </main>
  );
}
