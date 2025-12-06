import { useState, useEffect, useRef } from 'react';
import { useCountUp } from '../hooks/useScrollAnimation';

// Word-by-word animated text for the main headline
const AnimatedHeadline = ({ words, delay = 0, className = '' }) => {
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex overflow-hidden">
          {word.split('').map((char, charIndex) => {
            const totalDelay = delay + wordIndex * 0.15 + charIndex * 0.03;
            return (
              <span
                key={charIndex}
                className="inline-block word-letter-reveal"
                style={{
                  animationDelay: `${totalDelay}s`,
                  animationFillMode: 'both'
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

const AnimatedCounter = ({ end, suffix = '', label }) => {
  const [ref, count] = useCountUp(end, 2000);

  return (
    <div ref={ref} className="stat-item group cursor-pointer text-center sm:text-left">
      <div className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 font-medium uppercase tracking-wide">{label}</div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Image2.png" alt="Mejdan Inc." className="h-10 sm:h-12 w-auto" />
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

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="px-4 py-4 space-y-3 bg-white border-t border-gray-100">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
              Contact
            </button>
            <a href="tel:+1234567890" className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with gradient background */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-12 lg:pb-0 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Animated floating shapes - smaller on mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-0 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Split Layout */}
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-8 shadow-lg shadow-blue-600/25">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Rated #1 in NYC
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-4 sm:mb-8 leading-[1.1] tracking-tight">
              <span className="block">
                <AnimatedHeadline words={['Professional']} delay={0.3} />
              </span>
              <span className="block">
                <AnimatedHeadline words={['Moving.']} delay={0.6} />
              </span>
              <span className="block text-blue-600">
                <AnimatedHeadline words={['Done', 'Right.']} delay={0.9} />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Experience stress-free relocation with NYC's most trusted moving company.
              We handle every detail so you don't have to.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button
                onClick={scrollToContact}
                className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-1 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 overflow-hidden"
              >
                <span className="relative z-10">Get Free Estimate</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <a
                href="tel:+1234567890"
                className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(123) 456-7890</span>
              </a>
            </div>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <AnimatedCounter end={500} suffix="+" label="Customers" />
              <AnimatedCounter end={10} suffix="+" label="Years" />
              <AnimatedCounter end={5} suffix=".0" label="Rating" />
            </div>
          </div>

          {/* Right Image with parallax - hidden on mobile, shown smaller on tablet */}
          <div
            className={`relative transition-all duration-1000 delay-300 hidden lg:block ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-3xl transform rotate-2 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-3xl transform -rotate-1 opacity-10 group-hover:-rotate-2 transition-transform duration-500"></div>

              <img
                src="/Image1.png"
                alt="Mejdan Inc. Team"
                className="relative rounded-2xl shadow-2xl w-full group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating Badge with enhanced styling */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 float-enhanced border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Licensed & Insured</div>
                    <div className="text-sm text-gray-500">Fully certified movers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1 animate-bounce">
            <div className="w-1.5 h-2.5 bg-blue-500 rounded-full mx-auto scroll-dot"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
