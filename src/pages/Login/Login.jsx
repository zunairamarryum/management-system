import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Sign In with:", email, password)
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24 py-12">
        <h2 className="text-[32px] font-semibold leading-[130%] text-center mb-8">
          Sign in to your account
        </h2>

        <form onSubmit={handleSubmit} className="w-full sm:w-[690px] mx-auto text-left">
          {/* Email Input */}
          <label className="block mb-[24px] text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Username or Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-[58px] mb-[24px] border border-gray-300 rounded-[8px] p-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <label className="block mb-[24px] text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-[58px] mb-[24px] border border-gray-300 rounded-[8px] p-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Sign In Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-1.5 w-full sm:w-[124px] h-[48px] bg-black text-white rounded-[8px] px-6 py-2.5 hover:bg-gray-900 transition mb-[24px]"
          >
            Sign In <ArrowRight size={18} />
          </button>

          {/* Divider with line */}
          <div className="flex items-center my-6 w-full sm:w-[690px] mx-auto">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 text-sm">Sign up with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* OAuth Buttons */}
          <div className="flex justify-between w-full sm:w-[690px] mx-auto">
            <button
              className="flex items-center justify-center w-[220px] h-[50px] gap-2 p-3 border border-gray-300 rounded-md hover:bg-gray-50 text-blue-600"
            >
              <img src="/images/Facebook.png" alt="fb" className="h-5 w-5" />
              <span>Facebook</span>
            </button>
            <button
              className="flex items-center justify-center w-[220px] h-[50px] gap-2 p-3 border border-gray-300 rounded-md hover:bg-gray-50 text-red-600"
            >
              <img src="/images/google.png" alt="google" className="h-5 w-5" />
              <span>Google</span>
            </button>
            <button
              className="flex items-center justify-center w-[220px] h-[50px] gap-2 p-3 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <img src="/images/microsoft.png" alt="ms" className="h-5 w-5" />
              Microsoft
            </button>
          </div>
        </form>
      </div>

      {/* Right Image Container */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src="/images/login.png"
          alt="Sign In"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default SignIn
