import React, { Component } from "react";
import { Login } from "exo-ui";
import { Row } from "antd";

import { Istate, Iprops } from "./inf"; // Interface
import gql from "graphql-tag";

class SignInPage extends Component<Iprops, Istate> {
  handleAuthUser = async (form: any) => {
    const { email, password } = form;
    this.props.client
      .mutate({
        mutation: gql`
          mutation { 
            authUser(email: "${email}", password: "${password}") {
              token
              refreshToken
            }
          }
        `,
      })
      .then((response: any) => {
        const { token, refreshToken } = response.data.authUser;
        if (token && refreshToken) {
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);
          this.props.history.push("/dashboard");
        }
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <div>
        <Row style={{ justifyContent: "center", paddingTop: "10rem" }}>
          <Login onSubmit={this.handleAuthUser} />
        </Row>
      </div>
    );
  }
}

export default SignInPage;
