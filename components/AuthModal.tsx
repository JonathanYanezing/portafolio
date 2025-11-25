'use client';

import { useState } from 'react';
import { X, User, Mail, Lock, LogIn } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
  onRegister: (name: string, email: string, password: string) => void;
}

export default function AuthModal({ isOpen, onClose, onLogin, onRegister }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(formData.email, formData.password);
    } else {
      onRegister(formData.name, formData.email, formData.password);
    }
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nombre Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
                placeholder="Mínimo 6 caracteres"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <LogIn size={20} />
            <span>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</span>
          </button>
        </form>

        <div className="p-6 border-t border-gray-200 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({ name: '', email: '', password: '' });
            }}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {isLogin
              ? '¿No tienes cuenta? Regístrate aquí'
              : '¿Ya tienes cuenta? Inicia sesión aquí'}
          </button>
        </div>
      </div>
    </div>
  );
}



