import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
