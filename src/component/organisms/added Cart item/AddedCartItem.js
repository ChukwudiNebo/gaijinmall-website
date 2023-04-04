import React, { useState } from "react";
import Button from "../../atom/button/Button";
import DangerButton from "../../atom/button/danger button/DangerButton";
import Img from "../../atom/img/Img";
import LinkTag from "../../atom/link/LinkTag";
import Text from "../../atom/text/Text";
import AdCard from "../../molecules/ad card/AdCard";
import SellerInfo from "../seller info/SellerInfo";

import "./addedcartitem.css";

const AddedCartItem = ({ img, width, height, text }) => {
  const [showless, setShowless] = useState(true);
const [sellerInfo, setSellerInfo] = useState(true)
  // const showMore = (showless) => {
  //   console.log(showless)
  //   setShowless(!showless)
  // };

  return (
    <>
      <div className="addedCartItem">
        <div className="d-flex flex-wrap justify-content-between align-items-start">
          <div>
            <Img img={img} width={width} height={height} />
          </div>
          <div className="align-self-start addedCartItem__header">
            <Text text={text} />
          </div>
          <div className="text-center order-3 addedCartItem__quantity">
            <Text text="Quantity" />
            <Text text="1" />
            {/* how many piece */}
          </div>
          <div className="order-4">
            <Text text="Price" />
            <Text text="Y3,000" />
          </div>
          {/* delete button  */}
          <div className="order-2 order-md-4 align-self-end">
            <DangerButton buttonText="delete" />
          </div>
        </div>
        <div className="my-2">
          <div onClick={() => setSellerInfo(!sellerInfo)}>
            <LinkTag linkText="Seller info" />
            {/* <Button buttonText="Seller info" width="50" /> */}
          </div>
          <div>
            {sellerInfo ? (
              ""
            ) : (
              <div className="my-2">
                <SellerInfo />
              </div>
            )}
          </div>
        </div>

        <div className="addedCartItem__adDetail">
          <div onClick={() => setShowless(!showless)}>
            {/* <Button buttonText="Show Ad Detail"  width="100"/> */}
            <Button buttonText="Show Ad Detail" />
          </div>
          {showless ? (
            ""
          ) : (
            <div
              className="d-flex flex-wrap justify-content-between my-3"
              // className={showless ? "d-flex justify-content-between my-3" : ""}
            >
              <div>
                <AdCard cardHeader="TYPE" cardList="Chains" />
              </div>
              <div>
                <AdCard cardHeader="CONDITION" cardList="Used" />
              </div>
              <div className="my-4 my-lg-0">
                <AdCard cardHeader="COLOUR" cardList="Gold" />
              </div>
              <div className="my-4 my-lg-0">
                <AdCard cardHeader="GENDER" cardList="Men's" />
              </div>
              <div className="my-1 my-lg-4">
                <AdCard cardHeader="BRAND" cardList="A New Day" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddedCartItem;
