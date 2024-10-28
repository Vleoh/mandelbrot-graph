import React from 'react';
import { Printer, Palette, Wrench, Users } from 'lucide-react';

const services = [
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Impresión Digital",
    desc: "Vinilos, lonas, microperforados y más"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Instalación",
    desc: "Servicio profesional de colocación"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Diseño Gráfico",
    desc: "Equipo creativo especializado"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Asesoramiento",
    desc: "Consultoría personalizada"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2A0944]">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-[#2A0944] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}