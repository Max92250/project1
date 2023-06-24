import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
     
        <Switch>
          <Route path="/" exact component={ProductListing} />

          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;