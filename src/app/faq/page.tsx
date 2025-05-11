import React from 'react';
import { FrequentlyAskedData } from '../page';
import FrequentlyAsked from '../ui/FrequentlyAsked';

const FAQPage = () => {
  return (
    <main className="min-h-screen bg-grey08">
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl mb-12 max-w-3xl">
            Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FrequentlyAskedData.map((faq, index) => (
              <div key={index} className="flex flex-col h-full">
                <FrequentlyAsked {...faq} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage; 