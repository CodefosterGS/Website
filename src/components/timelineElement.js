import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { Component } from "react";
// import Icon from './components/static/logo.svg'

class activity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VerticalTimelineElement
        style={{ textDecoration: "" }}
        className="vertical-timeline-element"
        contentStyle={{
          background: "#3498DB",
          color: "",
          borderTop: "4px solid red"
        }}
        contentArrowStyle={{ borderRight: "13px solid yellow" }}
        date={this.props.activity.dates}
        iconStyle={{ background: "purple", borderRight: "15px solid black" }}
        // icon={<Icon/>}
      >
        <h3 className="vertical-timeline-element-title">
          {this.props.activity.name}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          {this.props.activity.subtitle}
        </h4>
        <p>{this.props.activity.description}</p>
      </VerticalTimelineElement>
    );
  }
}

export default activity;
