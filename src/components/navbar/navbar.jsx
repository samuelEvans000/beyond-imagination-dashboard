import logo from "/assets/logo.png";
import "./navbar.css";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let isloggedin = false;
  if (window.location.pathname === "/dashboard") {
    isloggedin = true;
  } else {
    isloggedin = false;
  }
  const { userData, logout } = useUser();
  const username = userData.username;

  let login = userData.login;
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  console.log(window.location);
  return (
    <div className="navbar">
      <img className="logo" src={logo}></img>
      <div className="nav-content">
        {login || isloggedin ? (<div className="username">{username}</div>):(<></>)}
        <div>
          {login || isloggedin ? (
            <button onClick={handleLogout}>logout</button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
