import React from "react";

const Button = ({ children, type, id, className, onClick, placeholder }) => {
  const handleButton = (e) => {
    console.log(e);
  };
  return (
    <button
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
