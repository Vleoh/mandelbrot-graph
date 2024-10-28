import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1588412079929-790b9f593d8e?auto=format&fit=crop&q=80&w=1920",
    title: "Impresión de Gran Formato",
    desc: "Calidad excepcional en cada proyecto"
  },
  {
    url: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=1920",
    title: "Señalética Corporativa",
    desc: "Soluciones visuales que destacan"
  },
  {
    url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1920",
    title: "Diseño Personalizado",
    desc: "Creatividad que transforma espacios"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="inicio" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].url}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].desc}</p>
          <a
            href="#contacto"
            className="bg-[#2A0944] hover:bg-[#3B0B63] text-white font-bold py-3 px-8 rounded-full inline-flex items-center"
          >
            Solicitar Presupuesto
            <ChevronRight className="ml-2" />
          </a>
        </div>
      </div>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}