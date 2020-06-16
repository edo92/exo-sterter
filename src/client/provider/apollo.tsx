import React from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloLink, from } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";

const domainURI = "http://localhost:3000/graphql";
const httpLink = createHttpLink({ uri: domainURI });

const middleware = new ApolloLink((operation: any, forward: any) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      "x-token": localStorage.getItem("token") || null,
      "x-refresh-token": localStorage.getItem("refreshToken") || null,
    },
  }));
  return forward(operation);
});

const afterWare = new ApolloLink((operation: any, forward: any) => {
  return forward(operation).map((response: any) => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    const token = headers.get("x-token");
    const refreshToken = headers.get("x-refresh-token");

    if (token && refreshToken) {
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
    }
    return response;
  });
});

const errorLink = onError(({ networkError }: any) => {
  if (networkError && networkError.statusCode === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.href = "/signin";
  }
});

const client = new ApolloClient({
  link: from([middleware, afterWare, errorLink, httpLink]),
  cache: new InMemoryCache({}),
});

const ApolloClientProvider = (props: any) => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloClientProvider;
