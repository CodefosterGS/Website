import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "./logo.png";
import Footer from "./footer";



class Landing extends Component {
  render() {
    return (
      <div style={{ overflow: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={logo} alt="comeong" className="avatar-img" />

            <div className="banner-text">
              <h1>Codefoster</h1>

              <hr />

              <p>The official coding club of S.G.S.I.T.S</p>
            </div>
          </Cell>
          <div className="social-links">
            {/* LinkedIn */}
            <a href="h#" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="#" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github" aria-hidden="true" />
            </a>

            {/* Instagram */}
            <a href="#" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>

            {/* Twitter */}
            <a href="#" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </div>
        </Grid>

        <div className="about">
          <h1>About Us</h1>
          <Grid className='contact-grid' style={{height: "280px"}}>
            <Cell col={4}>
              <h2>What</h2>
              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown 
              </p>
            </Cell>
            <Cell col={4}>
              <h2>When</h2>
              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown 
              </p>
            </Cell>
            <Cell col={4}>
              <h2>How</h2>
              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown 
              </p>
            </Cell>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
