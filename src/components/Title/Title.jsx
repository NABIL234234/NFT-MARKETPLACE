import React from "react";

export default function Title({mainText, miniText}) {
  return (
    <div className="text-white">
      <h1 className="font-semibold text-4xl lg:text-5xl">{mainText}</h1>
      <p className="font-normal text-lg pt-[10px]">
       {miniText}
      </p>
    </div>
  );
}
