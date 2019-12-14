import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Events from "./events";
import Team from "./team";
import Blogs from "./blogs";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/events" component={Events} />
    <Route path="/team" component={Team} />
    <Route path="/blogs" component={Blogs} />
  </Switch>
);

export default Main;
