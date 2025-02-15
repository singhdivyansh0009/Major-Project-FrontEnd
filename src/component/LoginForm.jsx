import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';

const LoginForm = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 p-4 rounded-full">
            <FaLock className="text-5xl text-red-500" />
          </div>
        </div>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition w-full"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
