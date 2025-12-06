import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TeamSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Licensed & Insured',
      description: 'Fully certified with comprehensive insurance coverage'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Trained Professionals',
      description: 'Background-checked experts with years of experience'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Modern Equipment',
      description: 'State-of-the-art trucks and professional moving tools'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'On-Time Guarantee',
      description: 'We respect your schedule and deliver punctually'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <img
                src="/image3.png"
                alt="Mejdan Inc. Professional Team"
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full"
              />
              {/* Stats Overlay - repositioned for mobile */}
              <div className="absolute -bottom-4 right-4 sm:-bottom-8 sm:-right-8 bg-blue-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="text-2xl sm:text-4xl font-black mb-0.5 sm:mb-1">500+</div>
                <div className="text-xs sm:text-sm opacity-90">Successful Moves</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Why Choose Us
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
              Your Move,
              <br />
              Our Priority
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              With over a decade of experience serving NYC, we've perfected the art of moving.
              Our team treats your belongings with the same care we'd give our own.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-0.5 sm:mb-1">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
