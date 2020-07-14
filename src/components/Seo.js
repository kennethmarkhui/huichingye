import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

function SEO({ description, lang, meta, title, path }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  const intl = useIntl();

  const metaDescription =
    description ||
    intl.formatMessage({
      id: 'siteMetadata.description',
    });

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${intl.formatMessage({
        id: 'siteMetadata.title',
      })}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
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
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${path}`,
        },
      ].concat(meta)}
      link={[{ rel: 'canonical', href: `${site.siteMetadata.siteUrl}${path}` }]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  path: `/`,
};

export default SEO;
