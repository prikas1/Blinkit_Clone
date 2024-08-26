import React, { useState, useEffect, useRef } from 'react';
import './AnimatedSearchBar.css'; // Import your CSS for animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const searchTexts = ["Search Rice", "Search Egg", "Search Meat"];

function SearchComponent() {
  const [currentText, setCurrentText] = useState(searchTexts[0]);
  const textRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    
    function updateSearchText() {
      if (textRef.current) {
        const textElement = textRef.current;

        // Trigger reflow by reading offsetHeight
        textElement.style.animation = 'none';
        void textElement.offsetHeight; // Trigger reflow
        textElement.style.animation = 'easeIn 0.5s forwards, easeOut 0.5s 1.5s forwards';

        setCurrentText(searchTexts[currentIndex]);
        
        currentIndex = (currentIndex + 1) % searchTexts.length;
      }
    }
    
    updateSearchText(); // Initialize the first text
    const intervalId = setInterval(updateSearchText, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='SearchBar_Container'>
    <div className="search-container">
      <span className="search-icon"> <FontAwesomeIcon icon={faSearch}  /></span>
      <div className="search-text" ref={textRef}>
        {currentText}
      </div>
    </div>
    </div>
  );
}

export default SearchComponent;
