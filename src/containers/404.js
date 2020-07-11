import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const NotFound = ({ message }) => (
  <Fade in timeout={1000}>
    <Typography variant='h2' color='textPrimary'>
      {message}
    </Typography>
  </Fade>
);
export default NotFound;
