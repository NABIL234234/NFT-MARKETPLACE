import React from "react";

// images

export default function Inputs({icons, placeholder,type}) {
  return (
    <>
      <div className="relative">
        <img
          src={icons}
          alt="user"
          className="absolute top-[25%] left-[4%] w-[6%]"
        />
        <input
          className="w-[300px] p-[14px] pl-[55px] rounded-3xl outline-none"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
