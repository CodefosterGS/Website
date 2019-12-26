import React, { Component } from "react";
import "./App.css";
import { Navigation } from "react-mdl";
import { Link } from "react-router-dom";

class Navigations extends Component {
  render() {
    return (
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/events">Ventures</Link>
        {/* <Link to="/blogs">Blogs</Link> */}
        <Link to="/team">Board</Link>
      </Navigation>
    );
  }
}

export default Navigations;
