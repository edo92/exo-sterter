import React, { Component } from "react";
import { connect } from "react-redux";
import { Login } from "exo-ui";
import { Row } from "antd";

import { Istate, Iprops } from "./inf"; // Interface
import { authUser } from "../../store/actions"; // Actions

class SignInPage extends Component<Iprops, Istate> {
  render() {
    return (
      <div>
        <Row style={{ justifyContent: "center", paddingTop: "15rem" }}>
          <Login onSubmit={this.props.handleAuthUser} />
        </Row>
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
    handleAuthUser: (form: any) => dispatch(authUser(form)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
