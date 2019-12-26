import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { Component } from "react";
import { event } from "./event_data";
import TimelineElement from "./timelineElement";
class Timeline extends Component {
  render() {
    const mem = [];
    for (const [index, value] of event.entries()) {
      mem.push(<TimelineElement key={index} activity={value} />);
    }
    return <VerticalTimeline>{mem}</VerticalTimeline>;
  }
}

export default Timeline;
