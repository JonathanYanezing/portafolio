'use client';

import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Star, Heart, Search, User, LogIn, UserPlus, X, CheckCircle, Package, Truck, Shield, CreditCard, HeadphonesIcon, Menu, ChevronDown, Filter, Grid, List } from 'lucide-react';

const products = [
  { 
    id: 1, 
    name: 'MacBook Pro 16" M3 Max', 
    price: 3299, 
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    rating: 5,
    reviews: 1247,
    badge: 'Nuevo',
    inStock: true,
    category: 'Computadoras',
    specs: 'Chip M3 Max, 36GB RAM, 1TB SSD',
    description: 'La MacBook Pro más potente jamás creada. Rendimiento profesional para los más exigentes.',
  },
  { 
    id: 2, 
    name: 'iPhone 15 Pro Max 1TB', 
    price: 1499, 
    originalPrice: 1699,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80',
    rating: 5,
    reviews: 892,
    badge: 'Popular',
    inStock: true,
    category: 'Smartphones',
    specs: 'Titanio, Cámara 48MP, A17 Pro',
    description: 'El iPhone más avanzado con tecnología de titanio y cámara profesional.',
  },
  { 
    id: 3, 
    name: 'Sony WH-1000XM5', 
    price: 399, 
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    rating: 5,
    reviews: 2156,
    badge: 'Oferta',
    inStock: true,
    category: 'Audio',
    specs: 'Cancelación de ruido, 30h batería',
    description: 'Auriculares premium con cancelación de ruido líder en la industria.',
  },
  { 
    id: 4, 
    name: 'Samsung QLED 85" 4K', 
    price: 2499, 
    originalPrice: 3299,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    rating: 4,
    reviews: 456,
    badge: 'Destacado',
    inStock: true,
    category: 'Televisores',
    specs: 'QLED, HDR10+, Smart TV',
    description: 'Experiencia cinematográfica en casa con tecnología QLED de última generación.',
  },
  { 
    id: 5, 
    name: 'Apple Watch Ultra 2', 
    price: 799, 
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    rating: 5,
    reviews: 678,
    badge: 'Mejor Venta',
    inStock: true,
    category: 'Wearables',
    specs: 'Titanio, GPS, Resistente agua',
    description: 'El reloj inteligente más resistente y avanzado para aventureros.',
  },
  { 
    id: 6, 
    name: 'iPad Pro 12.9" M2', 
    price: 1299, 
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    rating: 5,
    reviews: 934,
    badge: 'Exclusivo',
    inStock: true,
    category: 'Tablets',
    specs: 'Chip M2, 256GB, Pantalla Liquid Retina',
    description: 'Tablet profesional con potencia de computadora y pantalla espectacular.',
  },
];

