import React from 'react'
import { Outlet,Navigate } from "react-router-dom";
import NavBar from "./Components/Navbar";
import'./Styles/NavBar.css'

function App() {
  return (
    <div >
      <a name="top" />
      <NavBar/>
      <Outlet/>
      <a href="#top" id="myBtn">
        <p className="topbutton" style={{textAlign:'center',justifyContent:'center',alignItems:'center',float:'center'}}> &#8679;</p>
      </a>   
    </div>
  );
}

export default App;
