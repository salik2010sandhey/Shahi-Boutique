
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative h-[80vh] sm:h-[85vh] flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] hover:scale-110" 
      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/p/AF1QipNwq51FNCW3SGmUOxXtPdicelc2XQtjGFoc1gT1=s1360-w1360-h1020-rw")' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-[1.15] opacity-0 animate-fade-up">
        Shahi Boutique – <br className="hidden sm:block" />
        <span className="italic font-light">Elegance in Every Stitch</span>
      </h1>
      <p className="font-sans text-brand-beige text-[10px] sm:text-sm md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-10 max-w-md mx-auto sm:max-w-none opacity-0 animate-fade-up delay-300">
        Premium Custom Tailoring & Designer Wear for Women
      </p>
      <div className="opacity-0 animate-fade-up delay-500">
        <Link 
          to="/appointment"
          className="inline-block bg-white text-brand-dark px-8 sm:px-12 py-3.5 sm:py-4.5 font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-white transition-all duration-500 transform hover:-translate-y-1 shadow-lg"
        >
          Book Your Appointment
        </Link>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-20 sm:py-32 px-6 md:px-10 bg-brand-offwhite overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-20">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="relative max-w-lg mx-auto md:mx-0">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipOktr7XABxghxz87YtaRHdAvj2rZSZIK0_WcgwU=s1360-w1360-h1020-rw" 
            alt="Craftsmanship" 
            className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 w-full"
          />
          <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 border-4 sm:border-8 border-brand-gold w-24 h-24 sm:w-48 sm:h-48 z-[-1]"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6 sm:space-y-8 order-1 md:order-2 text-center md:text-left">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-dark italic">Our Legacy</h2>
        <div className="space-y-4 sm:space-y-6">
          <p className="font-sans text-brand-dark/70 leading-relaxed text-base sm:text-lg">
            Shahi Boutique stands as a symbol of tradition and modernity intertwined. Located in the heart of Malerkotla, we bring years of expertise in handling premium fabrics and intricate embroideries.
          </p>
          <p className="font-sans text-brand-dark/70 leading-relaxed text-base sm:text-lg">
            Every garment we create is a masterpiece of precision. Our experienced craftsmen ensure that from the initial measurement to the final stitch, your comfort and style are our only priority.
          </p>
        </div>
        <Link to="/gallery" className="inline-block text-brand-gold border-b-2 border-brand-gold/30 font-sans text-xs sm:text-sm uppercase tracking-widest py-2 hover:text-brand-dark hover:border-brand-dark transition-all duration-300">
          Explore Our Craftsmanship
        </Link>
      </div>
    </div>
  </section>
);

const CollectionCard = ({ title, image, category }: { title: string, image: string, category: string }) => (
  <div className="group relative overflow-hidden bg-brand-dark aspect-[3/4]">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40"
    />
    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 translate-y-6 sm:translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
      <span className="text-brand-gold text-[10px] uppercase tracking-widest mb-2 font-semibold">{category}</span>
      <h3 className="text-white font-serif text-2xl sm:text-3xl italic leading-tight">{title}</h3>
    </div>
  </div>
);

const FeaturedCollections = () => (
  <section className="py-20 sm:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl italic mb-6">The Collections</h2>
        <div className="w-20 h-0.5 bg-brand-gold mx-auto mb-6"></div>
        <p className="font-sans text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.4em]">Handcrafted Luxury Pieces</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <CollectionCard 
          title="Potli Purse" 
          category="Accessories" 
          image="https://lh3.googleusercontent.com/p/AF1QipMYj9S1I_OsafcBYB2y4aqoa7YXSMvwJga9F_9S=s1360-w1360-h1020-rw" 
        />
        <CollectionCard 
          title="Banarasi Jackets" 
          category="Occasion Wear" 
          image="https://lh3.googleusercontent.com/p/AF1QipPyl9gkS80SpctZlQHtAIoQGAYDCKbBI_-bIiNB=s1360-w1360-h1020-rw" 
        />
        <CollectionCard 
          title="Custom Bridal" 
          category="Bridal Wear" 
          image="https://lh3.googleusercontent.com/p/AF1QipP-lRGgjlt-tokBrG3f2Cxmkv-ivc9buLinhjWc=s1360-w1360-h1020-rw" 
        />
        <CollectionCard 
          title="Designer Suits" 
          category="Signature Wear" 
          image="https://lh3.googleusercontent.com/p/AF1QipP1IUY0mCdI6XTG5T3ogGmULtP6Yf2etUZhc8Dc=s1360-w1360-h1020-rw" 
        />
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-20 sm:py-32 bg-brand-beige/20">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <h2 className="font-serif text-3xl sm:text-5xl italic mb-16 sm:mb-24 text-center">Excellence in Craft</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
        {[
          { title: "Custom Tailoring", desc: "Every stitch tailored precisely to your unique measurements and preferences." },
          { title: "Exquisite Fabrics", desc: "Only the finest silks, brocades, and handcrafted fabrics sourced for you." },
          { title: "Precision Fit", desc: "Our signature fitting process ensures unparalleled comfort and elegance." },
          { title: "Global Shipping", desc: "Expert craftsmanship from Malerkotla, now reaching doorsteps worldwide." }
        ].map((item, idx) => (
          <div key={idx} className="space-y-5 group text-center sm:text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full mx-auto sm:mx-0 flex items-center justify-center border border-brand-gold/30 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500 shadow-sm">
              <span className="text-brand-gold text-xl sm:text-2xl group-hover:text-white font-serif italic">{idx + 1}</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-medium">{item.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-sans font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 sm:py-32 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="font-serif text-3xl sm:text-4xl italic mb-16">Client Reflections</h2>
      <div className="space-y-16 sm:space-y-20">
        {[
          { text: "The fit of my bridal lehenga was absolutely perfect. They understood exactly what I wanted and the delivery was on time!", author: "Amanpreet Kaur" },
          { text: "Best boutique in Malerkotla for designer suits. Their embroidery work is incredibly fine and clean.", author: "Mehak Sharma" },
          { text: "Great experience with their custom tailoring. The Banarasi jacket I got made is truly a head-turner at weddings.", author: "Gurpreet Singh" }
        ].map((t, i) => (
          <div key={i} className="animate-fadeIn">
            <div className="text-brand-gold text-4xl font-serif mb-4 leading-none">“</div>
            <p className="font-serif text-xl sm:text-2xl italic text-brand-dark mb-6 leading-relaxed"> {t.text}</p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[1px] bg-brand-gold"></div>
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">{t.author}</p>
              <div className="w-8 h-[1px] bg-brand-gold"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20 sm:py-32 bg-brand-dark text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20"></div>
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-10 leading-tight">Ready to craft your <br/><span className="italic text-brand-gold font-light">dream ensemble?</span></h2>
      <Link 
        to="/appointment"
        className="inline-block bg-brand-gold text-white px-10 sm:px-14 py-4 sm:py-5 font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all duration-500 shadow-2xl active:scale-95"
      >
        Start Your Journey
      </Link>
    </div>
  </section>
);

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedCollections />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
};
