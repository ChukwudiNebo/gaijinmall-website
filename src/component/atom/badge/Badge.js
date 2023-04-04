import React from 'react'

const Badge = ({ badgeClass, badgeText }) => {
  return (
    <>
      <span className={badgeClass}>
        {badgeText}
        <i className="fa fa-check-circle p-0 mx-1"></i>
      </span>
    </>
  );
};

export default Badge
