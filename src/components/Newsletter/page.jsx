'use client';  // ← THIS IS REQUIRED

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setSuccess(true);
    setEmail('');
  };

  return (
    <section className=" py-16 px-6 flex justify-center">
      <div className="bg-white text-[#0B3954] py-8 px-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl rounded-3xl shadow-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-sm sm:text-base text-[#0B3954] text-opacity-70 mb-6 sm:mb-8 text-center">
          Stay updated with the latest products and exclusive offers from latshopping.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col  items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 sm:p-4 rounded-xl border border-[#1B9AAA] text-[#0B3954] focus:outline-none focus:ring-2 focus:ring-[#7BE495] w-full sm:flex-1"
          />
          <button
            type="submit"
            className="w-full px-3 sm:w-auto py-3 sm:py-4 rounded-xl bg-[#0B3954] text-white font-semibold hover:bg-[#072E42] transition"
          >
            Subscribe
          </button>
        </form>
        {success && (
          <p className="mt-4 text-green-600 font-medium text-center">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
