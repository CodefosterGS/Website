import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "./static/logo.png";
import "./static/homepage.css";
import LoadScript from "./script";
import "./static/logo.css";
import ParticleLogo from "./logo";

class HomePage extends Component {
  render() {
    return (
      <div>
        <ParticleLogo />
        {/* <div style={{overflow: "hidden"}} className="home"> */}
        {/* <Grid className="landing-grid">*/}
        {/* <Cell col={12}> */}
        {/* <img src={logo} alt="Our Logo" className="our-logo"/> */}
        {/* <div className="banner-text"> */}
        {/* <h1>Codefoster</h1> */}
        {/* <p>The official coding club of S.G.S.I.T.S</p> */}
        {/* </div> */}
        {/* </Cell> */}
        {/* </Grid> */}
        <div className="text">
          <h1 style={{ textAlign: "center" }}>About Us</h1>
          <div className="item">
            <div className="about">
              <h2>What</h2>
              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                Codefoster is the official central coding club of SGSITS.
                CodeFoster is the campus chapter of CodeChef and the only
                Raspberry Jam of central India.It is also affiliated to
                CoderDojo.We aim to promote coding by organizing various events
                for competitive coding and workshops on latest tech along with
                annual events held during Aayam.
              </p>
            </div>

            <div className="about">
              <h2>Why</h2>
              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                CodeFoster was founded in 2014 with the aim of increasing coding
                culture in college and provide a strong peer group to those
                interested in coding. We have been working since then to improve
                the logical, coding and problem solving skills.We believe in
                mutual learning by conducting events to enhance the programming
                capabilities of students and to make an open and collaborative
                ecosystems for promotion of Competitive Programming, Development
                Skills and Open Source Contributions among students.Club members
                also have meetups where they teach each other latest skills
                required in the industry.
              </p>
            </div>

            <div className="about">
              <h2>How</h2>
              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                Our journey began with a workshop on “C programming and its
                nuances”,which itself saw a participation of more than 100
                students. “De SparX Code” was the first ever inter-college
                coding competition organized in the college by our club.
              </p>
            </div>
          </div>

          {/* </Grid> */}

          <h1 style={{ textAlign: "center" }}>Vision/Mission</h1>
          <div className="item">
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              We aim to provide a platform which allows students to gain
              assistance and mentorship to enhance their coding ability. We wish
              to promote the enthusiasm for coding in the institute and
              especially amongst freshly admitted undergrads. We believe that
              every student should have an equal opportunity to learn how to
              code and develop a passion for it no matter what the branch is.
            </p>
          </div>
          {/* <LoadScript/> */}
        </div>
      </div>
    );
  }
}

export default HomePage;
