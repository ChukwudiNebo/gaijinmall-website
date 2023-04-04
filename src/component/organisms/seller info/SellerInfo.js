import React from "react";
import Badge from "../../atom/badge/Badge";
import Button from "../../atom/button/Button";
import LinkTag from "../../atom/link/LinkTag";
import Text from "../../atom/text/Text";
import ProfileBadge from "../../molecules/profile badge/ProfileBadge";

import "./sellerinfo.css";
const SellerInfo = () => {
  return (
    <>
      <div className="sellerinfo">
        <div className="d-flex align-items-start">
          <div>
            <ProfileBadge profileLetter="B" />
          </div>
          <div className="mx-3">
            <div>
              <Text text="Babii Matsuura" />
            </div>
            <div>
              <Badge badgeClass="badge bg-success" badgeText="verified" />
            </div>
            <div>
              <span
                className="badge bg-light text-dark"
                style={{ paddingLeft: "0px" }}
              >
                <i className="fa fa-clock-o"></i>&nbsp;
                <span className="badge bg-dark text-light">7 months</span> in
                Gaijinmall
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <LinkTag linkText="Call Seller" />
            {/* <Button buttonText="Send a Message" /> */}
          </div>
          <div className="mx-2">
            <LinkTag linkText="Send a Message" />
            {/* <Button buttonText="Send a Message" /> */}
            {/* <i class="fa fa-comments fs-5"></i> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerInfo;
