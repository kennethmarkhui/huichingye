import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const NotFound = ({ message }) => (
  <Typography color='textPrimary' align='center'>
    <Box
      fontWeight='fontWeightBold'
      fontSize='h4.fontSize'
      lineHeight={2}
      m={1}>
      404
    </Box>
    <Box fontSize='h4.fontSize' lineHeight={2} m={1}>
      {message}
    </Box>
  </Typography>
);
export default NotFound;
