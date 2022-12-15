import React, { useEffect } from "react";
import MoleHill from "./molehill.png";

const EmptySlot = (props) => {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 3000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "15vw", height: "350px" }}
        src={MoleHill}
        onClick={props.handleClick}
      />
    </div>
  );
};

export default EmptySlot;
