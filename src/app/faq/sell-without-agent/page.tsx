import React from 'react';
import Link from 'next/link';
import ArrowR from '../../svg/arrowR';

const SellWithoutAgentPage = () => {
  return (
    <main className="min-h-screen bg-grey08">
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/faq" className="inline-flex items-center gap-2 text-purple60 group hover:text-purple-500 mb-8">
            <ArrowR className="group-hover:-translate-x-1 transition-transform fill-purple60 stroke-purple60 group-hover:fill-purple-500 group-hover:stroke-purple-500" />
            Back to FAQ
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">Selling Property Without an Agent through Estatein</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Create a personal account on the website</li>
                <li>Fill out the property listing form</li>
                <li>Upload photos and documents</li>
                <li>Set price and description</li>
                <li>Get access to potential buyers database</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Benefits of Self-Selling</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Save on agent commission</li>
                <li>Full control over the selling process</li>
                <li>Direct communication with buyers</li>
                <li>Flexibility in price setting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Tools for Self-Selling</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Professional description templates</li>
                <li>Photography tips</li>
                <li>View and interest analytics</li>
                <li>Secure communication system</li>
                <li>Potential buyer verification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Self-Selling Recommendations</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Thoroughly prepare the property for showing</li>
                <li>Take high-quality photographs</li>
                <li>Create a detailed description</li>
                <li>Be ready for negotiations</li>
                <li>Study the legal aspects of the transaction</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SellWithoutAgentPage; 