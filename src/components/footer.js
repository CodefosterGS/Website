import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./static/footer.css";
import React, { Component } from "react";

import { Container, Row } from "reactstrap";



class Footer extends Component {
    render() {
        return (

            <footer className="footer-black">
                <Container>
                    <Row className="foot">
                            <div className="social">
                                <h4>Connect Us:</h4>
                                <GitHubIcon />
                                &nbsp;
                                <FacebookIcon />
                                &nbsp;
                                <TwitterIcon />
                                &nbsp;
                                <InstagramIcon />
                            </div>
                            <div className="social1">
                                <h4>Contact:</h4>
                                <p>codefostergs@gmail.com</p>
                            </div>
                        <div className="credits">
                            <span className="copyright">
                                © {new Date().getFullYear()}
                                , made by Codefoster Web Team
                </span>
                        </div>
                    </Row>
                </Container>
            </footer>

        );
    }
}

export default Footer;