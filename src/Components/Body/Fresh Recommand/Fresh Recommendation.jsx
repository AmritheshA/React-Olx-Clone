import React from "react";
import Card from "../Card";

function Fresh_Recommendation() {
  return (
    <div className="m-28">
      <div className="flex justify-between">
        <h2 className="text-3xl font-medium mb-3">Fresh Recommendations</h2>
        <h2 className="text-lg font-semibold underline mb-3">View More</h2>
      </div>
      <div className="flex flex-wrap max-w-[100%]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center mt-20">
        <button className="border-2 border-black rounded w-[125px] h-[50px]">View More</button>
      </div>
    </div>
  );
}

export default Fresh_Recommendation;
