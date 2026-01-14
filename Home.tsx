
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, MessageSquare, Laptop, Zap, Star } from 'lucide-react';
import { SERVICES, PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-0 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen text-white flex items-center justify-center pt-20 overflow-hidden text-center sm:text-left">
        <div className="absolute inset-0 -z-20">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract technology background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/70 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold border border-white/20 shadow-sm animate-float">
                <Star size={16} className="text-yellow-400" />
                <span>Your Vision, Digitally Transformed</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                Best Online Computer Service
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
                From professional CVs that open doors to stunning graphics that capture attention, we provide premium digital services with precision and creative flair.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-5 pt-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-3 group btn-glow-blue"
                >
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 bg-green-500 text-white font-bold rounded-full border-2 border-green-500 hover:bg-green-600 shadow-lg transition-all flex items-center justify-center gap-3 group btn-glow-green"
                >
                  <MessageSquare size={20}/>
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            {/* You can add a graphic or animation here on the right side if you want in the future */}

          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Premium Solutions</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">
              Tailored computer and graphic services for professionals, students, and businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-gray-800/50 p-8 rounded-3xl shadow-lg hover:shadow-blue-500/10 border border-white/10 transition-all hover:-translate-y-2 flex flex-col items-start group relative overflow-hidden backdrop-blur-sm">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-[2] transition-transform duration-700 opacity-50"></div>

                <div className="relative p-4 bg-blue-600/20 text-blue-400 rounded-2xl mb-6 group-hover:bg-blue-500 group-hover:text-white group-hover:rotate-6 transition-all duration-300 ring-2 ring-blue-500/20">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow relative z-10 font-light">{service.description}</p>
                
                <Link to="/services" className="px-6 py-2.5 bg-gray-700/80 text-blue-300 font-semibold rounded-full text-sm inline-flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
                <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                </defs>
            </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            We're here to provide instant, expert assistance for your digital needs. Contact us now to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
             <a href={`tel:${PHONE_NUMBER}`} className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all hover:scale-105 w-full sm:w-auto btn-glow-blue">
               Call 0301-5768262
             </a>
             <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all hover:scale-105 hover:bg-white/10 w-full sm:w-auto flex items-center justify-center gap-3">
               <MessageSquare size={22} />
               Start Chat
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
