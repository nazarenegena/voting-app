import "../src/styles/App.css";
import Dashboard from "./sections/Dashboard";
import LandingPage from "./sections/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./authentication/LogIn";
import Register from "./authentication/Register";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import AddCategories from "./Admin/AdminCategories";
import Analysis from "./Admin/AdminAnalysis";
import AdminResults from "./Admin/AdminResults";
import Content from "./sections/Content";
import Calender from "./sections/Calender";
import Profile from "./sections/Profile";

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="content" element={<Content />} />
              <Route path="calender" element={<Calender />} />
              <Route path="adminCategories" element={<AddCategories />} />
              <Route path="adminAnalysis" element={<Analysis />} />
              <Route path="adminResults" element={<AdminResults />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
