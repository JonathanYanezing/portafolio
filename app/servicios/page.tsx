import ServiceCard from '@/components/ServiceCard';
import { CheckCircle, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: '💻',
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y responsivos con las últimas tecnologías como Next.js, React y TypeScript.',
    slug: 'desarrollo-web',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Tiendas online completas con carrito de compras, pasarelas de pago y panel de administración.',
    slug: 'ecommerce',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: '🎨',
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y atractivas diseñadas pensando en la experiencia del usuario.',
    slug: 'diseno-ui-ux',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📱',
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas e híbridas para iOS y Android con React Native o Flutter.',
    slug: 'aplicaciones-moviles',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: '🚀',
    title: 'Landing Pages',
    description: 'Páginas de aterrizaje optimizadas para conversión con diseño atractivo y rápido.',
    slug: 'landing-pages',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: '⚡',
    title: 'Optimización SEO',
    description: 'Mejora tu posicionamiento en buscadores con técnicas avanzadas de SEO.',
    slug: 'optimizacion-seo',
    color: 'from-yellow-500 to-orange-500',
  },
];

const features = [
  'Diseño Responsivo',
  'Optimización de Rendimiento',
  'SEO Optimizado',
  'Código Limpio y Mantenible',
  'Soporte Post-Lanzamiento',
  'Documentación Completa',
];

export default function Servicios() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
            <Sparkles className="inline-block mr-2" size={20} />
            <span className="font-semibold">Nuestros Servicios</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl">
            Soluciones{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Digitales
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-primary-100 max-w-3xl mx-auto font-light">
            Transformamos tu visión en realidad digital. Desde sitios web hasta aplicaciones móviles.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} slug={service.slug} />
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600">Metodología probada para resultados exitosos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Consulta', desc: 'Analizamos tus necesidades y objetivos', icon: '📋' },
              { num: '2', title: 'Diseño', desc: 'Creamos un diseño único y funcional', icon: '🎨' },
              { num: '3', title: 'Desarrollo', desc: 'Implementamos con las mejores tecnologías', icon: '⚙️' },
              { num: '4', title: 'Lanzamiento', desc: 'Publicamos y damos soporte continuo', icon: '🚀' },
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl transform group-hover:scale-110 transition-all">
                    <span className="text-3xl font-black text-white">{step.num}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Características Incluidas
              </h2>
              <p className="text-xl text-primary-100">Todo lo que necesitas para el éxito</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <CheckCircle size={28} className="flex-shrink-0 text-green-300" />
                  <span className="text-lg font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y recibe una consultoría gratuita para tu proyecto
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-5 rounded-full font-black text-xl transition-all transform hover:scale-110 shadow-2xl"
          >
            <span>Contactar Ahora</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
