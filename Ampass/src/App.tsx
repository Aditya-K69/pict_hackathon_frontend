import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/user-dashboard";
import FileClaim from "./pages/FileClaim";

import ForgotPIN from "./pages/forgotPin";
import VerifyOTP from "./pages/verifyOtp";
import ResetPIN from "./pages/resetPin";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/user-dashboard" element={<Dashboard/>} />
      <Route path="/FileClaim" element={<FileClaim/>} />
      <Route path="/signup" element={<Signup />} />

      {/* PIN reset flow */}
      <Route path="/forgot-pin" element={<ForgotPIN />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/reset-pin" element={<ResetPIN />} />

      {/* App */}
      <Route path="/user-dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
