import { createContext, useEffect, useState } from "react";
import { login as loginApi, logout as logoutApi } from "../api/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const user = localStorage.getItem("userblog");
  const [currentUser, setCurrentUser] = useState(user ? JSON.parse(user) : null);

  useEffect(() => {
    localStorage.setItem("userblog", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = async (inputs) => {
    const res = await loginApi(inputs);
    setCurrentUser(res.data.info);
    return res;
  };

  const logout = async () => {
    await logoutApi();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};