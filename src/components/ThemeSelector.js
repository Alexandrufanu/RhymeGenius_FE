import React, { useState } from 'react';
import "../styles/ThemeSelector.css"

function ThemeSelector(props) {

  const [selected, setSelected] = useState(props.selectedTheme);

  function handleClick(event) {
    setSelected(event.target.textContent);
    props.setSelectedTheme(event.target.textContent)
  }

  return (
    <div >
      {/* {props.options.map((option) => (
        <button
          key={option.label}
        //   value={option.id}
          onClick={handleClick}
          style={{ backgroundColor: selected === option.label ? 'blue' : 'white' }}
        >
          {option.label}
        </button>
      ))
    } */}
    
    {(() => {
    const elements = [];

    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      const rowElements = [];

      for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        rowElements.push(
          <div 
          key={`${rowIndex}-${columnIndex}`} 
          style={{ backgroundColor: selected === props.options[rowIndex*3 + columnIndex].label ? 'blue' : 'white'}}
          onClick={handleClick}

          className='onePoemType'>
            {/* Cell {rowIndex + 1}-{columnIndex + 1} */}
            {props.options[rowIndex*3 + columnIndex].label}
          </div>
        );
      }

      elements.push(
        <div key={rowIndex} className='poemType'>
          {rowElements}
        </div>
      );
    }

    return elements;
  })()}
      
      
    </div>
  );
}

export default ThemeSelector;
