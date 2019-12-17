import React, {Component} from "react";
import Timeline from "./timeline";
import "./static/events.css";


class Event extends Component {
    render() {
        return (
            <div style={{background: "grey"}} className="margin">
                <h1 className="title" style={{color: "black", textAlign: "center"}}>Events Page</h1>
                <Timeline/>
              
            </div>
        );
    }
}

export default Event;
