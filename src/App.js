
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
            <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/calculator">calculator</Link>
              </li>
              <li>
                <Link to="/roster">roster</Link>
              </li>
              <li>
                <Link to="/todos">todos</Link>
              </li>
            </ul>
            <main>
              <Switch>
                {routes.map((route, index) => {
                  if (route.exact) {
                    return (
                      <Route
                        exact
                        key={"" + index}
                        path={route.path}
                        component={route.component}
                      />
                    );
                  }
                  return (
                    <Route
                      key={"" + index}
                      path={route.path}
                      component={route.component}
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
