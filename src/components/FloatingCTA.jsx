import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly 100vh)
      const shouldShow = window.scrollY > window.innerHeight * 0.8;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToContact}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-600/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Get a free quote"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></span>

      {/* Icon */}
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>

      {/* Text - hidden on very small screens */}
      <span className="hidden sm:inline">Get Free Quote</span>

      {/* Arrow that slides in on hover */}
      <svg
        className={`w-4 h-4 transition-all duration-300 ${
          isHovered ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  );
};

export default FloatingCTA;
