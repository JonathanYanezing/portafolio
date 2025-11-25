import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  image: string;
  client: string;
  technologies: string[];
  features: string[];
  results: string[];
  liveUrl?: string;
}

const caseStudies: Record<string, CaseStudy[]> = {
  'desarrollo-web': [
    {
      slug: 'sitio-corporativo-moderno',
      title: 'Sitio Web Corporativo Moderno',
      description: 'Desarrollo de sitio web corporativo completo con diseño moderno, responsivo y optimizado para SEO.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      client: 'TechCorp Solutions',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      features: [
        'Diseño completamente responsivo',
        'Optimización SEO avanzada',
        'Panel de administración CMS',
        'Integración con redes sociales',
        'Formularios de contacto inteligentes',
      ],
      results: [
        'Aumento del 150% en tráfico orgánico',
        'Tiempo de carga reducido en 60%',
        'Mejora del 200% en conversiones',
      ],
      liveUrl: '#',
    },
    {
      slug: 'portal-educativo',
      title: 'Portal Educativo Interactivo',
      description: 'Plataforma educativa con sistema de cursos online, certificaciones y seguimiento de progreso.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80',
      client: 'EduLearn Academy',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'Sistema de cursos online',
        'Video streaming integrado',
        'Certificaciones automáticas',
        'Panel de estudiante y profesor',
        'Pasarela de pagos',
      ],
      results: [
        '10,000+ estudiantes registrados',
        '95% de satisfacción del usuario',
        'Ingresos recurrentes implementados',
      ],
    },
  ],
  'ecommerce': [
    {
      slug: 'tienda-online-completa',
      title: 'Tienda Online Completa',
      description: 'E-commerce completo con carrito de compras, pasarela de pago, gestión de inventario y panel administrativo.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      client: 'Fashion Store',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
      features: [
        'Catálogo de productos completo',
        'Carrito de compras persistente',
        'Múltiples métodos de pago',
        'Sistema de cupones y descuentos',
        'Panel de administración completo',
      ],
      results: [
        'Ventas aumentadas en 300%',
        'Tiempo de checkout reducido 40%',
        'Satisfacción del cliente 98%',
      ],
      liveUrl: '#',
    },
  ],
  'diseno-ui-ux': [
    {
      slug: 'rediseno-app-movil',
      title: 'Rediseño de App Móvil',
      description: 'Rediseño completo de interfaz móvil mejorando la experiencia de usuario y aumentando la retención.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      client: 'FinTech App',
      technologies: ['Figma', 'Adobe XD', 'Principle', 'React Native'],
      features: [
        'Investigación de usuarios',
        'Wireframes y prototipos',
        'Sistema de diseño completo',
        'Animaciones fluidas',
        'Testing de usabilidad',
      ],
      results: [
        'Retención de usuarios +85%',
        'Tiempo de tarea reducido 50%',
        'Calificación 4.8/5 estrellas',
      ],
    },
  ],
  'aplicaciones-moviles': [
    {
      slug: 'app-delivery',
      title: 'App de Delivery',
      description: 'Aplicación móvil nativa para iOS y Android con sistema de pedidos en tiempo real y seguimiento GPS.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
      client: 'QuickDelivery',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
      features: [
        'Pedidos en tiempo real',
        'Seguimiento GPS en vivo',
        'Notificaciones push',
        'Sistema de calificaciones',
        'Pagos integrados',
      ],
      results: [
        '50,000+ descargas',
        '4.7/5 estrellas en stores',
        'Tiempo promedio de entrega reducido 30%',
      ],
    },
  ],
  'landing-pages': [
    {
      slug: 'landing-saas',
      title: 'Landing Page SaaS',
      description: 'Landing page optimizada para conversión con formularios inteligentes, testimonios y CTA estratégicos.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
      client: 'CloudService Pro',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Typeform'],
      features: [
        'Diseño orientado a conversión',
        'Formularios multi-paso',
        'Testimonios dinámicos',
        'A/B testing integrado',
        'Analytics avanzado',
      ],
      results: [
        'Tasa de conversión 12%',
        'Tiempo en página +200%',
        'Leads calificados +350%',
      ],
      liveUrl: '#',
    },
  ],
  'optimizacion-seo': [
    {
      slug: 'seo-ecommerce',
      title: 'Optimización SEO E-commerce',
      description: 'Estrategia completa de SEO técnico y de contenido para mejorar posicionamiento y tráfico orgánico.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c92a?w=1200&q=80',
      client: 'Online Shop',
      technologies: ['Google Analytics', 'Search Console', 'Schema.org', 'Core Web Vitals'],
      features: [
        'Auditoría SEO completa',
        'Optimización técnica',
        'Estrategia de contenido',
        'Link building',
        'Monitoreo continuo',
      ],
      results: [
        'Tráfico orgánico +250%',
        'Posicionamiento en top 10',
        'Conversiones +180%',
      ],
    },
  ],
};

const serviceTitles: Record<string, string> = {
  'desarrollo-web': 'Desarrollo Web',
  'ecommerce': 'E-commerce',
  'diseno-ui-ux': 'Diseño UI/UX',
  'aplicaciones-moviles': 'Aplicaciones Móviles',
  'landing-pages': 'Landing Pages',
  'optimizacion-seo': 'Optimización SEO',
};

export default function ServiceCaseStudies({ params }: { params: { slug: string } }) {
  const studies = caseStudies[params.slug] || [];
  const serviceTitle = serviceTitles[params.slug] || 'Servicio';

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Link
          href="/servicios"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver a Servicios
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Casos de Estudio - {serviceTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ejemplos de proyectos que demuestran nuestra experiencia y resultados
          </p>
        </div>

        <div className="space-y-16">
          {studies.map((study, index) => (
            <div key={study.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <SafeImage
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  fallback="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <span className="text-primary-600 font-semibold">Cliente: {study.client}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {study.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8">{study.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Tecnologías</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Características</h3>
                    <ul className="space-y-2">
                      {study.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Resultados</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={20} className="text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 font-semibold">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Ver Proyecto en Vivo
                    </a>
                  )}
                  <a
                    href={`/servicios/${params.slug}/demo`}
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Ver Ejemplo en Vivo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {studies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-8">
              Próximamente agregaremos más casos de estudio para este servicio.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contáctanos para tu Proyecto
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

