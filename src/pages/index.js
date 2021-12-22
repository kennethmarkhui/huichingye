import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import SEO from 'components/Seo';
import Layout from 'components/Layout';
import Home from 'containers/Home';

const IndexPage = ({ location }) => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO lang={intl.locale} path={location.pathname} />
      <Home intl={intl} />
    </Layout>
  );
};

export default IndexPage;
