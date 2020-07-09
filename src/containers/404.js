import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const content = {
  message: 'Page Not Found.',
};

const { message } = content;

const NotFound = () => {
  return (
    <Fade in timeout={1000}>
      <Typography variant='h2' color='textPrimary'>
        {message}
      </Typography>
    </Fade>
  );
};
export default NotFound;
