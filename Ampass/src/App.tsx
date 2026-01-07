import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/user-dashboard";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user-dashboard" element={<Dashboard/>} />
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
}

export default App;
