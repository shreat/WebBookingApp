import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleLogin = () => {
    const userData = { name, role: "user" }; // Simulated user data
    login(userData);
    navigate("/dashboard"); // Redirect to dashboard
  };
    
    return (
      <div className="container mt-5">
      <h2>Login</h2>
      <input type="text" className="form-control mb-3" placeholder="Enter your name" value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleLogin}>Login</button>
      </div>
    );
}
    
export default Login;