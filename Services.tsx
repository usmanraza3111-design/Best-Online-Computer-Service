
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Professional Services</h1>
          <p className="text-xl text-gray-600">
            We provide a wide range of computer-related services with a focus on quality, accuracy, and customer satisfaction.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row gap-12 items-center p-8 rounded-3xl ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} shadow-lg border border-gray-200`}
            >
              <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Quick Turnaround
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Premium Quality
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Modern Designs
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Competitive Rates
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={`https://picsum.photos/seed/${service.id}/800/600`} 
                  alt={service.title} 
                  className="rounded-2xl shadow-lg w-full h-80 object-cover border-2 border-gray-200/50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
