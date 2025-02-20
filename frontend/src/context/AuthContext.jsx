import { createContext, useState, useContext } from "react";

// Create the Auth Context
const AuthContext = createContext();

// Create a Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Stores logged-in user details

  // Login function
  const login = (userData) => {
    setUser(userData); // Set user state
  };

  // Logout function
  const logout = () => {
    setUser(null); // Remove user data
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook to Use Auth Context
export function useAuth() {
  return useContext(AuthContext);
}
