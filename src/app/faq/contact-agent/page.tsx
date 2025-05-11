import React from 'react';
import Link from 'next/link';
import ArrowR from '../../svg/arrowR';

const ContactAgentPage = () => {
  return (
    <main className="min-h-screen bg-grey08">
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/faq" className="inline-flex items-center gap-2 text-purple60 group hover:text-purple-500 mb-8">
            <ArrowR className="group-hover:-translate-x-1 transition-transform fill-purple60 stroke-purple60 group-hover:fill-purple-500 group-hover:stroke-purple-500" />
            Back to FAQ
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">How to Contact an Estatein Agent</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Methods</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Online chat on the website (available 24/7)</li>
                <li>Hotline: +1 (800) 123-4567</li>
                <li>Email: support@estatein.com</li>
                <li>Contact form on the website</li>
                <li>Messengers (WhatsApp, Telegram)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Working Hours</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Mon-Fri: 9:00 AM - 8:00 PM</li>
                <li>Sat-Sun: 10:00 AM - 6:00 PM</li>
                <li>Online consultations available 24/7</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What to Prepare Before Consultation</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Basic property requirements</li>
                <li>Budget and preferred areas</li>
                <li>Purchase/sale timeline</li>
                <li>Special preferences or restrictions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Benefits of Working with Our Agents</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>Professional consultation</li>
                <li>Individual approach</li>
                <li>Complete transaction support</li>
                <li>Confidentiality guarantee</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactAgentPage; 