import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout >
          <Header 
            className="header-color"
            title={
              <Link  style={{ textDecoration: "none", color: "white" }} to="/">
                Codefoster
              </Link>
            }
            scroll
          >
            <Navigation >
              {/* <Link to="/resume">Resume</Link> */}
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/team">Our Team</Link>
            </Navigation>
          </Header>
          <Drawer 
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Codefoster
              </Link>
            }
          >
            <Navigation >
              {/* <Link to="/resume">Resume</Link> */}
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/team">Our Team</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
