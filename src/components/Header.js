import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

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
