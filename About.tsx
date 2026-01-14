
import React from 'react';
import { BUSINESS_NAME, ADDRESS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200&h=800" 
              alt="Office" 
              className="rounded-3xl shadow-2xl shadow-blue-500/20 border-2 border-gray-200"
            />
            <div className="absolute -bottom-10 -right-10 hidden sm:block bg-blue-600 text-white p-10 rounded-3xl shadow-xl max-w-xs">
              <span className="text-4xl font-bold">100%</span>
              <p className="text-blue-100 mt-2 font-medium italic">Commitment to Quality Work</p>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              About <br/>
              <span className="text-blue-600">{BUSINESS_NAME}</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tajammal Computer & Graphics Services is a trusted local service provider in Chichawatni, dedicated to offering fast, affordable, and high-quality computer and graphic solutions. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand the importance of a professional CV in today's job market and the impact of clean graphic designs. Our mission is to bridge the gap between technology and your needs, whether it's academic, professional, or commercial.
            </p>
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
               <h3 className="text-blue-800 font-bold mb-2">Our Vision</h3>
               <p className="text-blue-700 text-sm italic">
                 "To be the leading provider of digital and printing services in Sahiwal district, empowering our community through professional documentation and design."
               </p>
            </div>
            <div className="pt-4 flex flex-col gap-2">
              <p className="text-gray-800 font-bold">📍 Located at:</p>
              <p className="text-gray-600">{ADDRESS}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
