import React from "react";
import { RouteComponentProps } from "react-router-dom";

class DetalesPage extends React.Component<IDetails> {
  render() {
    return (
      <div>
        <h1>Details page</h1>
        <a onClick={() => this.props.history.goBack()}>Go Back</a>
      </div>
    );
  }
}

export default DetalesPage;

interface IDetails extends RouteComponentProps {}
