import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.3 });

  const services = [
    {
      title: 'Residential Moving',
      description: 'Seamless home relocations with meticulous care for your belongings.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: ['Packing & Unpacking', 'Furniture Assembly', 'Secure Transport']
    },
    {
      title: 'Commercial Moving',
      description: 'Minimize downtime with our efficient office relocation services.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['Office Equipment', 'IT Infrastructure', 'After-Hours Service']
    },
    {
      title: 'Long Distance',
      description: 'Cross-country moves executed with precision and reliability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ['Interstate Moving', 'Real-time Tracking', 'Guaranteed Delivery']
    },
    {
      title: 'Packing Services',
      description: 'Expert packing with premium materials for maximum protection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      features: ['Quality Materials', 'Expert Packing', 'Labeling System']
    },
    {
      title: 'Storage Solutions',
      description: 'Secure, climate-controlled storage facilities for any duration.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      features: ['Climate Control', '24/7 Security', 'Flexible Terms']
    },
    {
      title: 'Specialty Items',
      description: 'White-glove service for valuable and delicate items.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      features: ['Custom Crating', 'Insurance Coverage', 'Expert Handlers']
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-10 sm:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Everything You Need
            <br />
            For Your Move
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Comprehensive solutions tailored to make your relocation seamless and stress-free.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 transition-all duration-500 border-2 ${
                activeService === index
                  ? 'border-blue-600 shadow-xl shadow-blue-600/10 -translate-y-2 scale-[1.02]'
                  : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg'
              } ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-colors ${
                activeService === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-700">
                    <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className={`mt-10 sm:mt-16 bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Need Help Choosing a Service?
          </h3>
          <p className="text-gray-300 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our moving experts are ready to assess your needs and recommend the perfect solution.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
          >
            <span>Speak with an Expert</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
