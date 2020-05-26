import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/Landing";
import DetalesPage from "./pages/Details";

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
