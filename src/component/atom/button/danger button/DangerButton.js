import React from 'react'
import './dangerbutton.css'

const DangerButton = ({
  buttonText,
  width,
  backgroundColor,
  color,
  border,
}) => {
  return (
    <>
      <button
        type="button"
        className="buttonDanger"
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

export default DangerButton
