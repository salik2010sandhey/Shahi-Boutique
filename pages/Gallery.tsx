
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(GALLERY_IMAGES.map(img => img.category))];

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="bg-brand-offwhite py-16 sm:py-24 px-4 sm:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl italic">Our Masterpieces</h1>
          <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gray-400">Curated Signature Collection</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 sm:mb-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-8 py-2.5 sm:py-3 text-[9px] sm:text-[11px] uppercase tracking-[0.2em] transition-all duration-500 border rounded-full ${
                filter === cat ? 'bg-brand-dark text-white border-brand-dark shadow-lg' : 'bg-white text-gray-500 border-gray-100 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-8 animate-fadeIn">
          {filteredImages.map((img) => (
            <div key={img.id} className="group relative aspect-[3/4] overflow-hidden bg-brand-beige shadow-sm">
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay for all screens, but more interactive on desktop */}
              <div className="absolute inset-0 bg-brand-dark/20 sm:bg-brand-dark/0 sm:group-hover:bg-brand-dark/60 transition-all duration-700 flex flex-col items-center justify-end sm:justify-center p-4 sm:p-6 text-center">
                <div className="sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-700 space-y-1 sm:space-y-3">
                    <span className="text-brand-gold text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-bold bg-white/10 px-2 py-0.5 backdrop-blur-sm sm:bg-transparent">{img.category}</span>
                    <h3 className="text-white font-serif text-sm sm:text-2xl italic drop-shadow-md">{img.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-32 animate-pulse">
            <p className="font-serif text-2xl text-gray-300 italic">Adding new masterpieces to this collection soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};
