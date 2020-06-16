import React from "react";
import { RouteComponentProps } from "react-router-dom";
import gql from "graphql-tag";

class DashboardPage extends React.Component<Iprops> {
  componentDidMount() {
    this.props.client
      .query({
        query: gql`
          query {
            users {
              id
            }
          }
        `,
      })
      .then((response: any) => {
        console.log("response", response);
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  }

  render() {
    return (
      <div>
        <h1>Dashboard page</h1>
        <a onClick={() => this.props.history.goBack()}>Go Back</a>
      </div>
    );
  }
}

export default DashboardPage;

interface Iprops extends RouteComponentProps {
  client: any;
  history: any;
}
