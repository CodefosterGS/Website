import React, { Component } from "react";
import Card from "./card";
import "./static/team.css";
import { team } from "./team_data";

class Team extends Component {
  render() {
    const items = [];
    for (const [index, value] of team.entries()) {
      items.push(<Card key={index} member={value} />);
    }
    return (
      <div className="backdrop">
        <h1>Team Bleech</h1>
        <div className="cards">{items}</div>
      </div>
    );
  }
}

export default Team;
