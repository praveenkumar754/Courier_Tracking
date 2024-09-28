

import React, { useState } from 'react';

const HomePage = () => {
  const [formData, setFormData] = useState({ trackingCode: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setError('');  
  };

  const register = (event) => {
    event.preventDefault();
    const trackingCode = formData.trackingCode;

    const isValid = /^[a-zA-Z0-9]{14}$/.test(trackingCode) && /[a-zA-Z].*[a-zA-Z]/.test(trackingCode);

    if (!isValid) {
      setError('Please enter a valid ID');
    } else {
      setError('');
     
      localStorage.setItem('trackingCode', trackingCode);
      console.log('Tracking Code:', trackingCode);

     
      setFormData({ trackingCode: '' });
    }
  };

  return (
    <div className="relative min-h-[800px] flex items-center justify-center bg-gray-100">
      <img
        src="src/assets/courier.jpg"
        alt="Courier Service"
        className="absolute inset-0 object-cover w-full h-[800px] z-0"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Fast & Reliable Courier Service
        </h1>
        <p className="mt-4 text-lg text-white sm:text-xl lg:text-2xl max-w-2xl mx-auto">
          We deliver your parcels safely and on time, every time.
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 bg-white w-[400px] h-[200px] grid justify-between rounded-md">
        <form onSubmit={register}>
          <div>
            <h1 className="text-xl font-bold text-center py-5">Enter Tracking Code</h1>
          </div>
          <div className="text-xl font-bold text-center px-14">
            <input
              type="text"
              name="trackingCode"
              placeholder="Enter Tracking Code"
              onChange={handleChange}
              value={formData.trackingCode}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          <div>
            <button className="bg-blue-500 text-white w-[200px] h-9 rounded-md mt-4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};








export default HomePage;
