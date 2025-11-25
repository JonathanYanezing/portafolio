'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      alert('¡Mensaje enviado exitosamente! Te contactaremos en menos de 24 horas.');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section - Minimalista */}
      <section className="relative py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
            Transformamos tus ideas en soluciones digitales exitosas
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* Contact Cards - Minimalistas con un color cada una */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">Email</h3>
            <a 
              href="mailto:ingenieriatecnica23@gmail.com" 
              className="text-blue-600 hover:text-blue-700 text-lg font-semibold transition-colors break-all"
            >
              ingenieriatecnica23@gmail.com
            </a>
          </div>

          <div className="bg-purple-50 border-2 border-purple-100 rounded-2xl p-8 hover:border-purple-300 transition-all">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">Teléfono</h3>
            <p className="text-purple-600 text-lg font-semibold">+593 xxxxxxxxxx</p>
          </div>

          <div className="bg-green-50 border-2 border-green-100 rounded-2xl p-8 hover:border-green-300 transition-all">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">Ubicación</h3>
            <p className="text-green-600 text-lg font-semibold">Quito, Ecuador</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form - Minimalista */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-10">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  Envíanos un Mensaje
                </h2>
                <p className="text-gray-500 font-medium mt-1">Te responderemos pronto</p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">¡Mensaje Enviado!</h3>
                <p className="text-lg text-gray-600 font-semibold">Te contactaremos en menos de 24 horas</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-900 font-bold mb-2">Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all text-lg bg-white"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 font-bold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all text-lg bg-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-bold mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all text-lg bg-white"
                      placeholder="+593 xxxxxxxxxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-900 font-bold mb-2">Asunto *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all text-lg bg-white"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="mobile">Aplicación Móvil</option>
                    <option value="design">Diseño UI/UX</option>
                    <option value="seo">Optimización SEO</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-900 font-bold mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all resize-none text-lg bg-white"
                    placeholder="Cuéntanos sobre tu proyecto, presupuesto y objetivos..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-5 rounded-xl font-black text-lg transition-all flex items-center justify-center space-x-3"
                >
                  <Send size={20} />
                  <span>Enviar Mensaje</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Info Sidebar - Minimalista */}
          <div className="space-y-6">
            <div className="bg-gray-900 text-white rounded-2xl p-10">
              <div className="flex items-center space-x-3 mb-8">
                <Clock className="w-6 h-6" />
                <h3 className="text-2xl font-black">Horario de Atención</h3>
              </div>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span className="font-semibold">Lunes - Viernes</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span className="font-semibold">Sábados</span>
                  <span className="font-bold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Domingos</span>
                  <span className="font-bold">Cerrado</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-10">
              <h3 className="text-2xl font-black text-gray-900 mb-8">¿Por Qué Contactarnos?</h3>
              <div className="space-y-4">
                {[
                  'Respuesta en menos de 24 horas',
                  'Consultoría gratuita inicial',
                  'Presupuestos personalizados',
                  'Soporte post-lanzamiento',
                  'Garantía de satisfacción',
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-10">
              <h3 className="text-2xl font-black text-gray-900 mb-8">Estadísticas</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900 mb-2">50+</div>
                  <div className="text-gray-600 font-semibold">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900 mb-2">100+</div>
                  <div className="text-gray-600 font-semibold">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600 font-semibold">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600 font-semibold">Soporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps - Minimalista */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gray-900 p-6 text-white">
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6" />
              <h3 className="text-2xl font-black">Nuestra Ubicación</h3>
            </div>
            <p className="text-gray-400 font-medium mt-2">Quito, Ecuador</p>
          </div>
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.785931123456!2d-78.4678!3d-0.1807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito%2C%20Ecuador!5e0!3m2!1ses!2sus!4v1234567890123!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Quito, Ecuador"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
