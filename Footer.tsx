
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Mail } from 'lucide-react';
import { BUSINESS_NAME, PHONE_NUMBER, ADDRESS, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400 uppercase tracking-wider">{BUSINESS_NAME}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for professional computer, CV, and graphics services in Chichawatni. 
              We deliver quality work with reliability and speed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">Call: {PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">WhatsApp: {PHONE_NUMBER}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p className="mt-1">Designed for excellence in Chichawatni, Sahiwal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
