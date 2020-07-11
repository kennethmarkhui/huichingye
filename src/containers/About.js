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

const About = ({ classes }) => {
  // {
  //   "p1": "Born in an elite family in China in 1933, he was deeply influenced by his family and started picking up different forms of art like calligraphy, stamp carving and print-making in his childhood. He came to Hong Kong in the 1950s. He is a self-learner, and his interest cover a wide range of art, both east and west.",
  //   "p2": "His exlibris are rustic and folklore-like, often making use of multi-plate skill to achieve his multi-color prints. His works are highly complimented by art critics of Taiwan, China and Hong Kong. His exlibris have been catalogued in various museums, two of his exlibris were used in the historical events in the memorial album of the late Deng Siu Ping, and the return of sovereignty of Hong Kong to China, both in 1997.",
  //   "p3": "He serves as honorary committee member or advisor to many art institutions and organizations, including the Korean Stamp Carving Society and the Hong Kong Exlibris Association."
  // }

  const content = {
    description: ['asdasd', 'asdasd', 'asdasd'],
  };
  const { description } = content;

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
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          {description.map((p, i) => (
            <Typography
              key={i}
              variant='body1'
              className={classes.description}
              paragraph>
              {p}
            </Typography>
          ))}
        </Grid>
        <Grid item md={4} className={classes.imgWrapper}>
          <Image
            fluid={data.image.childImageSharp.fluid}
            alt='about'
            className={classes.img}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(About);
