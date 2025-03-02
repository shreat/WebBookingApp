import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { user, logout } = useAuth(); // Get user and logout function from context
    const navigate = useNavigate(); // Initialize navigation

    const handleLogout = () => {
        logout(navigate); // Clear user session
    };


    return (

        <nav className="navbar bg-light">
            
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Test</a>
                </li>
                <li class="nav-item">
                    <span className="text-dark me-3">Welcome, {user.name || 'Guest'}!</span>
                </li>
                <li class="nav-item">
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
