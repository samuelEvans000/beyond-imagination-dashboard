import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
        <Navbar/>
          <Routes>
          <Route path="/" exact Component={Login} />
          <Route path="/dashboard" exact Component={Dashboard} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
