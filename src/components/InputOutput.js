

import IcSearch from './magnifying-glass-search.png'


import ThemeSelector from "./ThemeSelector"

import  { useState } from "react";

import AudioComponent from "./AudioComponent";


export default function InputOutput(props){

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
    
  




    return(<>

            <h6>Choose a theme for your poeme:</h6>

            <ThemeSelector
            options={
            [
                {
                label:"Art"
                },
                {
                label:"Comedy"
                },
                {
                label:"Dramatic"
                },
                {
                label:"Dreams"
                },
                {
                label:"Family"
                },
                {
                label:"Friendship"
                },
                {
                label:"History"
                },
                {
                label:"Romantic"
                },
                {
                label:"Science"
                },
            ]
            }
            selectedTheme = "Art"
            setSelectedTheme = {setSelectedTheme}
            />


            <h5>How many verses and stanzas do you want to have your poem?</h5>
            <div className='versesArea'>
            <div>
            <label for="fname">STANAZ:&nbsp;</label>  &nbsp;
            <input type="number" id="fname" name="fname" className='text'/>  
            </div>
            <div class>  
            <label for="lname">VERSES:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" id="fname" name="fname" className='text'/>  
            </div> 
            </div>  
            <br/><br/> <br/>  <br/>  <br/> <br/> 


            <div className='poem'>
   
   <h2>Write a word or a sentence to generate a poem:</h2>
   <input oninput="showRangeVal()" type="range" class="form-range1" value="0.7" min="0" max="1" step="0.1" id="customRange"/> 
   <br/><br/>

 <div class="search-container">
 <form>
   <textarea
   value={inputValue} onChange={handleInputChange}
   ></textarea>

   <br/>
     <button type="submit" className='searchButton' onClick={() => { }}> {/*  makeRequest() */}
       <i><img className='img2' src={IcSearch}/></i>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       CLICK TO GENERATE YOUR POEM
     </button>
     <br/>
     <br/>
     <br/>
     <br/>
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
<AudioComponent inputText = "TESTT this is a test, this is a sentence, it is longer than usual beacuse im testing if it will eventually stop by itself or not, in the middle of the sentence"/>




</div>

   <div className='random'>

       <h3>OR</h3>
       <h4>You can generate a random poem:</h4>
       
       <button className='RandButton' onClick={handleButtonClick}>RANDOM</button>
       {showDiv && <div className='appear' >This is the div that appears when the button is clicked.</div>}
     </div>


        </>
    )


}



