import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isLoggedIn =
    typeof window !== "undefined" && localStorage.getItem("authToken") !== null;

  const login = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("authToken", "user_token_" + Date.now());
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
