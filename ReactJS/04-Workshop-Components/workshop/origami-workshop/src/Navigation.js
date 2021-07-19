"use strict";
import React from "react";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="Navigation">
        {Link(this.props)}
      </nav>
    );
}
}

function Link(props) {
  let page = props.page;
  return (
    <ul>
    <img src="./white-origami-bird.png" alt="logo"></img>   
      <li className="listItem">
        <a href="#">Going to n</a>
      </li>
      <li className="listItem">
        <a href="#">Going to n</a>
      </li>
      <li className="listItem">
        <a href="#">Going to n</a>
      </li>
    </ul>
  );
}

export default Navigation;
