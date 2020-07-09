import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { FaRegImages } from 'react-icons/fa';

import Animated from 'components/animated/Animated';
import LinkList from 'components/LinkList';

const Home = () => {
  const { t, ready } = useTranslation('home');
  const content = {
    title: t('title'),
    links: [
      {
        to:
          'https://drive.google.com/drive/folders/1B4ouIFUFbO90thXUCphrC50twoMb81Mi?usp=sharing',
        text: t('links'),
        Icon: FaRegImages,
        newTab: true,
      },
    ],
  };
  const { title, links } = content;

  return (
    <React.Fragment>
      {ready && (
        <React.Fragment>
          <Fade in timeout={1000}>
            <Typography variant='h1' color='textPrimary'>
              <Animated>{title}</Animated>
            </Typography>
          </Fade>
          <LinkList links={links} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
