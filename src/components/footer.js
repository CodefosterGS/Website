import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './footer.css';

const FooterPage = () => {
  return (
    <div className="footer">
      <div className="row">
        <h3 style={{paddingTop:"20px", marginLeft:'5%'}}>Connect Us:</h3>
        <div className="icons"> 
          <GitHubIcon style={{fontSize: 60, href: "www.github.com"}} />
          <FacebookIcon style={{fontSize: 60}}/>
          <TwitterIcon style={{fontSize: 60}}/>
          <InstagramIcon style={{fontSize: 60}}/>
        </div>

        <div className="col1">
          <h4>Recent Activities</h4>
          <ul>
            <li><a>Link1</a></li>
            <li><a>Link2</a></li>
            <li><a>Link3</a></li>
            <li><a>Link4</a></li>
          </ul>
        </div>
        <div className='col2'>
          <h4>About us</h4>
          <ul>
            <li><a>Link1</a></li>
            <li><a>Link2</a></li>
            <li><a>Link3</a></li>
            <li><a>Link4</a></li>
          </ul>
        </div>
        <div style={{textAlign:"center", fontSize:"10px", marginTop:"30px"}}> ©2019 Codefoster</div>
      </div>
    </div>
  );
}

export default FooterPage;
