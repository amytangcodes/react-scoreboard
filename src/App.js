import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Player from "./components/Player";
import "./App.css";

class App extends Component {
  render() {
    // const { playerName } = this.props;

    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" />

        <div className="players">
          <Player playerName="Jim Bo" />
          <Player playerName="Amy Tang" />
        </div>
      </div>
    );
  }
}

export default App;
