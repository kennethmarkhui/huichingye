import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = ({ typography }) => ({
  container: {
    padding: `${typography.pxToRem(32)} 0`,
  },
  description: {
    lineHeight: '1.5',
    whiteSpace: 'pre-line',
  },
  imgWrapper: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  img: {
    borderRadius: '.375rem',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)',
  },
});

const About = ({ classes, intl }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "main.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  const content = {
    description: intl.formatMessage({ id: 'pages.about.content.description' }),
  };
  const { description } = content;

  return (
    <Grid
      container
      justify='space-between'
      spacing={2}
      className={classes.container}>
      <Grid item md={8}>
        <Typography
          variant='body1'
          className={classes.description}
          paragraph
          style={{ letterSpacing: intl.locale === 'zh' ? '.2em' : 'none' }}>
          {description}
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.imgWrapper}>
        <GatsbyImage
          image={data.image.childImageSharp.gatsbyImageData}
          alt='about'
          className={classes.img}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(About);
