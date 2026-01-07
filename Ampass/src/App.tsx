import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/user-dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user-dashboard" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
