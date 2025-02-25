import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { user, logout } = useAuth(); // Get user and logout function from context
    const navigate = useNavigate(); // Initialize navigation

    const handleLogout = () => {
        logout(navigate); // Clear user session
    };


    return (

        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
            <Link className="navbar-brand" to="/">Test</Link>
            <span className="text-dark me-3">Welcome, {user.name || 'Guest'}!</span>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
           
        
        </nav>
    );
}

export default Navbar;
