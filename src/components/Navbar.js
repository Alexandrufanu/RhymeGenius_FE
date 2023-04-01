import React from 'react';
import MyImage from './logooo_aprbun-removebg-preview.png';
import IcSearch from './magnifying-glass-search.png'
import './Navbar.css';

import  { useState } from "react";





function Navbar() {


  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };
  


  // const handleButtonClick = () => {
  //   setShowDiv(false);
  // };





  return (





    <div style={{   zIndex: 1 }}>  
        
        <div className='container2'>
     <nav> 
    <img src={MyImage} alt="Description of the image" />
    <ul>
      <li href="#"></li>
    </ul>  
    </nav>




  <h5>Choose a theme for your poeme:</h5>

  <div  className='poemTy'>  
    <div className='poemType'> 
          <button className='onePoemType'>Art</button>
          <button className='onePoemType'>Comedy</button>
          <button className='onePoemType'>Dramatic</button>
      </div>
      <div className='poemType'>  
          <button className='onePoemType'>Dreams</button>
          <button className='onePoemType'>Family </button>    
          <button className='onePoemType'>Friendship</button>
      </div>
      <div className='poemType'>  
          <button className='onePoemType'>History</button>    
          <button className='onePoemType'>Romantic</button>    
          <button className='onePoemType'>Science</button>
      </div>
    </div>   


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
      <button className='RandButton' onClick={handleButtonClick}>RANDOM</button>
      {showDiv && <div>This is the div that appears when the button is clicked.</div>}
    </div>
  </div>



  </div> 

  



</div>   
  );
  
}

export default Navbar;