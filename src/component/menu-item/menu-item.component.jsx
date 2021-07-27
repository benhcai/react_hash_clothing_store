import React from "react";
import "./menu-item.styles.scss";

// The props object  can be initially destructured.
// const MenuItem = (props) => {
//   <h1 className="title">{props.title}</h1>;
// };

const MenuItem = ({ title, imageUrl, size }) => (
  // Pass in the size class parameter, and if it exists, adjust height.
  // CSS background-image is set here to allow for dynamic values
  <div className={`menu-item ${size}`}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
      <div className="shadow"></div>
    </div>
  </div>
);

export default MenuItem;
