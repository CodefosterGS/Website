import React, { Component } from "react";
import Carousel from "./carousel";
import Timeline from "./timeline.js";

class Event extends Component {
  render() {
    return (
      <div>
        <h1 align="center">Our Events</h1>
        <Carousel />
        <Timeline />
      </div>
    );
  }
}

export default Event;
