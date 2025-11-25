'use client';

import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { ArrowLeft, Smartphone, Download, Apple, Play, Zap, Shield, Globe, CheckCircle, Star, Users, Award, TrendingUp, Mail, Target, HeadphonesIcon } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Ultra Rápida',
    desc: 'Carga instantánea y navegación fluida. Optimizada para el mejor rendimiento.',
  },
  {
    icon: Shield,
    title: '100% Segura',
    desc: 'Protección de datos de nivel empresarial. Encriptación end-to-end.',
  },
  {
    icon: Globe,
    title: 'Multiplataforma',
    desc: 'iOS, Android y Web en una sola app. Sincronización en tiempo real.',
  },
];

const testimonials = [
  {
    name: 'Ana Martínez',
    role: 'Usuaria Premium',
    company: 'Empresaria',
    content: 'La mejor app que he usado. Rápida, intuitiva y con todas las funcionalidades que necesito. Ha mejorado mi productividad enormemente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    result: '+85% productividad',
  },
  {
    name: 'Roberto Silva',
    role: 'CEO',
    company: 'Tech Solutions',
    content: 'Increíble cómo esta app ha mejorado la productividad de mi equipo. Altamente recomendada. El ROI fue inmediato.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    result: '+120% eficiencia',
  },
];

export default function AppMovilDemo() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'ios' | 'android' | null>(null);

  const handleDownload = (platform: 'ios' | 'android') => {
    setSelectedPlatform(platform);
    setShowDownloadModal(true);
    setTimeout(() => {
      setShowDownloadModal(false);
      alert(`Descarga iniciada para ${platform === 'ios' ? 'iOS' : 'Android'}. ¡Gracias por descargar!`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Minimalista */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/servicios/aplicaciones-moviles" 
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition-colors hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline text-sm">Volver</span>
            </Link>
            <div className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
              <Smartphone size={20} className="text-gray-700" />
              <span>MobileApp Pro</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Inicio</a>
            <a href="#caracteristicas" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Características</a>
            <a href="#testimonios" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Testimonios</a>
            <a href="#descargar" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Descargar</a>
          </nav>
          <button 
            onClick={() => {
              alert('Prueba gratuita iniciada. ¡Bienvenido!');
            }}
            className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-md font-medium text-sm transition-colors"
          >
            Probar Gratis
          </button>
        </div>
      </header>

      {/* Hero Section Minimalista */}
      <section id="inicio" className="relative py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm">
            <Award size={16} />
            <span>App #1 en Productividad</span>
          </div>
          <div className="inline-block mb-8">
            <Smartphone className="w-24 h-24 mx-auto text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            APP MÓVIL
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Aplicación móvil nativa para iOS y Android con todas las funcionalidades que necesitas para hacer crecer tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleDownload('ios')}
              className="bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3"
            >
              <Apple size={24} />
              <span>Descargar para iOS</span>
            </button>
            <button 
              onClick={() => handleDownload('android')}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-md font-semibold transition-colors flex items-center justify-center space-x-3"
            >
              <Play size={24} />
              <span>Descargar para Android</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Minimalista */}
      <section id="caracteristicas" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Todo lo que necesitas en una sola aplicación</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Minimalista */}
      <section id="testimonios" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Usuarios
            </h2>
            <p className="text-lg text-gray-600">Testimonios reales de usuarios satisfechos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={20} className="fill-gray-900 text-gray-900" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                      <SafeImage 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        fill 
                        className="object-cover"
                        sizes="64px"
                        fallback="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Minimalista */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div>
              <Download className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-400 text-sm">Descargas</div>
            </div>
            <div>
              <Star className="w-10 h-10 mx-auto mb-3 text-gray-400 fill-gray-400" />
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-gray-400 text-sm">Calificación</div>
            </div>
            <div>
              <Users className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-400 text-sm">Satisfacción</div>
            </div>
            <div>
              <HeadphonesIcon className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section Minimalista */}
      <section id="descargar" className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Disponible en Todas las Plataformas
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Descarga ahora y comienza a usar todas las funcionalidades premium
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => handleDownload('ios')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-md font-semibold transition-colors flex items-center space-x-3"
            >
              <Apple size={24} />
              <span>App Store</span>
            </button>
            <button 
              onClick={() => handleDownload('android')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-md font-semibold transition-colors flex items-center space-x-3"
            >
              <Play size={24} />
              <span>Google Play</span>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-gray-400" />
              <span>Gratis para descargar</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-gray-400" />
              <span>Actualizaciones automáticas</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-gray-400" />
              <span>Soporte 24/7 incluido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 text-center">
            <Download className="w-16 h-16 mx-auto mb-4 text-gray-900" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Descargando...</h2>
            <p className="text-gray-600 mb-6">
              Preparando descarga para {selectedPlatform === 'ios' ? 'iOS' : 'Android'}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-900 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
