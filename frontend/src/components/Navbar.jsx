import { MapPin, Menu, Search, ShoppingCart, UserRound, Zap } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Offers', to: '/categories' },
  { label: 'Admin', to: '/admin' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="container-x flex min-h-20 flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 text-3xl font-black tracking-tight text-[#0c831f]">
            <span className="grid size-10 place-items-center rounded-2xl bg-[#f7cb46] text-slate-950"><Zap size={22} fill="currentColor" /></span>
            BlinkMart
          </Link>
          <Menu className="lg:hidden" />
        </div>

        <div className="flex flex-1 flex-col gap-3 lg:max-w-3xl lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
            <MapPin size={18} className="text-[#0c831f]" />
            Deliver to Sector 62, Noida · 8 min
          </div>
          <label className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500 focus-within:border-[#0c831f] focus-within:bg-white">
            <Search size={19} />
            <input className="w-full bg-transparent text-sm outline-none" placeholder="Search milk, atta, chips, cold drinks..." />
          </label>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'text-[#0c831f]' : 'hover:text-[#0c831f]'}>{item.label}</NavLink>
          ))}
          <Link to="/auth" className="flex items-center gap-2 hover:text-[#0c831f]"><UserRound size={18} /> Login</Link>
          <Link to="/cart" className="btn-primary gap-2 px-5 py-2.5"><ShoppingCart size={18} /> Cart</Link>
        </nav>
      </div>
    </header>
  );
}
