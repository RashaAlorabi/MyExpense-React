import React, { Component } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Items from "./components/Items";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/items/:category?" component={Items} />

        <Redirect to="/" />
      </div>
    );
  }
}

export default App;
