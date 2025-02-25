import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";


function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/"; // Hide Navbar on login page

  return (
        <div className="container-fluid">
          {showNavbar && <Navbar />} {/* Conditionally render Navbar */}

          <div className="row bg-image-half">
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} /> 
          </Routes>
          </div>
          
          
         
        </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

