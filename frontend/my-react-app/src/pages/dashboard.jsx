import React from "react";
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

}

export default Dashboard;