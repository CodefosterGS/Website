import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <div>
          <img src="https://i.ytimg.com/vi/ONhfy_40zA8/maxresdefault.jpg" />
          <p className="legend">Event-1</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/ONhfy_40zA8/maxresdefault.jpg" />
          <p className="legend">Event-2</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/ONhfy_40zA8/maxresdefault.jpg" />
          <p className="legend">Event-3</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/ONhfy_40zA8/maxresdefault.jpg" />
          <p className="legend">Event-4</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
