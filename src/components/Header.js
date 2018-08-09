import React, { Component } from "react";

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="header">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Header;
