/* eslint-disable @next/next/no-img-element */
'use client';

import MailChimpForm from './MailChimpForm';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-lg mb-6">
            <strong>DealerXChange</strong> helps you to connect and share with
            other dealers nationwide to Buy and Sell wholesale vehicles.
          </p>
          <MailChimpForm />
        </div>
        <div className="order-1 lg:order-2 text-center">
          <img
            src="/gemini_no_bg.png"
            width={500}
            height={500}
            alt="Map"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
