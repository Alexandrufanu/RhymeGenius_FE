import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import mess_logo from "./images/messenger.png"

function App() {
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


      <Navbar />

      {/* <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style={{backgroundImage : "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}></div>
          </div>
          </div>
     */}
      {/* <div className="wave-wrapper">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style={{backgroundImage : "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}></div>
          </div>
        </div>
      </div> */}
    
    </div>
  );
}

export default App;
