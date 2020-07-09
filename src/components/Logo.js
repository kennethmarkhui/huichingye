import React from 'react';
import logoIcon from 'images/website-icon.png';
import { withStyles } from '@material-ui/styles';

const styles = ({ typography, palette }) => ({
  container: {
    borderRadius: '10%',
    overflow: 'hidden',
    border: `${typography.pxToRem(2)} solid ${palette.background.default}`,
    boxShadow: `0 0 0 ${typography.pxToRem(2)} rgba(0,0,0,.1)`,
    height: typography.pxToRem(36),
    width: typography.pxToRem(36),
  },
  logo: {
    width: '100%',
  },
});

const Logo = ({ classes }) => (
  <div className={classes.container}>
    <img src={logoIcon} className={classes.logo} alt='logo' />
  </div>
);

export default withStyles(styles)(Logo);
