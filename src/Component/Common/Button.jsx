import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-black text-white py-2 px-8 font-bold text-sm ${className}`}
    >
      {children ? children : "Status"}
    </button>
  );
};

export default Button;
