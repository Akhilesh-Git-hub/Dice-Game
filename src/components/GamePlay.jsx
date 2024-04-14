import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score , setScore] =useState(0);
  const [selectedNumber , setSelectedNumber] =useState();
  const [currentDice , setCurrentDice]=useState(1);
  const [error , setError] =useState("");
  const [showRules , setShowRules] = useState(false);
  
  const generateRamdomNumber =  (min,max) =>{
    return Math.floor(Math.random()*(max-min)+min); 
      }

      const roleDice=()=>{
        if(!selectedNumber) {
          setError("You have not selected number")
          return;}
          
        const randomNumber = generateRamdomNumber(1,7);
        setCurrentDice(randomNumber);
        

        if(selectedNumber==randomNumber){
          setScore(score+2);
        }
        else{
          setScore(score-2);
        }
        setSelectedNumber(undefined)

      }
      const resetScore = ()=>{
        setScore(0);
      }
     

  return <main>
    <div className="  pt-[20px] container flex justify-around items-center">
    <TotalScore score={score}/>
    <NumberSelector setError={()=>setError("")} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
  </div>;

    <RollDice currentDice={currentDice} roleDice={roleDice} />
    <div className="flex flex-col gap-5 items-center">
      <button onClick={resetScore} className=" hover:bg-slate-300  text-black py-[10px] px-[18px] bg-white rounded-[5px] w-[220px] border-2 border-black cursor-pointer  ">Reset Score</button>
      <button onClick={()=>setShowRules((prev)=>!prev)} className=" hover:bg-slate-700  text-white py-[10px] px-[18px] bg-black rounded-[5px] w-[220px] border-none cursor-pointer  "> { showRules? "Hide" : "Show" } Rules</button>
    </div>
     {showRules?<Rules/> :" "}
     
  </main>
};

export default GamePlay;
