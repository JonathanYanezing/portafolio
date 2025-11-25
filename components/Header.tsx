'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/portfolio', label: 'Portafolio' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-700 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 text-white px-4 py-3 rounded-2xl font-extrabold text-lg shadow-2xl transform group-hover:scale-110 transition-all border-2 border-white/20 backdrop-blur-sm">
                <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent drop-shadow-lg">
                  ING
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent leading-tight drop-shadow-sm">
                Jonathan Yanez
              </span>
              <span className="text-xs md:text-sm text-primary-500 font-bold -mt-0.5 tracking-wider uppercase">
                Ingetsoport
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

