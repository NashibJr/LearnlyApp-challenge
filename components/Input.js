import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="border border-[#f3f3f3] rounded-md mt-3 outline-none p-3 w-full"
    />
  );
};

export default Input;
