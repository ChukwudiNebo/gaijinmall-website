import React, { useEffect, useState } from "react";

const Text = ({ text, backgroundColor }) => {
  return (
    <>
      <p
        style={{
          margin: "0px",
          padding: "0px",
          backgroundColor: `${backgroundColor}`,
        }}
      >
        {text}
      </p>
    </>
  );
};

export default Text;
