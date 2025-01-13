import React from "react";
import './Home.css';
import i6 from '../Accetes/i.6.jpg';




const Home=()=>{
    return(
        <div>
            <div className="header"/>
  <div className="img"/>
    <img src={i6}className="i6"/>
  <div>
    <h1 className="h1">Welcome to KA Resturent</h1>
</div>
    <div className="search-bar">
      <input type="text" placeholder="Search for dishes..." id="search"/>
      <button>Search</button>
    </div>
    <div className="location"> 
      <label for="location">Select Location:</label>
      <select>
        <option value="pune">pune</option>
        <option value="mumbai">mumbai</option>
        <option value="banglore">banglore</option>
        <option value="channai">channai</option>
      </select>
    </div>
  
<div  className="menu">
    <h2>Our Menu</h2>
</div>
    <div className="menu-items">
      <div className="item">
        <img src="i.1.jpg"/>
        <p>BREAKFAST</p>
      </div>
      <div className="item">
        <img src="i.4.jpg"/>
        <p>LUNCH</p>
      </div>
      <div className="item">
        <img src="i.5.jpg"/>
        <p>DINNER</p>
      </div>
      <div className="item">
        <img src="i.2.jpg"/>
      <p>SNACKS</p>
       </div>
    </div>
  
<div/>
    <p className="KA">2024 KA Resturent</p>
    <p className="Contact"> contact us at 7676071869</p>
</div>
)

}
export default Home;