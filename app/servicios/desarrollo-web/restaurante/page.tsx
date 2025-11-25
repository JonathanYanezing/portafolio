'use client';

import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { ArrowLeft, Menu, X, Calendar, Clock, Users, MapPin, Phone, Mail, Star, ChefHat, UtensilsCrossed, Wine, Coffee, CheckCircle, ArrowRight, Plus, Minus, ShoppingCart, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Risotto de Hongos',
    category: 'Platos Principales',
    description: 'Arroz cremoso con hongos porcini, parmesano y trufa',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 2,
    name: 'Salmón a la Parrilla',
    category: 'Platos Principales',
    description: 'Salmón fresco con vegetales asados y salsa de limón',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Tiramisú Casero',
    category: 'Postres',
    description: 'Postre italiano tradicional con café y cacao',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    rating: 5.0,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Ensalada Mediterránea',
    category: 'Entradas',
    description: 'Mezcla de hojas verdes, tomates, aceitunas y queso feta',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1546069901-5c2f34d1c8c5?w=600&q=80',
    rating: 4.7,
    reviews: 94,
  },
  {
    id: 5,
    name: 'Pasta Carbonara',
    category: 'Platos Principales',
    description: 'Pasta fresca con pancetta, huevo y parmesano',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 6,
    name: 'Vino Tinto Reserva',
    category: 'Bebidas',
    description: 'Selección premium de vinos de la región',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    rating: 4.8,
    reviews: 67,
  },
];

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
];

