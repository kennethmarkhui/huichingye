import muiTheme from './muiTheme';

const theme = {
  ...muiTheme,
  app: {
    maxWidth: muiTheme.typography.pxToRem(1024),
  },
};

export default theme;
