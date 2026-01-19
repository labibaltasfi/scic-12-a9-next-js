"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(localStorage.getItem("auth") === "true");
  }, []);

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuth(true); // 🔥 instant UI update
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuth(false); // 🔥 instant UI update
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
