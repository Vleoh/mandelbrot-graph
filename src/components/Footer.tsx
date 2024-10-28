import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#1A0329] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Mandelbrot Graph. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}