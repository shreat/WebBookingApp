import { createContext, useState, useContext } from "react";


// Create the Auth Context
const AuthContext = createContext();

// Create a Provider Component
export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
    // Retrieve user data from localStorage when the app loads
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

   // Login function
  const login = (userData, navigate) => {
    setUser(userData); // Set user state
    localStorage.setItem("user", JSON.stringify(userData)); // Store in localStorage
    navigate("/dashboard"); // Ensure navigation works
  };

  // Logout function
  const logout = (navigate) => {
    setUser(null); // Remove user data
    localStorage.removeItem("user"); // Clear from localStorage
    navigate("/");  // Redirect to login after logout

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
