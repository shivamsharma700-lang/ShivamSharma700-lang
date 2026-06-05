export const categories = [
  { name: 'Fruits & Veg', emoji: '🥬', tone: 'bg-emerald-50 text-emerald-800', items: '210+ items' },
  { name: 'Dairy & Bread', emoji: '🥛', tone: 'bg-amber-50 text-amber-800', items: '95+ items' },
  { name: 'Snacks', emoji: '🍿', tone: 'bg-orange-50 text-orange-800', items: '180+ items' },
  { name: 'Cold Drinks', emoji: '🥤', tone: 'bg-sky-50 text-sky-800', items: '75+ items' },
  { name: 'Instant Food', emoji: '🍜', tone: 'bg-rose-50 text-rose-800', items: '120+ items' },
  { name: 'Home Care', emoji: '🧽', tone: 'bg-violet-50 text-violet-800', items: '160+ items' },
  { name: 'Personal Care', emoji: '🧴', tone: 'bg-pink-50 text-pink-800', items: '140+ items' },
  { name: 'Baby Care', emoji: '🧸', tone: 'bg-yellow-50 text-yellow-800', items: '80+ items' },
];

export const products = [
  { id: 1, slug: 'farm-fresh-banana', name: 'Farm Fresh Banana', category: 'Fruits & Veg', price: 48, compareAtPrice: 64, unit: '6 pieces', eta: '8 min', rating: 4.8, imageUrls: ['https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=900&auto=format&fit=crop'] },
  { id: 2, slug: 'amul-toned-milk', name: 'Amul Toned Milk', category: 'Dairy & Bread', price: 28, compareAtPrice: 32, unit: '500 ml', eta: '7 min', rating: 4.9, imageUrls: ['https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=900&auto=format&fit=crop'] },
  { id: 3, slug: 'britannia-whole-wheat-bread', name: 'Whole Wheat Bread', category: 'Dairy & Bread', price: 55, compareAtPrice: 65, unit: '400 g', eta: '9 min', rating: 4.7, imageUrls: ['https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop'] },
  { id: 4, slug: 'lays-classic-salted', name: 'Lay’s Classic Salted', category: 'Snacks', price: 20, compareAtPrice: 25, unit: '52 g', eta: '8 min', rating: 4.6, imageUrls: ['https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=900&auto=format&fit=crop'] },
  { id: 5, slug: 'coca-cola-zero-sugar', name: 'Coca-Cola Zero Sugar', category: 'Cold Drinks', price: 40, compareAtPrice: 45, unit: '750 ml', eta: '10 min', rating: 4.8, imageUrls: ['https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=900&auto=format&fit=crop'] },
  { id: 6, slug: 'maggi-2-minute-noodles', name: 'Maggi 2-Minute Noodles', category: 'Instant Food', price: 56, compareAtPrice: 60, unit: '280 g', eta: '7 min', rating: 4.9, imageUrls: ['https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=900&auto=format&fit=crop'] },
  { id: 7, slug: 'surf-excel-liquid', name: 'Surf Excel Liquid Detergent', category: 'Home Care', price: 225, compareAtPrice: 260, unit: '1 l', eta: '11 min', rating: 4.7, imageUrls: ['https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=900&auto=format&fit=crop'] },
  { id: 8, slug: 'dove-fresh-soap-pack', name: 'Dove Fresh Soap Pack', category: 'Personal Care', price: 168, compareAtPrice: 190, unit: '3 x 100 g', eta: '9 min', rating: 4.8, imageUrls: ['https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=900&auto=format&fit=crop'] },
  { id: 9, slug: 'diaper-pants-medium', name: 'Soft Diaper Pants M', category: 'Baby Care', price: 399, compareAtPrice: 449, unit: '34 count', eta: '12 min', rating: 4.6, imageUrls: ['https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=900&auto=format&fit=crop'] },
  { id: 10, slug: 'organic-tomato-pack', name: 'Organic Tomato Pack', category: 'Fruits & Veg', price: 39, compareAtPrice: 52, unit: '500 g', eta: '8 min', rating: 4.5, imageUrls: ['https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=900&auto=format&fit=crop'] },
  { id: 11, slug: 'greek-yogurt-cup', name: 'Greek Yogurt Cup', category: 'Dairy & Bread', price: 79, compareAtPrice: 95, unit: '100 g', eta: '8 min', rating: 4.7, imageUrls: ['https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=900&auto=format&fit=crop'] },
  { id: 12, slug: 'premium-almonds', name: 'Premium California Almonds', category: 'Snacks', price: 299, compareAtPrice: 349, unit: '200 g', eta: '10 min', rating: 4.9, imageUrls: ['https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=900&auto=format&fit=crop'] },
];

export const cartItems = [products[1], products[2], products[5]].map((product, index) => ({
  ...product,
  quantity: [2, 1, 3][index],
}));

export const findProduct = (slug) => products.find((product) => product.slug === slug) || products[0];
