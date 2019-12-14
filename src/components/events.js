import React, { Component } from "react";
import Carousel from "./carousel";
import "./events.css";

class Event extends Component {
  render() {
    return (
      <div>
        <h1>Events Page</h1>

        <div className="event">
          <h1 align="center" className="white">
            Events Page
          </h1>
          <Carousel />
          <div className="allevents">
            <div className="rowe">
              <div className="cole1">
                <h3 className="white">Event-1</h3>
                <img
                  src="https://i.ytimg.com/vi/ONhfy_40zA8/maxresdefault.jpg"
                  alt="Avtar"
                  className="evepic"
                />
                <p className="event-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="cole1">
                <h3 className="white">Event-2</h3>
                <img
                  src="https://i.ytimg.com/vi/ONhfy_40zA8/maxresdefault.jpg"
                  alt="Avtar"
                  className="evepic"
                />
                <p className="event-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
