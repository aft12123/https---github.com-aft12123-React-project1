import React from "react";
import './Home.css';
import i1 from '../Accetes/i.1.jpg';
import i4 from '../Accetes/i.4.jpg';
import i5 from '../Accetes/i.5.jpg';
import i2 from '../Accetes/i.2.jpg';

const Home=()=>{
    return(
    <div>
      
   <div className="header"/>
  <div className="img"/>
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
        <option value="pune">Pune</option>
        <option value="mumbai">Mumbai</option>
        <option value="banglore">Banglore</option>
        <option value="channai">Channai</option>
      </select>
    </div>
  
<div  className="menu">
    <h2>Our Menu</h2>
</div>
  <div>

</div>
    <div className="menu-items">
      <div className="item">
      <img src={i1}className="i1"/>
        <p>BREAKFAST</p>
      </div>
      <div className="item">
        <img src={i4}className="i4"/>
        <p>LUNCH</p>
      </div>
      <div className="item">
        <img src={i5}className="i5"/>
        <p>DINNER</p>
      </div>
      <div className="item">
        <img src={i2}className="i2"/>
      <p>SNACKS</p>
       </div>
    </div>
  
<div/>
<div>
<p className="AK">2024 KA Resturent</p>
<p className="Cont">contact us at 7676071869</p>

</div>
    
</div>
)

}
export default Home;