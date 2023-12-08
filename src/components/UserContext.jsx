import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [fetchedData, setFetchedData] = useState({});

  const login = (username, password) => {
    setUserData({ username: username, password: password, login: true });
    console.log("username :", username, "Password :", password);
  };

  const logout = () => {
    setUserData({ username: "", password: "", login: false });
  };

  const responseData = (res) => {
    setFetchedData(res);
  };
  
  return (
    <UserContext.Provider
      value={{ userData, login, logout, responseData, fetchedData }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export const useUser = () => {
  return useContext(UserContext);
};
