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
  
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };
  

  const [showDiv2, setShowDiv2] = useState(false);

  const handleClick = () => {
    setShowDiv2(!showDiv2);
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




  <h6>Choose a theme for your poeme:</h6>

    <div className='poemType'> 
          <button className='onePoemType'>Art</button>
          <button className='onePoemType'>Comedy</button>
          <button className='onePoemType'>Dramatic</button>
      </div>
      <div className='poemType' style={{marginTop:"-3%"}}>  
          <button className='onePoemType'>Dreams</button>
          <button className='onePoemType'>Family </button>    
          <button className='onePoemType'>Friendship</button>
      </div>
      <div className='poemType' style={{marginTop:"-3%"}}>  
          <button className='onePoemType'>History</button>    
          <button className='onePoemType'>Romantic</button>    
          <button className='onePoemType'>Science</button>
      </div>

    <h5>How many verses and stanzas do you want to have your poem?</h5>
    <div className='versesArea'>
      <div>
        <label for="fname">STANZAS:&nbsp;</label>  &nbsp;
        <input type="text" id="fname" name="fname" className='text'/>  
      </div>
      <div class>  
        <label for="lname">VERSES:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="fname" name="fname" className='text'/>  
      </div> 
      </div>  
      <br/><br/> <br/>  <br/>  <br/> <br/> 


  <div className='container3'>
 
    <div className='poem'>
   
      <h2>Write a word or a sentence to generate a poem:</h2>

      <br/><br/>

    <div class="search-container">
    <form action="/action_page.php">
      {/* <input type="text" placeholder="Search.." name="search"/> */}
      <textarea></textarea>
      <br/>
      <button type="submit" className='searchButton' onClick={handleClick}><i><img className='img2' src={IcSearch}/></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLICK TO GENERATE YOUR POEM</button><br/><br/><br/><br/>
      {showDiv2 && <div className='appear' >This is the div that appears when the button is clicked.</div>}
      <br/><br/><br/>
    </form>
  </div>
  <div className='theNotRandomPoem'>Once there was a tree....
and she loved a little boy.
<br/>

And everyday the boy would come
and he would gather her leaves
and make them into crowns
and play king of the forest.
He would climb up her trunk
and swing from her branches
<br/><br/><br/><br/>
and eat apples.
And they 
And when he was tired,
he would sleep in her shade.
And the boy loved the tree....
very much.
And the tree was happy.
But time went by.
<br/><br/><br/><br/>

And the boy grew older.
And the tree was often alone.
Then one day the boy came to the tree
and the tree said, 'Come, Boy, come and
climb up my trunk and swing from my
branches and eat apples and play in my
shade and be happy.'
<br/><br/><br/><br/>

'I am too big to climb and play' said
the boy.
'I want to buy things and have fun.
I want some money?'
'I'm sorry,' said the tree, 'but I
have no money.
I have only leaves and apples.</div>




  </div>

      <div className='random'>

          <h3>OR</h3>
          <h4>You can generate a random poem:</h4>
          
          <button className='RandButton' onClick={handleButtonClick}>RANDOM</button>
          {showDiv && <div className='appear' >This is the div that appears when the button is clicked.</div>}
        </div>
    </div>




   </div> 



   <AudioComponent inputText = "TESTT this is a test, this is a sentence, it is longer than usual beacuse im testing if it will eventually stop by itself or not, in the middle of the sentence"/>

  </div>   
  );
  
}

export default Navbar;