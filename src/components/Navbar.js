import React from 'react';
import MyImage from './logooo_aprbun-removebg-preview.png';
import IcSearch from './magnifying-glass-search.png'
import './Navbar.css';
// import { ReactComponent as SearchIcon } from './.png'
// import '@cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

function Navbar() {
  return (
    <div  
    // style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
    style={{   zIndex: 1 }}

    >  
        
     <nav> 
    <img src={MyImage} alt="Description of the image" />
    <ul>
      <li href="#"></li>
    </ul>  
    </nav>


      <div className='container2'>

      <div className='container3'>
 
    <div>
      <h2>Write a word or a sentence to generate a poem:</h2>

      <h3>OR</h3>

    <div class="search-container">
    <form action="/action_page.php">
      {/* <input type="text" placeholder="Search.." name="search"/> */}
      <textarea></textarea>
      <br/>
      <button type="submit"><i><img className='img2' src={IcSearch}/></i></button>
    </form>
  </div>

  </div>

  <div className='random'>
      <h4>You can generate a random poem:</h4>
      <button className='RandButton'>RANDOM</button>
    </div>

    </div> 

    


    </div>

    

    </div>
 

  );
}

export default Navbar;