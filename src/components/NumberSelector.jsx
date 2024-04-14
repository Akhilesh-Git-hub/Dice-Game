import React, { useState } from "react";

const NumberSelector = ({error,setError,selectedNumber , setSelectedNumber}) => {
  const arrNumber =[1,2,3,4,5,6];
  
  
  console.log(selectedNumber);
  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value);
    setError("");
  }
  
  return (
    <div >
      <p className=" text-red-600 font-semibold flex flex-col items-end mb-5">{error}</p>
      <div className=" flex gap-[24px]"  >
     
     {arrNumber.map((value,i)=>(
      <div
       onClick={ ()=>numberSelectorHandler(value) } className={`  w-[62px] h-[62px] border-solid border-2 border-black flex justify-center items-center  font-bold  ${selectedNumber ===value ? "bg-black" : "bg-white"} ${selectedNumber ===value ? "text-white" : " text-black"} `} key={i}>
        {value}
        </div>
        
     ))}
    </div>
    <p className=" flex flex-col text-[24px] font-[700] items-end ">Select Number</p>
    </div>
  );
};

export default NumberSelector;
// isSelected={value==selectedNumber}