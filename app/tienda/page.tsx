'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import AuthModal from '@/components/AuthModal';
import { ShoppingCart, User, LogOut } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Plantilla Web Premium',
    price: 99,
    description: 'Plantilla completa para sitios web profesionales con diseño moderno y responsivo.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
  },
  {
    id: 2,
    name: 'Sistema E-commerce',
    price: 299,
    description: 'Sistema completo de comercio electrónico con panel de administración incluido.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    id: 3,
    name: 'Landing Page Pro',
    price: 79,
    description: 'Landing page optimizada para conversión con todas las secciones necesarias.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    id: 4,
    name: 'Dashboard Admin',
    price: 199,
    description: 'Panel de administración completo con gráficos y gestión de usuarios.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    id: 5,
    name: 'App Móvil Base',
    price: 399,
    description: 'Aplicación móvil base para iOS y Android con funcionalidades esenciales.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  },
  {
    id: 6,
    name: 'Sitio Web Corporativo',
    price: 149,
    description: 'Sitio web corporativo completo con múltiples páginas y formularios.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
  },
];

interface User {
  name: string;
  email: string;
}

export default function Tienda() {
  const [cart, setCart] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Verificar si hay usuario guardado en localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Simulación de login (en producción esto sería una llamada a API)
    const userData = {
      name: email.split('@')[0],
      email: email,
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setShowAuthModal(false);
    alert('¡Bienvenido! Has iniciado sesión correctamente.');
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Simulación de registro (en producción esto sería una llamada a API)
    const userData = {
      name: name,
      email: email,
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setShowAuthModal(false);
    alert('¡Cuenta creada exitosamente! Bienvenido.');
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem('user');
    alert('Has cerrado sesión.');
  };

  const addToCart = (id: number) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setCart([...cart, id]);
    setShowCart(true);
    setTimeout(() => setShowCart(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Tienda
            </h1>
            <p className="text-xl text-gray-600">
              Productos y servicios digitales profesionales
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 text-gray-700">
                  <User size={20} />
                  <span className="font-medium">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <LogOut size={20} />
                  <span className="hidden md:inline">Salir</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <User size={24} />
                <span>Iniciar Sesión</span>
              </button>
            )}
            <div className="relative">
              <button
                onClick={() => {
                  if (!user) {
                    setShowAuthModal(true);
                    return;
                  }
                  setShowCart(!showCart);
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <ShoppingCart size={24} />
                <span>Carrito ({cart.length})</span>
              </button>
              {showCart && cart.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-4 z-10">
                  <h3 className="font-bold mb-2">Carrito de Compras</h3>
                  <p className="text-sm text-gray-600">
                    {cart.length} producto{cart.length > 1 ? 's' : ''} en el carrito
                  </p>
                  <button
                    onClick={() => setCart([])}
                    className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Vaciar Carrito
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    </div>
  );
}

