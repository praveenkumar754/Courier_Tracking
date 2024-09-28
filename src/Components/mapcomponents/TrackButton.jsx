import React from 'react';

const TrackButton = ({ onTrack }) => {


  return (
    <div className="flex justify-center my-8">
      <button
        onClick={onTrack}
        className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
      >
        Track Courier
      </button>
    </div>
  );
};

export default TrackButton;
