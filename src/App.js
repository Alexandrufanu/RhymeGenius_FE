import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import mess_logo from "./images/messenger.png"

import React, { useEffect, useRef } from 'react'





function App() {

  const navbarStart = useRef(null)

  const scrollToBottom = () => {
    navbarStart.current?.scrollIntoView({ behavior: "smooth" })
  }

  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  useEffect(() => {
    sleep(500).then(() => {
      scrollToBottom()
  });
    
  }, []);





  return (
    <div className="app-container">
      
      <div className="cover-container">
        <div className="cover-image"></div>
      <div className="content-container">
        <h1>Welcome to RhymeGenius!</h1>

        <img src={mess_logo}/>
        <p>Generate any kind of poem!</p>
      </div>
    </div>

      <div ref={navbarStart}> 
        <Navbar />
        {/* <Speech 
          stop={true} 
          pause={true} 
          resume={true} 
          styles={textstyle} 
          text="I have changed the colour of the play button and made it smaller" />
       */}

  
      </div>
    


    
    </div>
  );
}

export default App;
