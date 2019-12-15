import React, { Component } from "react";
import Timeline from "./timeline";
import "./events.css";
import Footer from "./footer";

class Event extends Component {
  render() {
    return (
      <div style={{background:"grey"}}>
        <h1 className="title" style={{color: "black", textAlign: "center" }}>Events Page</h1>
        <Timeline />
        <Footer />
      </div>
    );
  }
}

export default Event;
