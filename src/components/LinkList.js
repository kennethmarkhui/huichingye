import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = ({ palette, typography }) => ({
  container: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    position: 'relative',
    flexWrap: 'wrap',
  },
  linkText: {
    paddingLeft: typography.pxToRem(8),
  },
  link: {
    border: 'none',
    display: 'flex',
    padding: `${typography.pxToRem(8)} ${typography.pxToRem(8)}`,
    textDecoration: 'none',
    color: palette.text.secondary,
  },
});

const LinkList = ({ classes, links }) => (
  <div>
    <ul className={classes.container}>
      {links.map(({ Icon, to, newTab, text }, index) => (
        <li key={index}>
          <a
            href={to}
            rel='noreferrer'
            target={newTab ? '_blank' : '_self'}
            className={classes.link}>
            <Icon />
            <span className={classes.linkText}>{text}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default withStyles(styles)(LinkList);
