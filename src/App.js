import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
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

        <BrowserRouter>
          <div>
            <ul>
            <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/calculator">calculator</Link>
              </li>
              <li>
                <Link to="/roster">roster</Link>
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
