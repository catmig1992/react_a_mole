import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import MoleContainer from "./MoleContainer";

function App() {
  let [score, setScore] = useState(0);
  let [showMoleHill, setShowMoleHill] = useState(false);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    return <div>{hills}</div>;
  };

  const handleStartClick = () => {
    setShowMoleHill(true);
    document.getElementById("splash-screen").remove();
    document.getElementById("start-game-btn").remove();
  };

  return (
    <div className="App">
      <img id="splash-screen" src={logo} className="App-logo" alt="logo" />
      <h1>React-a-Mole!</h1>
      {score}
      <br />
      <button id="start-game-btn" onClick={handleStartClick}>
        Start
      </button>
      {showMoleHill ? createMoleHill() : ""}
    </div>
  );
}

export default App;
