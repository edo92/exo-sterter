import React from "react";
import { Redirect } from "react-router-dom";

const AuthProvider = (props: any) => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  return props.route && props.route.protected && !token && !refreshToken ? (
    <Redirect to="/signin" />
  ) : (
    props.children
  );
};

export default AuthProvider;
