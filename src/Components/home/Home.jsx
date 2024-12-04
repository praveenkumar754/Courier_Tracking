import { useState } from 'react';
import { apiAddtask } from '../../service/authentication/apitask';

const HomePage = () => {
  const [formData, setFormData] = useState({ TrackingID: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // For loading state

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setError('');  
  };

  const register = async (event) => {
    event.preventDefault();
    const TrackingID = formData.TrackingID;

    // Call the API to save the TrackingID
    setLoading(true); // Show loading state

    try {
      // Call apiAddtask to save the TrackingID
      await apiAddtask(TrackingID); // Assuming it saves successfully

      // Reset form after successful save
      setFormData({ TrackingID: '' });
      setError(''); // Clear any previous errors
    } catch (error) {
      setError('An error occurred while saving the TrackingID'); // Error message in case of failure
    } finally {
      setLoading(false); // Hide loading state after the operation
    }
  };

  return (
    <div className="relative min-h-[950px] flex items-center justify-center bg-gray-100 py-12 sm:py-32 px-4 sm:px-8 lg:px-20 flex-col">
      <img
        src="/assets/courier.jpg"
        alt="Courier Service"
        className="absolute inset-0 object-cover w-full h-[950px] z-0"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Fast & Reliable Courier Service
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-white max-w-2xl mx-auto">
          We deliver your parcels safely and on time, every time.
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-1 "></div>

      {/* Form Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 bg-white w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto grid justify-between rounded-md shadow-lg p-6 mx-auto mt-8">
        <form onSubmit={register}>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-center py-5">Enter Tracking Code</h1>
          </div>
          <div className="text-xl font-bold text-center px-4 sm:px-6">
            <input
              type="text"
              name="TrackingID"
              placeholder="Enter Tracking Code"
              onChange={handleChange}
              value={formData.TrackingID}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          <div className="mt-4">
            <button 
              type="submit" 
              className="bg-blue-500 text-white w-full sm:w-[200px] h-10 rounded-md"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Saving...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
