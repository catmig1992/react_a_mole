import React, { useEffect } from "react";
import moleImg from "./mole.png";

function Mole(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 3000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });
  return (
    <div className="Mole">
      <img
        style={{ width: "15vw", height: "350px" }}
        src={moleImg}
        onClick={props.handleClick}
      />
    </div>
  );
}

export default Mole;
