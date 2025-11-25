import Link from 'next/link';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-2">Ing Jonathan Yanez</h3>
            <p className="text-primary-400 mb-2 font-semibold">Ingetsoport</p>
            <p className="text-gray-400">
              Desarrollo web profesional con las últimas tecnologías y mejores prácticas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Desarrollo Web</li>
              <li>E-commerce</li>
              <li>Landing Pages</li>
              <li>Diseño UI/UX</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Github"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Ing Jonathan Yanez - Ingetsoport. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

