import React, { Component } from "react";
import Timeline from "./timeline";
import "./static/events.css";

class Event extends Component {
  render() {
    return (
      <div style={{ background: "#A4B0BD" }} className="margin">
        <h1
          className="title"
          style={{ color: "black", fontFamily: "Roboto", textAlign: "center" }}
        >
          Our Activites
        </h1>
        <Timeline />
      </div>
    );
  }
}

export default Event;
