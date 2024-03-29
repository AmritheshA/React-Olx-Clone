import React from "react";
import { BiHeart } from "react-icons/bi";
import { HiLightningBolt } from "react-icons/hi";

function Card({ product_details }) {

  
  return (
    <div className="pr-10 mb-3 relative">
      <div className="border border-gray-200 bg-white rounded  w-[380px] ">
        <div className="h-[325px] overflow-hidden p-3">
          <img
            src={product_details?.imageUrl}
            alt="asdfa"
            className="mx-auto object-fit w-full h-full"
          />
        </div>
        <div className="p-3">
          <h2 className="font-bold text-xl">{product_details?.prize}</h2>
          <h3 className="whitespace-nowrap overflow-hidden text-ellipsis font-normal max-w-[500px] text-lg">
            {product_details?.description}
          </h3>
        </div>
        <div className="bg-white w-fit p-2 rounded-full absolute top-2 right-11 shadow-md ">
          <BiHeart className="text-2xl" />
        </div>
        {product_details?.featured && (
          <div className="absolute top-3 left-2 flex items-center bg-yellow-300 text-sm w-fit rounded px-2 gap-1">
            <HiLightningBolt />
            Featured
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
