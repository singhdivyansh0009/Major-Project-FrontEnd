import React from 'react';
import { FaUserCircle, FaClock, FaSyncAlt } from 'react-icons/fa';
import faceScan from '../assets/face-scan.png'; // Import the face scan image
import { getCurrentDate } from '../utils';
import useCurrentTime from '../hooks/currentTime';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-6 mx-auto"
      style={{ maxWidth: '420px' }}
    >
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-blue-500" />
          <div>
            <h2 className="text-lg font-bold">HI HARSHIT</h2>
            <p className="text-sm text-gray-500">MZ001234</p>
          </div>
        </div>
        <FaSyncAlt className="text-xl text-red-500 cursor-pointer" />
      </div>

      {/* Time */}
      <div className="text-center mb-6 mt-8">
        <h1 className="text-4xl font-bold">{useCurrentTime()}</h1>
        <p className="text-sm text-gray-500">{getCurrentDate()}</p>
      </div>

      {/* Check-In */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 bg-white shadow-xl rounded-full flex flex-col items-center justify-center border-4 border-blue-300">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-2 overflow-hidden">
            <img src={faceScan} alt="Face Scanner" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm font-semibold">CHECK IN</p>
        </div>
      </div>

      {/* Time Info */}
      <div className="w-full flex justify-around text-center mb-6">
        <div className="flex flex-col items-center">
          <FaClock className="text-red-500 text-xl mb-2" />
          <p className="text-md font-semibold">00:00 AM</p>
          <p className="text-xs text-gray-500">CHECK IN</p>
        </div>
        <div className="flex flex-col items-center">
          <FaClock className="text-red-500 text-xl mb-2" />
          <p className="text-md font-semibold">00:00 PM</p>
          <p className="text-xs text-gray-500">CHECK IN</p>
        </div>
        <div className="flex flex-col items-center">
          <FaClock className="text-red-500 text-xl mb-2" />
          <p className="text-md font-semibold">00:00</p>
          <p className="text-xs text-gray-500">Total Hours</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
