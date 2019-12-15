import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
import logo from "./static/logo.png";
import Footer from "./footer";

class Landing extends Component {
    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={logo} alt="Our Logo" className="our-logo"/>

                        <div className="banner-text">
                            <h1>Codefoster</h1>
                            <p>The official coding club of S.G.S.I.T.S</p>
                        </div>
                    </Cell>
                    <div className="social-links"/>
                </Grid>

                <div className="about">
                    <h1>About Us</h1>
                    <Grid className="contact-grid" style={{height: "280px"}}>
                        <Cell col={3}>
                            <h2>What</h2>
                            <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown
                            </p>
                        </Cell>
                        <div class="vl"/>
                        <Cell col={3}>
                            <h2>When</h2>
                            <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown
                            </p>
                        </Cell>
                        <div class="vl"/>
                        <Cell col={3}>
                            <h2>How</h2>
                            <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown
                            </p>
                        </Cell>
                    </Grid>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Landing;
