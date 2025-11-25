'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy el asistente virtual de Ing Jonathan Yanez. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponses = [
        'Gracias por tu mensaje. Puedo ayudarte con información sobre nuestros servicios de desarrollo web, e-commerce, diseño UI/UX y más. ¿Qué te interesa?',
        'Excelente pregunta. Nuestros servicios incluyen desarrollo web moderno, tiendas online, landing pages y aplicaciones móviles. ¿Quieres conocer más detalles?',
        'Puedo ayudarte a encontrar información sobre nuestros proyectos, servicios o contactar con nuestro equipo. ¿Qué necesitas?',
        'Si tienes alguna pregunta específica sobre nuestros servicios o quieres solicitar un presupuesto, puedes usar el formulario de contacto o escribirme aquí.',
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white p-3 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50"
          aria-label="Abrir asistente virtual"
        >
          <MessageCircle size={32} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                <Bot size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Asistente Virtual</h3>
                <p className="text-xs text-primary-100">Ingetsoport - En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Cerrar asistente"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Bot size={18} className="text-primary-600" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-xs">
                    Tú
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-all"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white p-3 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                aria-label="Enviar mensaje"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

