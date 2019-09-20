import React from 'react';
import './hamburger.css'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF"
    },
  }
});
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  primary: {
    main: "#FFF"
  }
});
export default function Hamburger() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
 <div onClick={toggleDrawer(side, false)} className={classes.list}>
    <Box className="Hamburger">

    </Box>
  </div>
  );

  const fullList = side => (
    <div
      onClick={toggleDrawer(side, false)}
    >
    </div>
  );

  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <IconButton
            color="#171414"
            aria-label="Open drawer"
            edge="end"
            onClick={toggleDrawer('right', true)}
          >
          <MenuIcon />
          </IconButton>
        {fullList('top')}
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
    </MuiThemeProvider>
  );
}
