import React from 'react';

export default function Footer() {
  return (
    <div className='py-7'>
      <div className='w-full bg-slate-800 h-14'>
        <div className='text-center font-bold text-xl py-3 text-white'>
          <h1>Back to Top</h1>
        </div>
      </div>

      <div className='bg-slate-600 w-full h-auto'>
        <div className='flex flex-wrap justify-evenly py-10 text-white'>
          
          {/* Connect with Us */}
          <div className='w-full sm:w-1/3 md:w-1/4 p-4'>
            <h1 className='font-bold text-xl mb-2'>Connect with us</h1>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
          
          {/* Services */}
          <div className='w-full sm:w-1/3 md:w-1/4 p-4'>
            <h1 className='font-bold text-xl mb-2'>Services</h1>
            <p>Normal Delivery</p>
            <p>Express Delivery</p>
            <p>Corporate Bulk Delivery</p>
          </div>

          {/* Let Us Help You */}
          <div className='w-full sm:w-1/3 md:w-1/4 p-4'>
            <h1 className='font-bold text-xl mb-2'>Let Us Help You</h1>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>Recalls and Product Safety Alerts</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}
