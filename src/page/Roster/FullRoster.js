import React, { Component } from "react";
import { Link } from "react-router-dom";
import Random from './Random'

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
      ],
      randomNum:-1
    };

   this.handleRandomNum=this.handleRandomNum.bind(this)
  }
  handleRandomNum(){
      const randomNum=Math.floor(Math.random()*10)
      this.setState({randomNum})
      const extisNum=this.state.playerList.some((item)=>{
          return item.id===randomNum
      })
      if(!extisNum){
        this.setState({
            playerList:[...this.state.playerList,{id:randomNum,txt:`s${randomNum}`}].sort((a,b)=>{return a.id>b.id})
        })
      }
  }
  render() {
    const list = this.state.playerList;
    return (
      <div>
          <ul>
        {list.map((item, index) => {
          return (
            <li key={"" + index}>
              <Link to={`./roster/${item.id}`}>{`${item.txt}`}</Link>
            </li>
          );
        })}
      </ul>
        <Random randomNum={this.handleRandomNum} btnDes='生成随机数' />
      </div>
    );
  }
}

export default FullRoser;
