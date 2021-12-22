import React from 'react';
import { Link } from 'gatsby-plugin-react-intl';
import { withStyles } from '@material-ui/styles';
import { FaBars } from 'react-icons/fa';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const styles = ({ palette, typography }) => ({
  menuIcon: {
    cursor: 'pointer',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    padding: `${typography.pxToRem(16)} ${typography.pxToRem(48)}`,
  },
  dialogPaper: {
    backgroundColor: palette.background.default,
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} 0`,
    textDecoration: 'none',
    color: palette.text.secondary,
  },
  navLinkActive: {
    fontWeight: 900,
  },
});

const MobileNavigation = ({ classes, options, setOpen, open }) => (
  <React.Fragment>
    <FaBars className={classes.menuIcon} onClick={() => setOpen(!open)} />
    <Dialog
      open={open}
      fullScreen
      PaperProps={{ classes: { root: classes.dialogPaper } }}>
      <DialogContent className={classes.menuContainer}>
        {options.map((link, i) => (
          <Grow
            in={open}
            key={i}
            style={{ transformOrigin: '0 0 0' }}
            {...(open ? { timeout: 1000 } : {})}>
            <Typography
              component={Link}
              variant='h2'
              to={link.to}
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact={'true'}
              onClick={() => setOpen(!open)}>
              {link.text}
            </Typography>
          </Grow>
        ))}
      </DialogContent>
    </Dialog>
  </React.Fragment>
);

export default withStyles(styles)(MobileNavigation);
