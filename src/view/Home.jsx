import React from "react";
import './Home.css';
import i6 from '../Accetes/i.6.jpg';
import i1 from '../Accetes/i.1.jpg';
import i4 from '../Accetes/i.4.jpg';
import i5 from '../Accetes/i.5.jpg';
import i2 from '../Accetes/i.2.jpg';


const Home=()=>{
    return(
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
         
          
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
        <option value="pune">Pune</option>
        <option value="mumbai">Mumbai</option>
        <option value="banglore">Banglore</option>
        <option value="channai">Channai</option>
      </select>
    </div>
  
<div  className="menu">
    <h2>Our Menu</h2>
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
    <p className="KA">2024 KA Resturent</p>
    <p className="Contact"> contact us at 7676071869</p>
</div>
)

}
export default Home;