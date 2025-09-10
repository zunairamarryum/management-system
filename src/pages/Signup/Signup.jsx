import React from 'react'

const SignUp = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side (Image) */}
            <div className="hidden lg:block w-1/2 h-full">
                <img
                    src="/images/signup.png"
                    alt="Sign In"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Right Side (Form) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Create Your Account</h2>
                    <form>
                        <div className="mb-4">
  <label className="block text-sm font-semibold text-gray-900" htmlFor="firstName">
    Full Name
  </label>

  {/* Add a wrapper with gap */}
  <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
    <input
      type="text"
      id="firstName"
      name="firstName"
      autoComplete="given-name"
      className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
      placeholder="First Name"
    />
    <input
      type="text"
      id="lastName"
      name="lastName"
      autoComplete="family-name"
      className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
      placeholder="Last Name"
    />
  </div>
</div>


                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-900" htmlFor="email">
                                Username
                            </label>
                            <input
                                type="username"
                                id="username"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                                placeholder="Username"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-900" htmlFor="email">
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
                            <label className="block text-sm font-semibold text-gray-900" htmlFor="password">
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
                            <label className="block text-sm font-semibold text-gray-900" htmlFor="confirmPassword">
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
                                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Create Account
                            </button>
                        </div>

                        <div className="text-center mb-4">
                            <span className="text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign In</a></span>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition duration-200">
                                <img
                                    src="/images/Facebook.png"
                                    alt="facebook-icon"
                                    className="inline-block w-5 h-5 mr-2"
                                />
                                Facebook
                            </button>
                            <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition duration-200">
                                <img
                                    src="/images/google.png"
                                    alt="google-icon"
                                    className="inline-block w-5 h-5 mr-2"
                                />
                                Google
                            </button>
                            <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition duration-200">
                                <img
                                    src="/images/microsoft.png"
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
    )
}

export default SignUp