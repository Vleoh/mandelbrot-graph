import React from 'react';

const brands = [
  'JPH Lions', 'Bioseif', 'World IT', 'Carrefour'
];

export function Brands() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2A0944]">
          Marcas que Confían en Nosotros
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
              <span className="text-xl font-semibold text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}