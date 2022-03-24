import React from 'react';
import { withStyles } from '@material-ui/styles';
import { FiArrowUpRight } from 'react-icons/fi';

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
  newTabLinkText: {
    paddingLeft: typography.pxToRem(8),
    paddingRight: typography.pxToRem(8),
  },
  link: {
    border: 'none',
    display: 'flex',
    padding: `${typography.pxToRem(8)} ${typography.pxToRem(8)}`,
    textDecoration: 'none',
    color: palette.text.secondary,
  },
  showIcon: {
    display: 'block',
  },
  hideIcon: {
    display: 'none',
  },
});

const LinkList = ({ classes, links }) => {
  const [onHover, setOnHover] = React.useState(false);

  return (
    <div>
      <ul className={classes.container}>
        {links.map(({ Icon, to, newTab, text }, index) => (
          <li key={index}>
            <a
              href={to}
              rel='noreferrer'
              target={newTab ? '_blank' : '_self'}
              className={classes.link}
              onMouseOver={() => setOnHover(true)}
              onMouseOut={() => setOnHover(false)}>
              <Icon />
              <span
                className={newTab ? classes.newTabLinkText : classes.linkText}>
                {text}
              </span>
              {newTab && (
                <FiArrowUpRight
                  className={onHover ? classes.showIcon : classes.hideIcon}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withStyles(styles)(LinkList);
