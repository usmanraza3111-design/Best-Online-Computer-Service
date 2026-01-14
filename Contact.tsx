
import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">Get In Touch</h1>
          <p className="mt-4 text-xl text-gray-600 italic">Call or WhatsApp now for immediate assistance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-gray-900">Call Us</h3>
              <p className="text-gray-600 text-sm">Direct Phone Line</p>
              <a href={`tel:${PHONE_NUMBER}`} className="text-blue-600 font-bold text-lg hover:underline">{PHONE_NUMBER}</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-full">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-bold text-gray-900">WhatsApp</h3>
              <p className="text-gray-600 text-sm">Fast Messaging</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold text-lg hover:underline">{PHONE_NUMBER}</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center space-y-4 sm:col-span-2">
              <div className="p-3 bg-red-100 text-red-600 rounded-full">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-gray-900">Our Address</h3>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                {ADDRESS}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center space-y-4 sm:col-span-2">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-gray-900">Working Hours</h3>
              <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 9:00 PM</p>
              <p className="text-gray-600 text-sm">Sunday: Please call before visiting</p>
            </div>
          </div>

          {/* Simple Inquiry Form or Map Placeholder */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Send size={24} className="text-blue-600" />
              Quick Inquiry
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Phone / WhatsApp</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="03xx-xxxxxxx" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                  <option>CV Making</option>
                  <option>MS Office Work</option>
                  <option>Graphic Design</option>
                  <option>Typing Services</option>
                  <option>Printing / Photocopy</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Describe your requirement..."></textarea>
              </div>
              <button 
                type="button" 
                onClick={() => alert('For instant response, please use the WhatsApp button!')}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
