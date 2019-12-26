import React, { Component } from "react";
import "./App.css";
import { Navigation } from "react-mdl";
import { Link } from "react-router-dom";
import {base} from "./routes"

class Navigations extends Component {
  render() {
    return (
      <Navigation>
        <Link to={base}>Home</Link>
        <Link to={base+"events"}>Ventures</Link>
        {/* <Link to="/blogs">Blogs</Link> */}
        <Link to={base+"team"}>Board</Link>
      </Navigation>
    );
  }
}

export default Navigations;
