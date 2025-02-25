import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleLogin = () => {
    const userData = { name, role: "user" }; // Simulated user data
    login(userData, navigate);

  };
    
    return (
      <div className="login-container">
        <div className="login-box mt-4 p-5 rounded">
          <h1>Wellness Centre Bookings</h1>
          <input type="text" className="form-control mb-3" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" className="form-control mb-3" placeholder="Password" />
          <button className="btn btn-success" onClick={handleLogin}>Login</button>
          
        </div>        
      </div>
    );
}
    
export default Login;