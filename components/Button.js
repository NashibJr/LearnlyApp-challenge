import React from "react";

const Button = ({ label, handleClick, ...props }) => {
  return (
    <button type="button" {...props} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
