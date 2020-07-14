import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import SEO from '../components/Seo';

const Redirect = ({ intl }) => {
  return (
    <SEO
      title={`${intl.formatMessage({ id: 'pages.home.seo.title' })}`}
      lang={intl.locale}
      description={intl.formatMessage({
        id: 'pages.home.seo.description',
      })}
    />
  );
};

export default injectIntl(Redirect);
