import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { user, logout } = useAuth();

    return (

        <nav className="navbar navbar-dark bg-dark p-3">
        <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
        
            <div>
                {user ? (
                <>
                    <span className="text-light me-3">Welcome, {user.name}!</span>
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </>
                ) : (
                    <Link className="btn btn-primary" to="/">Login</Link>
                )}
            </div>
        
        </nav>
    );
}

export default Navbar;
