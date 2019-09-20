import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './header/Header.jsx'
import './Home.css'
class Home extends React.Component{
  render(){
    return (
      <div className="root">
      <Header />
        <div>
          <Container style={{ height: "100%" }}>
                <Box boxShadow={3} bgcolor="#171414" p={{ xs: 1, sm: 1, md: 1 }}>
                <img src="https://www.courthousenews.com/wp-content/uploads/2018/10/computer-shadow.jpg" style={{width: "100%"}}/>
                </Box>
          </Container>
        </div>
      </div>
    );
  };
}
export default Home;
