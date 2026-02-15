
import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

export const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    service: 'Custom Stitching',
    date: '',
    time: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `New Appointment Request – Shahi Boutique\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nCity: ${formData.city}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\nDetails: ${formData.details}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-offwhite py-16 sm:py-24 px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden animate-fadeIn rounded-lg border border-brand-gold/10">
        <div className="bg-brand-dark text-white py-16 sm:py-20 text-center px-8 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h1 className="font-serif text-4xl sm:text-6xl italic mb-6 tracking-tight">Book A Consultation</h1>
            <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.4em] text-brand-gold max-w-sm mx-auto font-medium">
              Private Measuring & Bespoke Design Services
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-10 sm:p-20 space-y-12 sm:space-y-16">
          <div className="space-y-12">
            {/* Personal Details Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
              <div className="space-y-4 group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold group-focus-within:text-brand-gold transition-colors">
                  Full Name
                </label>
                <input 
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text" 
                  placeholder="Ex. Priya Kaur"
                  className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-brand-gold transition-all font-sans text-sm sm:text-base placeholder:text-gray-200 bg-transparent text-brand-dark"
                />
              </div>
              <div className="space-y-4 group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold group-focus-within:text-brand-gold transition-colors">
                  Contact Number
                </label>
                <input 
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-brand-gold transition-all font-sans text-sm sm:text-base placeholder:text-gray-200 bg-transparent text-brand-dark"
                />
              </div>
            </div>

            {/* Service Details Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
              <div className="space-y-4 group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold group-focus-within:text-brand-gold transition-colors">
                  City / Location
                </label>
                <input 
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  type="text" 
                  placeholder="Ex. Malerkotla, Punjab"
                  className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-brand-gold transition-all font-sans text-sm sm:text-base placeholder:text-gray-200 bg-transparent text-brand-dark"
                />
              </div>
              <div className="space-y-4 group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold group-focus-within:text-brand-gold transition-colors">
                  Desired Service
                </label>
                <div className="relative">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-brand-gold bg-transparent transition-all font-sans text-sm sm:text-base cursor-pointer appearance-none text-brand-dark"
                  >
                    <option value="Bridal Wear">Bridal Wear</option>
                    <option value="Designer Suit">Designer Suit</option>
                    <option value="Banarasi Jacket">Banarasi Jacket</option>
                    <option value="Custom Stitching">Custom Stitching</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none text-brand-gold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Slots Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
              <div className="space-y-4 group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold group-focus-within:text-brand-gold transition-colors">
                  Preferred Date
                </label>
                <input 
                  required
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date" 
                  className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-brand-gold transition-all font-sans text-sm sm:text-base bg-transparent text-brand-dark"
                />
              </div>
              <div className="space-y-4 group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold group-focus-within:text-brand-gold transition-colors">
                  Preferred Time
                </label>
                <input 
                  required
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  type="time" 
                  className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-brand-gold transition-all font-sans text-sm sm:text-base bg-transparent text-brand-dark"
                />
              </div>
            </div>

            {/* Additional Details Section */}
            <div className="space-y-4 group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold group-focus-within:text-brand-gold transition-colors">
                Additional Details & Special Requests
              </label>
              <textarea 
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                placeholder="Ex. Specific embroidery styles or fabric requirements..."
                className="w-full border border-gray-50 p-6 focus:outline-none focus:border-brand-gold transition-all font-sans text-sm sm:text-base placeholder:text-gray-200 bg-gray-50/30 rounded-sm text-brand-dark"
              ></textarea>
            </div>
          </div>

          <div className="pt-10 sm:pt-14 text-center">
            <button 
              type="submit"
              className="w-full sm:w-auto min-w-[300px] bg-brand-dark text-white px-12 py-5 text-xs sm:text-sm uppercase tracking-[0.35em] hover:bg-brand-gold transition-all duration-500 font-semibold shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:shadow-brand-gold/20 active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Request via WhatsApp
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-10 opacity-70">
              * A personal stylist will confirm your appointment shortly
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
