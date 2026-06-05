export default function StaticPage({ title }) {
  return (
    <main className="container-x py-16">
      <div className="card p-8 md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#0c831f]">BlinkMart</p>
        <h1 className="mt-3 text-5xl font-black tracking-tight">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-slate-600">
          This page is ready for production content, SEO copy, policy text and API-backed data for the quick-commerce experience.
        </p>
      </div>
    </main>
  );
}
