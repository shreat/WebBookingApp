import React from "react";
<<<<<<< HEAD
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
>>>>>>> b480e58f84d528de73b4c5fad28fa2b7b5ed8e37

function App() {

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
      
    
=======
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
     </BrowserRouter>
>>>>>>> b480e58f84d528de73b4c5fad28fa2b7b5ed8e37
  );
}

export default App;
