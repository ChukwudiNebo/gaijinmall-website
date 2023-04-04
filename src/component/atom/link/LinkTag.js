import React from 'react'
import { Link } from "react-router-dom";

const LinkTag = ({ linkText, linkTo }) => {
  return (
    <>
      <Link to={linkTo}>{linkText}</Link>
    </>
  );
};

export default LinkTag
