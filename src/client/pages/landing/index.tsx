import React, { Component } from "react";
import { connect } from "react-redux";
import { request } from "graphql-request";

import { Istate, Iprops } from "./inf"; // Interface
import { authAction } from "../../store/actions"; // Actions

class LandingPage extends Component<Iprops, Istate> {
  async componentDidMount() {
    let res = await request(
      "/graphql",
      `query {
        users {
          name
        }
      }`
    );
    console.log("response", res);
  }

  render() {
    return (
      <div>
        <h1>Landing page</h1>
        <a href="/details">Details</a>
        <button onClick={() => this.props.authUser(this.state.user)}>
          Action
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    authUser: (usr: any) => dispatch(authAction(usr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
