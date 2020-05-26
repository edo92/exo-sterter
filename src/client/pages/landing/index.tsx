import React from "react";
import { connect } from "react-redux";

import { Istate, Iprops } from "./inf"; // Interface

// Actions
import { authAction } from "../../store/actions";

class LandingPage extends React.Component<Iprops, Istate> {
  state: Istate = {
    user: {
      name: "username",
    },
  };

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
