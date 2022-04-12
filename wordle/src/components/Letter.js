import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

// Letter component
function Letter({ letterPos, attemptVal }) {
  
  //fatching data using contex API from App.js
  const { board, setDisabledLetters, currAttempt, correctWord } = useContext(AppContext);
  
  //your letter that you have entered
  const letter = board[attemptVal][letterPos];
  // for green
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  // for yellow 
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  // for letter is correct or not 
  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");
  
  // for calculating all the disable words for keyboard
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]); 

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
