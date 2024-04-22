
import React from "react";
import './CardCategories.css'

export default function CardCotegories({imgUrl, secondImgUrl, desc}) {
  return (
    <div className="CardCategories">
      <div className="w-full">
        <div className="flex justify-center items-center ">
          <img className="relative  z-0 w-[100%]" src={imgUrl} alt="art" />
          <img
            className="absolute z-10 "
            src={secondImgUrl}
            alt="brush"
          />
        </div>
        <div className=" bg-zinc-700 rounded-b-lg p-5">
          <h3 className=" text-white text-xl font-medium">{desc}</h3>
        </div>
      </div>
    </div>
  );
}
