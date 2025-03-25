import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