export default function EcommerceDemo() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<{name: string, email: string} | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const addToCart = (id: number) => {
    if (!user) {
      setShowAuth(true);
      setIsLogin(false);
      return;
    }
    if (!cartItems.includes(id)) {
      setCartItems([...cartItems, id]);
      setCartCount(prev => prev + 1);
    }
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      setUser({ name: authForm.email.split('@')[0], email: authForm.email });
    } else {
      setUser({ name: authForm.name || authForm.email.split('@')[0], email: authForm.email });
    }
    setShowAuth(false);
    setAuthForm({ name: '', email: '', password: '' });
  };

  const categories = ['Todos', 'Computadoras', 'Smartphones', 'Audio', 'Televisores', 'Wearables', 'Tablets'];
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'Todos' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header Profesional */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link 
                href="/portfolio" 
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-semibold px-3 py-2 rounded-lg transition-colors hover:bg-gray-50"
              >
                <ArrowLeft size={18} />
                <span className="hidden sm:inline text-sm">Volver</span>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900">TechStore</div>
                  <div className="text-xs text-gray-500">Tu tienda de tecnología</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 flex-1 max-w-2xl mx-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..." 
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-600 focus:outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="hidden md:flex items-center space-x-2 text-gray-700">
                    <User size={20} />
                    <span className="font-semibold">{user.name}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setUser(null);
                      setCartItems([]);
                      setCartCount(0);
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-semibold transition-colors"
                  >
                    Salir
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => {setIsLogin(true); setShowAuth(true);}}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg"
                  >
                    <span className="hidden sm:inline">Iniciar Sesión</span>
                    <LogIn className="w-5 h-5 sm:hidden" />
                  </button>
                  <button 
                    onClick={() => {setIsLogin(false); setShowAuth(true);}}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg"
                  >
                    <span className="hidden sm:inline">Registrarse</span>
                    <UserPlus className="w-5 h-5 sm:hidden" />
                  </button>
                </div>
              )}
              
              <button className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg flex items-center space-x-2">
                <ShoppingCart size={20} />
                <span className="hidden sm:inline">Carrito</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-6 px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
            <Package className="w-5 h-5" />
            <span className="font-semibold">Tienda Online Profesional</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Tecnología al Mejor Precio
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto">
            Más de 2,500 productos disponibles. Envío gratis en compras mayores a $100. 
            <span className="font-bold text-white"> Garantía de satisfacción.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105">
              Ver Catálogo Completo
            </button>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
              Ofertas Especiales
            </button>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Truck className="w-10 h-10 text-green-600 mb-2" />
              <div className="font-black text-gray-900 text-sm">Envío Gratis</div>
              <div className="text-xs text-gray-600">Compras +$100</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-10 h-10 text-green-600 mb-2" />
              <div className="font-black text-gray-900 text-sm">Garantía</div>
              <div className="text-xs text-gray-600">30 días</div>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="w-10 h-10 text-green-600 mb-2" />
              <div className="font-black text-gray-900 text-sm">Pago Seguro</div>
              <div className="text-xs text-gray-600">Múltiples métodos</div>
            </div>
            <div className="flex flex-col items-center">
              <HeadphonesIcon className="w-10 h-10 text-green-600 mb-2" />
              <div className="font-black text-gray-900 text-sm">Soporte 24/7</div>
              <div className="text-xs text-gray-600">Siempre disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat === 'Todos' ? null : cat)}
                  className={`px-5 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    (!selectedCategory && cat === 'Todos') || selectedCategory === cat
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Productos Destacados
            </h2>
            <p className="text-gray-600">Selección de nuestros productos más populares</p>
          </div>
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className={`bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-green-300 hover:shadow-2xl transition-all ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative ${viewMode === 'list' ? 'w-80 h-80 flex-shrink-0' : 'h-80'} bg-gray-100 overflow-hidden`}>
                  <SafeImage 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fallback="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-black text-white ${
                      product.badge === 'Nuevo' ? 'bg-green-500' :
                      product.badge === 'Popular' ? 'bg-blue-500' :
                      product.badge === 'Oferta' ? 'bg-red-500' :
                      product.badge === 'Destacado' ? 'bg-yellow-500' :
                      product.badge === 'Mejor Venta' ? 'bg-purple-500' :
                      'bg-gray-900'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 bg-white p-3 rounded-full hover:bg-gray-50 transition-colors shadow-lg"
                  >
                    <Heart 
                      size={20} 
                      className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'} 
                    />
                  </button>
                </div>

                <div className={`p-8 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="text-xs text-green-600 font-bold mb-2">{product.category}</div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900">{product.name}</h3>
                  {viewMode === 'list' && (
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  )}
                  <p className="text-gray-600 mb-4 text-sm">{product.specs}</p>
                  
                  <div className="flex items-center mb-4 space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 font-semibold">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-black text-green-600">${product.price.toLocaleString()}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">${product.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-xl text-sm font-black">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </div>

                  {product.inStock && (
                    <div className="flex items-center space-x-2 mb-6 text-green-600">
                      <CheckCircle size={18} />
                      <span className="font-bold">En Stock - Envío Inmediato</span>
                    </div>
                  )}

                  <button 
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-black text-lg transition-all shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart size={22} />
                    <span>Agregar al Carrito</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div>
              <div className="text-5xl font-black mb-2">$450K+</div>
              <div className="text-green-100 font-semibold">Ventas Mensuales</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">12,500+</div>
              <div className="text-green-100 font-semibold">Clientes Activos</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">2,500+</div>
              <div className="text-green-100 font-semibold">Productos</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">4.9/5</div>
              <div className="text-green-100 font-semibold">Calificación</div>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowAuth(false)}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-gray-900">
                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
              </h2>
              <button onClick={() => setShowAuth(false)} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAuth} className="space-y-5">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    value={authForm.name}
                    onChange={(e) => setAuthForm({...authForm, name: e.target.value})}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-600 focus:outline-none transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={authForm.email}
                  onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-600 focus:outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Contraseña</label>
                <input 
                  type="password" 
                  required
                  minLength={6}
                  value={authForm.password}
                  onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-600 focus:outline-none transition-all"
                  placeholder="Mínimo 6 caracteres"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-black text-lg transition-all shadow-xl transform hover:scale-105"
              >
                {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-green-600 hover:text-green-700 font-bold"
              >
                {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
