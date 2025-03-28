import React from "react";
<<<<<<< HEAD
import {useNavigate} from "react-router-dom";
import "../styles/login.css";
=======
import '../styles/login.css';
import { useNavigate } from "react-router-dom";
>>>>>>> b480e58f84d528de73b4c5fad28fa2b7b5ed8e37

function Login() {

    const navigate = useNavigate();

    function handleLogin(){
        navigate("/dashboard");
<<<<<<< HEAD
    };

    return(
        <div class="login-container">
                <h1>Wellness Centre Bookings</h1>
                <div class="login-box">
                  <form action={handleLogin} method="POST">
                    <input type="text" className="inputs" name="username" placeholder="Username" />
                    <input type="text" className="inputs" name="password" placeholder="Password" />
                    <button type="submit" class="btn btn-success btn-lg" value="login">Login</button>
                  </form>               
                </div>
            </div>  
    );
}

=======
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
>>>>>>> b480e58f84d528de73b4c5fad28fa2b7b5ed8e37

export default Login;