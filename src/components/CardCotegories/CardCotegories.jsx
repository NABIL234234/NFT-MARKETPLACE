import React from "react";

export default function CardCotegories({imgUrl, secondImgUrl, desc}) {
  return (
    <div>
      <div className="w-60">
        <div className="flex justify-center items-center h-60 ">
          <img className="relative  z-0" src={imgUrl} alt="art" />
          <img
            className="absolute z-10 "
            src={secondImgUrl}
            alt="brush"
          />
        </div>
        <div className="bg-zinc-700 rounded-b-lg p-5">
          <h3 className=" text-white text-xl font-medium">{desc}</h3>
        </div>
      </div>
    </div>
  );
}
