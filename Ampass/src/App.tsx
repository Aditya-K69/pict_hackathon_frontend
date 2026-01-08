import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ClaimReview from "./pages/claimreview";
import ClaimSubmissionSuccess from "./pages/claimsubmissionsuccess";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/claimreview" element={<ClaimReview />} />
       <Route path="/claimsubmissionsuccess" element={<ClaimSubmissionSuccess />} />


    </Routes>
  );
}

export default App;
