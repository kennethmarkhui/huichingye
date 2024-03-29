import React from 'react';
import { injectIntl } from 'gatsby-plugin-react-intl';
import SEO from '../components/Seo';

const Redirect = ({ intl }) => {
  return <SEO lang={intl.locale} />;
};

export default injectIntl(Redirect);
