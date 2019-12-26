import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./static/card.css";

class member extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact-grid">
        <h2>{this.props.member.name}</h2>
        <img
          className="circular--square"
          src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
          alt="avatar"
        />
        <p className="para"> {this.props.member.description} </p>
        <div>
          <a
            href={this.props.member.links.linkedIn}
            class="generic-anchor"
            target="_blank"
            title="linkedin"
            itemProp="significantLink"
          >
            <i class="fa fa-linkedin" />
          </a>
          &nbsp;
          <a
            href={this.props.member.links.github}
            class="generic-anchor"
            target="_blank"
            title="Github"
            itemProp="significantLink"
          >
            <i class="fa fa-github" />
          </a>
          &nbsp;
          <a
            href={this.props.member.links.portfolio}
            class="generic-anchor"
            target="_blank"
            title="Portfolio"
            itemProp="significantLink"
          >
            <i class="fa fa-dribbble" />
          </a>
        </div>
      </div>
    );
  }
}

export default member;
