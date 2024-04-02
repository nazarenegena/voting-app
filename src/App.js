import "../src/styles/App.css";
import Dashboard from "./sections/Dashboard";
import LandingPage from "./sections/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./authentication/LogIn";
import Register from "./authentication/Register";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
