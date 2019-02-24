import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">Column One</div>
          <div className="col-6">Column Two</div>
        </div>
      </div>
    );
  }
}

export default App;
