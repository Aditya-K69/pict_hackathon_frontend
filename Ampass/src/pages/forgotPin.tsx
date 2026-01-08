import { useState } from "react";
import api from "../lib/api";

export default function ForgotPIN() {
  const [step, setStep] = useState(1); // 1: email, 2: otp, 3: new pin
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPin, setNewPin] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Step 1: Send OTP
  async function handleSendOTP(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const res = await api.post("/users/forgotPIN", { email });
      setMessage(res.data.message);
      setStep(2); // Move to OTP verification step
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  }

  // Step 2: Verify OTP
  async function handleVerifyOTP(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/users/authOTP", { email, otp });
      // Store reset token if your API returns one
      if (res.data.reset_token) {
        localStorage.setItem("reset_token", res.data.reset_token);
      }
      setMessage("OTP verified successfully");
      setStep(3); // Move to reset PIN step
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  }

  // Step 3: Reset PIN
  async function handleResetPIN(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const resetToken = localStorage.getItem("reset_token");
    if (!resetToken) {
      setError("Reset session expired. Please start again.");
      setStep(1);
      setLoading(false);
      return;
    }

    try {
      const res = await api.post("/users/resetPIN", {
        reset_token: resetToken,
        new_pin: newPin,
      });
      localStorage.removeItem("reset_token");
      setMessage("PIN reset successfully! Redirecting to login...");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err: any) {
      setError(err.response?.data?.error || "Reset failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f8]">
      <div className="bg-white w-[400px] p-6 rounded-2xl shadow-lg">
        <h1 className="text-xl font-semibold text-center">
          {step === 1 && "Forgot PIN"}
          {step === 2 && "Verify OTP"}
          {step === 3 && "Reset PIN"}
        </h1>
        
        <p className="text-sm text-gray-500 text-center mt-2 mb-6">
          {step === 1 && "Enter your email to receive an OTP"}
          {step === 2 && "Enter the OTP sent to your email"}
          {step === 3 && "Create a new 6-digit PIN"}
        </p>

        {/* Step 1: Send OTP */}
        {step === 1 && (
          <form onSubmit={handleSendOTP} className="flex flex-col gap-4">
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-2"
            />
            
            {message && (
              <p className="text-sm text-green-600 text-center">{message}</p>
            )}
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 disabled:opacity-60 transition-colors"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

            <button
              type="button"
              onClick={() => window.location.href = "/login"}
              className="text-blue-500 text-sm hover:text-blue-600"
            >
              Back to Login
            </button>
          </form>
        )}

        {/* Step 2: Verify OTP */}
        {step === 2 && (
          <form onSubmit={handleVerifyOTP} className="flex flex-col gap-4">
            <label className="font-medium">Enter OTP</label>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              pattern="[0-9]{6}"
              maxLength={6}
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border rounded-lg p-2 text-center text-2xl tracking-widest"
            />
            
            {message && (
              <p className="text-sm text-green-600 text-center">{message}</p>
            )}
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 disabled:opacity-60 transition-colors"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep(1);
                setOtp("");
                setMessage(null);
                setError(null);
              }}
              className="text-blue-500 text-sm hover:text-blue-600"
            >
              Resend OTP
            </button>
          </form>
        )}

        {/* Step 3: Reset PIN */}
        {step === 3 && (
          <form onSubmit={handleResetPIN} className="flex flex-col gap-4">
            <label className="font-medium">New PIN</label>
            <input
              type="password"
              placeholder="Enter new 6-digit PIN"
              pattern="[0-9]{6}"
              maxLength={6}
              required
              value={newPin}
              onChange={(e) => setNewPin(e.target.value)}
              className="border rounded-lg p-2"
            />
            
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            {message && (
              <p className="text-sm text-green-600 text-center">{message}</p>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 disabled:opacity-60 transition-colors"
            >
              {loading ? "Resetting..." : "Reset PIN"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}