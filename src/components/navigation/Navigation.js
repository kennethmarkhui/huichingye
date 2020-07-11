import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import withWidth from '@material-ui/core/withWidth';

import { compose, isMobileView } from 'utils';

import LanguageToggler from '../Language';
import MainNavigation from './MainNavigation';
import MobileNavigation from './MobileNavigation';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    zIndex: 10,
  },
});

const Navigation = ({ classes, width, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      <LanguageToggler />
      {isMobileView(width) ? (
        <MobileNavigation options={options} open={open} setOpen={setOpen} />
      ) : (
        <MainNavigation options={options} />
      )}
    </div>
  );
};

export default compose(withWidth(), withStyles(styles))(Navigation);
