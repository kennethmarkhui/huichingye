import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
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

const About = ({ classes, description }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "cat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Grid container justify='space-between' className={classes.container}>
      <Grid item md={8}>
        <Typography variant='body1' className={classes.description} paragraph>
          {description}
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.imgWrapper}>
        <Image
          fluid={data.image.childImageSharp.fluid}
          alt='about'
          className={classes.img}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(About);
