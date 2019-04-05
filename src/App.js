import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Coin from "./components/coin";
import Home from "./components/home";
import Error from "./components/error";
import Code from "./code";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/coin" component={Coin} />
          <Route path="/code" component={Code} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
