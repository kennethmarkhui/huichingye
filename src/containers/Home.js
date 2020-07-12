import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import Animated from 'components/animated/Animated';
import LinkList from 'components/LinkList';

const Home = ({ title, links }) => (
  <React.Fragment>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{title}</Animated>
      </Typography>
    </Fade>
    <LinkList links={links} />
  </React.Fragment>
);

export default Home;
