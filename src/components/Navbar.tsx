import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2A0944] text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            MANDELBROT GRAPH
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="hover:text-purple-300 px-3 py-2">Inicio</a>
              <a href="#servicios" className="hover:text-purple-300 px-3 py-2">Servicios</a>
              <a href="#portfolio" className="hover:text-purple-300 px-3 py-2">Portfolio</a>
              <a href="#contacto" className="hover:text-purple-300 px-3 py-2">Contacto</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block hover:text-purple-300 px-3 py-2">Inicio</a>
            <a href="#servicios" className="block hover:text-purple-300 px-3 py-2">Servicios</a>
            <a href="#portfolio" className="block hover:text-purple-300 px-3 py-2">Portfolio</a>
            <a href="#contacto" className="block hover:text-purple-300 px-3 py-2">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}