'use client';

import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { ArrowLeft, TrendingUp, Search, BarChart, Target, CheckCircle, ArrowRight, Star, Users, Award, Globe, Zap, Shield, Mail, TrendingDown, TrendingUp as TrendingUpIcon, X } from 'lucide-react';
import { useState } from 'react';

const results = [
  {
    client: 'TechCorp Ecuador',
    before: '#45',
    after: '#3',
    traffic: '+320%',
    conversions: '+180%',
    period: '6 meses',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80',
    description: 'Empresa de tecnología que logró posicionarse en el top 3 de búsquedas orgánicas',
  },
  {
    client: 'E-commerce Store',
    before: '#28',
    after: '#5',
    traffic: '+450%',
    conversions: '+250%',
    period: '4 meses',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80',
    description: 'Tienda online que triplicó sus ventas gracias a mejor posicionamiento SEO',
  },
  {
    client: 'Academia Online',
    before: '#52',
    after: '#8',
    traffic: '+280%',
    conversions: '+200%',
    period: '5 meses',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80',
    description: 'Plataforma educativa que aumentó sus inscripciones en un 200%',
  },
];

export default function SEODemo() {
  const [url, setUrl] = useState('');
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [auditing, setAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAuditModal(true);
    setAuditing(true);
    setTimeout(() => {
      setAuditing(false);
      setAuditComplete(true);
      setTimeout(() => {
        setShowAuditModal(false);
        setAuditComplete(false);
        setUrl('');
        alert('Auditoría completada. Revisa tu email para ver el reporte completo.');
      }, 2000);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Minimalista */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/servicios/optimizacion-seo" 
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition-colors hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline text-sm">Volver</span>
            </Link>
            <div className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
              <Search size={20} className="text-gray-700" />
              <span>SEO Pro</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Inicio</button>
            <button onClick={() => scrollToSection('resultados')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Resultados</button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Servicios</button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">Contacto</button>
          </nav>
          <button 
            onClick={() => scrollToSection('inicio')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-md font-medium text-sm transition-colors"
          >
            Auditar Sitio
          </button>
        </div>
      </header>

      {/* Hero Section Minimalista */}
      <section id="inicio" className="relative py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
            <Award size={16} />
            <span>Especialistas en SEO Certificados</span>
          </div>
          <div className="inline-block mb-8">
            <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            OPTIMIZACIÓN SEO
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Mejora tu posicionamiento en buscadores y aumenta tu tráfico orgánico de manera sostenible y medible
          </p>
          <form onSubmit={handleAudit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                placeholder="Ingresa tu URL"
                className="flex-1 px-6 py-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-md font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Auditar Ahora</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4 flex items-center justify-center space-x-2">
              <CheckCircle size={14} className="text-gray-400" />
              <span>Auditoría gratuita • Sin compromiso • Resultados en 24 horas</span>
            </p>
          </form>
        </div>
      </section>

      {/* Results Minimalista */}
      <section id="resultados" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Resultados Comprobados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Casos reales de empresas que mejoraron su posicionamiento</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {results.map((result, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-md transition-all">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 bg-gray-100">
                    <SafeImage 
                      src={result.image} 
                      alt={result.client} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      fallback="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{result.client}</h3>
                <p className="text-gray-600 mb-6 text-sm">{result.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-600 text-sm font-medium flex items-center space-x-1">
                      <TrendingDown size={14} className="text-red-500" />
                      <span>Antes:</span>
                    </span>
                    <span className="text-xl font-bold text-red-600">#{result.before}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-600 text-sm font-medium flex items-center space-x-1">
                      <TrendingUpIcon size={14} className="text-green-500" />
                      <span>Después:</span>
                    </span>
                    <span className="text-xl font-bold text-green-600">#{result.after}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-600 text-sm font-medium">Tráfico:</span>
                    <span className="text-lg font-bold text-gray-900">{result.traffic}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-600 text-sm font-medium">Conversiones:</span>
                    <span className="text-lg font-bold text-gray-900">{result.conversions}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-500">Resultados en: <span className="font-semibold text-gray-900">{result.period}</span></span>
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
              Nuestros Servicios SEO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Soluciones completas de optimización para tu sitio web</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: 'Auditoría SEO completa', 
                desc: 'Análisis exhaustivo de tu sitio web, identificación de problemas y oportunidades',
                icon: Search,
              },
              { 
                title: 'Optimización técnica avanzada', 
                desc: 'Mejora de velocidad, estructura, schema markup y más',
                icon: Zap,
              },
              { 
                title: 'Estrategia de contenido', 
                desc: 'Creación de contenido optimizado para SEO y conversión',
                icon: Target,
              },
              { 
                title: 'Link building profesional', 
                desc: 'Construcción de enlaces de calidad desde sitios autorizados',
                icon: Globe,
              },
              { 
                title: 'Monitoreo continuo 24/7', 
                desc: 'Seguimiento constante de rankings, tráfico y métricas clave',
                icon: BarChart,
              },
              { 
                title: 'Reportes mensuales detallados', 
                desc: 'Análisis completo de resultados y recomendaciones de mejora',
                icon: TrendingUp,
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
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
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">+250%</div>
              <div className="text-gray-400 text-sm">Tráfico Orgánico</div>
            </div>
            <div>
              <Target className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">Top 10</div>
              <div className="text-gray-400 text-sm">Posicionamiento</div>
            </div>
            <div>
              <BarChart className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">+180%</div>
              <div className="text-gray-400 text-sm">Conversiones</div>
            </div>
            <div>
              <Shield className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-400 text-sm">Garantía</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Minimalista */}
      <section id="contacto" className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ¿Listo para Mejorar tu SEO?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Obtén una auditoría gratuita y descubre cómo mejorar tu posicionamiento en buscadores
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-md font-semibold transition-colors flex items-center space-x-2"
            >
              <Search size={20} />
              <span>Solicitar Auditoría Gratuita</span>
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

      {/* Audit Modal */}
      {showAuditModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowAuditModal(false)}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Auditoría SEO</h2>
              <button onClick={() => setShowAuditModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            
            {auditing ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-700 font-medium">Analizando tu sitio web...</p>
                <p className="text-gray-500 text-sm mt-2">Esto puede tomar unos momentos</p>
              </div>
            ) : auditComplete ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-gray-900" />
                <p className="text-gray-700 font-medium mb-2">¡Auditoría completada!</p>
                <p className="text-gray-600 text-sm">Revisa tu email para ver el reporte completo</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
