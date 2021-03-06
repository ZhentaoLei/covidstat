import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import Homepage from "./components/Homepage/Homepage";
import Charts from "./components/Charts/Charts";
import Cards from "./components/Cards/Cards";
import Compare from "./components/Compare/Compare";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/covidstat" component={Homepage} />
          <Route path="/Cards" component={Cards} />
          <Route path="/Charts" component={Charts} />
          <Route path="/Compare" component={Compare} />

          <Navigation />
        </div>
      </Router>
    );
  }
}

export default App;
