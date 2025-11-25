'use client';

import Link from 'next/link';
import { ArrowLeft, Menu, X, Code, Smartphone, Globe, Zap, Shield, Rocket, CheckCircle, Star, Users, Award, TrendingUp, Mail, Phone, MapPin, Building2, Briefcase, Target, BarChart3, Play, ArrowRight, Calendar, Clock, CheckCircle2, BarChart, PieChart, LineChart, Activity, DollarSign, FileText, Settings, Bell, Search, Filter, TrendingDown, Download, Eye } from 'lucide-react';
import { useState } from 'react';

export default function DesarrolloWebDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeDashboard, setActiveDashboard] = useState('overview');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowContactModal(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      alert('¡Gracias! Hemos recibido tu mensaje. Nos pondremos en contacto contigo en las próximas 24 horas.');
    }, 2000);
  };

  const dashboardStats = [
    { label: 'Ingresos Mensuales', value: '$245,890', change: '+12.5%', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { label: 'Ventas Totales', value: '1,247', change: '+8.2%', icon: BarChart, color: 'from-blue-500 to-cyan-500' },
    { label: 'Clientes Activos', value: '3,456', change: '+15.3%', icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Tareas Completadas', value: '892', change: '+22.1%', icon: CheckCircle, color: 'from-orange-500 to-red-500' },
  ];

  const salesData = [
    { month: 'Ene', value: 18500, target: 20000 },
    { month: 'Feb', value: 22000, target: 20000 },
    { month: 'Mar', value: 19800, target: 20000 },
    { month: 'Abr', value: 24500, target: 20000 },
    { month: 'May', value: 26800, target: 20000 },
    { month: 'Jun', value: 28900, target: 20000 },
  ];

  const maxValue = Math.max(...salesData.map(d => Math.max(d.value, d.target)));

  const recentActivities = [
    { type: 'venta', user: 'María González', action: 'Completó una venta de $1,250', time: 'Hace 5 minutos', icon: DollarSign },
    { type: 'tarea', user: 'Carlos Rodríguez', action: 'Completó tarea: Revisión de inventario', time: 'Hace 15 minutos', icon: CheckCircle },
    { type: 'cliente', user: 'Ana Martínez', action: 'Nuevo cliente registrado', time: 'Hace 30 minutos', icon: Users },
    { type: 'reporte', user: 'Sistema', action: 'Reporte mensual generado', time: 'Hace 1 hora', icon: FileText },
  ];

  const salesList = [
    { id: 'S-001', client: 'Corporación ABC', amount: 12500, status: 'Completada', date: '2024-01-15' },
    { id: 'S-002', client: 'Empresa XYZ', amount: 8900, status: 'Pendiente', date: '2024-01-14' },
    { id: 'S-003', client: 'Tech Solutions', amount: 15600, status: 'Completada', date: '2024-01-13' },
    { id: 'S-004', client: 'Global Corp', amount: 22100, status: 'Completada', date: '2024-01-12' },
    { id: 'S-005', client: 'Startup Inc', amount: 6800, status: 'En Proceso', date: '2024-01-11' },
  ];

  const clientsList = [
    { name: 'Corporación ABC', email: 'contacto@abc.com', status: 'Activo', revenue: '$125,000', projects: 5, avatar: 'A' },
    { name: 'Empresa XYZ', email: 'info@xyz.com', status: 'Activo', revenue: '$89,500', projects: 3, avatar: 'X' },
    { name: 'Tech Solutions', email: 'hello@tech.com', status: 'Activo', revenue: '$156,200', projects: 7, avatar: 'T' },
    { name: 'Global Corp', email: 'contact@global.com', status: 'Activo', revenue: '$221,800', projects: 4, avatar: 'G' },
  ];

  const reports = [
    { title: 'Reporte Mensual - Enero 2024', type: 'Mensual', date: '2024-01-31', downloads: 45, views: 128 },
    { title: 'Análisis de Ventas Q4 2023', type: 'Trimestral', date: '2023-12-31', downloads: 32, views: 89 },
    { title: 'Reporte de Clientes Activos', type: 'Mensual', date: '2024-01-15', downloads: 28, views: 156 },
    { title: 'Análisis de Rendimiento', type: 'Anual', date: '2023-12-31', downloads: 67, views: 234 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Profesional */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/portfolio" 
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-semibold px-3 py-2 rounded-lg transition-colors hover:bg-gray-50"
              >
                <ArrowLeft size={18} />
                <span className="hidden sm:inline text-sm">Volver al Portafolio</span>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-black text-gray-900">TechCorp Solutions</div>
                  <div className="text-xs text-gray-500">Sistema de Gestión Empresarial</div>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => setActiveDashboard('overview')} className={`font-semibold transition-colors ${activeDashboard === 'overview' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'}`}>Dashboard</button>
              <button onClick={() => setActiveDashboard('ventas')} className={`font-semibold transition-colors ${activeDashboard === 'ventas' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'}`}>Ventas</button>
              <button onClick={() => setActiveDashboard('clientes')} className={`font-semibold transition-colors ${activeDashboard === 'clientes' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'}`}>Clientes</button>
              <button onClick={() => setActiveDashboard('reportes')} className={`font-semibold transition-colors ${activeDashboard === 'reportes' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'}`}>Reportes</button>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JD</span>
              </div>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 space-y-3">
              <button onClick={() => {setActiveDashboard('overview'); setMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-blue-600 font-semibold py-2">Dashboard</button>
              <button onClick={() => {setActiveDashboard('ventas'); setMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-blue-600 font-semibold py-2">Ventas</button>
              <button onClick={() => {setActiveDashboard('clientes'); setMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-blue-600 font-semibold py-2">Clientes</button>
              <button onClick={() => {setActiveDashboard('reportes'); setMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-blue-600 font-semibold py-2">Reportes</button>
            </div>
          </div>
        )}
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-lg">{stat.change}</span>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeDashboard === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chart - Gráfico Real */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">Ventas del Mes</h3>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold text-sm">Mes</button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-semibold text-sm">Año</button>
                </div>
              </div>
              <div className="h-64 relative">
                <div className="absolute inset-0 flex items-end justify-between space-x-2">
                  {salesData.map((data, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center space-y-2">
                      <div className="relative w-full flex flex-col items-center justify-end h-full">
                        <div className="w-full flex items-end justify-center space-x-1">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t-lg relative group"
                            style={{ height: `${(data.value / maxValue) * 100}%` }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              ${data.value.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs font-semibold text-gray-600 mt-2">{data.month}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 font-semibold">Tendencia</div>
                    <div className="text-2xl font-black text-green-600">+18.5%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 font-semibold">vs mes anterior</div>
                    <div className="text-lg font-bold text-gray-900">$245,890</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Actividad Reciente</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, i) => {
                  const Icon = activity.icon;
                  return (
                    <div key={i} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{activity.user}</div>
                        <div className="text-sm text-gray-600">{activity.action}</div>
                        <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeDashboard === 'ventas' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">Lista de Ventas</h3>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Buscar ventas..."
                      className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Nueva Venta
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-black text-gray-900">ID</th>
                      <th className="text-left py-4 px-4 font-black text-gray-900">Cliente</th>
                      <th className="text-left py-4 px-4 font-black text-gray-900">Monto</th>
                      <th className="text-left py-4 px-4 font-black text-gray-900">Estado</th>
                      <th className="text-left py-4 px-4 font-black text-gray-900">Fecha</th>
                      <th className="text-left py-4 px-4 font-black text-gray-900">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesList.map((sale, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-gray-900">{sale.id}</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{sale.client}</td>
                        <td className="py-4 px-4 font-black text-gray-900">${sale.amount.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                            sale.status === 'Completada' ? 'bg-green-100 text-green-700' :
                            sale.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {sale.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600 font-semibold">{sale.date}</td>
                        <td className="py-4 px-4">
                          <button className="text-blue-600 hover:text-blue-700 font-semibold">Ver</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeDashboard === 'clientes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">Clientes Activos</h3>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Buscar clientes..."
                      className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Nuevo Cliente
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clientsList.map((client, i) => (
                  <div key={i} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-black text-xl">{client.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-black text-xl text-gray-900">{client.name}</div>
                        <div className="text-sm text-gray-600">{client.email}</div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">
                        {client.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-600 font-semibold mb-1">Ingresos</div>
                        <div className="text-xl font-black text-gray-900">{client.revenue}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 font-semibold mb-1">Proyectos</div>
                        <div className="text-xl font-black text-gray-900">{client.projects}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeDashboard === 'reportes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">Reportes Generados</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Generar Reporte</span>
                </button>
              </div>
              <div className="space-y-4">
                {reports.map((report, i) => (
                  <div key={i} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <FileText className="w-6 h-6 text-blue-600" />
                          <div>
                            <div className="font-black text-xl text-gray-900">{report.title}</div>
                            <div className="text-sm text-gray-600">
                              {report.type} • {report.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 mt-4">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm font-semibold">{report.views} visualizaciones</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Download className="w-4 h-4" />
                            <span className="text-sm font-semibold">{report.downloads} descargas</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-semibold hover:bg-blue-100 transition-colors flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>Ver</span>
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span>Descargar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Additional Sections for Overview */}
        {activeDashboard === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Top Products */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Productos Más Vendidos</h3>
              <div className="space-y-4">
                {[
                  { name: 'Producto Premium A', sales: 245, revenue: '$12,450', trend: '+15%' },
                  { name: 'Producto Estándar B', sales: 189, revenue: '$8,920', trend: '+8%' },
                  { name: 'Producto Básico C', sales: 156, revenue: '$4,680', trend: '+22%' },
                ].map((product, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div>
                      <div className="font-bold text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-600">{product.sales} ventas</div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-gray-900">{product.revenue}</div>
                      <div className="text-sm text-green-600 font-semibold">{product.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Performance */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Rendimiento del Equipo</h3>
              <div className="space-y-4">
                {[
                  { name: 'María González', role: 'Gerente de Ventas', performance: 98, sales: '$45,230' },
                  { name: 'Carlos Rodríguez', role: 'Ejecutivo Comercial', performance: 92, sales: '$38,150' },
                  { name: 'Ana Martínez', role: 'Asesora de Clientes', performance: 87, sales: '$32,890' },
                ].map((member, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-bold text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-600">{member.role}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-gray-900">{member.performance}%</div>
                        <div className="text-sm text-gray-600">{member.sales}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                        style={{ width: `${member.performance}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowContactModal(false)}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-10 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-gray-900">Solicitar Demo</h2>
              <button onClick={() => setShowContactModal(false)} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all">
                <X size={24} />
              </button>
            </div>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</p>
                <p className="text-gray-600">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:outline-none transition-all"
                      placeholder="+593 99 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Empresa</label>
                    <input 
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:outline-none transition-all"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje *</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 focus:outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tu empresa y necesidades..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-5 rounded-xl font-black text-lg transition-all shadow-xl transform hover:scale-105"
                >
                  Solicitar Demo Gratuita
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
