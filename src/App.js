import { useState } from 'react';
import './App.css';
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';

function App() {

   const [isGameStarted, setIsGameStarted] = useState(false);
   

   const toggleGameplay = () => {
     setIsGameStarted((prev) => !prev);
   };
  return (
    <>
     { isGameStarted ? <GamePlay /> : <StartGame toggle ={toggleGameplay} />}
    </>
  );
}

export default App;

