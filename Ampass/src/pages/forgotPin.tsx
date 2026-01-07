import { useState } from "react";
import api from "../lib/api";

export default function ForgotPIN() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e:any) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await api.post("/users/forgotPIN", { email });
      setMessage(res.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f8]">
      <div className="bg-white w-[400px] p-6 rounded-2xl shadow-lg">
        <h1 className="text-xl font-semibold text-center">Forgot PIN</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg p-2"
          />

          {message && (
            <p className="text-sm text-gray-600 text-center">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white rounded-lg p-2"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}
