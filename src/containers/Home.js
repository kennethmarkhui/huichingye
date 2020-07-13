import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { FaRegImages } from 'react-icons/fa';

import Animated from 'components/animated/Animated';
import LinkList from 'components/LinkList';

const Home = ({ intl }) => {
  const content = {
    title: intl.formatMessage({ id: 'home_page.title' }),
    links: [
      {
        to:
          'https://drive.google.com/drive/folders/1B4ouIFUFbO90thXUCphrC50twoMb81Mi?usp=sharing',
        text: intl.formatMessage({ id: 'home_page.links' }),
        Icon: FaRegImages,
        newTab: true,
      },
    ],
  };
  const { title, links } = content;

  return (
    <React.Fragment>
      <Fade in timeout={1000}>
        <Typography variant='h1' color='textPrimary'>
          <Animated>{title}</Animated>
        </Typography>
      </Fade>
      <LinkList links={links} />
    </React.Fragment>
  );
};

export default Home;
