import React, { Component } from "react";
import Carousel from "./carousel";

class Event extends Component {
  render() {
    return (
      <div>
        <h1 align="center">Our Events</h1>
        <Carousel />
      </div>
    );
  }
}

export default Event;
