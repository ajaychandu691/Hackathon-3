import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Movie DB
        </Typography>
        <Link to="/new">
          <Typography variant="body1">
            New Releases
          </Typography>
        </Link>
        <Link to="/hot">
          <Typography variant="body1">
            What's Hot
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
