import React from 'react';
import Link from 'next/link';
import ArrowR from '../../svg/arrowR';

const SearchPropertiesPage = () => {
  return (
    <main className="min-h-screen bg-grey08">
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/faq" className="inline-flex items-center gap-2 text-purple60 group hover:text-purple-500 mb-8">
            <ArrowR className="group-hover:-translate-x-1 transition-transform fill-purple60 stroke-purple60 group-hover:fill-purple-500 group-hover:stroke-purple-500" />
            Back to FAQ
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">How to Search for Properties on Estatein</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Search Methods</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Using the search bar for keyword input</li>
                <li>Applying filters by location, property type, and price</li>
                <li>Viewing the map for visual property search</li>
                <li>Using advanced filters to refine parameters</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Advanced Filters</h2>
              <p className="mb-4">Our platform offers a wide range of filters for precise searching:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Location filter with district selection and proximity to key facilities</li>
                <li>Property type filter (apartment, house, commercial property)</li>
                <li>Price range filter</li>
                <li>Area and number of rooms filter</li>
                <li>Year of construction and property condition filter</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tips for Effective Searching</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Use multiple keywords for more precise search results</li>
                <li>Save interesting properties to favorites</li>
                <li>Set up notifications for new properties matching your criteria</li>
                <li>Use the mobile app for convenient on-the-go searching</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchPropertiesPage; 