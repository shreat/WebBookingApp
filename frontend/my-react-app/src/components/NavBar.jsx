import React from "react";
import "../styles/login.css"

function NavBar(){
    return (
            <div className="navbar sticky-top navbar-expand-lg">
                  <div className="container-fluid">
                    <ul className="navbar-nav w-100">
                        <a className="navbar-brand " href="#">WB</a>
                    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" href="#">Bookings</a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Create</a></li>
                                <li><a className="dropdown-item" href="#">View</a></li>
                                <li><a className="dropdown-item" href="#">Manage</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" href="#">Services</a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Create</a></li>
                                <li><a className="dropdown-item" href="#">View</a></li>
                                <li><a className="dropdown-item" href="#">Manage</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" href="#">Users</a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Create</a></li>
                                <li><a className="dropdown-item" href="#">View</a></li>
                                <li><a className="dropdown-item" href="#">Manage</a></li>
                            </ul>
                        </li>

                        <a className="nav-link" href="#">My Profile</a>
                        
                    </ul>
                </div>
            </div>
                    
    );
}

export default NavBar;