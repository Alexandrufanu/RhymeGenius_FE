import React from 'react';
import MyImage from './logooo_aprbun-removebg-preview.png';
import IcSearch from './magnifying-glass-search.png'
import './Navbar.css';

import  { useState } from "react";

import AudioComponent from './AudioComponent';


function speak(text) {
  var msg = new SpeechSynthesisUtterance();
  var voices = speechSynthesis.getVoices();
  // msg.voice = voices[10];
  msg.voiceURI = 'native';
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 2;
  msg.text = text;
  msg.lang = 'en-US';

  speechSynthesis.speak(msg);
}


function Navbar() {


  const style = {
    container: {},
    text: {},
    buttons: {},
    play: {
      hover: {
        backgroundColor: 'GhostWhite',
      },

      button: {
        padding:'4',
        fontFamily: 'Helvetica',
        fontSize: '1.0em',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'inherit',
        border: 'none'
      },

    },
    pause: {
      hover: {},
      button: {},
    },
    stop: {
      hover: {
        cursor: 'pointer',

      },
      button: {
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'Gainsboro',
        border: 'solid 5px rgba(255,255,255,1)',
        borderRadius: 2,
      },
    },
    resume: {
      hover: {},
      button: {},
    },
  
  };


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


    <AudioComponent inputText = "TESTT this is a test, this is a sentence, it is longer than usual beacuse im testing if it will eventually stop by itself or not, in the middle of the sentence"/>


   </div> 




  </div>   
  );
  
}

export default Navbar;