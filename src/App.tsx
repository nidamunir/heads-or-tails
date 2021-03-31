import React, { useState } from 'react';
import flip from "./flip.svg";

import './App.css';

function App() {

   const [coinState, setCoinState] = useState("")
   const [isFlipping, setFlipping] = useState(false);


  const handleCoinFlip = () => {
     const number = Math.round(Math.random()); 
     setCoinState("");
     setFlipping(true);
     if (number % 2 == 0) {
        setTimeout(() => { 
          setCoinState("HEADS")
          setFlipping(false);
        }
        , 300);  
     }
     else {
      setTimeout(() => {
        setCoinState("TAILS");
        setFlipping(false);
      }, 300);       }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        {isFlipping ? (
          <img
            src={flip}
            className={`flip-coin  ${isFlipping ? "" : "hide"}`}
            alt="coin flipping"
          />
        ) : (
          <img
            src={flip}
            alt="coin"
            className={`coin  ${isFlipping ? "" : "hide"}`}
          />
        )}
        <button onClick={handleCoinFlip} className="btn" disabled={isFlipping}>
          Flip the coin
        </button>
        {coinState && <p>{coinState}</p>}
      </header>
    </div>
  );
}

export default App;
