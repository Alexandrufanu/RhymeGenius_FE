import React from 'react';
import MyImage from './logooo_aprbun-removebg-preview.png';
import './Navbar.css';
// import '@cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

function Navbar() {
  return (
    <div>  
        
     <nav> 
    <img src={MyImage} alt="Description of the image" />
    <ul>
      <li href="#"></li>
    </ul>  
    </nav>

    <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>


    </div>
 

  );
}

export default Navbar;