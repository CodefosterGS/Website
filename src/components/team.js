import React, { Component } from "react";
import Card from './card';
import Footer from './footer';
class Team extends Component {
  render() {
    return (
      <div>
      <div >
        <Card />
      </div>
      <div  >
        <Footer />
      </div>
      </div>
    );
      
  }
}

export default Team;
