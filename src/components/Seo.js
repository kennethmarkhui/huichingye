import React from 'react';
import Helmet from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';

function SEO({ description, lang, meta, title }) {
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
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
