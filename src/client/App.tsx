import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landing";
import DetalesPage from "./pages/details";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/details" component={DetalesPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
