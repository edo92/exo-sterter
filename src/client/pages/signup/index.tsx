import React, { Component } from "react";
import { connect } from "react-redux";

import { Row } from "antd";
import { Register } from "exo-ui";

import { Iprops, Istate } from "./inf"; // Interface
import { createUser } from "../../store/actions"; // Actions

class RegisterPage extends Component<Iprops, Istate> {
  render() {
    return (
      <div>
        <Row style={{ justifyContent: "center", paddingTop: "10rem" }}>
          <Register onSubmit={this.props.handleCreateUser} />
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
    handleCreateUser: (form: any) => dispatch(createUser(form)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
