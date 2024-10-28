import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="py-20 bg-[#2A0944] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Contactanos</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4" />
                <span>+54 11 5667-8270</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4" />
                <span>mandelbrotgraph@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4" />
                <span>Obrien 979, Malvinas Argentinas</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-[#2A0944] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Enviar Mensaje
              <Send className="ml-2 w-4 h-4" />
            </button>
            
            {isFormSubmitted && (
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                Mensaje enviado con éxito
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}