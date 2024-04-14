import React from "react";

const TotalScore = ({score}) => {
  return (
  <div className=" max-w-[200px] text-center">
      <h1 className=" text-[100px]  leading-none">{score}</h1>
      <p className="text-[24px] font-[500]">Total Score</p>
      
    </div>);
};

export default TotalScore;
