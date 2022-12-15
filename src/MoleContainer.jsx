import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
  let [theMole, setTheMole] = useState(false);

  const handleClick = (e) => {
    let scoreChange = theMole ? 1 : -1;
    let score =
      props.score === 0 && scoreChange == -1 ? 0 : props.score + scoreChange;
    props.setScore(score);
    setTheMole(false);
  };

  let displayMole = theMole ? (
    <Mole
      setScore={props.setScore}
      toggle={setTheMole}
      handleClick={handleClick}
    />
  ) : (
    <EmptySlot toggle={setTheMole} handleClick={handleClick} />
  );
  return (
    <div style={{ display: "inline-block", width: "30vw" }}>{displayMole}</div>
  );
}

export default MoleContainer;
