
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Appointment } from './pages/Appointment';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { BRAND_NAME, TAGLINE, WHATSAPP_NUMBER, INSTAGRAM_LINK } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Animated Announcement Bar */}
      <div className="bg-brand-gold text-white text-[10px] sm:text-xs py-2 font-sans tracking-[0.2em] uppercase overflow-hidden border-b border-white/10">
        <div className="marquee-container">
          <div className="marquee-content">
            <span>{TAGLINE}</span>
            <span>{TAGLINE}</span>
            <span>{TAGLINE}</span>
            <span>{TAGLINE}</span>
          </div>
          {/* Duplicate for seamless looping */}
          <div className="marquee-content" aria-hidden="true">
            <span>{TAGLINE}</span>
            <span>{TAGLINE}</span>
            <span>{TAGLINE}</span>
            <span>{TAGLINE}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-brand-offwhite/95 backdrop-blur-md border-b border-brand-gold/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-tighter text-brand-dark leading-none">SHAHI</span>
            <span className="font-sans text-[8px] sm:text-[10px] tracking-[0.3em] text-brand-gold">BOUTIQUE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-[11px] uppercase tracking-widest transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-brand-gold font-semibold' : 'text-brand-dark hover:text-brand-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/appointment"
              className="bg-brand-dark text-white px-5 py-2.5 text-[11px] uppercase tracking-widest hover:bg-brand-gold transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-dark p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-brand-dark transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-brand-dark transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-brand-dark transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-dark/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden bg-brand-offwhite fixed top-[86px] sm:top-[94px] left-0 w-full border-b border-brand-gold/20 flex flex-col items-center py-10 space-y-8 shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-sans text-sm uppercase tracking-[0.2em] transition-colors ${
              location.pathname === link.path ? 'text-brand-gold font-bold' : 'text-brand-dark'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          to="/appointment"
          className="bg-brand-dark text-white px-12 py-4 text-xs uppercase tracking-widest hover:bg-brand-gold transition-colors"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-dark text-brand-offwhite pt-20 pb-10 px-6 sm:px-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
      <div className="text-center md:text-left">
        <h3 className="font-serif text-3xl sm:text-4xl mb-6 italic">Shahi Boutique</h3>
        <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
          Crafting timeless elegance and premium designer wear. 
          Expert craftsmanship from the heart of Malerkotla, Punjab.
        </p>
      </div>
      <div className="text-center md:text-left">
        <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-8 text-brand-gold">Quick Links</h4>
        <ul className="space-y-4 font-sans text-sm">
          <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
          <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
          <li><Link to="/appointment" className="hover:text-brand-gold transition-colors">Book Appointment</Link></li>
          <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-8 text-brand-gold">Connect</h4>
        <div className="flex justify-center md:justify-start space-x-8 mb-8">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">@shahiboutique_mlk</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">WhatsApp</a>
        </div>
        <p className="text-sm text-gray-400">Malerkotla, Punjab, India</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-[10px] text-gray-500 tracking-widest uppercase">
      &copy; {new Date().getFullYear()} {BRAND_NAME}. ALL RIGHTS RESERVED.
    </div>
  </footer>
);

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 bg-brand-gold text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 active:scale-90 ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'}`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-24 sm:pt-28 md:pt-32 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
