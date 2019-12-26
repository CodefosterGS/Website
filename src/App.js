import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Drawer, Content } from "react-mdl";
import Routes from "./routes";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import Navigations from "./navigation";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout fixedHeader>
          <Header
            transparent
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Bible Script",
                  fontStyle: "italic",
                  color: "white"
                }}
                to="/"
              >
                Codefoster
              </Link>
            }
            scroll
          >
            <Navigations />
          </Header>
          <Drawer
            className="draw"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Bible Script",
                  fontStyle: "italic",
                  color: "black"
                }}
                to="/"
              >
                Codefoster
              </Link>
            }
          >
            <Navigations />
          </Drawer>
          <div className="margin"></div>
          <Content>
            {/* <div className="page-content" /> */}

            <Routes />
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
