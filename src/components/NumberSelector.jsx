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
  );
};

export default NumberSelector;
// isSelected={value==selectedNumber}