import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { Typography } from '@material-ui/core';

export const Landing: React.FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h4">Landing Component</Typography>
      <Navbar />
    </React.Fragment>
  );
};
