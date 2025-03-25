import React from "react";
import './App.css'

function App() {

  return (
    <div class="login-container">
            <h1>Wellness Centre Bookings</h1>
            <div class="login-box">
              <form action="/dashboard" method="POST">
                <input type="text" className="inputs" name="username" placeholder="Username" />
                <input type="text" className="inputs" name="password" placeholder="Password" />
                <button type="submit" class="btn btn-success btn-lg" value="login">Login</button>
              </form>               
            </div>
        </div>  
  )
}

export default App
