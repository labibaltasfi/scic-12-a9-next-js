"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    setIsAuth(auth);

    if (auth) {
      // hardcoded user for now
      setUser({ email: "labibaltasfi1@gmail.com", name: "Labib" });
    } else {
      setUser(null);
    }
  }, []);

  const login = (email) => {
    localStorage.setItem("auth", "true");
    setIsAuth(true);
    setUser({ email }); // store user
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
