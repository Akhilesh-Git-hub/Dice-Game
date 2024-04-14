import React, { useState } from "react";



const StartGame = ({toggle}) => {

  return (<div className=" flex justify-center  items-center  h-[100vh] mx-auto" >

    <div><img src="/images/dices.png" alt="Dice image" /></div>
    <div>
        <h1 className=" text-[96px]   font-bold">DICE GAME</h1>
        <button className=" hover:bg-slate-700  text-white py-[10px] px-[18px] bg-black rounded-[5px] w-[220px] border-none cursor-pointer  " onClick={toggle}>Play Now</button>
    </div>
  </div>); 
};

export default StartGame;
