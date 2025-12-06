import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const faqs = [
    {
      question: 'How far in advance should I book my move?',
      answer: 'We recommend booking at least 2-4 weeks in advance for local moves and 4-6 weeks for long-distance relocations. However, we understand that sometimes moves happen quickly, and we do our best to accommodate last-minute requests based on availability.'
    },
    {
      question: 'Do you provide packing materials?',
      answer: 'Yes! We offer a full range of professional packing materials including sturdy boxes in various sizes, bubble wrap, packing paper, tape, and specialty containers for fragile items. You can purchase materials separately or opt for our full-service packing where we handle everything.'
    },
    {
      question: 'Are my belongings insured during the move?',
      answer: 'Absolutely. All moves include basic liability coverage at no extra cost. We also offer comprehensive full-value protection plans for complete peace of mind. Our team can explain the coverage options during your free estimate consultation.'
    },
    {
      question: 'What items can\'t you move?',
      answer: 'For safety reasons, we cannot transport hazardous materials (flammables, explosives, corrosives), perishable food, plants, pets, or personal documents/valuables like passports and jewelry. We recommend transporting these items yourself.'
    },
    {
      question: 'How do you calculate moving costs?',
      answer: 'Our pricing is transparent and based on several factors: the size of your move (number of rooms/items), distance, any special handling requirements, and additional services like packing or storage. We provide detailed written estimates with no hidden fees.'
    },
    {
      question: 'What happens if something gets damaged?',
      answer: 'While we take extreme care with every item, accidents can happen. If damage occurs, report it within 24 hours. We have a straightforward claims process, and our insurance coverage will compensate based on your selected protection plan.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-blue-100">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Common Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our moving services. Can't find your answer? Contact us directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div
                className={`bg-white rounded-xl sm:rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'border-blue-600 shadow-lg shadow-blue-600/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer with smooth expand/collapse */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <div className="h-px bg-gray-100 mb-4"></div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-10 sm:mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Us Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
