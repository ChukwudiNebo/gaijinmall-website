import React from "react";
import Text from "../../atom/text/Text";
import Img from "../../atom/img/Img";
import jp from "../../../images/jp.png";
import gb from "../../../images/gb.png";
import logoSm from "../../../images/logo-sm.png";

import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar__div" style={{position:"fixed",zIndex:"100"}}>
        <div className="d-flex justify-content-between align-items-center navbar">
          <div className="navbar__logo">
            <Img img={logoSm} />
          </div>
          <div className="d-none d-lg-inline-flex justify-content-start align-items-center navbar__coolBuy">
            <div className="">
              <Text text="COOL BUY & SELL" />
            </div>
            <div className="mx-1">
              <Img img={jp} />
            </div>
            <div className="">
              <Img img={gb} />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center navbar__content">
            <div className="mx-1">
              <Text text="Sign in" />
            </div>
            <div className="navbar__createAccount">
              <Text text="Create Account" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
