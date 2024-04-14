import React, { useState } from "react";

const RollDice = ({currentDice ,roleDice}) => {
  
  
  
  
  return (
  <div   className=" flex flex-col items-center ">
   <div onClick={roleDice} className=" flex justify-center mt-[48px] cursor-pointer ">
    <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
   </div>
   <p className=" text-[24px]">Click on the Dice to Roll</p>
  </div>);
};

export default RollDice;
