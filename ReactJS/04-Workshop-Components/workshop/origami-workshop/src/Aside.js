"use strict";
import React from "react";

class Aside extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside class="Aside">
        <ul>{Link(this.props)}</ul>
      </aside>
    );
}
}

function Link(props) {
  let page = props.page;
  return (
    <div>
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
    </div>
  );
}

export default Aside;
