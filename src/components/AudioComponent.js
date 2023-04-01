import Speech from 'react-speech';



function speak(text) {


 ;
}




export default function AudioComponent(props){
    var msg = new SpeechSynthesisUtterance();
    var voices = speechSynthesis.getVoices();
    // msg.voice = voices[10];
    msg.voiceURI = 'native';
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.text = props.inputText;
    msg.lang = 'en-US';


    return(<>


        <button onClick={() =>  speechSynthesis.speak(msg)}>
            Play!
            
        </button>

        <button onClick={() =>{ speechSynthesis.pause()}}>
            Stop!
        </button>

        <button onClick={() =>{ speechSynthesis.resume()}}>
            Resume
        </button>


    </>)
}

