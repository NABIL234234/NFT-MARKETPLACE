import React, { forwardRef } from "react";

const Inputs = forwardRef(({ icons, placeholder, type, onChange, value, name }, ref) => {
  return (
    <div className="relative">
      <img
        src={icons}
        alt="user"
        className="absolute top-[25%] left-[4%] w-[6%]"
      />
      <input
        ref={ref}
        className="relative w-[300px] rd:w-[350px] mdd:w-[300px] p-[14px] pl-[55px] rounded-3xl outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
});

export default Inputs;
