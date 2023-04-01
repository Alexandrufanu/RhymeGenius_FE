


export default function AudioComponent(props){
    var msg = new SpeechSynthesisUtterance();
    msg.voiceURI = 'native';
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.text = props.inputText;
    msg.lang = 'en-US';


    return(<>


        <button
        style={{border:"1px solid black"}}
        onClick={() =>  speechSynthesis.speak(msg)}>
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

