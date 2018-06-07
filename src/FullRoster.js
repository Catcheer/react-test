import React, { Component } from "react";
import { Link } from "react-router-dom";

class FullRoser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerList: [
        {
          txt: "s0",
          id: 0
        },
        {
          txt: "s1",
          id: 1
        },
        {
          txt: "s2",
          id: 2
        }
      ]
    };
  }
  render() {
    const list = this.state.playerList;
    return (
      <div>
          <ul>
        {list.map((item, index) => {
          return (
            <li key={"" + index}>
              <Link to={`/roster/${index}`}>{`p ${index}`}</Link>
            </li>
          );
        })}
      </ul>
      
      </div>
    );
  }
}

export default FullRoser;
