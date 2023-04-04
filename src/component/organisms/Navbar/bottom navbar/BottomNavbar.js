import React from "react";
import Text from "../../../atom/text/Text";
import ListItem from "../../../molecules/list item/ListItem";
import "./bottomnavbar.css";
import appDownload from '../../../../images/app.png'

const BottomNavbar = () => {
  //     const bottomNav=[{
  //         Navigation:'Navigation'
  // Signin:'Sign in'
  // Register:''
  // Sell:''

  //     },

  // Support
  // Support@gaijinmall.com
  // Billing policy
  // Contact Us
  // FAQ
  //     ]
  return (
    <>
      <div className="bottomNav">
        <div className=" d-flex flex-wrap 
        justify-content-between justify-content-lg-evenly">
          <div>
            <ListItem
              listHeader="Navigation"
              list2="Sign in"
              list3="Register"
              list4="Sell"
            />
          </div>
          <div>
            <ListItem
              listHeader="Support"
              list2="Support@gaijinmall.com"
              list3="Billing policy"
              list4="Contact Us"
              list5="FAQ"
            />
          </div>
          <div>
            <ListItem
              listHeader="Stay Connected"
              img1={appDownload}
              width='150'
              height='100'
              fontAwesome1='fa fa-facebook'
              fontAwesome2='fa fa-twitter'
               fontAwesome3='fa fa-instagram'
            />
          </div>
          <div>
            <ListItem
              listHeader="Information"
              list2="About us"
              list3="Cookie Policy"
              list4="Terms of service"
              list5="Privacy policy"
            />
          </div>
        </div>
        <div>
          <div className="text-center my-4 bottomNav__copyright">
            <Text text="© 2023 GaiijinMall.com, All rights reserved"></Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
