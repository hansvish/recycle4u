import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/home";
import Maps from "./components/maps";
import Items from "./components/items";
import ErrorPage from "./components/error";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/locations" component={Maps} />
            <Route exact path="/items" component={Items} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
