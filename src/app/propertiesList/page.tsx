import React from 'react';
import { CardsFeatured } from '../page';
import FeaturedCard from '../ui/FeaturedCard';

const PropertiesList = () => {
  return (
    <main className="min-h-screen bg-grey08">
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Featured Properties</h1>
          <p className="text-lg md:text-xl mb-12 max-w-3xl">
            Explore our curated selection of premium properties. Each listing is carefully chosen to meet the highest standards of luxury and comfort.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CardsFeatured.map((property, index) => (
              <div key={property.id} className="flex flex-col h-full">
                <FeaturedCard {...property} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PropertiesList;