import React, { Component } from "react";
import { Istate, Iprops } from "./inf"; // Interface

class LandingPage extends Component<Iprops, Istate> {
  render() {
    return (
      <div>
        <h1>Landing page</h1>
        <a href="/details">Details</a>
        <a href="/signin">Sign In</a>
      </div>
    );
  }
}

export default LandingPage;
