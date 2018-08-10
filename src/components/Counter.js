import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  static propTypes = {
    initialScore: PropTypes.number.isRequired
  }

  state = { score: this.props.initialScore };

  getInitialState = score => {
    this.setState({ score: score });
  };

  handleIncrementScore = () => {
    console.log("Increment Score")
    this.setState({ score: (this.state.score + 1)});
  };

  handleDecrementScore = () => {
    if(this.state.score >= 1 ) {
      this.setState({ score: (this.state.score - 1)});
    }
  };
  
  render() {
    return (
      <div className="counter">
        <button  onClick={this.handleDecrementScore} className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button onClick={this.handleIncrementScore} className="counter-action increment"> + </button>
      </div>
    );
  }
}

export default Counter;
