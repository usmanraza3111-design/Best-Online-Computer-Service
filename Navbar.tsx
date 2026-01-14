
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_NAME, NAV_LINKS, PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-black/30 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-400 font-bold text-xl md:text-2xl tracking-tight uppercase">
                Tajammal <span className="text-white">Services</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                } relative px-1 py-2 text-sm font-medium transition-colors group`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg btn-glow-blue"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-md border-t border-white/10 animate-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === link.path
                    ? 'bg-blue-900/50 text-white'
                    : 'text-gray-300 hover:bg-gray-800/70 hover:text-white'
                } block px-3 py-3 rounded-md text-base font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="block w-full text-center bg-blue-600 text-white mt-2 px-3 py-4 rounded-md text-base font-bold flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Now: {PHONE_NUMBER}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
