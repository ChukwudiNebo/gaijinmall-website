import React from "react";
import './adcard.css'

const AdCard = ({cardHeader,cardList}) => {
  return (
    <>
      <div className="card" style={{width: '8rem'}}>
        <div className="card-header">{cardHeader}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{cardList}</li>
        </ul>
      </div>
    </>
  );
};

export default AdCard;
