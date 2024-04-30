import { useState } from 'react'
import './App.css'
const numbers = [56, 24, 135, 767, 801, 43, 11, 17, 122, 29, 59, 40, 66];
let seenNumbers = [];
let highscore = 0;
let textColor = "white";


function App() {
  const [score, setScore] = useState(0);
  let getRandom = numbers[Math.floor(Math.random() * numbers.length)];
  
  return (
    <>
      
      <h1>Memory Game</h1>
      
      <div id='bodyText'>
        <h2>Have you seen this number before?</h2>
        <h3>{getRandom}</h3>

        {/* Yes Button */}
        <button id='yesButton' onClick={() => {
          let tempCheck1 = false;
          for (let i = 0; i < seenNumbers.length; i ++) {
            if (getRandom == seenNumbers[i]) {
              setScore((score) => score + 1);
              tempCheck1 = true;
            }
          }
          if (tempCheck1 == false) {
            if (score > highscore) {
              highscore = score;
            }
            seenNumbers = [];
            setScore((score) => score = 0);
          }
        }}>Yes</button>

        {/* No Button */}
        <button id='noButton' onClick={() => {
          let tempCheck2 = false;
          for (let i = 0; i < seenNumbers.length; i ++) {
            if (getRandom == seenNumbers[i]) {
              tempCheck2 = true;
            }
          }
          if (tempCheck2 == false) {
            seenNumbers.push(getRandom);
            setScore((score) => score + 1);
          }
          else {
            if (score > highscore) {
              highscore = score;
            }
            seenNumbers = [];
            setScore((score) => score = 0);
          }
        }}>No</button>

        <p style={{color: {textColor}}}>Score: {score}</p>
        <p>Highscore: {highscore}</p>
      </div>

    </>
  )
}


export default App