export default function RestauranteDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);
  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: '',
  });
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  const categories = ['Todos', 'Entradas', 'Platos Principales', 'Postres', 'Bebidas'];
  const filteredMenu = menuItems.filter(item => 
    selectedCategory === 'Todos' || item.category === selectedCategory
  );

  const addToCart = (itemId: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === itemId);
      if (existing) {
        return prev.map(item => 
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: itemId, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: number, delta: number) => {
    setCart(prev => {
      const item = prev.find(i => i.id === itemId);
      if (!item) return prev;
      if (item.quantity + delta <= 0) {
        return prev.filter(i => i.id !== itemId);
      }
      return prev.map(i => 
        i.id === itemId ? { ...i, quantity: i.quantity + delta } : i
      );
    });
  };

  const cartTotal = cart.reduce((sum, item) => {
    const menuItem = menuItems.find(m => m.id === item.id);
    return sum + (menuItem?.price || 0) * item.quantity;
  }, 0);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationSubmitted(true);
    setTimeout(() => {
      setShowReservationModal(false);
      setReservationSubmitted(false);
      setReservationForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        specialRequests: '',
      });
      alert('¡Reserva confirmada! Te hemos enviado un email de confirmación.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/portfolio" 
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-semibold px-3 py-2 rounded-lg transition-colors hover:bg-gray-50"
              >
                <ArrowLeft size={18} />
                <span className="hidden sm:inline text-sm">Volver</span>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900">La Cocina Premium</div>
                  <div className="text-xs text-gray-500">Restaurante Italiano</div>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-orange-600 font-semibold transition-colors">Inicio</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 font-semibold transition-colors">Menú</a>
              <a href="#reservas" className="text-gray-700 hover:text-orange-600 font-semibold transition-colors">Reservas</a>
              <a href="#contacto" className="text-gray-700 hover:text-orange-600 font-semibold transition-colors">Contacto</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowReservationModal(true)}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg transform hover:scale-105"
              >
                Reservar Mesa
              </button>
              {cart.length > 0 && (
                <button className="relative bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-colors">
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </button>
              )}
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 space-y-3">
              <a href="#inicio" className="block text-gray-700 hover:text-orange-600 font-semibold py-2">Inicio</a>
              <a href="#menu" className="block text-gray-700 hover:text-orange-600 font-semibold py-2">Menú</a>
              <a href="#reservas" className="block text-gray-700 hover:text-orange-600 font-semibold py-2">Reservas</a>
              <a href="#contacto" className="block text-gray-700 hover:text-orange-600 font-semibold py-2">Contacto</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-32 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-6 px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
            <ChefHat className="w-5 h-5" />
            <span className="font-semibold">Restaurante Italiano Premium</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8">
            La Cocina Premium
          </h1>
          <p className="text-2xl md:text-3xl text-orange-100 mb-12 max-w-3xl mx-auto">
            Sabores auténticos de Italia en el corazón de Quito. 
            <span className="font-bold text-white"> Experiencia gastronómica única.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setShowReservationModal(true)}
              className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105"
            >
              Reservar Mesa Ahora
            </button>
            <a 
              href="#menu"
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
            >
              Ver Menú Completo
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-y border-gray-200 -mt-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="w-8 h-8 text-white" />
                </div>
                <div className="font-black text-2xl text-gray-900 mb-1">4.9/5</div>
                <div className="text-gray-600 font-semibold">Calificación</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="font-black text-2xl text-gray-900 mb-1">2,500+</div>
                <div className="text-gray-600 font-semibold">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="font-black text-2xl text-gray-900 mb-1">5 años</div>
                <div className="text-gray-600 font-semibold">Experiencia</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <div className="font-black text-2xl text-gray-900 mb-1">Premiado</div>
                <div className="text-gray-600 font-semibold">Mejor Restaurante 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Nuestro Menú
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Platos elaborados con ingredientes frescos y de la más alta calidad
            </p>
          </div>

          {/* Categories */}
          <div className="flex items-center justify-center space-x-3 mb-12 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => {
              const cartItem = cart.find(c => c.id === item.id);
              const quantity = cartItem?.quantity || 0;
              
              return (
                <div key={item.id} className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-orange-300 hover:shadow-2xl transition-all">
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <SafeImage 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fallback="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-gray-900">{item.rating}</span>
                        <span className="text-xs text-gray-500">({item.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-orange-600 font-bold mb-2">{item.category}</div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-black text-gray-900">${item.price}</div>
                      {quantity === 0 ? (
                        <button
                          onClick={() => addToCart(item.id)}
                          className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg transform hover:scale-105"
                        >
                          Agregar
                        </button>
                      ) : (
                        <div className="flex items-center space-x-3 bg-gray-100 rounded-xl px-4 py-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-gray-900 w-8 text-center">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservas" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Reserva tu Mesa
              </h2>
              <p className="text-xl text-gray-600">
                Garantiza tu lugar en nuestro restaurante
              </p>
            </div>
            <div className="bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Horarios</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-orange-600" />
                      <div>
                        <div className="font-bold text-gray-900">Almuerzo</div>
                        <div className="text-gray-600">12:00 PM - 3:00 PM</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-orange-600" />
                      <div>
                        <div className="font-bold text-gray-900">Cena</div>
                        <div className="text-gray-600">7:00 PM - 11:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Información</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-orange-600" />
                      <div className="text-gray-700 font-semibold">Av. Amazonas, Quito, Ecuador</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-orange-600" />
                      <div className="text-gray-700 font-semibold">+593 99 123 4567</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6 text-orange-600" />
                      <div className="text-gray-700 font-semibold">reservas@lacocina.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={() => setShowReservationModal(true)}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-5 rounded-2xl font-black text-lg transition-all shadow-xl transform hover:scale-105"
                >
                  Reservar Mesa Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Contáctanos
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-3xl p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="font-black text-xl mb-2 text-gray-900">Ubicación</h3>
              <p className="text-gray-700 font-semibold">Av. Amazonas N12-345<br />Quito, Ecuador</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-black text-xl mb-2 text-gray-900">Teléfono</h3>
              <p className="text-gray-700 font-semibold">+593 99 123 4567</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-black text-xl mb-2 text-gray-900">Email</h3>
              <p className="text-gray-700 font-semibold">info@lacocina.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowReservationModal(false)}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-10 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-gray-900">Reservar Mesa</h2>
              <button onClick={() => setShowReservationModal(false)} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all">
                <X size={24} />
              </button>
            </div>
            
            {reservationSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">¡Reserva Confirmada!</p>
                <p className="text-gray-600">Te hemos enviado un email de confirmación.</p>
              </div>
            ) : (
              <form onSubmit={handleReservation} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo *</label>
                    <input 
                      type="text" 
                      required
                      value={reservationForm.name}
                      onChange={(e) => setReservationForm({...reservationForm, name: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-600 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      value={reservationForm.email}
                      onChange={(e) => setReservationForm({...reservationForm, email: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono *</label>
                    <input 
                      type="tel"
                      required
                      value={reservationForm.phone}
                      onChange={(e) => setReservationForm({...reservationForm, phone: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-600 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Número de Personas *</label>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setReservationForm({...reservationForm, guests: Math.max(1, reservationForm.guests - 1)})}
                        className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <div className="flex-1 text-center text-2xl font-black text-gray-900">{reservationForm.guests}</div>
                      <button
                        type="button"
                        onClick={() => setReservationForm({...reservationForm, guests: Math.min(12, reservationForm.guests + 1)})}
                        className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Fecha *</label>
                    <input 
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={reservationForm.date}
                      onChange={(e) => setReservationForm({...reservationForm, date: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-600 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Hora *</label>
                    <select
                      required
                      value={reservationForm.time}
                      onChange={(e) => setReservationForm({...reservationForm, time: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-600 focus:outline-none transition-all"
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Solicitudes Especiales</label>
                  <textarea 
                    rows={3}
                    value={reservationForm.specialRequests}
                    onChange={(e) => setReservationForm({...reservationForm, specialRequests: e.target.value})}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-600 focus:outline-none transition-all resize-none"
                    placeholder="Alergias, preferencias, celebraciones especiales..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-5 rounded-xl font-black text-lg transition-all shadow-xl transform hover:scale-105"
                >
                  Confirmar Reserva
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-6 max-w-sm z-40">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-black text-gray-900">Carrito</h3>
            <button onClick={() => setCart([])} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
            {cart.map((item) => {
              const menuItem = menuItems.find(m => m.id === item.id);
              if (!menuItem) return null;
              return (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{menuItem.name}</div>
                    <div className="text-sm text-gray-600">${menuItem.price} x {item.quantity}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-gray-900 w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-gray-900">Total:</span>
              <span className="text-2xl font-black text-gray-900">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-4 rounded-xl font-black transition-all shadow-lg">
              Realizar Pedido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

