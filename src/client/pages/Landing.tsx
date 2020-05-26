import React from "react";

class LandingPage extends React.Component<IProps> {
  render() {
    return (
      <div>
        <h1>Landing page</h1>
        <a href="/details">Details</a>
      </div>
    );
  }
}

interface IProps {}

export default LandingPage;
