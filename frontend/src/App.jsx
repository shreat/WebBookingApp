import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";


function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/"; // Hide Navbar on login page

  return (
        <div className="container-fluid">
          
          <div class="row top-content">
            <div class="col-sm-4 nav-side-bar">
              {showNavbar && <Navbar />} {/* Conditionally render Navbar */}
            </div>
            <div class="col-sm-8 main-content">
              <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} /> 
                </Routes>
            </div>
          </div>
          

          <div className="row bg-image-half">
            
            
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

