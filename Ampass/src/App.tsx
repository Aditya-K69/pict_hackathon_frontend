import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/user-dashboard";
import FileClaim from "./pages/FileClaim";
import ClaimReview from "./pages/claimreview";
import ClaimSubmissionSuccess from "./pages/claimsubmissionsuccess";
import Signup from "./pages/signup";
import ForgotPIN from "./pages/forgotPin";
import VerifyOTP from "./pages/verifyOtp";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotPin" element={<ForgotPIN />} />
      <Route path="/verifyOtp" element={<VerifyOTP />} />
      <Route path="/user-dashboard" element={<Dashboard />} />
      <Route path="/FileClaim" element={<FileClaim />} />
      <Route path="/claimreview" element={<ClaimReview />} />
      <Route path="/claimsubmissionsuccess" element={<ClaimSubmissionSuccess />} />
  
    </Routes>
  );
}

export default App;
