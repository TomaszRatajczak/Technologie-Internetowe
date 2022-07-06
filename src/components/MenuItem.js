import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <p> Od {price} zł /Msc </p>
    </div>
  );
}

export default MenuItem;
