import React from "react";
<<<<<<< HEAD
import "../styles/dashboard.css";

function Dashboard(){
    return(
        <h4>Welcome to your dashboard!</h4>
    );
=======
import NavBar from "../components/NavBar";

function Dashboard() {
    return(
        <div>
            {<NavBar />}
            <h1>Welcome to your Dashboard!</h1>
        </div>
        
    );

>>>>>>> b480e58f84d528de73b4c5fad28fa2b7b5ed8e37
}

export default Dashboard;