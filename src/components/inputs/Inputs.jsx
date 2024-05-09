import React from "react";

export default function Inputs({ icons, placeholder, type, onChange, value, name }) {
  return (
    <>
      <div className="relative">
        <img
          src={icons}
          alt="user"
          className="absolute top-[25%] left-[4%] w-[6%]"
        />
        <input
          className="w-[300px] rd:w-[350px] mdd:w-[300px] p-[14px] pl-[55px] rounded-3xl outline-none"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          name={name}
        />
      </div>
    </>
  );
}
