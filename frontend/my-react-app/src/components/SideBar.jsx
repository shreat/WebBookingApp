import React from "react";
import MenuCard from "../components/MenuCard";
import "../styles/login.css"

function SideBar() {
    return(
        <div className="sidebar-container">
            <h4>Bookings</h4>
            <div className="menu-block">
                {<MenuCard title="Create"/>}
                {<MenuCard title="View"/>}
                {<MenuCard title="Make Changes"/>}
            </div>
            <h4>Services</h4>
            <div className="menu-block">
                {<MenuCard title="Create"/>}
                {<MenuCard title="View"/>}
                {<MenuCard title="Make Changes"/>}
            </div>
            <h4>Users</h4>
            <div className="menu-block">
                {<MenuCard title="Create"/>}
                {<MenuCard title="View"/>}
                {<MenuCard title="Make Changes"/>}
            </div>
            
        </div>
        
    );

}

export default SideBar;