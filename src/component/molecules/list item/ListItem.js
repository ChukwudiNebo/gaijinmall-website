import React from 'react'
import './listitem.css'

const ListItem = ({
  img1,
  img2,
  width,
  height,
  listHeader,
  list2,
  list3,
  list4,
  list5,
  list6,
  fontAwesome1,
  fontAwesome2,
  fontAwesome3,}) => {
  return (
    <>
      <ul className="list-unstyled listUL">
        <li className="list__header">{listHeader}</li>
        <li>
          {img1 ? (
            <img
              src={img1}
              alt=""
              style={{ width: `${width}px`, height: `${height}px` }}
            />
          ) : list2 ? (
            <li>{list2}</li>
          ) : (
            ""
          )}
        </li>
        <li>
          {img2 ? (
            <img
              src={img1}
              alt=""
              style={{ width: `${width}px`, height: `${height}px` }}
            />
          ) : list3 ? (
            <li>{list3}</li>
          ) : (
            ""
          )}
        </li>
        <li>
          {fontAwesome1 || fontAwesome2 || fontAwesome3 ? (
            <div className="d-flex flex-wrap justify-content-between align-items-center text-center social-media">
              <li>
                <i className={`${fontAwesome1}`}></i>
              </li>
              <li>
                <i className={`${fontAwesome2}`} ></i>
              </li>
              <li>
                <i className={`${fontAwesome3}`}></i>
              </li>
            </div>
          ) : (
            <li>{list4}</li>
          )}
        </li>

        <li>{list5}</li>
        <li>{list6}</li>
      </ul>
    </>
  );
};

export default ListItem
