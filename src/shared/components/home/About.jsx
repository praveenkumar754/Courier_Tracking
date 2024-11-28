import React from 'react';

export default function About() {
  return (
    <div>
      <section>
        <div className="max-w-4xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-56 px-6 md:px-28">
          <div>
            <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-2xl text-gray-600 mb-6 text-center md:text-left">
              We are a dedicated team of professionals committed to delivering high-quality services and solutions. Our mission is to provide innovative approaches to meet the needs of our clients.
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <img
              className="w-full max-w-[600px] rounded-lg shadow-lg"
              src="assets/about.jpg"
              alt="About Us"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
