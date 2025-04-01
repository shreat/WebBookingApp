import React from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <h1>Wellness Centre Bookings</h1>
      <div className="login-box">
        <form onSubmit={handleLogin}>
          {<Input type="text" name="username" placeholder="Username" />}
          {<Input type="password" name="password" placeholder="Password" />}

          <button
            type="submit"
            className="btn btn-success btn-lg"
            value="login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
