import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

// keyboard component
function Keyboard() {
  // rows of keybord
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  //fatching data using contex API from App.js
  const {
    board,
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);
  
  // for handling keyword of PC.....
  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;

      // for Enter key
      if (event.key === "Enter") {
        onEnter();
      
      } 
      // for Backspace
      else if (event.key === "Backspace") {
        onDelete();
      } 
      //for letters
      else {
        // searching key in 1st row which we have entered
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
         // searching key in 2nd row which we have entered
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
         // searching key in 3rd row which we have entered
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );


  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  console.log(disabledLetters);
  return (
    //keboard div
    <div className="keyboard" onKeyDown={handleKeyboard}>

        {/* 1st row of keyboard */}
        <div className="line1">
          {keys1.map((key) => {
            return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
          })}
        </div>

        {/* 2nd row of keyboard */}
        <div className="line2">
          {keys2.map((key) => {
            return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
          })}
        </div>

        {/* 3rd row of keyboard */}
        <div className="line3">
          
          <Key keyVal={"ENTER"} bigKey />
          {keys3.map((key) => {
            return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
          })}
          <Key keyVal={"DELETE"} bigKey />

        </div>
    </div>
  );
}

export default Keyboard;
