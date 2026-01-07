import { useState } from "react";
import api from "../lib/api";

export default function VerifyOTP() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e:any) {
    e.preventDefault();
    setError(null);

    try {
      const res = await api.post("/users/authOTP", { email, otp });

      // Controller GUARANTEES this on success
      localStorage.setItem("reset_token", res.data.reset_token);

      // redirect
      // window.location.href = "/reset-pin";
    } catch (err:any) {
      setError(err.response?.data?.message || "OTP verification failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f8]">
      <div className="bg-white w-[400px] p-6 rounded-2xl shadow-lg">
        <h1 className="text-xl font-semibold text-center">Verify OTP</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg p-2"
          />

          <input
            placeholder="OTP"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border rounded-lg p-2"
          />

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}
