import React, { Component } from "react";

class Player extends Component {
  render() {
    const { playerName } = this.props;

    return (
      <div className="player">
        <div className="player-name">{playerName}</div>
        <div className="player-score">
          <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> 31 </div>
            <button className="counter-action increment"> + </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
