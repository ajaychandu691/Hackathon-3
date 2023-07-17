import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="body1" align="center">
        upGrad Frontend Hackathon
      </Typography>
    </Container>
  );
};

export default Footer;
