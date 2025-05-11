import React from 'react';
import Link from 'next/link';
import ArrowR from '../../svg/arrowR';

const SellPropertyPage = () => {
  return (
    <main className="min-h-screen bg-grey08">
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/faq" className="inline-flex items-center gap-2 text-purple60 group hover:text-purple-500 mb-8">
            <ArrowR className="group-hover:-translate-x-1 transition-transform fill-purple60 stroke-purple60 group-hover:fill-purple-500 group-hover:stroke-purple-500" />
            Back to FAQ
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">Required Documents for Selling Property through Estatein</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Essential Documents</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Property ownership certificate or extract from the Unified State Register</li>
                <li>{`Owner's passport`}</li>
                <li>Technical passport of the property</li>
                <li>Cadastral passport</li>
                <li>Certificate of no utility debt</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Additional Documents</h2>
              <p className="mb-4">Depending on the property type, you may need:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>{`Spouse's consent to sell (if property was acquired during marriage)`}</li>
                <li>{`Guardianship authority permission (if owner is a minor)`}</li>
                <li>{`Land plot documents (for private houses)`}</li>
                <li>{`Reconstruction documents (if any)`}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Document Verification Process</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Our specialists verify the authenticity of all documents</li>
                <li>Legal expertise is conducted</li>
                <li>Checking for any encumbrances</li>
                <li>Creating a detailed property description</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SellPropertyPage;