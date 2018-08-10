import React, { Component } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import "./App.css";

const playerList = [
  {
    playerName: "Amy Tang",
    score: 31,
    id: 1
  },
  {
    playerName: "Jim Bo",
    score: 29,
    id: 2
  },
  {
    playerName: "Billy Jay",
    score: 33,
    id: 3
  },
  {
    playerName: "Jane Doe",
    score: 40,
    id: 4
  }
];

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" />

        <div className="players">
          {playerList.map( player => { 
            console.log(player.playerName, player.score)
            return <Player name={player.playerName} score={player.score} key={player.id} />
          }) }
        </div>
      </div>
    );
  }
}

export default App;
