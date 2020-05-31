import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  const Routes = routes.map((route: any) => {
    return route.component ? (
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} />}
      />
    ) : null;
  });

  return (
    <Router>
      <Switch>{Routes}</Switch>
    </Router>
  );
};

export default App;
