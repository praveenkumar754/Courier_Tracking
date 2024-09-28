




import React from 'react';

const HomePage = () => {
  return (
    <div className="relative min-h-[800px] flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src="src/assets/courier.jpg"
        alt="Courier Service"
        className="absolute inset-0 object-cover w-full h-[800px] z-0"
      />
      
      {/* Text overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Fast & Reliable Courier Service
        </h1>
        <p className="mt-4 text-lg text-white sm:text-xl lg:text-2xl max-w-2xl mx-auto">
          We deliver your parcels safely and on time, every time.
        </p>

   
      </div>

      {/* Overlay effect for better readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
     <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 bg-white w-[400px] h-[200px] grid justify-between rounded-md " >
      <div >
       <h1 className='text-xl font-bold text-center py-5'>Enter Tracking Code</h1>
        
      </div>
      <div className='text-xl font-bold text-center px-14'>
      <input type="text" placeholder='Enter Tracking Code'/>
      </div>
      <div>
     <button className='bg-blue-500 text-white w-[200px] h-9 rounded-md'>Submit</button>
      </div>
      </div>
<div>
    

</div>

    </div>
  );
};

export default HomePage;



