import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/LandingPage.js';
import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/Sign_Up.js';
import Home from './Components/Home/Home.js';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              <Route path="/Home" element={<Home/>} />
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/login" element={<Login/>}/>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;