import React from 'react';

const LearnMore = () => {
  return (
    <main className="min-h-screen bg-grey08">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-grey10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Estatein?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-grey30 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-white">
                Our team of experienced real estate professionals provides personalized guidance throughout your property journey.
              </p>
            </div>
            <div className="bg-grey30 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Premium Properties</h3>
              <p className="text-white">
                Access a curated selection of high-quality properties that meet the highest standards of luxury and comfort.
              </p>
            </div>
            <div className="bg-grey30 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Seamless Process</h3>
              <p className="text-white">
                Enjoy a smooth and transparent property acquisition process with our streamlined services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-grey30 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Property Search</h3>
                <p className="text-white">
                  Find your ideal property with our advanced search tools and personalized recommendations.
                </p>
              </div>
              <div className="bg-grey30 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Property Management</h3>
                <p className="text-white">
                  Let us handle the day-to-day management of your property with our comprehensive services.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-grey30 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Investment Advisory</h3>
                <p className="text-white">
                  Make informed investment decisions with our expert market analysis and investment strategies.
                </p>
              </div>
              <div className="bg-grey30 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Legal Support</h3>
                <p className="text-white">
                  Navigate the legal aspects of property transactions with our experienced legal team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-grey10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their dream properties with Estatein.
          </p>
          <button className="px-8 py-4 bg-grey08 text-white rounded-2xl hover:bg-grey08/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey08 focus:ring-opacity-50">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default LearnMore; 