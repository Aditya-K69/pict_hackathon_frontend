import { useState } from "react";
import api from "../lib/api";

export default function Signup() {
  const [accountType, setAccountType] = useState("user");

  // user fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");

  // company fields
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e:any) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    const endpoint =
      accountType === "user"
        ? "/users/register"
        : "/companies/register";

    const payload =
      accountType === "user"
        ? {
            name,
            phone_number: phone,    
            email,
            pin,
          }
        : {
            company_name: companyName,
            company_email: companyEmail,
            password,
          };

    try {
      await api.post(endpoint, payload);
      setSuccess(true);
      
   
   // Redirect to login after 2 seconds
   setTimeout(() => {
     window.location.href = "/login";
   }, 2000);
    } catch (err:any) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f7f8]">
      <div className="bg-white w-[450px] rounded-2xl shadow-lg p-6 mt-20">
        <h1 className="text-2xl font-semibold text-center">Create Account</h1>
        <p className="text-gray-400 text-center mb-6">
          Get started with Clamit
        </p>

        {/* Toggle */}
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
          {/* USER SIGNUP */}
          {accountType === "user" && (
            <>
              <label className="font-medium">Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border rounded-lg p-2"
              />

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

              <label className="font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border rounded-lg p-2"
              />

              <label className="font-medium">Security PIN</label>
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

          {/* COMPANY SIGNUP */}
          {accountType === "company" && (
            <>
              <label className="font-medium">Company Name</label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="border rounded-lg p-2"
              />

              <label className="font-medium">Company Email</label>
              <input
                type="email"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                required
                className="border rounded-lg p-2"
              />

              <label className="font-medium">Password</label>
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

         {success && (
            <p className="text-green-600 text-sm mt-2">
              Account created successfully! Redirecting to login...
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white rounded-lg p-2 mt-4 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
