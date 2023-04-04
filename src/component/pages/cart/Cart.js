import React from "react";
import { Link } from "react-router-dom";
// import Button from "../../atom/button/Button";
import Text from "../../atom/text/Text";
import SearchBar from "../../molecules/searchBar/SearchBar";
import AddedCartItem from "../../organisms/added Cart item/AddedCartItem";

import img1 from "../../../images/gold.jpeg";
import "./cart.css";
import BottomNavbar from "../../organisms/Navbar/bottom navbar/BottomNavbar";
import DangerButton from "../../atom/button/danger button/DangerButton";
// import AddToCart from "../../molecules/add to cart/AddToCart";
import AddToCart from "../../molecules/add to cart/AddToCart"
import Navbar from "../../organisms/Navbar/Navbar";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <div>
          <Navbar />
        </div>
        <div style={{ paddingTop: "100px" }}>
          <div className="d-flex justify-content-end align-items-center">
            <SearchBar inputPlaceholder="Search by product" />
          </div>
          {/* Product added to Cart */}
          <div>
            <div className="cart__header">
              <Text text="Cart" />
            </div>
            <div className="d-flex flex-wrap flex-lg-nowrap justify-content-between">
              <div className="">
                <div className="d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center cart__checkout">
                  <div>
                    <Text
                      text="The Product has been added to your cart."
                      backgroundColor="#0B5ED7"
                    />
                  </div>
                  <div>
                    <Link to="checkout">Checkout</Link>
                  </div>
                </div>
                <div className="d-flex flex-wrap cart__addToCart">
                  <div>
                    <AddedCartItem
                      img={img1}
                      width="150"
                      height="100"
                      text="Gold"
                    />
                    <hr />
                  </div>
                  <div className="my-3">
                    <AddedCartItem
                      img={img1}
                      width="150"
                      height="100"
                      text="Gold"
                    />
                    <hr />
                  </div>
                  <div className="my-3">
                    <AddedCartItem
                      img={img1}
                      width="150"
                      height="100"
                      text="Gold"
                    />
                    <hr />
                  </div>
                  <div
                    className="my-2 text-end"
                    style={{ paddingBottom: "40px" }}
                  >
                    <DangerButton buttonText="Add more product" />
                  </div>
                </div>
              </div>

              {/* Add product to Cart */}
              <div>
                <div className="cart__product">
                  <Text text="Add product to your Cart" />
                </div>
                <div className="my-3">
                  <AddToCart
                    img={img1}
                    width="110"
                    height="110"
                    text="Laptop"
                    textAmount="Y8000"
                  />
                  <hr />

                  <div className="my-2">
                    <AddToCart
                      img={img1}
                      width="110"
                      height="110"
                      text="Laptop"
                      textAmount="Y8000"
                    />
                  </div>
                  <hr />
                  <div className="my-2">
                    <AddToCart
                      img={img1}
                      width="110"
                      height="110"
                      text="Laptop"
                      textAmount="Y8000"
                    />
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <BottomNavbar />
      </div>
    </>
  );
};

export default Cart
