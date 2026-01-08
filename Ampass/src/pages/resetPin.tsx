import { useState } from "react";
import api from "../lib/api";

export default function ResetPIN() {
  const [newPin, setNewPin] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e:any) {
    e.preventDefault();
    setError(null);

    const resetToken = localStorage.getItem("reset_token");
    if (!resetToken) {
      setError("Reset session expired");
      return;
    }

    try {
      const res = await api.post("/users/resetPIN", {
        reset_token: resetToken,
        new_pin: newPin,
      });

      localStorage.removeItem("reset_token");
      setMessage(res.data.message);
    } catch (err:any) {
      setError(err.response?.data?.error || "Reset failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f8]">
      <div className="bg-white w-[400px] p-6 rounded-2xl shadow-lg">
        <h1 className="text-xl font-semibold text-center">Reset PIN</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <input
            type="password"
            placeholder="New 6-digit PIN"
            pattern="[0-9]{6}"
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
            className="bg-blue-500 text-white rounded-lg p-2"
          >
            Reset PIN
          </button>
        </form>
      </div>
    </div>
  );
}
