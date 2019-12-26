import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./static/footer.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-black">
        <Container>
          <Row className="foot">
            <div className="social">
              <h4>Connect With Us:</h4>
              <Link target="_blank" to={"//www.github.com/CodeFosterGS"}>
                <GitHubIcon style={{ fill: "white" }} />
              </Link>
              &nbsp; &nbsp;
              <Link target="_blank" to={"//www.facebook.com/CodeFoster/"}>
                <FacebookIcon style={{ fill: "0084ff" }} />
              </Link>
              &nbsp; &nbsp;
              <Link target="_blank" to={"//www.twitter.com/thecodefoster/"}>
                <TwitterIcon style={{ fill: "55acee" }} />
              </Link>
              &nbsp; &nbsp;
              <Link target="_blank" to={"//www.instagram.com/codefoster.club/"}>
                <InstagramIcon style={{ fill: "e4405f" }} />
              </Link>
            </div>
            <div className="social1">
              <h4 className="he">Contact:</h4>
              <a
                href="mailto:thecodefoster@gmail.com"
                style={{ color: "white" }}
              >
                thecodefoster@gmail.com
              </a>
            </div>
            <div className="credits">
              <span className="copyright">
                © {new Date().getFullYear()}, made by Codefoster Web Team
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
