import React from "react";
import { ApolloConsumer } from "react-apollo";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import AuthProvider from "./provider/auth";

const App: React.FC = () => {
  const Provider = (props: any) => {
    return (
      <AuthProvider route={props.route}>
        <ApolloConsumer>
          {(client: any) => (
            <props.route.component client={client} route={routes} {...props} />
          )}
        </ApolloConsumer>
      </AuthProvider>
    );
  };

  return (
    <Router>
      <Switch>
        {routes.map((route: any) => {
          return route.component ? (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              render={(props) => <Provider route={route} {...props} />}
            />
          ) : null;
        })}
      </Switch>
    </Router>
  );
};

export default App;
