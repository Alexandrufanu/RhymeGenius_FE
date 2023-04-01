import play from '../images/play.png';
import pause from '../images/pause.png';
import resume from '../images/resume.png';
import '../styles/AudioComponent.css';




export default function AudioComponent(props){
    var msg = new SpeechSynthesisUtterance();
    msg.voiceURI = 'native';
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.text = props.inputText;
    msg.lang = 'en-US';


    return(<>

      <div className='audio'>  
        {/* <button onClick={() =>  speechSynthesis.speak(msg)}> */}

        <i>
            <img className='bt'  src={play} onClick={() =>  speechSynthesis.speak(msg)} />
        </i>

        {/* </button> */}

        {/* <button onClick={() =>{ speechSynthesis.pause()}}>
            Stop!
        </button> */}

        <i>
            <img className='bt'  src={pause} onClick={() =>{ speechSynthesis.pause()}} />
        </i>

        {/* <button onClick={() =>{ speechSynthesis.resume()}}>
            Resume
        </button> */}

        <i>
            <img className='bt'  src={resume} onClick={() =>{ speechSynthesis.resume()}} />
        </i>   

        </div>  

    </>)
}
