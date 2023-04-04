import React from "react";
import "./button.css";

const Button = ({ buttonText, width, backgroundColor,color,border }) => {
  return (
    <>
      <button
        type="button"
        className="button"
        style={{
          width: `${width}%`,
          backgroundColor: `${backgroundColor}`,
          color: `${color}`,
          border: `${border}`,
        }}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
