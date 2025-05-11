import React from 'react';
import { CardsClients } from '../page';
import ClientsCard from '../ui/ClientsCard';

const TestimonialsPage = () => {
  return (
    <main className="min-h-screen bg-grey08">
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-lg md:text-xl mb-12 max-w-3xl">
            Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CardsClients.map((testimonial, index) => (
              <div key={index} className="flex flex-col h-full">
                <ClientsCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage; 