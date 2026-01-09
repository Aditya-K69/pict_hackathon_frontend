import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/user-dashboard";
import FileClaim from "./pages/FileClaim";
import ClaimReview from "./pages/claimreview";
import ClaimSubmissionSuccess from "./pages/claimsubmissionsuccess";
import Signup from "./pages/signup";
import ForgotPIN from "./pages/forgotPin";
import VerifyOTP from "./pages/verifyOtp";
import ClaimTracking from "./pages/claimtracking";
import CompanyDashboard from "./pages/companyDashboard";
import FileUpload from "./pages/FileUpload";
import ClaimReviewDecision from "./pages/ClaimReviewDecision";

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
      <Route path="/claim-review-decision" element={<ClaimReviewDecision />} />
      <Route path="/claimsubmissionsuccess" element={<ClaimSubmissionSuccess />} />
      <Route path="/claimtracking" element={<ClaimTracking></ClaimTracking>}></Route>
      <Route path="/companyDashboard" element={<CompanyDashboard/>}></Route>
      <Route path="/fileupload" element={<FileUpload/>}></Route>
    </Routes>
  );
}

export default App;
