import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import './team.css'
class Team extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <div className="box">
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
          </div>

          {/* <Cell col={4}>
            <h2>Harshit jain</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell>

          <Cell col={4}>
            <h2>Harshit jain</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell> */}

          {/* <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    someone@example.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell> */}
        </Grid>
      </div>
    );
  }
}

export default Team;
