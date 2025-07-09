import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md flex">
        {/* Left Side (Image) */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://via.placeholder.com/300" // Use the image URL of your choice
            alt="image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create Your Account</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="First Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Last Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Username"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Password"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Confirm Password"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Create Account
              </button>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Facebook_icon_2013.svg"
                  alt="facebook-icon"
                  className="inline-block w-5 h-5 mr-2"
                />
                Facebook
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_%22G%22_Logo.svg"
                  alt="google-icon"
                  className="inline-block w-5 h-5 mr-2"
                />
                Google
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo_2020.svg"
                  alt="microsoft-icon"
                  className="inline-block w-5 h-5 mr-2"
                />
                Microsoft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup