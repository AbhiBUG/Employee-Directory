import React, { useState } from "react";
import EmployeeList from './Components/EmployeeList.jsx'
import Employee from './Components/Employee.jsx'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './pages/Login.jsx'
import Home from './pages/home.jsx'
import Notification from './pages/Notification.jsx'

function App() {

  return(
    <>
  
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>


    </Router>
 
</>

  );

}

export default App;
