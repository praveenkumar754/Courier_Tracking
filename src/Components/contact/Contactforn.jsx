// src/CourierServicePage.jsx

import React from 'react';

const CourierServicePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Express Delivery Courier Services</h1>
          <p>Your packages, delivered with care.</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto my-10 px-4">
        <h2 className="text-2xl font-semibold mb-5">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold">Express Delivery</h3>
            <p>Get your packages delivered in record time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold">Same-Day Service</h3>
            <p>We deliver your packages on the same day.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold">International Shipping</h3>
            <p>Ship your packages globally with ease.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto my-10 px-4 w-[700px]">
        <h2 className="text-2xl font-semibold mb-5">Contact Us</h2>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              className="border border-gray-300 rounded-lg p-2  w-[500px]"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              className="border border-gray-300 rounded-lg p-2  w-[500px]"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              className="border border-gray-300 rounded-lg p-2 w-[500px]"
              id="message"
              placeholder="Your Message"
              rows="4"
            />
          </div>
          <button className="bg-blue-600 text-white rounded-lg px-4 py-2" type="submit">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Courier Service. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CourierServicePage;









