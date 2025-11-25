'use client';

import Link from 'next/link';
import { ArrowRight, Code, Network, Server, Shield, Cloud, Database, Smartphone, Globe, CheckCircle } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import SafeImage from '@/components/SafeImage';

export default function Home() {
  const specializations = [
    { icon: Network, title: 'Redes y Seguridad', description: 'Configuración y administración de redes empresariales' },
    { icon: Code, title: 'Desarrollo Web', description: 'Aplicaciones web modernas y responsivas' },
    { icon: Server, title: 'Infraestructura', description: 'Servidores y sistemas en la nube' },
    { icon: Database, title: 'Bases de Datos', description: 'Diseño y optimización de bases de datos' },
    { icon: Smartphone, title: 'Apps Móviles', description: 'Aplicaciones iOS y Android' },
    { icon: Cloud, title: 'Cloud Computing', description: 'Soluciones en la nube escalables' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section - Con Imagen de Fondo y Animaciones */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Imagen de Fondo Tecnológica */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
            alt="Tecnología"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            fallback="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-gray-900/80"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center mb-12 animate-fade-in">
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-500/90 to-cyan-500/90 flex items-center justify-center border-4 border-white/30 shadow-2xl backdrop-blur-sm transform hover:scale-110 transition-transform duration-500">
                <span className="text-6xl font-black text-white">JY</span>
              </div>
            </div>

            {/* Name and Title - Con Animaciones */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="block animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Hola, Soy
              </span>
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Jonathan Yanez
              </span>
            </h1>
            <div className="text-3xl md:text-4xl font-bold mb-4 text-blue-100 animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Ingeniero en Sistemas y Computación
            </div>
            <div className="text-xl md:text-2xl text-cyan-100 font-semibold mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              Programador Web Full Stack
            </div>

            {/* Specializations Badges - Con Animación */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all transform hover:scale-105">
                <span className="font-bold text-white">Redes y Seguridad</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all transform hover:scale-105">
                <span className="font-bold text-white">Desarrollo Web</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all transform hover:scale-105">
                <span className="font-bold text-white">Infraestructura Cloud</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all transform hover:scale-105">
                <span className="font-bold text-white">Aplicaciones Móviles</span>
              </div>
            </div>

            {/* CTA Buttons - Con Animación */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <Link
                href="/portfolio"
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-110 shadow-2xl flex items-center space-x-2"
              >
                <span>Ver Portafolio</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contacto"
                className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-110"
              >
                Contáctame
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ArrowRight size={24} className="rotate-90 text-white/70" />
        </div>
      </section>

      {/* About Section - Con Colores Suaves */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Sobre Mí
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-10 md:p-16 border-2 border-blue-100 shadow-xl">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 text-center">
                Soy <span className="font-black text-blue-600">Ingeniero en Sistemas y Computación</span> especializado en 
                <span className="font-bold text-cyan-600"> redes, seguridad informática y desarrollo web full stack</span>.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 text-center">
                Me apasiona crear soluciones tecnológicas innovadoras que resuelvan problemas reales. 
                Con experiencia en <span className="font-bold text-blue-600">configuración de redes empresariales, 
                desarrollo de aplicaciones web modernas y gestión de infraestructura en la nube</span>.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
                Trabajo con las últimas tecnologías para garantizar que cada proyecto sea 
                <span className="font-bold text-cyan-600"> seguro, escalable y de alto rendimiento</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section - Con Colores Suaves */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Mis Especializaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servicios profesionales en tecnología e ingeniería de sistemas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specializations.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all transform hover:-translate-y-2"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{spec.title}</h3>
                  <p className="text-gray-600 font-semibold">{spec.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Con Colores Suaves */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div className="transform hover:scale-110 transition-all">
              <div className="text-5xl md:text-6xl font-black mb-3">100+</div>
              <div className="text-blue-100 text-lg font-semibold">Proyectos Completados</div>
            </div>
            <div className="transform hover:scale-110 transition-all">
              <div className="text-5xl md:text-6xl font-black mb-3">50+</div>
              <div className="text-blue-100 text-lg font-semibold">Clientes Satisfechos</div>
            </div>
            <div className="transform hover:scale-110 transition-all">
              <div className="text-5xl md:text-6xl font-black mb-3">5+</div>
              <div className="text-blue-100 text-lg font-semibold">Años de Experiencia</div>
            </div>
            <div className="transform hover:scale-110 transition-all">
              <div className="text-5xl md:text-6xl font-black mb-3">24/7</div>
              <div className="text-blue-100 text-lg font-semibold">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights - Con Colores Suaves */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Disponible Para
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servicios profesionales en ingeniería de sistemas y desarrollo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Redes y Seguridad',
                description: 'Configuración, administración y seguridad de redes empresariales. Firewalls, VPNs y protección de datos.',
                icon: Network,
              },
              {
                title: 'Desarrollo Web Full Stack',
                description: 'Aplicaciones web modernas con React, Next.js, Node.js. Frontend y backend completos.',
                icon: Code,
              },
              {
                title: 'Infraestructura Cloud',
                description: 'Migración a la nube, configuración de servidores, AWS, Azure, Google Cloud.',
                icon: Cloud,
              },
              {
                title: 'Bases de Datos',
                description: 'Diseño, optimización y administración de bases de datos SQL y NoSQL.',
                icon: Database,
              },
              {
                title: 'Aplicaciones Móviles',
                description: 'Desarrollo de apps nativas e híbridas para iOS y Android.',
                icon: Smartphone,
              },
              {
                title: 'Seguridad Informática',
                description: 'Auditorías de seguridad, protección de datos y sistemas de prevención de intrusiones.',
                icon: Shield,
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 font-semibold leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Lo Que Dicen Mis Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testimonios reales de proyectos exitosos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              name="María González"
              role="CEO, TechStart"
              content="Excelente trabajo. El sitio web superó nuestras expectativas y ha aumentado nuestras ventas en un 40%."
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
            />
            <TestimonialCard
              name="Carlos Rodríguez"
              role="Director, Digital Solutions"
              content="Profesionalismo y calidad excepcionales. El equipo entregó el proyecto a tiempo y con excelentes resultados."
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
            />
            <TestimonialCard
              name="Ana Martínez"
              role="Fundadora, Creative Agency"
              content="La mejor inversión que hemos hecho. Nuestra presencia online ha mejorado significativamente."
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Con Colores Suaves */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            ¿Trabajamos Juntos?
          </h2>
          <p className="text-2xl mb-10 text-blue-100 max-w-3xl mx-auto font-light">
            Contáctame hoy y convirtamos tus ideas en realidad digital.
            <span className="font-bold text-white block mt-2"> Resultados garantizados.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="px-12 py-5 bg-white hover:bg-blue-50 text-blue-600 rounded-xl font-black text-xl transition-all transform hover:scale-110 shadow-2xl flex items-center space-x-3"
            >
              <span>Contáctame Ahora</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/portfolio"
              className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white rounded-xl font-black text-xl transition-all transform hover:scale-110"
            >
              Ver Portafolio
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
