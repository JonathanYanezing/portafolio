'use client';

import { useState, useEffect } from 'react';
import SafeImage from './SafeImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Desarrollo Web Moderno',
    subtitle: 'Soluciones Innovadoras',
    description: 'Creamos experiencias web excepcionales con las últimas tecnologías',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    cta: 'Ver Proyectos',
    ctaLink: '/portfolio',
  },
  {
    id: 2,
    title: 'E-commerce Profesional',
    subtitle: 'Tiendas Online',
    description: 'Plataformas de comercio electrónico completas y escalables',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80',
    cta: 'Explorar Tienda',
    ctaLink: '/servicios/ecommerce/demo',
  },
  {
    id: 3,
    title: 'Diseño UI/UX',
    subtitle: 'Experiencias Únicas',
    description: 'Diseños intuitivos que conectan con tus usuarios',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80',
    cta: 'Ver Servicios',
    ctaLink: '/servicios',
  },
  {
    id: 4,
    title: 'Aplicaciones Móviles',
    subtitle: 'iOS y Android',
    description: 'Apps nativas e híbridas con las mejores tecnologías',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80',
    cta: 'Ver Demo',
    ctaLink: '/servicios/aplicaciones-moviles/demo',
  },
  {
    id: 5,
    title: 'Landing Pages',
    subtitle: 'Conversión Optimizada',
    description: 'Páginas de aterrizaje que convierten visitantes en clientes',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80',
    cta: 'Ver Ejemplo',
    ctaLink: '/servicios/landing-pages/demo',
  },
  {
    id: 6,
    title: 'Optimización SEO',
    subtitle: 'Máxima Visibilidad',
    description: 'Mejora tu posicionamiento y aumenta tu tráfico orgánico',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c92a?w=1920&q=80',
    cta: 'Saber Más',
    ctaLink: '/servicios/optimizacion-seo/demo',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full w-full">
            <SafeImage
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              fallback="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <div className="max-w-3xl mx-auto animate-fade-in">
                  <p className="text-lg md:text-xl mb-4 text-primary-300 font-medium">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <a
                    href={slide.ctaLink}
                    className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-110 shadow-2xl"
                  >
                    {slide.cta} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-primary-600'
                : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

