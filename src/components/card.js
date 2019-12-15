import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";
import './card.css'

const member = ()=>{
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={4}>
            <h2>Avani Chaskar</h2>
            <img className="logo1"
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "200px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            A data science enthusiast and a leisurely competitive coder, who often motivates and mentors newbies.</p>
            <div>
            <a href="https://in.linkedin.com/in/avani-chaskar" class="generic-anchor" target="_blank" title="linkedin" itemprop="significantLink"><i class="fa fa-linkedin"></i></a>
            &nbsp;
            <a href="https://github.com/alwaysavani" class="generic-anchor" target="_blank" title="Github" itemprop="significantLink"><i class="fa fa-github"></i></a>
            &nbsp;
            <a href="https://in.linkedin.com/in/avani-chaskar" class="generic-anchor" target="_blank" title="Portfolio" itemprop="significantLink"><i class="fa fa-dribbble"></i></a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }


export default member;
