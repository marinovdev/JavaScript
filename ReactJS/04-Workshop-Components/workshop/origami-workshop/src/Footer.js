"use strict";
import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="Footer">
                {Link(this.props)}
            </footer>
        );
    }
}

function Link(props) {
    let page = props.page;
    return (
        <ul>
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

export default Footer;
