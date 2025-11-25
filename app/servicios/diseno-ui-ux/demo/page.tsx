'use client';

import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { ArrowLeft, Palette, Layers, Smartphone, Eye, Sparkles, Brush, CheckCircle, Star, Award, Target, TrendingUp, Users, Mail, Code, Zap, Shield } from 'lucide-react';
import { useState } from 'react';

const portfolioItems = [
  {
    title: 'App Financiera Moderna',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Diseño completo de interfaz para aplicación de gestión financiera personal con enfoque en usabilidad y conversión',
    results: ['+85% retención de usuarios', '4.8/5 estrellas en App Store', 'Tiempo de tarea reducido 50%'],
    tech: ['Figma', 'Adobe XD', 'Principle'],
    client: 'FinTech Solutions',
  },
  {
    title: 'E-commerce Premium',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    description: 'Diseño completo de tienda online con experiencia de compra optimizada y checkout simplificado',
    results: ['+200% tasa de conversión', '95% satisfacción del cliente', 'Checkout 40% más rápido'],
    tech: ['Sketch', 'InVision', 'Framer'],
    client: 'Fashion Store Pro',
  },
  {
    title: 'Dashboard Analítico',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Panel de control con visualización de datos intuitiva y reportes en tiempo real',
    results: ['+60% uso de funcionalidades', 'Navegación 80% más rápida', '4.9/5 calificación'],
    tech: ['Figma', 'React', 'D3.js'],
    client: 'DataAnalytics Corp',
  },
];

export default function DisenoUIUXDemo() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowContactModal(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Minimalista */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/servicios/diseno-ui-ux" 
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition-colors hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline text-sm">Volver</span>
            </Link>
            <div className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
              <Palette size={20} className="text-gray-700" />
              <span>DesignStudio</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Portfolio</button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Servicios</button>
            <button onClick={() => scrollToSection('proceso')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Proceso</button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Contacto</button>
          </nav>
          <button 
            onClick={() => setShowContactModal(true)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-md font-medium text-sm transition-colors"
          >
            Solicitar Diseño
          </button>
        </div>
      </header>

      {/* Hero Section Minimalista */}
      <section className="relative py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
            <Award size={16} />
            <span>Estudio de Diseño Premium</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            DISEÑO UI/UX
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Interfaces intuitivas y atractivas diseñadas para convertir visitantes en clientes leales
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-md font-semibold transition-colors flex items-center space-x-2"
            >
              <Eye size={20} />
              <span>Ver Portfolio Completo</span>
            </button>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-md font-semibold transition-colors flex items-center space-x-2"
            >
              <Target size={20} />
              <span>Solicitar Consulta</span>
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Minimalista */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Portfolio de Diseños
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Algunos de nuestros proyectos más exitosos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-md transition-all">
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <SafeImage 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fallback="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gray-900 text-white rounded text-xs font-medium">{item.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 font-medium mb-1 flex items-center space-x-1">
                    <Code size={12} />
                    <span>{item.client}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold mb-2 text-gray-700 uppercase tracking-wide">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, j) => (
                        <span key={j} className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-gray-700 font-medium text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold mb-2 text-gray-700 uppercase tracking-wide">Resultados:</h4>
                    <div className="space-y-2">
                      {item.results.map((result, j) => (
                        <div key={j} className="flex items-center space-x-2">
                          <CheckCircle size={14} className="text-gray-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Minimalista */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Servicios de Diseño
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Soluciones completas de diseño para tu negocio</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Palette, 
                title: 'Diseño Visual', 
                desc: 'Colores, tipografías y elementos visuales que transmiten tu marca de manera única y memorable. Identidad visual completa.',
              },
              { 
                icon: Layers, 
                title: 'Experiencia de Usuario', 
                desc: 'Flujos intuitivos que guían al usuario hacia la acción deseada sin fricción. Wireframes y prototipos interactivos.',
              },
              { 
                icon: Smartphone, 
                title: 'Responsive Design', 
                desc: 'Perfecto en todos los dispositivos y tamaños de pantalla, desde móviles hasta 4K. Diseño adaptativo completo.',
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section Minimalista */}
      <section id="proceso" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-gray-600">Cómo trabajamos para crear diseños excepcionales</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Investigación', desc: 'Análisis profundo de tu mercado y usuarios', icon: Eye },
              { step: '02', title: 'Diseño', desc: 'Creación de wireframes y prototipos', icon: Brush },
              { step: '03', title: 'Desarrollo', desc: 'Implementación con las mejores tecnologías', icon: Code },
              { step: '04', title: 'Optimización', desc: 'Testing y mejoras continuas', icon: TrendingUp },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Minimalista */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div>
              <Users className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-400 text-sm">Proyectos</div>
            </div>
            <div>
              <Award className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-400 text-sm">Satisfacción</div>
            </div>
            <div>
              <Star className="w-10 h-10 mx-auto mb-3 text-gray-400 fill-gray-400" />
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-gray-400 text-sm">Calificación</div>
            </div>
            <div>
              <Target className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">+200%</div>
              <div className="text-gray-400 text-sm">Conversión</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Minimalista */}
      <section id="contacto" className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Diseños que Convierten
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cada diseño está pensado para maximizar conversiones y crear experiencias inolvidables para tus usuarios
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-md font-semibold transition-colors flex items-center space-x-2"
            >
              <Palette size={20} />
              <span>Solicitar Diseño Personalizado</span>
            </button>
            <Link 
              href="/contacto"
              className="bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-md font-semibold transition-colors flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Contactar Ahora</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowContactModal(false)}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Diseño</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-gray-900" />
                <p className="text-gray-700 font-medium">¡Solicitud enviada correctamente!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
