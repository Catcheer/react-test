import React, { Component } from "react";
import Link from './Link'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="footerBar">
        <Link filter="all">全部</Link>
        <Link filter="active">待办</Link>
        <Link filter="done">已完成</Link>
      </ul>
    );
  }
}

export default Footer;
