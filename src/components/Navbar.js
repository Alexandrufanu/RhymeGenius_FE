import React, { useEffect } from 'react';
import MyImage from './logooo_aprbun-removebg-preview.png';
import IcSearch from './magnifying-glass-search.png'
import './Navbar.css';

import  { useState } from "react";

import ThemeSelector from './ThemeSelector';

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

  const[selectedTheme, setSelectedTheme ] = useState(null)
  const[stanzas, setStanzas ] = useState(null)
  const[verses, setVerses ] = useState(null)
  
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }



  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };
  



  // let  makeRequest = async ()=>{
    
  //   try {
  //     const response = await fetch('https://6502-109-166-135-18.eu.ngrok.io/prompt', {
  //       method: 'POST',
  //       body: formData
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  return (





<div style={{   zIndex: 1 }}>  
        
    <div className='container2'>
      <nav> 
        <img src={MyImage} alt="This is the logo" />
          <ul>
            <li href="#"></li>
          </ul>  
      </nav>


   </div> 

  </div>   
  );
  
}

export default Navbar;