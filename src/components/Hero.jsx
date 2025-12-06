import { useState, useEffect } from 'react';

// Animated text component
const AnimatedText = ({ text, delay = 0 }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-fade-in"
          style={{
            animationDelay: `${delay + index * 0.03}s`,
            animationFillMode: 'both'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Image2.png" alt="Mejdan Inc." className="h-12 w-auto" />
          </div>
          <div className="hidden lg:block text-center">
            <div className="font-bold text-xl text-gray-900">Mejdan Inc.</div>
            <div className="text-xs text-gray-600">NYC's Moving Experts</div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            <a href="tel:+1234567890" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with gradient background */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Animated floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Split Layout */}
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 relative z-10">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-6 animate-pulse">
              ⭐ Rated #1 in NYC
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 leading-tight">
              <AnimatedText text="Professional Moving." delay={0.2} />
              <br />
              <span className="text-blue-600">
                <AnimatedText text="Done Right." delay={0.8} />
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Experience stress-free relocation with NYC's most trusted moving company.
              We handle every detail so you don't have to.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <span>Get Free Estimate</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <a
                href="tel:+1234567890"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(123) 456-7890</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="group hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">500+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
              </div>
              <div className="group hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">10+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="group hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">5.0</div>
                <div className="text-sm text-gray-600 mt-1">Star Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image with parallax */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <img
                src="/Image1.png"
                alt="Mejdan Inc. Team"
                className="relative rounded-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating Badge with pulse animation */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Licensed & Insured</div>
                    <div className="text-sm text-gray-600">Fully certified movers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
