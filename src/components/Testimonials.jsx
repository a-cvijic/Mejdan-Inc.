import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Brooklyn Resident',
      quote: 'Mejdan Inc. made our move from Manhattan to Brooklyn completely stress-free. The team was professional, careful with our belongings, and finished ahead of schedule. Highly recommend!',
      rating: 5,
      initials: 'SM'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      quote: 'We needed to relocate our entire office over a weekend. Mejdan delivered flawlessly - zero downtime on Monday. Their commercial moving expertise is unmatched.',
      rating: 5,
      initials: 'MC'
    },
    {
      name: 'Jessica Rodriguez',
      role: 'Upper East Side',
      quote: 'I was nervous about moving my grandmother\'s antique furniture. The Mejdan team treated every piece like it was their own family heirloom. Not a scratch!',
      rating: 5,
      initials: 'JR'
    },
    {
      name: 'David Thompson',
      role: 'Long Island Move',
      quote: 'Third time using Mejdan for a move. They\'ve never let me down. Fair pricing, great communication, and the hardest working crew I\'ve ever seen.',
      rating: 5,
      initials: 'DT'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the hundreds of satisfied customers who trusted us with their moves.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Glassmorphism card */}
          <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            {/* Quote icon */}
            <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="pt-4 sm:pt-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text with animation */}
              <blockquote
                key={activeIndex}
                className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-6 sm:mb-8 animate-fadeIn"
              >
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Customer info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                    {testimonials[activeIndex].initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base sm:text-lg">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'bg-blue-600 w-6 sm:w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-100/50 via-transparent to-blue-100/50 rounded-full blur-3xl"></div>
        </div>

        {/* Trust badges */}
        <div
          className={`mt-10 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-medium">500+ 5-Star Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-medium">A+ BBB Rating</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-medium">Licensed & Insured</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
