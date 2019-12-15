import React from "react";
import {Switch, Route} from "react-router-dom";

import HomePage from "./components/homepage";
import Events from "./components/events";
import Team from "./components/team";
import Blogs from "./components/blogs";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/events" component={Events}/>
        <Route path="/team" component={Team}/>
        <Route path="/blogs" component={Blogs}/>
    </Switch>
);

export default Routes;
