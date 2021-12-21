import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

function SEO({ lang, meta, title, description, path, image }) {
  const intl = useIntl();

  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "main.jpg" }) {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    `
  );

  const metaDescription =
    description ||
    intl.formatMessage({
      id: 'siteMetadata.description',
    });
  const metaImage = image || file.childImageSharp.fixed.src;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={intl.formatMessage({
        id: 'siteMetadata.title',
      })}
      titleTemplate={`%s | ${intl.formatMessage({
        id: 'siteMetadata.title',
      })}`}
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: process.env.GOOGLE_SITE_VERIFICATION,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${process.env.SITE_URL}${path}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${process.env.SITE_URL}${metaImage}`,
        },
        {
          property: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:url`,
          content: `${process.env.SITE_URL}${path}`,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: `${process.env.SITE_URL}${metaImage}`,
        },
      ].concat(meta)}
      link={[{ rel: 'canonical', href: `${process.env.SITE_URL}${path}` }]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  path: `/`,
  image: ``,
};

export default SEO;
