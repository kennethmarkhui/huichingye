import React from 'react';
import { Link } from 'gatsby-theme-localization';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { MdTranslate } from 'react-icons/md';

import Animated from './animated/Animated';
import Navigation from './navigation/Navigation';
import Logo from './Logo';

const styles = ({ app, typography, palette }) => ({
  container: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    margin: `${typography.pxToRem(8)} auto 0`,
    maxWidth: app.maxWidth,
    width: '100%',
  },
  logo: {
    border: 'none',
    float: 'left',
    transition: 'all .3s',
    textDecoration: 'none',
  },
  langToggle: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  navigation: {
    float: 'right',
    position: 'relative',
  },
});

const Header = ({ classes }) => {
  const { t, i18n, ready } = useTranslation('header');

  const options = [
    { to: '/', text: t('home'), namespace: ['home'] },
    { to: '/about/', text: t('about'), namespace: ['about'] },
  ];

  return (
    <header className={classes.container}>
      {ready && (
        <React.Fragment>
          <Link to='/' className={classes.logo}>
            <Animated>
              <Logo />
            </Animated>
          </Link>
          <Button
            disableRipple
            className={classes.langToggle}
            onClick={() =>
              i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')
            }
            startIcon={<MdTranslate />}>
            {i18n.language}
          </Button>
          <div className={classes.navigation}>
            <Navigation options={options} />
          </div>
        </React.Fragment>
      )}
    </header>
  );
};

export default withStyles(styles)(Header);
