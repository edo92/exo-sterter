import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "exo-ui/dist/styles/index.css";

import App from "./App";
import store from "./store";
import { ApolloProvider } from "./provider";

render(
  <ApolloProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
