import React from 'react';

export default function Blog() {
  return (
    <div>
      {/* Section Title */}
      <section>
        <div className='text-blue-500 text-center text-4xl'>
          <h1>Services</h1>
        </div>

        <div className='text-black text-center text-4xl'>
          <h1>Our services for you</h1>
        </div>

        {/* Cards Section */}
        <div className='flex flex-wrap justify-center gap-8 py-16'>
          {/* Express Delivery Card */}
          <div className='max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src="assets/cards1.jpg" alt="Express Delivery" className='w-full'/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-red-600'>
                <h4>Express Delivery</h4>
              </div>
              <div className='font-bold text-sm mb-2 text-black'>
                <p>This service ensures that your urgent documents or packages are delivered quickly.</p>
              </div>
              <div>
                <button className='bg-blue-500 text-white rounded-full w-32 text-center'>
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Standard Delivery Card */}
          <div className='max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src="assets/cards2.jpg" alt="Standard Delivery" className='w-full'/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-red-600'>
                <h4>Standard Delivery</h4>
              </div>
              <div className='font-bold text-sm mb-2 text-black'>
                <p>This service ensures that your documents or packages are delivered with standard speed.</p>
              </div>
              <div>
                <button className='bg-blue-500 text-white rounded-full w-32 text-center'>
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Corporate Bulk Delivery Card */}
          <div className='max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src="assets/cards3.webp" alt="Corporate Bulk Delivery" className='w-full'/>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-red-600'>
                <h4>Corporate Bulk Delivery</h4>
              </div>
              <div className='font-bold text-sm mb-2 text-black'>
                <p>Our reliable logistics network enables faster and more dependable door-to-door service.</p>
              </div>
              <div>
                <button className='bg-blue-500 text-white rounded-full w-32 text-center'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
