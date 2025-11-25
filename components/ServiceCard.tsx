'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  slug?: string;
  color?: string;
}

export default function ServiceCard({ icon, title, description, slug, color = 'from-primary-500 to-primary-600' }: ServiceCardProps) {
  const content = (
    <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-primary-300 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl">
      {/* Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      <div className="relative p-8">
        {/* Icon */}
        <div className="mb-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-4xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          {description}
        </p>

        {/* CTA */}
        {slug && (
          <div className="flex items-center space-x-2 text-primary-600 font-bold group-hover:translate-x-2 transition-transform">
            <span>Ver Ejemplo en Vivo</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/servicios/${slug}`} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
