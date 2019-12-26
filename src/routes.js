import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/homepage";
import Events from "./components/events";
import Team from "./components/team";
import Blogs from "./components/blogs";

export const base = "/Website/";

const Routes = () => (
  <Switch>
    <Route exact path={base} component={HomePage} />
    <Route path={base+"events"} component={Events} />
    <Route path={base+"team"} component={Team} />
    <Route path={base+"blogs"} component={Blogs} />
  </Switch>
);

export default Routes;
