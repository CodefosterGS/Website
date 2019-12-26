import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Routes from "./routes";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout fixedHeader>
          <Header
            transparent
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Codefoster
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/team">Our Team</Link>
            </Navigation>
          </Header>
          <Drawer
            className="draw"
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Codefoster
              </Link>
            }
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/team">Our Team</Link>
            </Navigation>
          </Drawer>
          <div className="margin"></div>
          <Content>
            <div className="page-content" />
            {/* <ParticleLogo/>  */}
            <Routes />
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
