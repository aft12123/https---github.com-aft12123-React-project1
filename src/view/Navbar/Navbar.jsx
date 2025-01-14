  import React from "react";
  import './Navbar.css'
  import img1 from '../Navbar/img1.jpg';
  const Navbar=()=>{

    return(
        
        <div>
             <nav className="navbar">
        <div className="img1">
          <img src={img1}className="img1"/>
        </div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

        </div>

    )
  }
  export default Navbar;


