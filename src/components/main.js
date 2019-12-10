import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Events from "./events";
import Team from "./team";
import Blogs from "./blogs";
// import Resume from "./resume";
// import Wrong from './wrong.js'

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/events" component={Events} />
    <Route path="/team" component={Team} />
    <Route path="/blogs" component={Blogs} />
    {/* <Route path="/wrong" component={Wrong} /> */}
  </Switch>
);

export default Main;
