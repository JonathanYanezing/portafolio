'use client';

import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { ArrowLeft, ArrowRight, Zap, Shield, TrendingUp, Users, Award, Rocket, Star, Mail, Phone, MapPin, CheckCircle, Target, Globe, Lock, Clock, HeadphonesIcon } from 'lucide-react';
import { useState } from 'react';

export default function LandingPageDemo() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
      setSubmitted(false);
      setEmail('');
      alert('¡Gracias! Te hemos enviado un email con más información.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Minimalista */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/servicios/landing-pages" 
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition-colors hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline text-sm">Volver</span>
            </Link>
            <div className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
              <Rocket size={20} className="text-gray-700" />
              <span>StartupPro</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Inicio</button>
            <button onClick={() => scrollToSection('caracteristicas')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Características</button>
            <button onClick={() => scrollToSection('precios')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Precios</button>
            <button onClick={() => scrollToSection('testimonios')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Testimonios</button>
          </div>
          <button 
            onClick={() => setShowLogin(true)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-md font-medium text-sm transition-colors"
          >
            Iniciar Sesión
          </button>
        </div>
      </header>

      {/* Hero Section Minimalista */}
      <section id="inicio" className="relative py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm">
            <Rocket size={16} />
            <span>Lanzamiento Especial - 50% OFF</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforma tu{' '}
            <span className="text-gray-300">Negocio</span>{' '}
            Hoy
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            La solución que estabas buscando para llevar tu empresa al siguiente nivel. 
            <span className="font-semibold text-white"> Resultados garantizados en 30 días.</span>
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Ingresa tu email"
                className="flex-1 px-6 py-4 rounded-md border border-gray-700 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Comenzar Gratis</span>
                <ArrowRight size={20} />
              </button>
            </div>
            {submitted && (
              <div className="mt-4 text-green-400 text-sm flex items-center justify-center space-x-2">
                <CheckCircle size={16} />
                <span>¡Email enviado correctamente!</span>
              </div>
            )}
            <p className="text-sm text-gray-400 mt-4 flex items-center justify-center space-x-2">
              <CheckCircle size={14} />
              <span>Sin tarjeta de crédito • Prueba de 14 días • Cancelación en cualquier momento</span>
            </p>
          </form>
        </div>
      </section>

      {/* Features Minimalista */}
      <section id="caracteristicas" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Todo lo que necesitas para triunfar en el mundo digital</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: 'Resultados Garantizados', desc: 'Aumenta tus ventas en 30 días o te devolvemos tu dinero. Garantía 100%.' },
              { icon: Shield, title: 'Soporte 24/7', desc: 'Equipo de expertos disponible siempre que lo necesites, sin excepciones.' },
              { icon: TrendingUp, title: 'Fácil de Usar', desc: 'Interfaz intuitiva, sin necesidad de conocimientos técnicos. Listo en minutos.' },
              { icon: Users, title: 'Precios Competitivos', desc: 'Planes accesibles para empresas de todos los tamaños. Sin costos ocultos.' },
              { icon: Award, title: 'Actualizaciones Constantes', desc: 'Nuevas funcionalidades cada semana sin costo adicional. Siempre actualizado.' },
              { icon: Rocket, title: 'Seguridad Avanzada', desc: 'Protección de datos de nivel empresarial. Certificaciones internacionales.' },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-md transition-all"
                >
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

      {/* Pricing Minimalista */}
      <section id="precios" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Planes y Precios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Elige el plan perfecto para tu negocio</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: 'Básico', 
                price: '$29', 
                features: ['5 proyectos activos', 'Soporte por email', 'Actualizaciones automáticas', 'Dashboard básico', 'Hasta 1,000 usuarios'],
              },
              { 
                name: 'Pro', 
                price: '$79', 
                features: ['Proyectos ilimitados', 'Soporte 24/7 prioritario', 'Actualizaciones premium', 'Análisis avanzado', 'Hasta 10,000 usuarios', 'API personalizada'],
                popular: true,
              },
              { 
                name: 'Enterprise', 
                price: '$199', 
                features: ['Todo de Pro', 'Soporte dedicado', 'Personalización completa', 'Integraciones ilimitadas', 'Usuarios ilimitados', 'SLA garantizado'],
              },
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-lg p-8 border-2 transition-all ${
                  plan.popular ? 'border-gray-900 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold text-center mb-4">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/mes</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    alert(`Has seleccionado el plan ${plan.name}. Te contactaremos pronto.`);
                  }}
                  className={`w-full py-3 rounded-md font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Comenzar Ahora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Minimalista */}
      <section id="testimonios" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-gray-600">Testimonios reales de empresas que confían en nosotros</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'María González',
                role: 'CEO, StartupTech Ecuador',
                company: 'StartupTech Ecuador',
                content: 'En solo 3 meses aumentamos nuestras conversiones en un 250%. El sistema es increíblemente fácil de usar y el soporte es excepcional. La mejor inversión que hemos hecho.',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
                result: '+250% conversiones',
              },
              {
                name: 'Carlos Rodríguez',
                role: 'Fundador, Academia Online Pro',
                company: 'Academia Online Pro',
                content: 'Nuestro tráfico orgánico se triplicó en 4 meses. El dashboard de análisis es muy completo y nos ayuda a tomar decisiones basadas en datos reales.',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
                result: '+300% tráfico',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={20} className="fill-gray-900 text-gray-900" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                      <SafeImage 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        fill 
                        className="object-cover"
                        sizes="64px"
                        fallback="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
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
              <Users className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-400 text-sm">Usuarios Activos</div>
            </div>
            <div>
              <Award className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-400 text-sm">Satisfacción</div>
            </div>
            <div>
              <HeadphonesIcon className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Soporte</div>
            </div>
            <div>
              <Star className="w-10 h-10 mx-auto mb-3 text-gray-400 fill-gray-400" />
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-gray-400 text-sm">Calificación</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Minimalista */}
      <section className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Únete a miles de empresas que ya confían en nosotros para hacer crecer su negocio
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-md font-semibold transition-colors flex items-center space-x-2"
            >
              <Rocket size={20} />
              <span>Comenzar Ahora - Es Gratis</span>
            </button>
            <Link 
              href="/contacto"
              className="bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-md font-semibold transition-colors flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Contactar Ventas</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowLogin(false)}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Iniciar Sesión</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                <input 
                  type="password" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <button 
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogin(false);
                  alert('Sesión iniciada correctamente');
                }}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
