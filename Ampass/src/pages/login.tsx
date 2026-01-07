import { useState } from "react";

export default function Login() {
  const [accountType, setAccountType] = useState("user"); // "user" or "company"

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f7f8]">
      {/* Header */}
      <div className="fixed top-0 w-full h-[60px] bg-white flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <img src="vite.svg" alt="Vite Logo" className="h-8" />
          <p className="text-black text-base font-semibold">Claimit</p>
        </div>
        <div className="flex gap-4">
          <p className="text-black text-base cursor-pointer">Help Center</p>
          <p className="text-black text-base cursor-pointer">Policy</p>
        </div>
      </div>

      {/* Login Card */}
      <div className="bg-white w-[450px] h-auto rounded-2xl shadow-lg p-6 flex flex-col gap-4 mt-20">
        <p className="text-2xl font-semibold text-center">Welcome Back</p>
        <p className="text-base text-gray-400 text-center">
          Manage your claims and policies securely.
        </p>

        {/* Sliding Toggle */}
        <div className="relative flex bg-gray-200 rounded-lg p-1 w-full py-3 px-2 mt-1">
          {/* Slider */}
          <div
            className={`absolute top-1 w-[195px] h-10 bg-white rounded-lg transition-all duration-300 ${
              accountType === "company" ? "translate-x-full" : "translate-x-0"
            }`}
          />
          {/* Buttons */}
          <button
            onClick={() => setAccountType("user")}
            className="relative w-1/2 text-center z-10 font-medium text-gray-700"
          >
            Policy Holder
          </button>
          <button
            onClick={() => setAccountType("company")}
            className="relative w-1/2 text-center z-10 font-medium text-gray-700"
          >
            Provider
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-2 mt-4">

          {/* User fields */}
          {accountType === "user" && (
            <>
              <span className="text-base font-semibold text-black">Mobile Number</span>
              <input
                type="number"
                placeholder="Eg +91 1234567890"
                className="border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <div className="flex flex-row items-center justify-between">
              <span className="text-base font-semibold text-black mt-2">Security PIN</span>
              <button className="text-base text-blue-500">Forgot PIN?</button>
              </div>
              <input
                type="text"
                placeholder="Enter 6 digit PIN"
                className="border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </>
          )}

          {/* Company fields */}
          {accountType === "company" && (
            <>
              <input
                type="text"
                placeholder="Company Name"
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Admin Password"
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 mt-6 hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="flex flex-row items-center justify-center gap-2">
        <hr className="h-[5px] text-gray-400 w-[170px]" />
        <p className="text-base text-gray-400">OR</p>
         <hr className="h-[5px] text-gray-400 w-[170px]" />
         </div>
         <button
            type="submit"
            className="bg-white text-gray-500 rounded-lg p-2 border boder-gray-500"
          >
            Create Account
          </button>
      </div>
    </div>
  );
}
