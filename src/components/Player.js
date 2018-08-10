import React from "react";
import Counter from "./Counter";

const Player = ({ name, score, id }) => (
  <div className="player">
    <div className="player-name">{name}</div>

    <div className="player-score">
      <Counter score={score} />
    </div>
  </div>
);

export default Player;
