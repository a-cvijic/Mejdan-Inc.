import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Get your free access key at: https://web3forms.com/
// Replace this with your actual access key
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

const ContactForm = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    moveType: 'residential',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Quote Request from ${formData.name}`,
          from_name: 'Mejdan Inc. Website',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            moveDate: '',
            moveType: 'residential',
            message: ''
          });
        }, 5000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Get Started
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Request Your Free Quote
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you within 24 hours with a detailed estimate.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid lg:grid-cols-5 gap-6 sm:gap-8 transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Info Sidebar - horizontal scroll on mobile */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Quick Contact Cards - horizontal on mobile */}
            <div className="flex lg:flex-col gap-3 sm:gap-4 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 flex-shrink-0 w-[200px] sm:w-auto">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Phone</div>
                    <a href="tel:+1234567890" className="text-sm sm:text-lg font-bold text-gray-900 hover:text-blue-600">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 flex-shrink-0 w-[200px] sm:w-auto">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Email</div>
                    <a href="mailto:info@mejdaninc.com" className="text-sm sm:text-lg font-bold text-gray-900 hover:text-blue-600 break-all">
                      info@mejdaninc.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 flex-shrink-0 w-[200px] sm:w-auto">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Location</div>
                    <div className="text-xs sm:text-sm text-gray-900 font-bold">
                      123 Moving Street<br />
                      New York, NY 12345
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Business Hours</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">7am - 7pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-semibold">8am - 5pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-200">
              {submitted ? (
                <div className="h-full flex items-center justify-center py-8 sm:py-12">
                  <div className="text-center">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg className="w-7 sm:w-8 h-7 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-sm sm:text-base text-gray-600">We'll be in touch shortly with your quote.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all duration-300 text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all duration-300 text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all duration-300 text-sm sm:text-base"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="moveDate" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                        Preferred Move Date
                      </label>
                      <input
                        type="date"
                        id="moveDate"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all duration-300 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="moveType" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                      Type of Move *
                    </label>
                    <select
                      id="moveType"
                      name="moveType"
                      required
                      value={formData.moveType}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="residential">Residential Moving</option>
                      <option value="commercial">Commercial Moving</option>
                      <option value="long-distance">Long Distance</option>
                      <option value="packing">Packing Services</option>
                      <option value="storage">Storage Solutions</option>
                      <option value="specialty">Specialty Items</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Tell us more about your move requirements..."
                    ></textarea>
                  </div>

                  {error && (
                    <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs sm:text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-base sm:text-lg disabled:from-blue-400 disabled:to-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 shine-effect shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Get My Free Quote →'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
