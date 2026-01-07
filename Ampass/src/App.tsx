import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/user-dashboard";
import FileClaim from "./pages/FileClaim";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user-dashboard" element={<Dashboard/>} />
      <Route path="/FileClaim" element={<FileClaim/>} />
    </Routes>
  );
}

export default App;
