import { useState } from "react";
import api from "../lib/api";

export default function Login() {
  const [accountType, setAccountType] = useState("user");

  // user fields
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  // company fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e:any) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const endpoint =
      accountType === "user"
        ? "/users/login"
        : "/companies/login";

    const payload =
      accountType === "user"
        ? { phone_number: phone, pin }
        : { company_email: email, password };

    try {
      const res = await api.post(endpoint, payload);
      localStorage.setItem("access_token", res.data.access_token);

      
       window.location.href = "/user-dashboard";
    } catch (err:any) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  }

  const handleCreateAccount = () => {
    window.location.href = "/signup";
  };

  const handleForgotPin = () => {
    window.location.href = "/forgotPin";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f7f8]">
      <div className="bg-white w-[450px] rounded-2xl shadow-lg p-6 mt-20">
        <h1 className="text-2xl font-semibold text-center">Welcome Back</h1>
        <p className="text-gray-400 text-center mb-6">
          Manage your claims and policies securely
        </p>

        {/* Account type toggle */}
        <div className="relative flex bg-gray-200 rounded-lg p-1 w-full py-3 px-2 mb-6">
          <div
            className={`absolute top-1 w-[195px] h-10 bg-white rounded-lg transition-all duration-300 ${
              accountType === "company" ? "translate-x-full" : "translate-x-0"
            }`}
          />
          <button
            type="button"
            onClick={() => setAccountType("user")}
            className="relative w-1/2 z-10 font-medium"
          >
            Policy Holder
          </button>
          <button
            type="button"
            onClick={() => setAccountType("company")}
            className="relative w-1/2 z-10 font-medium"
          >
            Company
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* USER LOGIN */}
          {accountType === "user" && (
            <>
              <label className="font-medium">Mobile Number</label>
              <input
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                minLength={10}
                maxLength={16}
                required
                className="border rounded-lg p-2"
              />

            <div className="flex justify-between items-center">
                <label className="font-medium">Security PIN</label>
                <button
                  type="button"
                  onClick={handleForgotPin}
                  className="text-blue-500 text-sm hover:text-blue-600"
                >
                  Forgot PIN?
                </button>
              </div>


              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                pattern="[0-9]{6}"
                required
                className="border rounded-lg p-2"
              />
            </>
          )}

          {/* COMPANY LOGIN */}
          {accountType === "company" && (
            <>
              <label className="font-medium">Company Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border rounded-lg p-2"
              />

              <div className="flex justify-between items-center">
                <label className="font-medium">Password</label>
                <button
                  type="button"
                  className="text-blue-500 text-sm"
                >
                  Forgot Password?
                </button>
              </div>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border rounded-lg p-2"
              />
            </>
          )}

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white rounded-lg p-2 mt-4 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-6">
          <hr className="w-32" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="w-32" />
        </div>

          <button
          type="button"
          onClick={handleCreateAccount}
          className="w-full border rounded-lg p-2 mt-4 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
