'use client';

import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Code, ShoppingCart, Palette, Smartphone, Rocket, Search, 
  ArrowRight, ExternalLink, CheckCircle, Star, TrendingUp,
  Award, Users, Clock, Zap, Shield, Globe, Target, BarChart3, 
  ChevronDown, Sparkles, Play, Filter
} from 'lucide-react';

const services = [
  {
    id: 'desarrollo-web',
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Sitios web corporativos y plataformas empresariales de alto rendimiento.',
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    projects: [
      {
        title: 'Sistema de Gestión Empresarial',
        client: 'TechCorp Solutions',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
        category: 'Plataforma Empresarial',
        results: ['+180% eficiencia operativa', 'Reducción costos 35%', '98% satisfacción'],
        tech: ['Next.js 14', 'TypeScript', 'PostgreSQL'],
        demoUrl: '/servicios/desarrollo-web/demo',
        year: '2024',
      },
      {
        title: 'Portal de Reservas Online',
        client: 'Restaurante La Cocina Premium',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
        category: 'Sistema de Reservas',
        results: ['+250% reservas online', 'Tiempo respuesta <2s', '4.9/5 estrellas'],
        tech: ['React', 'Node.js', 'MongoDB'],
        demoUrl: '/servicios/desarrollo-web/restaurante',
        year: '2024',
      },
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Tiendas online con sistemas de pago y gestión de inventario.',
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    projects: [
      {
        title: 'TechStore Ecuador',
        client: 'Tienda Online',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
        category: 'E-commerce Completo',
        results: ['$450K+ ventas mensuales', '12,500+ clientes activos', '4.9/5 calificación'],
        tech: ['Next.js', 'Stripe', 'Sanity CMS'],
        demoUrl: '/servicios/ecommerce/demo',
        year: '2024',
      },
    ],
  },
  {
    id: 'diseno-ui-ux',
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas que mejoran la experiencia del usuario.',
    gradient: 'from-purple-500 via-pink-500 to-rose-600',
    projects: [
      {
        title: 'App Financiera Moderna',
        client: 'FinTech Solutions',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
        category: 'Diseño de Aplicación',
        results: ['+85% retención usuarios', '4.8/5 estrellas', 'Tiempo de tarea -50%'],
        tech: ['Figma', 'Adobe XD', 'Principle'],
        demoUrl: '/servicios/diseno-ui-ux/demo',
        year: '2024',
      },
    ],
  },
  {
    id: 'aplicaciones-moviles',
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas para iOS y Android con rendimiento optimizado.',
    gradient: 'from-indigo-500 via-purple-500 to-indigo-600',
    projects: [
      {
        title: 'MobileApp Pro',
        client: 'Productividad Empresarial',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
        category: 'Aplicación Móvil',
        results: ['50K+ descargas', '4.8/5 calificación', '+120% eficiencia'],
        tech: ['React Native', 'Firebase', 'TypeScript'],
        demoUrl: '/servicios/aplicaciones-moviles/demo',
        year: '2024',
      },
    ],
  },
  {
    id: 'landing-pages',
    icon: Rocket,
    title: 'Landing Pages',
    description: 'Páginas optimizadas para conversión con diseño atractivo.',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    projects: [
      {
        title: 'StartupPro',
        client: 'SaaS Platform',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        category: 'Landing Page',
        results: ['+250% conversiones', '+300% tráfico', '98% satisfacción'],
        tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        demoUrl: '/servicios/landing-pages/demo',
        year: '2024',
      },
    ],
  },
  {
    id: 'optimizacion-seo',
    icon: Search,
    title: 'Optimización SEO',
    description: 'Mejora de posicionamiento y tráfico orgánico.',
    gradient: 'from-yellow-500 via-amber-500 to-orange-600',
    projects: [
      {
        title: 'SEO Pro Campaign',
        client: 'TechCorp Ecuador',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c92a?w=1200&q=80',
        category: 'Campaña SEO',
        results: ['#3 en Google', '+320% tráfico', '+180% conversiones'],
        tech: ['SEO Técnico', 'Content Strategy', 'Analytics'],
        demoUrl: '/servicios/optimizacion-seo/demo',
        year: '2024',
      },
    ],
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Diseño Premium Moderno */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-5 py-2.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                Portafolio de Trabajo
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-8 text-gray-900 leading-none tracking-tight">
              Proyectos
              <br />
              <span className="text-gray-400">Destacados</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl leading-relaxed font-light">
              Casos de éxito reales de clientes que confiaron en nosotros para transformar su presencia digital
            </p>
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200">
              <SafeImage
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                alt="Fondo de agua"
                fill
                className="object-cover"
                sizes="100vw"
                priority
                fallback="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Diseño Moderno */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-black text-gray-900 mb-2">50+</div>
              <div className="text-gray-500 font-semibold">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-gray-900 mb-2">30+</div>
              <div className="text-gray-500 font-semibold">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-gray-900 mb-2">98%</div>
              <div className="text-gray-500 font-semibold">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-gray-900 mb-2">24/7</div>
              <div className="text-gray-500 font-semibold">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Diseño Moderno y Limpio */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600">
              Proyectos reales en producción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              return service.projects.map((project, projectIndex) => {
                const Icon = service.icon;
                return (
                  <div
                    key={`${service.id}-${projectIndex}`}
                    className="group bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-gray-300 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-64 bg-gray-100 overflow-hidden">
                      <SafeImage
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fallback="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-white">
                          <div className="text-sm font-semibold mb-1 opacity-90">{project.client}</div>
                          <div className="text-2xl font-black mb-3">{project.title}</div>
                          <Link
                            href={project.demoUrl}
                            className="inline-flex items-center space-x-2 bg-white text-gray-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all"
                          >
                            <Play className="w-4 h-4" />
                            <span>Ver Sitio en Vivo</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold">
                          {project.category}
                        </span>
                        <span className="text-gray-400 text-sm font-semibold">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-4">{project.title}</h3>
                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                          Resultados
                        </h4>
                        <div className="space-y-2">
                          {project.results.map((result, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient}`}></div>
                              <span className="text-gray-700 font-semibold text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                          Tecnologías
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-xs font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={project.demoUrl}
                        className="inline-flex items-center space-x-2 text-gray-900 font-bold hover:opacity-70 transition-opacity group/link"
                      >
                        <span>Ver proyecto completo</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              });
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            ¿Listo para tu Proyecto?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Trabajemos juntos para crear algo extraordinario
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center space-x-3 bg-white text-gray-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-2xl"
          >
            <span>Contactar Ahora</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
