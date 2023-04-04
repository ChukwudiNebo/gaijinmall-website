import React from "react";
import Text from '../../atom/text/Text'
import Input from "../../atom/input/Input";
import Button from "../../atom/button/Button";



const SearchBar = ({ inputPlaceholder }) => {
  return (
    <>
      <>
        <div>
          <div className="" id="DIV_007">
            {/* <div className="input-text">
              <Text text={"10000+ resume you can choose from"} />
            </div> */}
            <div className="d-flex align-items-center justify-content-center">
              <div
                className="d-lg-none d-xl-inline-block d-xl-flex d-none"
                id="EMAIL_DIV"
              >
                <Input
                  inputType="text"
                  inputName="search"
                  inputPlaceholder={inputPlaceholder}
                />
              </div>
              {/* <div>
                <Button buttonText="Search" />
              </div> */}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SearchBar;
