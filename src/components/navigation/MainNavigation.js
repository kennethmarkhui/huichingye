import React from 'react';
import { Link } from 'gatsby-theme-localization';
import { withStyles } from '@material-ui/styles';

const styles = ({ palette, typography }) => ({
  menuContainer: {
    borderRadius: typography.pxToRem(4),
    display: 'inline-block',
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} ${typography.pxToRem(8)}`,
    textDecoration: 'none',
    color: palette.text.secondary,
  },
  navLinkActive: {
    borderBottom: `${typography.pxToRem(2)} solid ${palette.primary.main}`,
  },
});

const MainNavigation = ({ classes, options }) => (
  <ul>
    {options.map((link, i) => (
      <li className={classes.menuContainer} key={i}>
        <Link
          to={link.to}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
          exact={'true'}>
          <span>{link.text}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default withStyles(styles)(MainNavigation);
