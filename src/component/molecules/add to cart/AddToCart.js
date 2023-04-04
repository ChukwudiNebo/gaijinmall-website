import React from "react";
import DangerButton from "../../atom/button/danger button/DangerButton";
import Img from "../../atom/img/Img";
import Text from "../../atom/text/Text";
import "./addtocart.css";

const AddToCart = ({ img, width, height, text, textAmount }) => {
  return (
    <>
      <div className="AddToCart">
        <div className="d-flex align-items-start">
          <div>
            <Img img={img} width={width} height={height} />
          </div>
          <div className="mx-3">
            <div>
              <Text text={text} />
            </div>
            <div className="AddToCart__header my-2">
              <div style={{ fontWeight: "bold" }}>
                <Text text={textAmount} />
              </div>
              <div className="">
                <DangerButton buttonText="View Product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
