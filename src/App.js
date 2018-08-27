
import React, { Component } from "react";
import logo from "./logo.svg";
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import "./App.scss";
import routes from "./routes";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Calculator from "./Calculator";
// import TestRouter from "./TestRouter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <BrowserRouter basename="react-test">
          <div>
            <ul className="navList">
              {
                routes.map((item,index)=>{
                  return <li key={''+index}>
                     <Link to={`${item.path}`}>{item.path.substring(1)===''?'home':item.path.substring(1)}</Link>
                  </li>
                })
              }
            </ul>
            <main>
              <Switch>
                {routes.map((route, index) => {
                    return (
                      <Route
                        key={"" + index}
                       {...route}
                      />
                    );
                })}
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
