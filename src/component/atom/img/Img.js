import React from 'react'

const Img = ({ img, width, height }) => {
  return (
    <>
      <img
        src={img}
        alt=""
        style={{ height: `${height}px`, width: `${width}px` }}
        className="img-fluid"
      />
    </>
  );
};

export default Img
