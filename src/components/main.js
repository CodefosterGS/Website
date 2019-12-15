import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./homepage";
import Events from "./events";
import Team from "./team";
import Blogs from "./blogs";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/events" component={Events} />
    <Route path="/team" component={Team} />
    <Route path="/blogs" component={Blogs} />
  </Switch>
);

export default Main;
