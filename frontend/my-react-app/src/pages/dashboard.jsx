import React from "react";
<<<<<<< HEAD
import "../styles/dashboard.css";

function Dashboard(){
    return(
        <h4>Welcome to your dashboard!</h4>
    );
=======
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Calender from "./calender";
import '../styles/login.css';



function Dashboard() {
    return(
        <div>
            {<NavBar />}
            <div className="dashboard-main">
                {<SideBar />}
                {<Calender />}
            </div>

        </div>
        
    );

>>>>>>> b480e58f84d528de73b4c5fad28fa2b7b5ed8e37
}

export default Dashboard;