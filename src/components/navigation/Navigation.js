import React, { useState } from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import { withStyles } from '@material-ui/styles';
import withWidth from '@material-ui/core/withWidth';
import Button from '@material-ui/core/Button';
import { MdTranslate } from 'react-icons/md';

import { compose, isMobileView } from 'utils';

import MainNavigation from './MainNavigation';
import MobileNavigation from './MobileNavigation';

const styles = ({ palette, typography }) => ({
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
  langToggle: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

const Navigation = ({ classes, width, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      <IntlContextConsumer>
        {({ language }) => {
          return (
            <Button
              disableRipple
              className={classes.langToggle}
              onClick={() => changeLocale(language === 'en' ? 'zh' : 'en')}
              startIcon={<MdTranslate />}>
              {language}
            </Button>
          );
        }}
      </IntlContextConsumer>
      {isMobileView(width) ? (
        <MobileNavigation options={options} open={open} setOpen={setOpen} />
      ) : (
        <MainNavigation options={options} />
      )}
    </div>
  );
};

export default compose(withWidth(), withStyles(styles))(Navigation);
