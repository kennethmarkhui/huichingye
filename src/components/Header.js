import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/styles';

import Animated from './animated/Animated';
import Navigation from './navigation/Navigation';
import Logo from './Logo';

const styles = ({ app, typography, palette }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
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
  navigation: {
    float: 'right',
    position: 'relative',
  },
});

const Header = ({ classes }) => {
  const options = [
    { to: '/', text: 'home' },
    { to: '/about/', text: 'about' },
  ];

  return (
    <header className={classes.container}>
      <React.Fragment>
        <Link to='/' className={classes.logo}>
          <Animated>
            <Logo />
          </Animated>
        </Link>
        <div className={classes.navigation}>
          <Navigation options={options} />
        </div>
      </React.Fragment>
    </header>
  );
};

export default withStyles(styles)(Header);
