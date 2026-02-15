
import React from 'react';
import { WHATSAPP_NUMBER, INSTAGRAM_LINK, LOCATION } from '../constants';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-brand-offwhite pt-10 sm:pt-16 pb-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24 animate-fadeIn">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl italic mb-6">Connect With Us</h1>
          <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gray-400">Malerkotla &bull; Punjab &bull; Worldwide</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-start">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="bg-white p-8 sm:p-12 shadow-xl space-y-10 animate-fadeIn border-t-4 border-brand-gold">
              <div className="space-y-3">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Our Location</h3>
                <p className="font-serif text-2xl sm:text-3xl leading-snug">{LOCATION}</p>
                <p className="text-sm text-gray-400 font-light">Punjab, India - 148023</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Personal Concierge</h3>
                <p className="font-serif text-2xl sm:text-3xl">{WHATSAPP_NUMBER}</p>
                <p className="text-sm text-gray-400 font-light">Available for measurements & shipping queries.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-brand-dark text-white px-8 py-4.5 text-[10px] sm:text-xs uppercase tracking-widest hover:bg-brand-gold transition-all duration-500 shadow-lg active:scale-95"
                >
                  Message on WhatsApp
                </a>
                
                <a 
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-brand-dark text-brand-dark px-8 py-4.5 text-[10px] sm:text-xs uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all duration-500 active:scale-95"
                >
                  Follow @shahiboutique_mlk
                </a>
              </div>
            </div>

            <div className="bg-brand-dark p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="font-serif text-3xl italic mb-8 relative z-10">Visiting Hours</h3>
              <div className="space-y-6 font-sans text-xs sm:text-sm tracking-[0.2em] uppercase relative z-10">
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                  <span className="text-gray-400">Monday - Saturday</span>
                  <span>10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-brand-gold font-bold">By Invite Only</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 shadow-2xl space-y-12 animate-fadeIn order-1 lg:order-2 border-b-4 border-brand-gold">
            <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl italic">Inquiry Form</h2>
                <p className="text-xs text-gray-400 font-sans tracking-widest uppercase">General & Press Queries</p>
            </div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Your Name</label>
                <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm bg-transparent" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Email Address</label>
                <input type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm bg-transparent" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">How can we help?</label>
                <textarea rows={5} className="w-full border border-gray-100 p-4 focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm bg-gray-50/30"></textarea>
              </div>
              <button className="w-full bg-brand-dark text-white py-5 text-[10px] sm:text-xs uppercase tracking-[0.3em] hover:bg-brand-gold transition-all duration-500 shadow-xl font-bold">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
