import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
