import React from "react";
import '../styles/login.css';
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    function handleLogin(){
        navigate("/dashboard");
    }

    return(
        <div className="login-container">
            <h1>Wellness Centre Bookings</h1>
            <div className="login-box">
              <form onSubmit={handleLogin}>
                <input type="text" className="inputs" name="username" placeholder="Username" />
                <input type="text" className="inputs" name="password" placeholder="Password" />
                <button type="submit" className="btn btn-success btn-lg" value="login">Login</button>
              </form>               
            </div>
        </div> 
    )

};

export default Login;