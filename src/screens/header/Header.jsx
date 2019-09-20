import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
import Hamburger from './Hamburger'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component{
    render(){
        return (
            <div className="header-wrapper">
              <div className="header-yellow" >
              <Container>
                  <Box display="flex">
                      <Box>
                      <img src="https://i.imgur.com/iAzGCtX.png"  style={{width: 40, height: 40}}/>
                       </Box>
                       <Box textAlign="center" m={2}>
                       <h1 style={{ color: 'white' }}>CodeFosters</h1>
                        </Box>
                        <Box  textAlign="right" width="100%" pt={3}>
                          <div className="">
                            <Hamburger />
                            </div>
                      </Box>
                   </Box>
                   </Container>
              </div>
              <div className="header-bg-yellow-light-1"></div>
              <div className="header-bg-yellow-light-2"></div>
              <div className="header-bg-yellow"></div>
              <div className="header-fix with-title"></div>
            </div>
        );
    };
}
export default Header;
