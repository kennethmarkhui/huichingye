import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { MdTranslate } from 'react-icons/md';

const styles = () => ({
  langToggle: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

const Language = ({ classes }) => (
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
);

export default withStyles(styles)(Language);
